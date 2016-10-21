var express = require('express');
var app = express();
var morgan = require('morgan');
var path = require('path');
var mongoose = require('mongoose');

var Car     = require('./models/car');
mongoose.connect('mongodb://admin:hearst@ds021434.mlab.com:21434/hearst');
app.use(morgan('dev'));

// API
var apiRouter = express.Router();

app.use('/api', apiRouter);

apiRouter.get('/', function(req, res){
  res.json({message: 'Default API Route'});
});

apiRouter.route('/makes')
  .get(function(req, res) {
    Car.find(function(err, makes) {
      if (err) res.send(err);
        res.json(makes);
    });
  });

apiRouter.route('/makes/:make_id')
  .get(function(req, res) {
    console.log("id: " +req.params.make_id)
    Car.find({"make_id": req.params.make_id}, function(err, models) {
      if (err) res.send(err);
        console.log("Getting Models!  " + models);
        res.json(models);
      });
  });

// ANGULAR ROUTES
app.use(express.static(__dirname + '/public'));
app.use('/api', apiRouter);

app.get('*', function(req, res){
	res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
});

app.listen(3000);
console.log("Express Server started...");
