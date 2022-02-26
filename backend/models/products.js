const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let productsSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  quantity: {
    type: String,
    required: true
  },
},
  {
    collection: 'products'
  })

module.exports = mongoose.model('Products', productsSchema)