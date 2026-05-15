const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],
  },

projecttype: {
  type: String,
  enum: ['portrait', 'illustration', 'character', 'other'],
  required: true,
},
Budgetrange: {
  type: String,
  enum: ['under-500', '500-1000', '1000-2500', 'over-2500'],
  required: true,
},


  projectdetails: {
    type: String,
    required: true,
    trim: true,
  },
}, {
  timestamps: true,
});

const Contact = mongoose.model('Contact', ContactSchema);
module.exports = Contact;
