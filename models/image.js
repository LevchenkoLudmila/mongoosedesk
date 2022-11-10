const mongoose = require('mongoose');
const { Schema } = mongoose;

const generalSchema = new Schema({
   name: {
      type: Schema.Types.String,
   },
   desc: {
      type: Schema.Types.String,
   },
   image: {
      type: Schema.Types.String,   
      data: Buffer,
   },
});

const model = mongoose.model('Image', generalSchema);
module.exports = model;