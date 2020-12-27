const { hash } = require('bcrypt');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },
    lastName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },
    hash: {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },
    orders: {
      type: [], 
      required: true,
    }
}, { 
    timestamps: true,
});
  
const User = mongoose.model('userAccounts', userSchema);
  
module.exports = User;  