# Browser Technologies
//Robuuste, toegankelijke websites leren bouwen …

Beoordelingscriteria
- 2 componenten zijn onderzocht en er is een demo gemaakt.
- De code staat in een repository op GitHub.
- Een Readme is toegevoegd met, per feature:
-	Een beschrijving van de feature.
- Bronnen van uitleg en gebruikte artikelen.
-	Welke browsers/devices ondersteunen deze wel/niet.
-	Een beschrijving hoe de fallback werkt.

## Carrousel

![The carrousel](https://i.imgur.com/GQWhJzN.png)

The carrousel is a rotating display of several articles. You can add unlimited articles, and the carrousel will still work. The demo runs [here](http://rick712.github.io/browser-technologies/opdracht2/carrousel).

The carrousel only works when Javascript is enabled. When Javascript is disabled, all the articles are displayed next to eachother. In Javascript, the script checks how many articles there are, and gives the parent element a width, depending on the number of articles. When an arrow is clicked, the parent element changes position, depending on the current position of the element. The parent element changes by 50vw at the time.

![The carrousel when JS is disabled](https://i.imgur.com/ovNLD6Z.png)

## Accordeon

![The accordeon](https://i.imgur.com/9XZK8do.png)

The accordeon is a number of details elements that display some information when you click on them. Only one accordeon opens at the time. Some browsers don't support the `<details>` element. When this is the case, the browser shows the header and the content inside the element by default.

When Javascript is enabled, only one part of the accordeon opens. When Javascript is disabled, all the parts can be opened.

![The accordeon when JS is disabled](https://i.imgur.com/5wqzK63.png)