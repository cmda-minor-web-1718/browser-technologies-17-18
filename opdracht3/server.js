var express = require('express')

express()
  .use(express.static('static'))
  .set('view engine', 'ejs')
  .set('views', 'view')
  .get('/', index)
  .get('/index.html', index)
  .get('/submit', scoreInput)
  .get('/submit.html', scoreInput)
  .post('/submit', scoreSubmit)
  //.use(notFound)
  .listen(3000)

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
