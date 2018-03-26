var bodyParser = require('body-parser')
var express = require('express')

express()
  .use(express.static('static'))
  .use(bodyParser.urlencoded({extended: true}))
  .set('view engine', 'ejs')
  .set('views', 'view')
  .get('/', index)
  .get('/index.html', index)
  //.use(notFound)
  .listen(3000)

function index(req, res) {
  //res.status(404).render('not-found.ejs')

  res.render('index.ejs');

}
