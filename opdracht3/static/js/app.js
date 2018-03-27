(function () {
  "use strict";

  const app = {
    homeScore: document.querySelector(".home h2").innerHTML,
    awayScore: document.querySelector(".away h2").innerHTML,
    cheerSound: new Audio('sound/cheer.mp3'),
    booSound: new Audio('sound/boo.mp3'),
    init: function() {
      notify.init();
      if(typeof new XMLHttpRequest().responseType === 'string' && (document['querySelector']&&document['querySelectorAll'])!=null && document.documentElement.classList){
        setInterval(function () {
          //api.request();
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
    },
    notification: function(text) {
      if(window.Notification){
        if (window.Notification && Notification.permission !== "granted") {
          Notification.requestPermission(function (status) {
            if (Notification.permission !== status) {
              Notification.permission = status;
            }
          });
        }
        var n = new Notification(text);
      }
    }
  };

  const notify = {
    url: 'http://localhost:3000/subscribe',
    applicationServerPublicKey: "BDxQN5kMHQ4x47haSS9xIbXQWB3r5PHIVSDIM5HZD4k6hOPEGK_t5fCCJrIAzRBr5lf2KSuBf7W0xaTykXotzeg",
    serviceWorkerName: "sw.js", //INPORTEND NOT IS ASSET FOLDER!!
    isSubscribed: false,
    swRegistration: null,
    init: function() {
      const _this = this;
      Notification.requestPermission().then(function (status) {
        if (status === 'denied') {
            console.log('[Notification.requestPermission] The user has blocked notifications.');
            disableAndSetBtnMessage('Notification permission denied');
        } else if (status === 'granted') {
            console.log('[Notification.requestPermission] Initializing service worker.');
            _this.initialiseServiceWorker();
        }
      });
      document.querySelector(".away").addEventListener("click", function () {
        _this.subscribe();
        console.log(_this);
      })
    },
    initialiseServiceWorker: function () {
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register(this.serviceWorkerName).then(this.handleSWRegistration);
      } else {
        console.log('Service workers aren\'t supported in this browser.');
        disableAndSetBtnMessage('Service workers unsupported');
      }
    },
    handleSWRegistration: function(reg) {
      const _this = this;
      if (reg.installing) {
         console.log('Service worker installing');
       } else if (reg.waiting) {
         console.log('Service worker installed');
       } else if (reg.active) {
         console.log('Service worker active');
       }
       notify.swRegistration = reg;
       notify.initialiseState(reg);
    },
    initialiseState: function(reg) {
      const _this = this;
      if (!(reg.showNotification)) {
        console.log('Notifications aren\'t supported on service workers.');
        disableAndSetBtnMessage('Notifications unsupported');
        return;
      }

      if (!('PushManager' in window)) {
        console.log('Push messaging isn\'t supported.');
        disableAndSetBtnMessage('Push messaging unsupported');
        return;
      }
      console.log();
      // We need the service worker registration to check for a subscription
      navigator.serviceWorker.ready.then(function(reg) {
        // Do we already have a push message subscription?
        reg.pushManager.getSubscription()
          .then(function(subscription) {
            if (!subscription) {
              console.log('Not yet subscribed to Push');

              _this.isSubscribed = false;
              //makeButtonSubscribable();
            } else {
              // initialize status, which includes setting UI elements for subscribed status
              // and updating Subscribers list via push
              _this.isSubscribed = true;
              //makeButtonUnsubscribable();
            }
          })
          .catch(function(err) {
            console.log('Error during getSubscription()', err);
          });
      });
    },
    subscribe: function() {
      const _this = this;
      navigator.serviceWorker.ready.then(function(reg) {
        var subscribeParams = {
          userVisibleOnly: true
        };

        //Setting the public key of our VAPID key pair.
        var applicationServerKey = _this.urlB64ToUint8Array(_this.applicationServerPublicKey);
        subscribeParams.applicationServerKey = applicationServerKey;

        reg.pushManager.subscribe(subscribeParams)
          .then(function(subscription) {

            // Update status to subscribe current user on server, and to let
            // other users know this user has subscribed
            var endpoint = subscription.endpoint;
            var key = subscription.getKey('p256dh');
            var auth = subscription.getKey('auth');
            _this.sendSubscriptionToServer(endpoint, key, auth);
            _this.isSubscribed = true;
            //makeButtonUnsubscribable();
          })
          .catch(function(e) {
            // A problem occurred with the subscription.
            console.log('Unable to subscribe to push.', e);
          });
      });
    },
    urlB64ToUint8Array: function(base64String) {
      const padding = '='.repeat((4 - base64String.length % 4) % 4);
      const base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

      const rawData = window.atob(base64);
      const outputArray = new Uint8Array(rawData.length);

      for (var i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
      }
      return outputArray;
    },
    sendSubscriptionToServer: function(endpoint, key, auth) {
      var encodedKey = btoa(String.fromCharCode.apply(null, new Uint8Array(key)));
      var encodedAuth = btoa(String.fromCharCode.apply(null, new Uint8Array(auth)));

      fetch(this.url, {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          publicKey: encodedKey,
          auth: encodedAuth,
          notificationEndPoint: endpoint
        })
      }).then(function (res) {
        console.log(res.json());
        //return JSON.parse(res);
      });
    },
    unsubscribe: function() {
      var endpoint = null;
      swRegistration.pushManager.getSubscription()
        .then(function(subscription) {
          if (subscription) {
            endpoint = subscription.endpoint;
            return subscription.unsubscribe();
          }
        })
        .catch(function(error) {
          console.log('Error unsubscribing', error);
        })
        .then(function() {
          removeSubscriptionFromServer(endpoint);

          console.log('User is unsubscribed.');
          isSubscribed = false;

          makeButtonSubscribable(endpoint);
        });
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
            app.playSound("home");
            app.notification(`SCOOOORREEEE, The home team scored! It's ${app.homeScore}-${app.awayScore}`);
          } else if (htmlResponse.querySelector(".away h2").innerHTML != app.awayScore) {
            app.awayScore = htmlResponse.querySelector(".away h2").innerHTML;
            document.querySelector(".scoreAlert h2").innerHTML = `SCOOOORREEEE, The away team scored! It's ${app.homeScore}-${app.awayScore}`;
            document.querySelector(".away h2").innerHTML = app.awayScore;
            app.playSound("away");
            app.notification(`SCOOOORREEEE, The away team scored! It's ${app.homeScore}-${app.awayScore}`)
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
