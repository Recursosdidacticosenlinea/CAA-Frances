# Français pour tous

Sitio web de práctica autónoma de francés general (A1–C2) para estudiantes de cualquier facultad, CAA Virtual, BUAP.
Usa el mismo motor que *English for Communication*, traducido al francés. Todo el contenido para alumnos (instrucciones incluidas) está en francés; en A1 y A2 el vocabulario de las instrucciones es muy sencillo.

## Unidades (50: 10 por nivel de A1 a B2, 5 de C1 y 5 de C2)

| Nivel | Unidad | Gramática / enfoque |
| --- | --- | --- |
| A1 | Bonjour ! | saludos, presentarse, *être*, tu / vous |
| A1 | Les nombres | números 0–100, la edad, *avoir* |
| A1 | Les couleurs | colores, concordancia masculino / femenino / plural |
| A1 | Ma famille | familia, posesivos *mon, ma, mes* |
| A1 | Les jours et les mois | días, meses, la fecha |
| A1 | Dans la salle de classe | objetos, *un / une / des*, *il y a / il n'y a pas de* |
| A1 | À table ! | alimentos, *j'aime / je n'aime pas*, *le / la / les* |
| A1 | Ma journée | la hora, verbos en *-er* |
| A1 | Ma maison | cuartos, muebles, *sur / sous / dans* |
| A1 | Mes loisirs | *faire du / jouer au*, *aimer* + infinitivo |
| A2 | En ville | lugares, imperativo, direcciones |
| A2 | Au marché | partitivos, cantidades, precios |
| A2 | Quel temps fait-il ? | el clima, futur proche |
| A2 | Mon week-end | passé composé con *avoir* |
| A2 | En voyage | passé composé con *être*, concordancia |
| A2 | Les vêtements | demostrativos, comparativo |
| A2 | Chez le médecin | el cuerpo, *avoir mal à*, *il faut / tu devrais* |
| A2 | Quand j'étais petit | imparfait |
| A2 | Au restaurant | pedir en un restaurante, pronombres *le / la / les* |
| A2 | Fêtes et traditions | fiestas, buenos deseos, pronombres *lui / leur* |
| B1 | À mon avis | dar opinión, conectores |
| B1 | Mes projets d'avenir | futur simple, *quand* + futuro |
| B1 | La vie étudiante | vivienda, pronombres *y* / *en* |
| B1 | Mon premier emploi | entrevista, *qui / que / où* |
| B1 | Si j'étais… | conditionnel présent, hipótesis |
| B1 | Une drôle d'histoire | passé composé vs. imparfait |
| B1 | Une planète à protéger | *il faut que* + subjuntivo |
| B1 | Les réseaux sociaux | discurso indirecto |
| B1 | Cinéma et séries | crítica de cine, *celui / celle qui, que, dont* |
| B1 | Voyager autrement | turismo responsable, finalidad: *pour, afin de, pour que* |
| B2 | Le grand débat | concesión: *bien que, même si, avoir beau* |
| B2 | Le travail de demain | subjuntivo vs. indicativo vs. infinitivo |
| B2 | Avec des si… | plus-que-parfait, conditionnel passé |
| B2 | Science et société | voz pasiva, puesta de relieve |
| B2 | La francophonie | *dont, lequel, auquel* |
| B2 | À la une | gerundio, participio presente, nominalización |
| B2 | Causes et conséquences | causa y consecuencia |
| B2 | La lettre formelle | registro formal, condicional de cortesía |
| B2 | L'art dans la rue | arte urbano, oposición: *alors que, au lieu de, en revanche* |
| B2 | Vivre ensemble | convivencia, expresión del tiempo: *avant que, dès que, jusqu'à ce que* |
| C1 | Le vrai du faux | desinformación, condicional periodístico, grados de certeza |
| C1 | Bien dans sa tête | salud mental, atenuar e intensificar |
| C1 | L'art de convaincre | elocuencia, figuras retóricas, registros |
| C1 | Au cas où… | consumo responsable, condición e hipótesis: *au cas où, à moins que, quand bien même* |
| C1 | Quoi qu'il en soit | bioética, concesión: *quel que soit, quoi que, si… que* |
| C2 | Il était une fois… | relato literario: passé simple, passé antérieur, subjuntivo imperfecto |
| C2 | Parlez-vous jeune ? | niveles de lengua, argot, verlan, expresiones idiomáticas |
| C2 | Penser le monde | la disertación: problematizar, plan dialéctico, giros formales |
| C2 | Entre les lignes | lo implícito, la ironía, juegos de palabras |
| C2 | La plume et le pouvoir | discurso político y síntesis de documentos |

