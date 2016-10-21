var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CarSchema = new Schema({
  id: {type: Number, required: true, index: {unique: true}},
  name: String,
  models: [{
    id: {type: Number, required: true, index: {unique: true}},
    name: String,
    img: String,
    description: String
  }]
})

module.exports = mongoose.model('Car', CarSchema);
