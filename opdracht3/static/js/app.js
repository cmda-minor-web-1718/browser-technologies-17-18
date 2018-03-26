(function () {
  "use strict";

  const app = {
    homeScore: document.querySelector(".home h2").innerHTML,
    awayScore: document.querySelector(".away h2").innerHTML,
    cheerSound: new Audio('sound/cheer.mp3'),
    booSound: new Audio('sound/boo.mp3'),
    init: function() {
      if(typeof new XMLHttpRequest().responseType === 'string' && (document['querySelector']&&document['querySelectorAll'])!=null && document.documentElement.classList){
        setInterval(function () {
          api.request();
        }, 5000)
      }
    },
    playSound: function(score){
      var mp3Test = document.createElement('audio');
      if(!!(mp3Test.canPlayType && mp3Test.canPlayType('audio/mpeg;').replace(/no/, ''))){
        if (score === "home") {
          app.cheerSound.play();
        } else if (score === "away"){
          app.booSound.play();
        }
      }
    }
  }

  const api = {
    url: "localhost:3000",
    request: function() {
      const request = new XMLHttpRequest();
      var parser = new DOMParser();
      // Making the url and creating a GET request
      const url = `index.html`;

      request.open('GET', url, true);

      request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
          console.log(request.responseText);
          var htmlResponse = parser.parseFromString(request.responseText, "text/html");

          if(htmlResponse.querySelector(".home h2").innerHTML != app.homeScore || htmlResponse.querySelector(".away h2").innerHTML != app.awayScore) {
            document.querySelector(".scoreAlert").classList.remove("scored");
            document.querySelector(".scoreAlert").classList.add("scored");
            
          }

          if(htmlResponse.querySelector(".home h2").innerHTML != app.homeScore) {
            app.homeScore = htmlResponse.querySelector(".home h2").innerHTML;
            document.querySelector(".scoreAlert h2").innerHTML = `SCOOOORREEEE, The home team scored! It's ${app.homeScore}-${app.awayScore}`;
            document.querySelector(".home h2").innerHTML = app.homeScore;
          } else if (htmlResponse.querySelector(".away h2").innerHTML != app.awayScore) {
            app.awayScore = htmlResponse.querySelector(".away h2").innerHTML;
            document.querySelector(".scoreAlert h2").innerHTML = `SCOOOORREEEE, The away team scored! It's ${app.homeScore}-${app.awayScore}`;
            document.querySelector(".away h2").innerHTML = app.awayScore;
          }

        } else {
          console.log(request.status); // Error handeling
        }
      };

      request.send();
    }
  }


  app.init()
})();
