# Browser Technologies

//Robuuste, toegankelijke websites leren bouwen …

## Beoordelingscriteria

- 2 componenten zijn onderzocht en er is een demo gemaakt.
- De code staat in een repository op GitHub.
- Een Readme is toegevoegd met, per feature:
- Een beschrijving van de feature.
- Bronnen van uitleg en gebruikte artikelen.
- Welke browsers/devices ondersteunen deze wel/niet.
- Een beschrijving hoe de fallback werkt.

## Carrousel

![The carrousel](https://i.imgur.com/GQWhJzN.png)

The carrousel is a rotating display of several articles. You can add unlimited articles, and the carrousel will still work. The demo runs [here](http://rick712.github.io/browser-technologies/opdracht2/carrousel).

The carrousel only works when Javascript is enabled. When Javascript is disabled, all the articles are displayed next to eachother. In Javascript, the script checks how many articles there are, and gives the parent element a width, depending on the number of articles. When an arrow is clicked, the parent element changes position, depending on the current position of the element. The parent element changes by 50vw at the time.

The carrousel works with flexbox. If flexbox is not supported, the layout changes to a more standard version, and the arrows dissapear. The same goes for Javascript.

To implement the feature detection, I mainly used [MDN web docs: Implementing feature detection](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection)

![The carrousel when JS is disabled](https://i.imgur.com/QTSrDWf.png)

Almost all browsers support flexbox, except for all IE browsers [Link to MDN article about backwards compatibility of flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Backwards_Compatibility_of_Flexbox)

### Device lab test

## Accordeon

[here](http://rick712.github.io/browser-technologies/opdracht2/accordeon) is the link to the accordeon

![The accordeon](https://i.imgur.com/9XZK8do.png)

The accordeon is a number of details elements that display some information when you click on them. Only one accordeon opens at the time. Some browsers don't support the `<details>` element. When this is the case, the browser shows the header and the content inside the element by default.

When Javascript is enabled, only one part of the accordeon opens. When Javascript is disabled, all the parts can be opened. This is also the case if `.forEach()` is supported. If not, all the `<details>` can open.

To implement the feature detection, I mainly used [MDN web docs: Implementing feature detection](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection)

![The accordeon when JS is disabled](https://i.imgur.com/5wqzK63.png)

The most advanced technique is the `.forEach()` function. .forEach() is pretty good supported in modern browsers according to [MDN Array.prototype.forEach()](https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)