# Browser Technologies

## Opdracht 1 - Progressive Enhancement

The web is for everyone. Learn about Progressive enhancement

### Opdracht 1.1 - Break the Web

[Link to presentation](https://docs.google.com/presentation/d/19a6mIf_GFPngIeJZXZoi-1VCQU8enFxl8Ml8VSAJBjs/edit?usp=sharing)

### Opdracht 1.2 - Fork your WAFS

I chose to use my WAFS project, since my Oba web app didn't contain that much information.

[Link to WAFS website](https://rick712.github.io/wafs/opdracht1/wafs/app/dist/index.html)

## 1. Images

Before I progressive enhanced my website, the images didn't have an alt text, so when the images dissapeared, the user wouldn't have a clue what the image was about. After the progressive enhancement, the images contained information about the Pokémon, and what form it was.

## 2. Custom fonts

The website only uses sans-serif, which is usable on every single device ever.

## 3. Disable Javascript

The complete website relies on Javascript. The two api calls are done with JS. At this point, there is no feedback for the user if the JS is disabled, so that's kinda bad. The website does display a message if the api is not available, with a link to the api endpoint.

## 4. Colour

The website is completely in black and white tones, except for the images. The contrast between the elements is enough to tell the difference between them, even for colour-blind people. Changing the colours of the images is not possible, and not necessary.

## 5. High speed internet

The website is not really optimised for low speed internet, but it's not that bad. On slow 3G, it takes around 8,5 seconds for the website to fully load. The Api call is around 2 seconds, but this is highly dependent on how fast the Api is. Sometimes it takes ten seconds to load the Api, even on fast internet speed.

![Results of the network tab](https://i.imgur.com/nrk5FUq.png)

## 6. Cookies

The website doesn't use cookies. 

## 7. Localstorage

This version of the website doesn't use localstorage. It would come in handy to use localstorage to store the Pokémon. If the api is offline, the web app could save the Pokémon that the user already clicked on, and display them if the Pokémon is clicked a second time. (For Performance Matters, the website uses a service worker to enable searching for pokemon offline)

## 8. Mouse / trackpad

The website is pretty easy to navigate through. Every interactive element is accessible with the tab. The only negative thing is that when you want to navigate to a Pokémon that is low on the list, it can take some time before you reach it, except when you look for the pokemon by typing its name in the searchbar, but you need to know what pokemon you're looking for.

## Conclusion

The web app isn't too bad. Some things are working pretty good, like the colour and high speed internet, some things are a bit less good, like the localstorage and cookies. Some things could be improved, but I already did some adjustments in the performance matters version of the web app.

# Device lab

To test my web app, I used the device lab. The device lab is a place where you can test your website on several outdated devices.

## Samsung Galaxy Note 1 (I guess, not sure)

What I first noticed is that the bottom menu doesn't allign the same as it does at my own device. The navigation is still usable, but is doesn't look as good as I intended it to be. Apperently I couldn't scroll through the home page. The search button broke in half. When the pokemon was loaded, I had to zoom out a bit to see the whole page. What was remarkable as well, was that the navigation bar was gone at the pokemon page as soon as I zoomed out.

## Nokia something

At this device I couldn't scroll to the bottom as well. The navigation bar was working fine. The overview page was working fine, although the padding next to the list was gone. The navigation bar was not at the bottom, but a centimeter above it. At the detail page I had to zoom out as well, and again, the navigation bar moved more to the top. The page itself was working fine.

## LG something

Again, I couldn't scroll to the bottom. The navigation bar was working fine. Again, the button broke in half. I had to zoom out again, and the navigation bar was shorter than the device with. The navigation bar remaind at the bottom. The detail page worked as it should.

![Photo of device lab test](https://i.imgur.com/ZSeIPvt.png)

![Photo of device lab test](https://i.imgur.com/tdLSoLu.png)

![Photo of device lab test](https://i.imgur.com/XGnhvdi.png)

![Photo of device lab test](https://i.imgur.com/0Tf9UIV.png)

## Kindle

The kindle said 'There was a problem loading this page'. I have no clue why it didn't load. I tried many things, but it just didn't work.

![Photo of device lab test](https://i.imgur.com/Gz817Ji.png)

## Apple iPad

The iPad was the first website that didn't have the scroll bug (I knew why the bug happened, and I fixed it). The website worked great on the iPad, and I have no remarks left.

![Photo of device lab test](https://i.imgur.com/Kv2cjGg.png)

![Photo of device lab test](https://i.imgur.com/xO4xEQw.png)

![Photo of device lab test](https://i.imgur.com/Wp4YFuc.png)

## Windows tablet

Wat was funny, that was that the tablet said the page wasn't safe. Some of the padding was gone, and the list of pokemon didn't load, so probably a JavaScript error.

![Photo of device lab test](https://i.imgur.com/mdVfGfA.png)

![Photo of device lab test](https://i.imgur.com/ccpkqyG.png)

![Photo of device lab test](https://imgur.com/9EirclR.png)

## Firefox thing

The Firefox thing loaded the page, but the padding in the navigation bar was gone again, but still usable. The list of pokemon did load, and so did the detail page. I had to zoom out again, but I couldn't zoon out like the other devices. It got stuck halfway the page, so I couldn't see the whole page. Again, the navigation bar got smaller as I zoomed.

![Photo of device lab test](https://i.imgur.com/5Pl5hrF.png)

![Photo of device lab test](https://i.imgur.com/yR1vNRx.png)

## Screenreader

I never used a screenreader before, so it was a big eye opener how hard it was to use a screenreader. The menu was easy to navigate through. I noticed the first problem when I wanted to search for a pokemon. The form said 'bewerk tekst, hoofd' (change text, head in Dutch), while it should said something like: 'Search for pokemon by name'. I also noticed that the button to search for pokemon wasn't accessible with the tab. On the detail page, the back button wasn't accessible with tab either.

## Conclusion

I don't really know what to think of the results. Some of these devices are really outdated, and I highly doubt that any of my possible users are using one of these devices. Something to keep in mind though is that not every thing works like you would expect. Even when it works on my pc,doesn't necessarily mean that it works for everyone everywhere. The conclusion of the screenreader test is clear: the website is shit for people who use a screenreader. This is really something I need to keep in mind.
