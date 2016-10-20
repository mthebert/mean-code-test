var express = require('express');
var app = express();
var morgan = require('morgan');
var path = require('path');

app.use(morgan('dev'));

// API
var apiRouter = express.Router();

app.use('/api', apiRouter);

apiRouter.get('/', function(req, res){
  res.json({message: 'Default API Route'});
});

apiRouter.get('/makes', function(req, res){
  res.json({"makes": [
    {
  "id": "1",
  "name": "Ford",
  "models": [{
    "id": "3",
    "name": "explorer",
    "img": "img/explorer.jpg",
    "description": "This is a Ford Explorer"
  }, {
    "id": "4",
    "name": "escape",
    "img": "img/escape.jpg",
    "description": "This is a Ford Escape"
  }]

}, {
  "id": "2",
  "name": "Acura",
  "models": [{
    "id": "5",
    "name": "MDX",
    "img": "img/mdx.jpg",
    "description": "This is an Acura MDX"
  }, {
    "id": "6",
    "name": "ILX",
    "img": "img/ilx.jpg",
    "description": "This is an Acura ILX"
  }
]}

]})
});

apiRouter.get('/models', function(req, res){
  res.json({message: 'Models of Cars Route'});
});

apiRouter.route('/models/:model_id')
  .get(function(req, res){
    res.json({message: 'Find a Model'});
  })

// ANGULAR ROUTES
app.use(express.static(__dirname + '/public'));
app.use('/api', apiRouter);

app.get('*', function(req, res){
	res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
});

app.listen(3000);
console.log("Express Server started...");
