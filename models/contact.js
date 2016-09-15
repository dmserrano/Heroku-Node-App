'use strict';

const mongoose = require('mongoose');
/////////////////////////////////////////


/////////////////////////////////////////
//Every collection in mongoose needs its own model
//Mongoose model: the post object should match the model obj passed at the second arg
module.exports = mongoose.model('Contact', {
  name: String,
  email: String,
  phone: String,
  message: String
});
/////////////////////////////////////////
