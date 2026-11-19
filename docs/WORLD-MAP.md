# Find the Country — interactive world map

Open [Find the Country](https://zahidallahverdiyevv.github.io/CURIO/world-map.html) directly or from the Geography page.

Each round chooses 15 different countries: five Easy, five Medium and five Hard, drawn from 63 curated targets. Players select the country outline on a real world map rather than choosing a text option. Three different guesses are allowed. First/second/third-guess points are 100/70/40; using the region hint subtracts 20 points from a successful answer. Repeated clicks on the same wrong country do not consume another guess. A reveal scores zero. The next button unlocks once the country is found or revealed. A completed round shows all 15 results and can start a new round.

Zoom buttons, mouse-wheel zoom, pointer dragging, two-finger pinch zoom and reset are supported. The map can be panned using arrow keys when its canvas has keyboard focus. Country outlines support Enter and Space selection. Names are not shown as hover tooltips before selection.

The 176 country/territory shapes are stored locally in `assets/quiz/world-data.js`. The 1:110m Natural Earth dataset omits some small islands and simplifies coastlines; the target pool deliberately excludes those absent from the geometry. Country outlines follow the dataset and are not a statement about territorial claims. Antarctica is excluded from this country-finding game. France includes French Guiana, as represented in the source geometry.

Source: [Natural Earth Admin 0 countries](https://github.com/nvkelso/natural-earth-vector/blob/master/geojson/ne_110m_admin_0_countries.geojson). Downloaded 17 November 2026. Natural Earth map data is [public domain](https://www.naturalearthdata.com/about/terms-of-use/). The checked-in asset freezes the downloaded geometry; no external map API, API key, map-tile service or per-view fee is required. Rebuild deliberately with `node scripts/build-world-map.cjs` when updating the source. The game page uses local CSS/JS; its Google Font request is optional for functionality.

Implementation: `world-map.html`, `assets/quiz/world-map.css`, `assets/quiz/world-map.js`. Regression checks: `node tests/test-world-map.cjs` and the full `npm test` suite.

Scores are held in page memory and reset when the page reloads. They are not written to Supabase.
