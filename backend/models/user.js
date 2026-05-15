const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
  type: String,
  required: true,
  trim: true,
  lowercase: true,
  match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']
},

    password: {
        type: String,
        required: true,
        minlength: 6,
        select: false // Exclude password from queries by default
    },
}, {
    timestamps: true // Automatically manage createdAt and updatedAt fields
});

const User = mongoose.model('User', UserSchema);
module.exports = User;