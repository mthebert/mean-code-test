var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CarSchema = new Schema({
  make_id: {type: Number, required: true, index: {unique: true}},
  name: String,
  models: [{
    model_id: {type: Number, required: true, index: {unique: true}},
    name: String,
    img: String,
    description: String
  }]
})

module.exports = mongoose.model('Car', CarSchema);
