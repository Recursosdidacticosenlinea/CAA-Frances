/* Français pour tous — shared unit engine (French version of the CAA engine).
   Each unit page defines window.UNIT (its content) and loads this file.
   Site settings live in assets/config.js (window.CAA_CONFIG).
   Section IDs follow the series convention: mainsec-0…4 for steps,
   actsec-list / actsec-read / actsec-writ / actsec-spea for the skills. */
(function () {
  "use strict";
  const U = window.UNIT;
  const C = window.CAA_CONFIG || {};
  if (!U) { document.body.textContent = "Les données de l'unité sont introuvables."; return; }

  /* ---------- helpers ---------- */
  function h(tag, props) {
    const e = document.createElement(tag);
    if (props) for (const k in props) {
      const v = props[k];
      if (v == null || v === false) continue;
      if (k === "class") e.className = v;
      else if (k === "html") e.innerHTML = v;
      else if (k === "text") e.textContent = v;
      else if (k.slice(0, 2) === "on") e.addEventListener(k.slice(2), v);
      else e.setAttribute(k, v === true ? "" : v);
    }
    for (let i = 2; i < arguments.length; i++) add(e, arguments[i]);
    return e;
  }
  function add(e, c) {
    if (c == null || c === false) return;
    if (Array.isArray(c)) { c.forEach(x => add(e, x)); return; }
    e.append(c.nodeType ? c : document.createTextNode(String(c)));
  }
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const md = s => esc(s).replace(/&lt;br&gt;/g, "<br>").replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\*(.+?)\*/g, "<em>$1</em>");
  const norm = s => String(s).toLowerCase().replace(/[’‘`´]/g, "'").replace(/[“”]/g, '"')
    .replace(/\s+/g, " ").replace(/[\s\u00a0\u202f]+([?.!,;:])/g, "$1").trim().replace(/[.!]+$/, "").trim();
  const strip = s => s.replace(/\*/g, "");
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  }
  function shuffleNotSame(arr) {
    if (arr.length < 2) return arr.slice();
    let a; let tries = 0;
    do { a = shuffle(arr); tries++; } while (tries < 10 && a.join("\u0000") === arr.join("\u0000"));
    return a;
  }

  /* ---------- saved progress (this browser only) ---------- */
  const KEY = "fr:" + U.slug;
  let state = {};
  try { state = JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { state = {}; }
  state.visited = state.visited || {}; state.done = state.done || {}; state.self = state.self || {};
  state.drafts = state.drafts || {}; state.warm = state.warm || [];
  function save() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* storage blocked */ } }

  /* ---------- read aloud ----------
     Each speaker gets a woman's or a man's voice. Gender comes from U.speakers ({ "Name": "f" | "m" }),
     then from the SPEAKERS list below, then from titles (Mr., Mrs., Aunt…). The best-sounding
     voice of that gender on the device is used (natural / neural / Google voices first). */
  const SPEAKERS = {
    f: ["Léa", "Chloé", "Camille", "Inès", "Manon", "Sarah", "Emma", "Julie", "Amina", "Sophie", "Claire", "Lucie", "Nadia",
      "Élise", "Marie", "Fatou", "Zoé", "Alice", "Sofía", "Valeria", "Mariana", "Lucía", "Ana", "Paula", "Laura", "Isabel",
      "La journaliste", "La présentatrice", "La médecin", "La vendeuse", "La professeure", "L'animatrice", "La serveuse", "Maman", "Mamie"],
    m: ["Lucas", "Hugo", "Karim", "Thomas", "Maxime", "Paul", "Nathan", "Antoine", "Julien", "Mehdi", "Louis", "Théo", "Samuel",
      "Marc", "Pierre", "Yanis", "Diego", "Mateo", "Carlos", "Luis", "Andrés", "Javier", "Daniel", "Pablo", "Emilio",
      "Le journaliste", "Le présentateur", "Le médecin", "Le vendeur", "Le professeur", "L'animateur", "Le serveur", "Papa", "Papi"]
  };
  function genderOf(who, i) {
    const own = U.speakers && U.speakers[who];
    if (own) return own;
    if (SPEAKERS.f.indexOf(who) >= 0) return "f";
    if (SPEAKERS.m.indexOf(who) >= 0) return "m";
    if (/^(Mme|Madame|Mlle|Docteure|La |Tante)/i.test(who)) return "f";
    if (/^(M\.|Monsieur|Docteur|Le |Oncle)/i.test(who)) return "m";
    return i % 2 ? "m" : "f"; /* A / B and unknown names alternate */
  }
  const NOVELTY = /bad news|bahh|bells|boing|bubbles|cellos|wobble|good news|jester|junior|organ|superstar|trinoids|whisper|zarvox|grandma|grandpa|albert|fred|ralph|kathy/i;
  const FEMALE = /female|\bflo\b|sandy|shelley|am[ée]lie|audrey|aur[ée]lie|marie|julie|hortense|denise|c[ée]line|\bl[ée]a\b|virginie|elo[iï]se|jos[ée]phine|brigitte|charline|coralie|jacqueline|yvette|ariane|sylvie|vivienne|chantal|sylvie|caroline|ga[ëe]lle|google fran[çc]ais/i;
  const MALE = /\bmale\b|eddy|reed|rocko|thomas|henri|\bpaul\b|claude|r[ée]my|mathieu|nicolas|j[ée]r[ôo]me|alain|daniel|antoine|\bjean\b|maurice|g[ée]rard|fabrice|guillaume|\byves\b|lucien|jacques|\bremi\b|alexandre|\bclaude\b|\bmarc\b/i;
  /* Apple's "character" voices (Eddy, Flo, Reed, Rocko, Sandy, Shelley) sound odd in French: use them only as a last resort. */
  const ODD = /\b(eddy|flo|reed|rocko|sandy|shelley)\b/i;
  function quality(v) {
    let s = 0;
    if (ODD.test(v.name)) s -= 200;
    if (/natural|neural|online|premium|enhanced|siri/i.test(v.name)) s += 100;
    if (/google/i.test(v.name)) s += 50;
    if (/fr[-_]FR/i.test(v.lang)) s += 20; else if (/fr[-_](CA|BE|CH)/i.test(v.lang)) s += 10;
    return s;
  }
  /* Text as it should be heard: no markup, and symbols said in words. */
  function sayable(t) {
    return strip(String(t)).replace(/<br>/g, " ")
      .replace(/\s*\/\s*/g, ", ").replace(/\s*[→←]\s*/g, ", ").replace(/\s+[–—]\s+/g, ", ")
      .replace(/\bn°\s*/g, "numéro ").replace(/(\d)\s*€/g, "$1 euros").replace(/€/g, "euros")
      .replace(/m²/g, " mètres carrés").replace(/(\d)ᵉ/g, "$1e").replace(/CO₂/g, "CO2")
      .replace(/(\d{1,2})\s?h\s?(\d{2})\b/g, "$1 heures $2").replace(/(\d{1,2})\s?h\b/g, "$1 heures")
      .replace(/…/g, "...").replace(/[«»"“”]/g, "").replace(/\s+/g, " ").trim();
  }
  function chunks(t) {
    if (t.length <= 160) return [t];
    const out = []; let cur = "";
    (t.match(/[^.!?;:]+[.!?;:]*\s*/g) || [t]).forEach(s => {
      if (cur && (cur + s).length > 160) { out.push(cur.trim()); cur = ""; }
      cur += s;
    });
    if (cur.trim()) out.push(cur.trim());
    return out;
  }
  const TTS = {
    ok: "speechSynthesis" in window,
    voices: { f: [], m: [], any: [] }, rate: 0.95,
    init() {
      if (!this.ok) return;
      const load = () => {
        const en = speechSynthesis.getVoices().filter(v => /^fr[-_]/i.test(v.lang) && !NOVELTY.test(v.name))
          .sort((a, b) => quality(b) - quality(a));
        this.voices = {
          f: en.filter(v => FEMALE.test(v.name)),
          m: en.filter(v => !FEMALE.test(v.name) && MALE.test(v.name)),
          any: en
        };
      };
      load(); speechSynthesis.addEventListener("voiceschanged", load);
    },
    /* k = how many speakers of this gender came before, so two women get two different voices when possible */
    pick(g, k) {
      const all = this.voices[g], good = all.filter(v => !ODD.test(v.name));
      const own = good.length ? good : all;
      /* More speakers than good voices: reuse a voice with a slightly different pitch rather than a character voice. */
      if (own.length) return { voice: own[k % own.length], pitch: k < own.length ? 1 : [1, 1.12, 0.9][Math.floor(k / own.length) % 3] };
      /* No voice of that gender on this device: use another French voice, and only shift the pitch a little. */
      const any = this.voices.any.filter(v => !ODD.test(v.name));
      const list = any.length ? any : this.voices.any;
      const v = list[(g === "m" ? 1 : 0) % Math.max(list.length, 1)] || null;
      return { voice: v, pitch: list.length > 1 ? 1 : g === "m" ? 0.9 : 1.1 };
    },
    play(lines, onEnd) {
      if (!this.ok) return;
      speechSynthesis.cancel();
      const cast = {}, count = { f: 0, m: 0 };
      lines.forEach(l => {
        const w = l.who || "";
        if (cast[w]) return;
        const g = w ? genderOf(w, Object.keys(cast).length) : "f";
        cast[w] = this.pick(g, count[g]++);
      });
      /* Long lines are read sentence by sentence: Chrome's online voices stop after about 15 seconds. */
      const parts = [];
      lines.forEach(l => chunks(sayable(l.line)).forEach(t => parts.push({ t: t, c: cast[l.who || ""] })));
      parts.forEach((p, i) => {
        const u = new SpeechSynthesisUtterance(p.t);
        u.lang = p.c.voice ? p.c.voice.lang : "fr-FR"; u.rate = this.rate; u.pitch = p.c.pitch;
        if (p.c.voice) u.voice = p.c.voice;
        if (i === parts.length - 1 && onEnd) u.onend = onEnd;
        speechSynthesis.speak(u);
      });
    },
    stop() { if (this.ok) speechSynthesis.cancel(); }
  };
  TTS.init();

  function player(lines, audioSrc) {
    if (audioSrc) return h("div", { class: "player" }, h("audio", { controls: true, preload: "none", src: audioSrc }));
    if (!TTS.ok) return h("p", { class: "note" }, "Votre navigateur ne peut pas lire à voix haute. Ouvrez la transcription et lisez-la.");
    let slow = false;
    const status = h("span", { class: "note", "aria-live": "polite" });
    const play = h("button", { class: "btn primary", type: "button", onclick() {
      TTS.rate = slow ? 0.75 : 0.95; status.textContent = "Lecture…";
      TTS.play(lines, () => { status.textContent = ""; });
    } }, "▶ Écouter");
    const speed = h("button", { class: "btn", type: "button", "aria-pressed": "false", onclick() {
      slow = !slow; speed.setAttribute("aria-pressed", String(slow)); speed.textContent = slow ? "Vitesse : lente" : "Vitesse : normale";
    } }, "Vitesse : normale");
    const stop = h("button", { class: "btn", type: "button", onclick() { TTS.stop(); status.textContent = ""; } }, "■ Arrêter");
    return h("div", { class: "stack", style: "gap:6px" }, h("div", { class: "player" }, play, speed, stop, status),
      h("p", { class: "note" }, "Astuce : les voix sont plus naturelles dans Microsoft Edge ou Google Chrome."));
  }
  function dialogue(lines) {
    return h("div", { class: "dialogue" }, lines.map(l => h("div", { class: "line" },
      l.who ? h("span", { class: "who" }, l.who) : h("span"), h("span", { html: md(l.line) }))));
  }

  /* ---------- progress ---------- */
  const STEPS = ["Présentation", "Objectifs", "Explication", "Pratique", "Autoévaluation"];
  const SKILLS = [
    { key: "listening", id: "actsec-list", name: "Écouter" },
    { key: "reading", id: "actsec-read", name: "Lire" },
    { key: "writing", id: "actsec-writ", name: "Écrire" },
    { key: "speaking", id: "actsec-spea", name: "Parler" }
  ];
  const allActs = [];
  SKILLS.forEach(s => ((U.skills[s.key] || {}).activities || []).forEach((a, i) => allActs.push(s.key + "-" + i)));
  let refreshSkillCounts = () => {};
  function markDone(id, score, total) {
    state.done[id] = { score: score, total: total }; save(); updateProgress(); refreshSkillCounts();
  }
  function updateProgress() {
    const totalUnits = STEPS.length + allActs.length + 1;
    let got = STEPS.filter((s, i) => state.visited[i]).length;
    got += allActs.filter(id => state.done[id]).length;
    if (U.selfAssessment.every((x, i) => state.self[i])) got += 1;
    const pct = Math.round(got / totalUnits * 100);
    barFill.style.width = pct + "%"; barText.textContent = pct + " % terminé";
    stepBtns.forEach((b, i) => b.classList.toggle("done", !!state.visited[i] && i !== current));
  }

  /* ---------- layout ---------- */
  const barFill = h("span");
  const barText = h("span");
  const top = h("header", { class: "topbar" }, h("div", { class: "wrap" },
    h("a", { class: "back", href: C.homeUrl || "../" }, "← Toutes les unités"),
    h("span", { class: "unit-name" }, U.title),
    h("span", { class: "lvl" }, U.level),
    h("div", { class: "progress" }, h("div", { class: "bar", role: "presentation" }, barFill), barText)
  ));
  const stepNav = h("nav", { class: "steps", role: "tablist", "aria-label": "Étapes de l'unité" });
  const stepBtns = STEPS.map((name, i) => {
    const b = h("button", { class: "step-btn", type: "button", role: "tab", id: "mainbtn-" + i, "aria-controls": "mainsec-" + i, "aria-selected": "false", onclick: () => show(i) },
      h("span", { class: "n" }, i + 1), name);
    stepNav.append(b); return b;
  });
  const main = h("main", { class: "wrap" });
  const panels = STEPS.map((name, i) => h("section", { class: "panel", id: "mainsec-" + i, role: "tabpanel", "aria-labelledby": "mainbtn-" + i, hidden: true }));
  document.body.append(top, h("div", { class: "wrap" }, stepNav), main);
  panels.forEach(p => main.append(p));

  let current = 0;
  function show(i) {
    current = i; TTS.stop();
    panels.forEach((p, j) => { p.hidden = j !== i; stepBtns[j].setAttribute("aria-selected", String(j === i)); });
    state.visited[i] = true; state.step = i; save(); updateProgress();
    stepBtns[i].scrollIntoView({ block: "nearest", inline: "nearest" });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function nextBtn(i) {
    if (i >= STEPS.length - 1) return null;
    return h("div", { class: "next-row" }, h("button", { class: "btn primary", type: "button", onclick: () => show(i + 1) }, "Suivant : " + STEPS[i + 1] + " →"));
  }

  /* ---------- activities ---------- */
  const TYPE_LABEL = { match: "Associer", sort: "Classer", gap: "Compléter", tiles: "Remettre en ordre", rewrite: "Réécrire", tf: "Vrai ou faux", write: "Écrire", speak: "Parler", pronounce: "Prononcer" };
  function activity(a, id, label) {
    const card = h("article", { class: "card activity", id: "act-" + id });
    card.append(h("div", { class: "activity-head" }, h("h3", { html: md(a.title) }), h("span", { class: "tag" }, label + " · " + (TYPE_LABEL[a.type] || ""))));
    if (a.prompt) card.append(h("p", { class: "muted", html: md(a.prompt) }));
    const fb = h("div", { class: "feedback", "aria-live": "polite" });
    const ctx = { id: id, fb: fb, result(score, total) {
      fb.className = "feedback " + (score === total ? "ok" : "part");
      fb.textContent = score === total ? "Excellent ! " + score + "/" + total + " bonnes réponses." : score + "/" + total + " bonnes réponses. Regardez les réponses en rouge et réessayez.";
      if (id !== "check") markDone(id, score, total);
    } };
    const body = (BUILD[a.type] || (() => h("p", null, "Type d'activité inconnu : " + a.type)))(a, ctx);
    card.append(body);
    if (/^(gap|rewrite|write)$/.test(a.type)) card.append(accentBar(card));
    card.append(fb);
    return card;
  }
  /* French letters for keyboards without accents: inserts into the last text field the student used. */
  let lastField = null;
  document.addEventListener("focusin", e => { if (e.target.matches && e.target.matches("input[type=text], textarea")) lastField = e.target; });
  function accentBar(card) {
    return h("div", { class: "accents", role: "group", "aria-label": "Lettres françaises" },
      h("span", { class: "hint" }, "Accents :"),
      ["é", "è", "ê", "ë", "à", "â", "ç", "î", "ï", "ô", "û", "ù", "œ", "É"].map(c => h("button", { type: "button", tabindex: "-1",
        onmousedown: e => e.preventDefault(),
        onclick() {
          const f = lastField && card.contains(lastField) ? lastField : card.querySelector("input[type=text], textarea");
          if (!f) return;
          const st = f.selectionStart != null ? f.selectionStart : f.value.length, en = f.selectionEnd != null ? f.selectionEnd : st;
          f.value = f.value.slice(0, st) + c + f.value.slice(en); f.focus(); f.setSelectionRange(st + 1, st + 1);
          f.dispatchEvent(new Event("input")); f.classList.remove("is-right", "is-wrong");
        } }, c)));
  }
  function controls(onCheck, onReset, extra) {
    return h("div", { class: "row" },
      h("button", { class: "btn primary", type: "button", onclick: onCheck }, "Vérifier"),
      h("button", { class: "btn", type: "button", onclick: onReset }, "Recommencer"), extra || null);
  }

  const BUILD = {
    match(a, ctx) {
      const lefts = a.pairs.map((p, i) => ({ t: p[0], i: i }));
      const rights = shuffleNotSame(a.pairs.map((p, i) => ({ t: p[1], i: i })));
      const map = {}; let sel = null;
      const wrap = h("div", { class: "match" });
      const L = h("div", { class: "col" }), R = h("div", { class: "col" });
      const lb = lefts.map(l => h("button", { type: "button", onclick: () => clickL(l.i) }));
      const rb = rights.map(r => h("button", { type: "button", "data-i": r.i, onclick: () => clickR(r.i) }));
      function draw() {
        const order = Object.keys(map).map(Number);
        lefts.forEach((l, k) => { const b = lb[k]; b.className = (sel === l.i ? "sel" : "") + (l.i in map ? " paired" : "");
          b.innerHTML = (l.i in map ? '<span class="pairno">' + (order.indexOf(l.i) + 1) + "</span>" : "") + md(l.t); });
        rights.forEach((r, k) => { const b = rb[k]; const owner = order.find(x => map[x] === r.i);
          b.className = owner != null ? "paired" : "";
          b.innerHTML = (owner != null ? '<span class="pairno">' + (order.indexOf(owner) + 1) + "</span>" : "") + md(r.t); });
      }
      function clickL(i) { if (i in map) { delete map[i]; sel = null; } else sel = sel === i ? null : i; draw(); }
      function clickR(i) {
        const owner = Object.keys(map).map(Number).find(x => map[x] === i);
        if (owner != null) { delete map[owner]; draw(); return; }
        if (sel == null) { ctx.fb.className = "feedback part"; ctx.fb.textContent = "Choisissez d'abord un élément à gauche."; return; }
        map[sel] = i; sel = null; ctx.fb.textContent = ""; draw();
      }
      lb.forEach(b => L.append(b)); rb.forEach(b => R.append(b)); wrap.append(L, R); draw();
      return h("div", { class: "stack" }, h("p", { class: "hint" }, "Choisissez un élément à gauche, puis sa paire à droite. Touchez une paire pour l'annuler."), wrap,
        controls(() => {
          let s = 0; lefts.forEach((l, k) => { const ok = map[l.i] === l.i; if (ok) s++; lb[k].classList.toggle("is-right", ok); lb[k].classList.toggle("is-wrong", !ok); });
          ctx.result(s, lefts.length);
        }, () => { for (const k in map) delete map[k]; sel = null; lb.forEach(b => b.classList.remove("is-right", "is-wrong")); draw(); ctx.fb.textContent = ""; }));
    },

    sort(a, ctx) {
      let sel = null;
      const pool = h("div", { class: "pool", "aria-label": "Éléments à classer" });
      const chips = a.items.map((it, i) => {
        const c = h("span", { class: "chipitem", draggable: "true", tabindex: "0", role: "button", "data-i": i, html: md(it.text) });
        c.addEventListener("click", e => { e.stopPropagation(); select(c); });
        c.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); select(c); } });
        c.addEventListener("dragstart", e => { sel = c; e.dataTransfer.setData("text/plain", String(i)); });
        return c;
      });
      function select(c) { if (sel) sel.classList.remove("sel"); sel = sel === c ? null : c; if (sel) sel.classList.add("sel"); }
      function drop(target) { if (!sel) return; sel.classList.remove("sel", "is-right", "is-wrong"); target.append(sel); sel = null; }
      function zone(el, target) {
        el.addEventListener("click", () => drop(target));
        el.addEventListener("dragover", e => { e.preventDefault(); el.classList.add("over"); });
        el.addEventListener("dragleave", () => el.classList.remove("over"));
        el.addEventListener("drop", e => { e.preventDefault(); el.classList.remove("over"); drop(target); });
      }
      zone(pool, pool);
      const bins = a.bins.map((name, b) => { const items = h("div", { class: "items" }); const el = h("div", { class: "bin", "data-b": b, tabindex: "0" }, h("h4", { html: md(name) }), items);
        el.addEventListener("keydown", e => { if (e.key === "Enter") drop(items); }); zone(el, items); el._items = items; return el; });
      function reset() { shuffle(chips).forEach(c => { c.classList.remove("sel", "is-right", "is-wrong"); pool.append(c); }); sel = null; ctx.fb.textContent = ""; }
      reset();
      return h("div", { class: "stack" }, h("p", { class: "hint" }, "Faites glisser chaque carte dans une boîte, ou touchez une carte puis la boîte."), pool, h("div", { class: "bins" }, bins),
        controls(() => {
          let s = 0; chips.forEach(c => { const binEl = c.closest(".bin"); const ok = binEl && Number(binEl.dataset.b) === a.items[c.dataset.i].bin;
            if (ok) s++; c.classList.toggle("is-right", !!ok); c.classList.toggle("is-wrong", !ok); });
          ctx.result(s, chips.length);
        }, reset));
    },

    gap(a, ctx) {
      const inputs = [];
      const ol = h("ol", { class: "gaps" }, a.items.map(line => {
        const li = h("li");
        line.split(/\[\[(.+?)\]\]/).forEach((part, k) => {
          if (k % 2 === 0) { if (part) li.append(h("span", { html: md(part) })); return; }
          const ans = part.split("|");
          const inp = h("input", { class: "gap", type: "text", autocomplete: "off", autocapitalize: "off", spellcheck: "false", "aria-label": "Réponse " + (inputs.length + 1) });
          inp.style.width = Math.max(5, Math.max.apply(null, ans.map(x => x.length)) + 2) + "ch";
          inp._ans = ans; inputs.push(inp); li.append(inp);
        });
        return li;
      }));
      const bank = a.bank ? h("div", { class: "bank", "aria-label": "Banque de mots" }, shuffle(a.bank === true ? inputs.map(i => i._ans[0]) : a.bank).map(w => h("span", null, w))) : null;
      const show = h("button", { class: "btn", type: "button", hidden: true, onclick() { inputs.forEach(i => { if (!i.classList.contains("is-right")) { i.value = i._ans[0]; i.classList.remove("is-wrong"); } }); } }, "Voir les réponses");
      return h("div", { class: "stack" }, bank, ol, controls(() => {
        let s = 0; inputs.forEach(i => { const ok = i._ans.some(x => norm(x) === norm(i.value)); if (ok) s++; i.classList.toggle("is-right", ok); i.classList.toggle("is-wrong", !ok); });
        show.hidden = false; ctx.result(s, inputs.length);
      }, () => { inputs.forEach(i => { i.value = ""; i.classList.remove("is-right", "is-wrong"); }); show.hidden = true; ctx.fb.textContent = ""; }, show));
    },

    tiles(a, ctx) {
      const rows = a.items.map(it => {
        const words = it.a.split(" ").reduce((acc, w) => { if (/^[?!:;»]$/.test(w) && acc.length) acc[acc.length - 1] += " " + w; else acc.push(w); return acc; }, []);
        const line = h("div", { class: "answer-line", "aria-label": "Votre phrase" });
        const bank = h("div", { class: "tile-bank" });
        const sol = h("div", { class: "solution", hidden: true });
        const tiles = shuffleNotSame(words).map(w => h("button", { class: "tile", type: "button", onclick(e) {
          const t = e.currentTarget; (t.parentNode === bank ? line : bank).append(t); row.classList.remove("is-right", "is-wrong"); sol.hidden = true;
        } }, w));
        tiles.forEach(t => bank.append(t));
        const row = h("div", { class: "tiles-item" }, it.hint ? h("span", { class: "hint", html: md(it.hint) }) : null, line, bank, sol);
        return { row: row, line: line, bank: bank, tiles: tiles, it: it, sol: sol };
      });
      return h("div", { class: "stack" }, h("p", { class: "hint" }, "Touchez les mots dans le bon ordre. Touchez un mot encore une fois pour le renvoyer."), rows.map(r => r.row), controls(() => {
        let s = 0; rows.forEach(r => {
          const got = [...r.line.children].map(t => t.textContent).join(" ");
          const ok = [r.it.a].concat(r.it.alt || []).some(x => norm(x) === norm(got)) && r.bank.children.length === 0;
          if (ok) s++; r.row.classList.toggle("is-right", ok); r.row.classList.toggle("is-wrong", !ok);
          r.sol.hidden = ok; r.sol.textContent = ok ? "" : "Réponse : " + r.it.a;
        });
        ctx.result(s, rows.length);
      }, () => { rows.forEach(r => { shuffleNotSame(r.tiles).forEach(t => r.bank.append(t)); r.row.classList.remove("is-right", "is-wrong"); r.sol.hidden = true; }); ctx.fb.textContent = ""; }));
    },

    rewrite(a, ctx) {
      const rows = a.items.map((it, i) => {
        const inp = h("input", { type: "text", autocomplete: "off", spellcheck: "false", "aria-label": "Votre réponse pour la phrase " + (i + 1) });
        const sol = h("div", { class: "solution", hidden: true });
        return { el: h("div", { class: "rw" }, h("span", { class: "q", html: (i + 1) + ". " + md(it.q) }), it.hint ? h("span", { class: "hint", html: md(it.hint) }) : null, inp, sol), inp: inp, sol: sol, it: it };
      });
      return h("div", { class: "stack" }, rows.map(r => r.el), controls(() => {
        let s = 0; rows.forEach(r => { const ok = r.it.a.some(x => norm(x) === norm(r.inp.value)); if (ok) s++;
          r.inp.classList.toggle("is-right", ok); r.inp.classList.toggle("is-wrong", !ok); r.sol.hidden = ok; r.sol.textContent = "Réponse : " + r.it.a[0]; });
        ctx.result(s, rows.length);
      }, () => { rows.forEach(r => { r.inp.value = ""; r.inp.classList.remove("is-right", "is-wrong"); r.sol.hidden = true; }); ctx.fb.textContent = ""; }));
    },

    tf(a, ctx) {
      const rows = a.items.map(it => {
        let val = null;
        const opts = [true, false].map(v => h("button", { type: "button", "aria-pressed": "false", onclick() { val = v; opts.forEach(o => o.setAttribute("aria-pressed", String(o === this))); row.classList.remove("is-right", "is-wrong"); } }, v ? "Vrai" : "Faux"));
        const row = h("div", { class: "tf" }, h("span", { html: md(it.s) }), h("div", { class: "opts" }, opts));
        return { row: row, get: () => val, it: it, opts: opts };
      });
      return h("div", { class: "stack" }, h("div", null, rows.map(r => r.row)), controls(() => {
        let s = 0; rows.forEach(r => { const ok = r.get() === r.it.a; if (ok) s++; r.row.classList.toggle("is-right", ok); r.row.classList.toggle("is-wrong", !ok); });
        ctx.result(s, rows.length);
      }, () => { rows.forEach(r => { r.opts.forEach(o => o.setAttribute("aria-pressed", "false")); r.row.classList.remove("is-right", "is-wrong"); }); ctx.fb.textContent = ""; }));
    },

    write(a, ctx) {
      const ta = h("textarea", { class: "write", id: "write-" + ctx.id, "aria-label": "Votre texte", placeholder: "Écrivez votre texte ici…" });
      ta.value = state.drafts[ctx.id] || "";
      const counter = h("span", { class: "counter" });
      const words = () => (ta.value.trim().match(/\S+/g) || []).length;
      function count() { const n = words(); counter.textContent = n + " mots" + (a.minWords ? " · objectif : " + a.minWords + "–" + (a.maxWords || a.minWords + 30) : ""); }
      ta.addEventListener("input", () => { state.drafts[ctx.id] = ta.value; save(); count(); }); count();
      const bank = a.bank ? h("div", { class: "stack" }, h("span", { class: "hint" }, "Expressions utiles (touchez pour ajouter) :"),
        h("div", { class: "pick" }, a.bank.map(w => h("button", { type: "button", onclick() {
          const s = ta.selectionStart || ta.value.length; const pre = ta.value.slice(0, s); const sep = pre && !/\s$/.test(pre) ? " " : "";
          ta.value = pre + sep + w + " " + ta.value.slice(s); ta.focus(); ta.dispatchEvent(new Event("input"));
        } }, w)))) : null;
      const checklist = a.checklist ? h("div", { class: "stack" }, h("strong", null, "Avant d'envoyer, vérifiez :"),
        h("ul", { class: "checklist" }, a.checklist.map((c, i) => h("li", null, h("label", null, h("input", { type: "checkbox", id: "chk-" + ctx.id + "-" + i }), h("span", { html: md(c) })))))) : null;
      const name = h("input", { type: "text", id: "name-" + ctx.id, autocomplete: "name" });
      const group = h("input", { type: "text", id: "group-" + ctx.id, placeholder: "ex. 412" });
      try { name.value = localStorage.getItem("fr:name") || ""; group.value = localStorage.getItem("fr:group") || ""; } catch (e) { /* ignore */ }
      const msg = h("span", { class: "note", "aria-live": "polite" });
      const endpoint = C.writingEndpoint;
      function text() { return "Nom : " + name.value + "\nGroupe : " + group.value + "\nUnité : " + U.title + "\nTâche : " + strip(a.title) + "\n\n" + ta.value.trim(); }
      function ready() {
        if (!name.value.trim() || !group.value.trim()) { msg.textContent = "Écrivez d'abord votre nom et votre groupe."; return false; }
        if (a.minWords && words() < a.minWords) { msg.textContent = "Votre texte a " + words() + " mots. Écrivez-en au moins " + a.minWords + "."; return false; }
        try { localStorage.setItem("fr:name", name.value.trim()); localStorage.setItem("fr:group", group.value.trim()); } catch (e) { /* ignore */ }
        return true;
      }
      const send = endpoint ? h("button", { class: "btn primary", type: "button", onclick() {
        if (!ready()) return;
        send.disabled = true; msg.textContent = "Envoi…";
        fetch(endpoint, { method: "POST", mode: "no-cors", headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify({ date: new Date().toISOString(), name: name.value.trim(), group: group.value.trim(), unit: U.title, level: U.level, task: strip(a.title), words: words(), text: ta.value.trim() }) })
          .then(() => { msg.textContent = "Envoyé ! Votre professeur va recevoir votre texte."; markDone(ctx.id, 1, 1); })
          .catch(() => { msg.textContent = "Le texte n'a pas été envoyé. Vérifiez votre connexion et réessayez, ou téléchargez-le."; })
          .finally(() => { send.disabled = false; });
      } }, "Envoyer à mon professeur") : null;
      return h("div", { class: "stack" },
        a.model ? h("div", { class: "model" }, h("div", { class: "eyebrow" }, "Texte modèle"), h("p", { html: md(a.model) })) : null,
        bank, ta, counter, checklist,
        h("div", { class: "fields" }, h("label", { class: "field", for: name.id }, "Votre nom", name), h("label", { class: "field", for: group.id }, "Groupe", group)),
        h("div", { class: "row" }, send,
          h("button", { class: endpoint ? "btn" : "btn primary", type: "button", onclick() { if (!ready()) return; download(text(), U.slug + "-ecrit.txt"); msg.textContent = endpoint ? "Téléchargé." : "Téléchargé. Donnez ce fichier à votre professeur."; if (!endpoint) markDone(ctx.id, 1, 1); } }, "Télécharger mon texte"),
          h("button", { class: "btn", type: "button", onclick() { copyText(text(), msg); } }, "Copier"), msg),
        endpoint ? null : h("p", { class: "note" }, "L'envoi en ligne n'est pas encore activé. Téléchargez votre texte et donnez-le à votre professeur."));
    },

    /* Speech recognition: the student listens to a model, says the sentence, and the browser
       (Chrome, Edge, Safari) transcribes it. Score = share of the target words heard, in order. */
    pronounce(a, ctx) {
      const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
      const fold = t => strip(String(t)).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        .replace(/[’‘`´]/g, "'").replace(/[.,!?;:«»"“”()…–—\-]/g, " ").replace(/\s+/g, " ").trim();
      const words = t => fold(t).split(" ").filter(Boolean);
      function compare(target, heard) { /* longest common subsequence of words */
        const T = words(target), H = words(heard);
        const L = T.map(() => H.map(() => 0));
        for (let i = T.length - 1; i >= 0; i--) for (let j = H.length - 1; j >= 0; j--)
          L[i][j] = T[i] === H[j] ? 1 + ((L[i + 1] || [])[j + 1] || 0) : Math.max((L[i + 1] || [])[j] || 0, L[i][j + 1] || 0);
        const ok = T.map(() => false); let i = 0, j = 0;
        while (i < T.length && j < H.length) {
          if (T[i] === H[j]) { ok[i] = true; i++; j++; }
          else if (((L[i + 1] || [])[j] || 0) >= (L[i][j + 1] || 0)) i++; else j++;
        }
        return { score: T.length ? ok.filter(Boolean).length / T.length : 0, ok: ok };
      }
      /* Pass mark: every word up to 7 words, then one miss allowed per eight words. */
      const passOf = t => { const n = words(t).length; return n ? (n - Math.floor(n / 8)) / n - 1e-9 : 1; };
      const best = {}; let active = null;
      const total = a.items.length;
      const note = h("p", { class: "hint" }, SR
        ? "1. Écoutez le modèle. 2. Touchez 🎤, dites la phrase, puis attendez. Le navigateur demande d'utiliser le micro : acceptez."
        : "La reconnaissance vocale ne marche pas dans ce navigateur. Utilisez Google Chrome, Microsoft Edge ou Safari. Ici, écoutez le modèle, répétez à voix haute et touchez « J'ai répété ».");
      function report() {
        const done = Object.keys(best).length;
        if (done < total) { ctx.fb.className = "feedback part"; ctx.fb.textContent = done + " phrase" + (done > 1 ? "s" : "") + " sur " + total + "."; return; }
        ctx.result(Object.keys(best).filter(k => best[k] >= passOf(a.items[k].s)).length, total);
      }
      const rows = a.items.map((it, i) => {
        const target = it.s;
        const targets = [target].concat(it.alt || []);
        const PASS = passOf(target);
        const show = h("div", { class: "say-words" });
        function paint(ok) {
          show.innerHTML = "";
          strip(target).split(/\s+/).forEach(w => {
            const k = words(w).length; /* one written word can be two folded words: "l'ami-e" */
            const good = ok && k ? ok.splice(0, k).every(Boolean) : null; /* lone "?" or ":" is not graded */
            show.append(h("span", { class: good == null ? "" : good ? "w-ok" : "w-miss" }, w), " ");
          });
        }
        paint(null);
        const heard = h("p", { class: "note", "aria-live": "polite" });
        const status = h("span", { class: "say-score" });
        const row = h("div", { class: "say-row" });
        const listen = h("button", { class: "btn", type: "button", onclick() { TTS.rate = 0.85; TTS.play([{ who: it.who || "", line: target }]); } }, "🔊 Écouter");
        function grade(score, ok, text) {
          best[i] = Math.max(best[i] || 0, score);
          paint(ok.slice());
          const pct = Math.round(score * 100);
          row.classList.toggle("is-right", score >= PASS); row.classList.toggle("is-wrong", score < PASS);
          status.textContent = pct + " %";
          heard.textContent = (text ? "J'ai entendu : « " + text + " ». " : "") +
            (score >= PASS ? "Très bien ! 🎉" : score >= 0.5 ? "Presque ! Réécoutez le modèle et réessayez." : "Réessayez : écoutez d'abord le modèle, puis parlez lentement.");
          report();
        }
        let mic;
        if (SR) {
          mic = h("button", { class: "btn primary", type: "button", onclick() {
            if (active) { active.stop(); return; }
            TTS.stop();
            const rec = new SR(); active = rec;
            rec.lang = "fr-FR"; rec.interimResults = false; rec.maxAlternatives = 5;
            mic.textContent = "■ J'écoute…"; heard.textContent = "Parlez maintenant…";
            rec.onresult = e => {
              const alts = [...e.results[0]].map(r => r.transcript);
              let top = { score: -1 };
              alts.forEach(t => targets.forEach(x => { const c = compare(x, t); if (c.score > top.score) { top = c; top.text = t; top.x = x; } }));
              if (top.x !== target) { const c = compare(target, top.text); top = { score: top.score, text: top.text, ok: top.score === 1 ? c.ok.map(() => true) : c.ok }; }
              grade(top.score, top.ok, top.text);
            };
            rec.onerror = e => {
              heard.textContent = e.error === "not-allowed" || e.error === "service-not-allowed"
                ? "Le micro est bloqué. Autorisez-le dans les réglages du navigateur."
                : e.error === "no-speech" ? "Je n'ai rien entendu. Touchez 🎤 et parlez plus fort."
                : e.error === "network" ? "La reconnaissance vocale a besoin d'internet. Vérifiez votre connexion."
                : "Ça n'a pas marché. Réessayez.";
            };
            rec.onend = () => { active = null; mic.textContent = "🎤 Dire la phrase"; if (heard.textContent === "Parlez maintenant…") heard.textContent = ""; };
            try { rec.start(); } catch (err) { active = null; mic.textContent = "🎤 Dire la phrase"; }
          } }, "🎤 Dire la phrase");
        } else {
          mic = h("button", { class: "btn primary", type: "button", onclick() { best[i] = 1; row.classList.add("is-right"); heard.textContent = "Bien ! Phrase suivante."; report(); } }, "J'ai répété");
        }
        add(row, [h("div", { class: "say-head" }, h("b", null, (i + 1) + "."), show, status), it.hint ? h("span", { class: "hint", html: md(it.hint) }) : null,
          h("div", { class: "row" }, listen, mic), heard]);
        return row;
      });
      return h("div", { class: "stack" }, note, rows,
        h("div", { class: "row" }, h("button", { class: "btn", type: "button", onclick() {
          for (const k in best) delete best[k];
          rows.forEach(r => { r.classList.remove("is-right", "is-wrong"); r.querySelector(".say-score").textContent = ""; r.querySelector(".note").textContent = ""; r.querySelectorAll(".say-words span").forEach(x => x.className = ""); });
          ctx.fb.textContent = "";
        } }, "Recommencer")));
    },

    speak(a, ctx) {
      const parts = [];
      if (a.cards) parts.push(h("div", { class: "cards" }, a.cards.map(c => h("div", { class: "role" }, h("span", { class: "role-name" }, c.name),
        c.situation ? h("p", { html: md(c.situation) }) : null, c.tasks ? h("ul", null, c.tasks.map(t => h("li", { html: md(t) }))) : null))));
      if (a.language) parts.push(h("div", { class: "stack" }, h("strong", null, "Expressions utiles"), h("div", { class: "bank" }, a.language.map(l => h("span", { html: md(l) })))));
      if (a.model) parts.push(h("details", null, h("summary", null, "Écouter un modèle"), h("div", { class: "stack", style: "margin-top:12px" }, player(a.model), dialogue(a.model))));
      parts.push(recorder(a, ctx));
      if (a.checklist) parts.push(h("div", { class: "stack" }, h("strong", null, "Réécoutez votre enregistrement. Est-ce que vous avez…"),
        h("ul", { class: "checklist" }, a.checklist.map((c, i) => h("li", null, h("label", null, h("input", { type: "checkbox", id: "sp-" + ctx.id + "-" + i }), h("span", { html: md(c) })))))));
      const upId = "up-" + ctx.id;
      const up = h("input", { type: "checkbox", id: upId });
      up.checked = !!state.done[ctx.id];
      up.addEventListener("change", () => { if (up.checked) markDone(ctx.id, 1, 1); else { delete state.done[ctx.id]; save(); updateProgress(); refreshSkillCounts(); } });
      const platform = C.speakingPlatformUrl
        ? h("a", { href: C.speakingPlatformUrl, target: "_blank", rel: "noopener" }, C.speakingPlatformName || "la plateforme du cours")
        : (C.speakingPlatformName || "la plateforme du cours");
      parts.push(h("div", { class: "card sunk stack" }, h("strong", null, "Envoyez votre enregistrement"),
        h("p", null, "Téléchargez votre enregistrement et déposez-le sur ", platform, ". Nommez le fichier avec votre nom et l'unité."),
        h("label", { class: "row", for: upId, style: "cursor:pointer" }, up, "J'ai déposé mon enregistrement")));
      return h("div", { class: "stack" }, parts);
    }
  };

  function recorder(a, ctx) {
    const max = a.seconds || 90;
    const box = h("div", { class: "recorder" });
    const can = !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder);
    if (!can) { box.append(h("p", { class: "note" }, "L'enregistrement n'est pas disponible dans ce navigateur. Utilisez l'enregistreur de votre téléphone.")); return box; }
    let rec = null, chunks = [], t0 = 0, tick = null, stream = null;
    const timer = h("span", { class: "timer" }, "0:00 / " + fmt(max));
    const dot = h("span", { class: "rec-dot", hidden: true });
    const out = h("div", { class: "row" });
    const btn = h("button", { class: "btn primary", type: "button", onclick: toggle }, "● Enregistrer");
    function fmt(s) { return Math.floor(s / 60) + ":" + String(Math.floor(s % 60)).padStart(2, "0"); }
    function toggle() {
      if (rec && rec.state === "recording") { rec.stop(); return; }
      navigator.mediaDevices.getUserMedia({ audio: true }).then(s => {
        stream = s; chunks = []; rec = new MediaRecorder(s);
        rec.ondataavailable = e => { if (e.data.size) chunks.push(e.data); };
        rec.onstop = () => {
          clearInterval(tick); dot.hidden = true; btn.textContent = "● Enregistrer encore"; stream.getTracks().forEach(t => t.stop());
          const type = rec.mimeType || "audio/webm"; const ext = /mp4|aac/.test(type) ? "m4a" : /ogg/.test(type) ? "ogg" : "webm";
          const url = URL.createObjectURL(new Blob(chunks, { type: type }));
          out.innerHTML = ""; out.append(h("audio", { controls: true, src: url }), h("a", { class: "btn", href: url, download: U.slug + "-oral-" + ctx.id + "." + ext }, "Télécharger l'enregistrement"));
        };
        rec.start(); t0 = Date.now(); dot.hidden = false; btn.textContent = "■ Arrêter";
        tick = setInterval(() => { const s = (Date.now() - t0) / 1000; timer.textContent = fmt(s) + " / " + fmt(max); if (s >= max) rec.stop(); }, 250);
      }).catch(() => { out.innerHTML = ""; out.append(h("p", { class: "note" }, "Le micro est bloqué. Autorisez-le dans les réglages du navigateur, ou enregistrez avec votre téléphone.")); });
    }
    box.append(btn, dot, timer, out);
    return box;
  }

  /* ---------- 1. Presentation ---------- */
  (function () {
    const P = U.presentation, p = panels[0];
    p.append(h("div", { class: "hero" },
      h("div", null,
        h("div", { class: "eyebrow" }, "Unité · " + U.level + (U.subject ? " · " + U.subject : "") + " · environ " + U.minutes + " minutes"),
        h("h1", null, U.title),
        h("p", { class: "muted", html: md(P.situation) }),
        h("div", { class: "facts" }, (U.focus || []).map(f => h("span", null, f)))
      ),
      h("div", { class: "scene", "aria-hidden": "true" }, P.scene)
    ));
    if (P.warmup) {
      const msg = h("p", { class: "note", "aria-live": "polite" });
      const btns = P.warmup.options.map(o => h("button", { type: "button", "aria-pressed": String(state.warm.indexOf(o) >= 0), onclick(ev) {
        const b = ev.currentTarget, on = b.getAttribute("aria-pressed") !== "true";
        b.setAttribute("aria-pressed", String(on));
        state.warm = on ? state.warm.concat(o) : state.warm.filter(x => x !== o); save(); say();
      } }, o));
      function say() { msg.textContent = state.warm.length ? (P.warmup.response || "Super !") + " (" + state.warm.length + " choix)" : ""; }
      say();
      p.append(h("div", { class: "card stack" }, h("div", { class: "eyebrow" }, "Pour commencer"), h("h3", { html: md(P.warmup.prompt) }), h("div", { class: "pick" }, btns), msg));
    }
    if (P.dialogue) {
      p.append(h("div", { class: "card stack" }, h("div", { class: "eyebrow" }, "Écoutez et lisez"),
        h("h3", null, P.dialogueTitle || "En situation"), player(P.dialogue, P.audio), dialogue(P.dialogue)));
    }
    p.append(nextBtn(0));
  })();

  /* ---------- 2. Objectives ---------- */
  panels[1].append(
    h("div", { class: "stack" }, h("h2", null, "À la fin de cette unité…"),
      h("ol", { class: "objectives" }, U.objectives.map((o, i) => h("li", null, h("b", null, i + 1), h("span", { html: md(o) }))))),
    h("p", { class: "note" }, "Vous allez évaluer ces mêmes objectifs dans l'autoévaluation, à la fin."),
    nextBtn(1));

  /* ---------- 3. Explanation ---------- */
  (function () {
    const E = U.explanation, p = panels[2];
    p.append(h("h2", null, "Explication"));
    if (E.vocab) p.append(h("div", { class: "card stack" }, h("h3", null, E.vocabTitle || "Vocabulaire"),
      h("p", { class: "note" }, TTS.ok ? "Touchez un mot pour l'écouter." : ""),
      h("div", { class: "vocab" }, E.vocab.map(v => h("button", { type: "button", onclick: () => TTS.play([{ line: v.say || v.word }]) },
        h("span", { class: "ico", "aria-hidden": "true" }, v.icon || ""), h("span", { class: "w" }, v.word), TTS.ok ? h("span", { class: "say" }, "🔊 écouter") : null)))));
    (E.grammar || []).forEach(g => p.append(h("div", { class: "card stack" }, h("h3", null, g.title),
      g.intro ? h("p", { html: md(g.intro) }) : null,
      h("div", { class: "table-wrap" }, h("table", null,
        h("thead", null, h("tr", null, (g.head || ["Forme", "Exemple"]).map(x => h("th", null, x)))),
        h("tbody", null, g.rows.map(r => h("tr", null, r.map(c => h("td", { html: md(c) }))))))),
      g.note ? h("p", { class: "note", html: md(g.note) }) : null)));
    if (E.watchOut) p.append(h("div", { class: "card stack" }, h("h3", null, "Attention !"),
      h("div", { class: "watch" }, E.watchOut.map(w => h("div", null, h("span", { class: "wrong", html: md(w[0]) }), h("span", { class: "right", html: md(w[1]) }))))));
    if (E.check) p.append(activity(E.check, "check", "Vérification rapide"));
    p.append(nextBtn(2));
  })();

  /* ---------- 4. Practice ---------- */
  (function () {
    const p = panels[3];
    p.append(h("div", { class: "stack" }, h("h2", null, "Pratique"), h("p", { class: "muted" }, "Faites les quatre activités dans l'ordre que vous voulez. Votre progression est enregistrée sur cet appareil.")));
    const bar = h("div", { class: "skills", role: "tablist", "aria-label": "Compétences" });
    const counts = {};
    const subpanels = SKILLS.map((s, i) => {
      const S = U.skills[s.key] || { activities: [] };
      const small = h("small"); counts[s.key] = small;
      const b = h("button", { class: "skill-btn", type: "button", role: "tab", id: s.id + "-btn", "aria-controls": s.id, "aria-selected": String(i === 0), onclick: () => pick(i) }, s.name, small);
      bar.append(b);
      const sec = h("section", { class: "stack", id: s.id, role: "tabpanel", "aria-labelledby": s.id + "-btn", hidden: i !== 0 });
      if (S.intro) sec.append(h("p", { class: "muted", html: md(S.intro) }));
      if (S.script) sec.append(h("div", { class: "card source" }, h("div", { class: "eyebrow" }, "Audio"),
        h("h3", null, S.title || "Écoutez"), player(S.script, S.audio),
        h("details", null, h("summary", null, "Lire la transcription (après les activités)"), h("div", { style: "margin-top:12px" }, dialogue(S.script)))));
      if (S.text) sec.append(h("div", { class: "card source" }, h("div", { class: "eyebrow" }, "Texte"), h("h3", null, S.title || "Lisez"),
        h("div", { class: "reading-text" }, S.text.map(t => t.author
          ? h("div", { class: "post" }, h("div", { class: "author" }, t.author), h("p", { html: md(t.body) }))
          : h("p", { html: md(t.body || t) })))));
      S.activities.forEach((a, j) => sec.append(activity(a, s.key + "-" + j, s.name + " · Activité " + (j + 1))));
      return { btn: b, sec: sec };
    });
    function pick(i) {
      TTS.stop();
      subpanels.forEach((x, j) => { x.sec.hidden = j !== i; x.btn.setAttribute("aria-selected", String(j === i)); });
    }
    refreshSkillCounts = () => SKILLS.forEach(s => {
      const acts = (U.skills[s.key] || { activities: [] }).activities;
      const d = acts.filter((a, j) => state.done[s.key + "-" + j]).length;
      counts[s.key].textContent = d + " sur " + acts.length + " faites";
    });
    refreshSkillCounts();
    p.append(bar); subpanels.forEach(x => p.append(x.sec)); p.append(nextBtn(3));
  })();

  /* ---------- 5. Self-assessment ---------- */
  (function () {
    const p = panels[4], S = U.selfAssessment;
    p.append(h("div", { class: "stack" }, h("h2", null, "Où en êtes-vous ?"),
      h("p", { class: "muted" }, "Évaluez chaque phrase. Soyez honnête : c'est pour vous, pas pour une note.")));
    const list = h("div", { class: "card" }, h("div", { class: "legend" }, h("span", null, "1 = pas encore"), h("span", null, "5 = je le fais bien")));
    S.forEach((item, i) => {
      const scale = h("div", { class: "scale", role: "group", "aria-label": "Note pour : " + strip(item.can) });
      for (let n = 1; n <= 5; n++) scale.append(h("button", { type: "button", "aria-pressed": String(state.self[i] === n), onclick() {
        state.self[i] = n; save();
        [...scale.children].forEach((b, k) => b.setAttribute("aria-pressed", String(k + 1 === n)));
        summarize(); updateProgress();
      } }, n));
      list.append(h("div", { class: "can" }, h("span", { html: md(item.can) }), scale));
    });
    const avg = h("div", { class: "big" }, "–");
    const msg = h("div", { class: "stack" });
    const summaryCard = h("div", { class: "card summary" }, h("div", null, avg, h("div", { class: "note" }, "moyenne sur 5")), msg);
    function summarize() {
      const vals = S.map((x, i) => state.self[i]).filter(Boolean);
      msg.innerHTML = "";
      if (!vals.length) { avg.textContent = "–"; msg.append(h("p", { class: "muted" }, "Votre bilan apparaît ici quand vous évaluez les phrases.")); return; }
      const a = vals.reduce((x, y) => x + y, 0) / vals.length;
      avg.textContent = a.toFixed(1);
      const low = S.filter((x, i) => state.self[i] && state.self[i] <= 2);
      const high = S.filter((x, i) => state.self[i] >= 4);
      const practiced = allActs.filter(id => state.done[id]).length;
      msg.append(h("p", null, "Activités terminées : ", h("strong", null, practiced + " sur " + allActs.length)));
      if (vals.length < S.length) msg.append(h("p", { class: "muted" }, "Évaluez les " + S.length + " phrases pour terminer l'unité."));
      if (high.length) msg.append(h("p", null, h("strong", null, "Points forts : "), high.map(x => strip(x.can).replace(/^Je peux /, "")).join("; ") + "."));
      if (low.length) msg.append(h("div", null, h("strong", null, "À revoir : "), h("ul", null, low.map(x => h("li", null, x.review || strip(x.can))))));
      else if (vals.length === S.length) msg.append(h("p", null, "Bravo ! Vous pouvez passer à l'unité suivante."));
    }
    summarize();
    const copyMsg = h("span", { class: "note", "aria-live": "polite" });
    function resultText() {
      const lines = ["Français pour tous — " + U.title + " (" + U.level + ")", new Date().toLocaleDateString("fr-FR"), ""];
      S.forEach((x, i) => lines.push((state.self[i] || "-") + "/5  " + strip(x.can)));
      lines.push("", "Activités terminées : " + allActs.filter(id => state.done[id]).length + " sur " + allActs.length);
      return lines.join("\n");
    }
    p.append(list, summaryCard, h("div", { class: "row" },
      h("button", { class: "btn", type: "button", onclick() { copyText(resultText(), copyMsg); } }, "Copier mes résultats"),
      h("button", { class: "btn", type: "button", onclick() { download(resultText(), U.slug + "-autoevaluation.txt"); } }, "Télécharger mes résultats"),
      h("a", { class: "btn primary", href: C.homeUrl || "../" }, "Retour aux unités"), copyMsg));
  })();

  function copyText(text, msgEl) {
    const done = () => { msgEl.textContent = "Copié."; };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done, () => { msgEl.textContent = "La copie n'a pas marché. Utilisez Télécharger."; });
    else msgEl.textContent = "La copie n'est pas disponible ici. Utilisez Télécharger.";
  }
  function download(text, name) {
    const a = h("a", { href: URL.createObjectURL(new Blob([text], { type: "text/plain" })), download: name });
    document.body.append(a); a.click(); a.remove();
  }

  /* ---------- start ---------- */
  document.title = U.title + " · Français pour tous";
  show(typeof state.step === "number" ? state.step : 0);
})();
