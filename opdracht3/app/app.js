(function () {
  "use strict";

  const app = {
    homeScore: 0,
    awayScore: 0,
    init: function() {
      if(typeof new XMLHttpRequest().responseType === 'string'){
        setInterval(function () {
          api.request();
        }, 5000)

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
          app.homeScore = htmlResponse.querySelector(".home h2").innerHTML;
          app.awayScore = htmlResponse.querySelector(".away h2").innerHTML;
          document.querySelector(".home h2").innerHTML = app.homeScore;
          document.querySelector(".away h2").innerHTML = app.awayScore;
          console.log(typeof app.homeScore);

        } else {
          console.log(request.status); // Error handeling
        }
      };

      request.send();
    }
  }


  app.init()
})();
