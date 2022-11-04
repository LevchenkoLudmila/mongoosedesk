const mongoose = require('mongoose');
const { Schema } = mongoose;

const generalSchema = new Schema({
   comment: { 
      type: Schema.Types.String,
      minLength: 2,
   },
   autor: { 
      type: Schema.Types.String,
      minLength: 2,
   },
   articleId:  { 
      type: Schema.Types.ObjectId,
      ref: 'article'
   },

});

const model = mongoose.model('comment', generalSchema);
module.exports = model;