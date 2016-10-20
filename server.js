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

apiRouter.get('/makes', nction(req, res){
  res.json({message: 'Makes of Cars Route'});
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
	res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(3000);
console.log("Express Server started...");
