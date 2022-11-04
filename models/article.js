const mongoose = require('mongoose');
const { Schema } = mongoose;

const generalSchema = new Schema({
   zagolovki: { 
      type: Schema.Types.String,
      minLength: 3,
   },
   keywords: { 
      type: Schema.Types.String,
      minLength: 3,
   },
   article: { 
      type: Schema.Types.String,
      minLength: 2,
   },
   autor: { 
      type: Schema.Types.String,
      minLength: 2,
   },
   rating: { 
      type: Schema.Types.Number,
      min: 2,
   },
   createAt: {
      type: Schema.Types.Date,
      immutable: true,
      default: () => Date.now(),
   },
   commentId: [{ 
      type: Schema.Types.ObjectId,
      ref: 'comment',
   }],
});

const model = mongoose.model('Article', generalSchema);
module.exports = model;