const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  
  destination: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  highlights: {
    type: String,
  },
  photosLink: {
    type: String,
  },
  tripType: {
    type: String,
    enum: ['roadtrip', 'hiking', 'city', 'beach', 'other'],
  },
  startDate: {
    type: Date,
  },
  endDate: {
    type: Date,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
});

const userSchema = new mongoose.Schema({
  
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  trips: [tripSchema], 
});

const User = mongoose.model('User', userSchema);

module.exports = User;
