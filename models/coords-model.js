const mongoose = require('mongoose');
const {Schema} = mongoose;
const coordSchema = new Schema({
    position: {
      type: {
        type: String, 
        enum: ['Point'],
        required: true
      },
      coords: {
        type: [Number],
        index: '2dsphere'
      },
      created: {
          type: Date,
          default: Date.now
      }
    }
  });
  const Coords = mongoose.model('coords', coordSchema)
  module.exports = Coords;