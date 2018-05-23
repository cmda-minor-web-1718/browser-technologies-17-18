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

The website itself did load, but nothing happened. The loading spinner did not rotate, and the query did not load. 

## Nokia something

This one was quite weird. It said that the website had a technical problem, and thus the page could not be loaded. The url was correct, so I had no idea what the problem was.

## LG something

The LG phone was the first one that actually loaded the website as it was supposed to be. It was a bit slow, but it loaded everything just fine. I was quite impressed that my website would actually work one even one phone.

## Kindle

The Kindle thing didn't work. All it said was that there was a problem loading the page.

## Windows tablet

The Windows tablet loaded the page, and the loading spinner spinned like crazy, but nothing after that happened.

## Screenreader

I never used a screenreader before, so it was a big eye opener how hard it was to use a screenreader. Maybe if you are used to it, it becomes easier, but for me it was really hard to use. The website itself was kinda easy to use, but that was maybe because I know how to navigate through my website. What I did like, was that the screenreader reads the current window that has focus. Something that I hated was the fact that the screenreader doesn't know the difference between languages, and it just reads out in the language you filled in. If you have your pc in Dutch, but you are writing something in English (like I am now), it doesn't make sense, and the sentences come out really weird.

## Conclusion

I don't really know what to think of the results. Some of these devices are really outdated, and I highly doubt that any of my possible users are using one of these devices. Something to keep in mind though is that not every thing works like you would expect. Even when it works on my pc,doesn't necessarily mean that it works for everyone everywhere.
