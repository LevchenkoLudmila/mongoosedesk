const mongoose = require('mongoose');
const { Schema } = mongoose;

const generalSchema = new Schema({
   zagolovok: { 
      type: Schema.Types.String,
      minLength: 3,
      required: true,
   },
   keywords: { 
      type: Schema.Types.String,
      minLength: 3,
      unique: true,
   },
   article: { 
      type: Schema.Types.String,
      minLength: 5,
   },
   rating: { 
      type: Schema.Types.Number,
      min: 1,
   },
   price: { 
      type: Schema.Types.Number,
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
   autorId: { 
      type: Schema.Types.ObjectId,
      ref: 'autor',
   },
});

const model = mongoose.model('Article', generalSchema);
module.exports = model;