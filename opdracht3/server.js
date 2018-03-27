var express = require('express')
let webPush = require("web-push");
let atob = require('atob');
let bodyParser = require('body-parser');
let util = require('util');

express()
  .use(express.static('static'))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .set('view engine', 'ejs')
  .set('views', 'view')
  .get('/', index)
  .get('/index.html', index)
  .get('/submit', scoreInput)
  .get('/submit.html', scoreInput)
  .post('/submit', scoreSubmit)
  .post('/subscribe', subscribe)
  .post('/unsubscribe', unsubscribe)
  .get('/notify/all', notify)
  //.use(notFound)
  .listen(3000)

let subscribers = [];

require('dotenv').config();
let VAPID_SUBJECT = process.env.VAPID_SUBJECT;
let VAPID_PUBLIC_KEY = process.env.VAPID_PUBLIC_KEY;
let VAPID_PRIVATE_KEY = process.env.VAPID_PRIVATE_KEY;

//Auth secret used to authentication notification requests.
let AUTH_SECRET = process.env.AUTH_SECRET;

if (!VAPID_SUBJECT) {
    return console.error('VAPID_SUBJECT environment variable not found.')
} else if (!VAPID_PUBLIC_KEY) {
    return console.error('VAPID_PUBLIC_KEY environment variable not found.')
} else if (!VAPID_PRIVATE_KEY) {
    return console.error('VAPID_PRIVATE_KEY environment variable not found.')
} else if (!AUTH_SECRET) {
    return console.error('AUTH_SECRET environment variable not found.')
}

webPush.setVapidDetails(
    VAPID_SUBJECT,
    VAPID_PUBLIC_KEY,
    VAPID_PRIVATE_KEY
);



const score = {
  home: 0,
  away: 0
}

function index(req, res) {
  res.render('index.ejs', {score:score});
}

function scoreInput(req, res) {
  res.render('submit.ejs', {score:score});
}

function scoreSubmit(req, res) {
  if (req.query.scored === "home") {
    score.home += 1;
  } else if (req.query.scored === "away") {
    score.away += 1;
  }
  res.render('submit.ejs', {score:score});
}


function subscribe(req, res) {
 let endpoint = req.body['notificationEndPoint'];
 let publicKey = req.body['publicKey'];
 let auth = req.body['auth'];

 let pushSubscription = {
     endpoint: endpoint,
     keys: {
         p256dh: publicKey,
         auth: auth
     }
 };

 subscribers.push(pushSubscription);

 res.json({mess:'Subscription accepted!'});
}

function unsubscribe(req, res) {
  let endpoint = req.body['notificationEndPoint'];

  subscribers = subscribers.filter(subscriber => {
    endpoint == subscriber.endpoint
  });

  res.send('Subscription removed!');
}

function notify(req, res) {
  if (req.get('auth-secret') != AUTH_SECRET) {
    console.log("Missing or incorrect auth-secret header. Rejecting request.");
    return res.sendStatus(401);
  }

  let message = req.query.message || `Willy Wonka's chocolate is the best!`;
  let clickTarget = req.query.clickTarget || `http://www.favoritemedium.com`;
  let title = req.query.title || `Push notification received!`;

  subscribers.forEach(pushSubscription => {
    //Can be anything you want. No specific structure necessary.
    let payload = JSON.stringify({
      message: message,
      clickTarget: clickTarget,
      title: title
    });

    webPush.sendNotification(pushSubscription, payload, {}).then((response) => {
      console.log("Status : " + util.inspect(response.statusCode));
      console.log("Headers : " + JSON.stringify(response.headers));
      console.log("Body : " + JSON.stringify(response.body));
    }).catch((error) => {
      console.log("Status : " + util.inspect(error.statusCode));
      console.log("Headers : " + JSON.stringify(error.headers));
      console.log("Body : " + JSON.stringify(error.body));
    });
  });

  res.send('Notification sent!');
}