Cada unidad sigue los mismos 5 pasos: Présentation → Objectifs → Explication → Pratique (Écouter, Lire, Écrire, Parler) → Autoévaluation.

## Parler: reconocimiento de voz

En **Parler**, la actividad 1 es de pronunciación: el alumno escucha una frase modelo, toca 🎤, la dice y el navegador la transcribe. La unidad marca en verde las palabras reconocidas y en rojo las que faltan. Hasta 7 palabras tiene que reconocerlas todas; en frases más largas acepta un error cada ocho palabras. La actividad 2 sigue siendo la grabación que el alumno sube a la plataforma.

- Funciona en **Google Chrome**, **Microsoft Edge** y **Safari** (computadora y celular). En Firefox no: ahí el alumno escucha, repite y toca « J'ai répété ».
- Necesita internet y permiso para usar el micrófono. Chrome y Edge envían el audio a su servicio de reconocimiento (Google o Microsoft) para transcribirlo.
- Si el sitio se inserta en Google Sites, el micrófono puede quedar bloqueado dentro del marco. Si pasa, conviene poner un enlace que abra la unidad en una pestaña nueva.

## Qué hay en esta carpeta

| Carpeta / archivo | Qué es |
| --- | --- |
| `index.html` | Página principal con las unidades, filtros por nivel y buscador (ignora acentos: «eleve» encuentra «élève»). |
| `assets/unit.js`, `assets/unit.css` | La plantilla común: dibuja cualquier unidad a partir de su `data.js`. Incluye voz francesa, reconocimiento de voz y botones de acentos (é, è, ç…) para teclados sin francés. |
| `assets/config.js` | Dirección para recibir los textos escritos y la plataforma para los audios. |
| Una carpeta por unidad | `index.html` + `data.js`. |
| `_template/` | Copia de una unidad para crear temas nuevos. |
| `tools/writing-collector.gs` | Script de Google para recibir los textos escritos en una hoja de cálculo. |

## Publicar en GitHub Pages

1. Crea un repositorio público, por ejemplo `francais-pour-tous`.
2. Sube todo el contenido de esta carpeta (no la carpeta en sí).
3. **Settings → Pages → Branch: `main`, carpeta `/ (root)` → Save.**
4. El sitio queda en `https://TU-USUARIO.github.io/francais-pour-tous/`.

## Crear una unidad nueva

1. Copia la carpeta `_template` y cámbiale el nombre (sin espacios ni acentos).
2. Edita `data.js`: cambia `slug` por el nombre de la carpeta, pon el tema en `subject` y reemplaza el contenido.
3. Agrega una línea a la lista `UNITS` en `index.html` (con `theme`).

## Voces

Las voces son las que trae cada dispositivo. En Mac, la unidad evita las voces «de personaje» de Apple (Eddy, Flo, Reed, Rocko, Sandy, Shelley) y usa Amélie, Thomas o Jacques. Para que suene mejor, en la Mac: **Configuración del Sistema → Accesibilidad → Contenido leído → Voz del sistema → Administrar voces → Francés**, y descarga una voz «Mejorada» o «Premium» (por ejemplo Audrey o Aurélie). En Windows, Edge ya trae voces naturales (Denise, Henri). Las líneas largas se leen frase por frase, para que Chrome no las corte.

## Notas

- El progreso se guarda en el navegador con la clave `fr:` (distinta de `esp:` y `caa:`), así que no se mezcla con los sitios de inglés.
- Las voces son las francesas del dispositivo (mejores en Edge y Chrome). Si un personaje nuevo no tiene la voz correcta (mujer / hombre), agrégalo en `speakers` dentro de su `data.js`, por ejemplo `speakers: { "L'agent": "m" }`.
