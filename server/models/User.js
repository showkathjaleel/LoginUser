const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    max: 50,
    unique: true
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 20
  }
},
{ timestamps: true }
)

module.exports = mongoose.model('User', UserSchema)



