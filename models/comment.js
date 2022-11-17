const mongoose = require('mongoose');
const { Schema } = mongoose;

const generalSchema = new Schema({
   comment: { 
      type: Schema.Types.String,
      minLength: 2,
   },
   autorId: [{ 
      type: Schema.Types.ObjectId,
      minLength: 2,
      ref: 'autor'
   }],
});

const model = mongoose.model('comment', generalSchema);
module.exports = model;