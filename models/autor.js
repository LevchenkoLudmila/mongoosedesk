const mongoose = require('mongoose');
const { Schema } = mongoose;

const generalSchema = new Schema({
   autor: { 
      type: Schema.Types.String,
      minLength: 2,
   },
   email: { 
      type: Schema.Types.String,
      minLength: 3,
   },
   telefon: {
      type: Schema.Types.Number,
      min: 1,
   },
   createAt: {
      type: Schema.Types.Date,
      immutable: true,
      default: () => Date.now(),
   },
});

const model = mongoose.model('Autor', generalSchema);
module.exports = model;