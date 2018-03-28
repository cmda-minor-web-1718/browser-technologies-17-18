self.addEventListener('push', function(event) {
    if (!(self.Notification && self.Notification.permission === 'granted')) {
        return;
    }

    var data = {};
    if (event.data) {
        data = event.data.json();
    }
    var title = data.title;
    var message = data.message;
    var icon = "style/notify.png";
    var sound = "sound/cheer.mp3"

    self.clickTarget = data.clickTarget;
    console.log(event);
    event.waitUntil(
      self.registration.showNotification(title, {
          body: message,
          tag: 'push-demo',
          renotify: true
          // icon: icon,
          // badge: icon,
          // sound: sound
      })
    );
});
