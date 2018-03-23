
# Browser Technologies
//Robuuste, toegankelijke websites leren bouwen …

## Opdracht 2 - 1, 2, 3 Feature Detectie
//Wat laat je zien als een browser of gebruiker 'enhancement' niet kan tonen of zien? Hoe doe je Feature Detection en wat doe je als een techniek niet werkt?

Werk 2 componenten uit in een demo. Je onderzoekt hoe je verschillende features door verschillende browsers worden ondersteund en hoe je voor goede fallback kan zorgen. Gebruik [html5test.com](https://html5test.com), [css3test.com](http://css3test.com) en [kangax.github.io/compat-table/es6/](https://kangax.github.io/compat-table/es6/)

- Per feature: Zoek uit hoe je deze kunt testen. Verzamel uitleg en artikelen. Bouw een (kleine) progressive enhanced demo (zonder extra tools, gewoon in 1 HTML file, zo simpel mogelijk). Test de feature (en fallback) op verschillende browsers en het Device Lab. Let op: Gebruik van polyfills is niet toegestaan.
- Post je 2 demo’s op GitHub met uitleg in een README file. Wat is de feature? Welke browsers/devices ondersteunen deze wel/niet? Hoe zorg je dat de fallback nuttig is?

Beoordelingscriteria
- 2 componenten zijn onderzocht en er is een demo gemaakt.
- De code staat in een repository op GitHub.
- Een Readme is toegevoegd met, per feature:
  -	Een beschrijving van de feature.
  - Bronnen van uitleg en gebruikte artikelen.
  -	Welke browsers/devices ondersteunen deze wel/niet.
  -	Een beschrijving hoe de fallback werkt.


## Harmonica
[Live Demo](https://casburggraaf.github.io/browser-technologies/opdracht2/harmonica/)
Content is visible on all devices
Harmonica effect is tested on
- Min ie9
- All Chrome
- Mobile devices(touch)
- Keyboard and screenreader support

Ie8 is only possible with id's on detail element or a function that everything is folded en unfolded on click

## File upload
[Live Demo](https://casburggraaf.github.io/browser-technologies/opdracht2/file-upload/)
Function is available on every device that supports file type input.
Preview is available on every device that supports the [FileReader API](https://caniuse.com/#feat=filereader)

Fallbacks that can be used are:
- A preview for the image that is rendered by the backend after the submit button is used
-  A fallback is input file is not supported to enable to send the picture by href:mailto.
