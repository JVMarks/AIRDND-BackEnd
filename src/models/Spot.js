const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
  thumbnail: String,
  company: String,
  price: Number,
  techs: [String],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  toJSON: {
    virtuals: true,
  },
});

SpotSchema.virtual('thumbnail_url').get(function() {
  return `http://localhost:1119/files/${this.thumbnail}`
})

//192.168.56.1

module.exports = mongoose.model('Spot', SpotSchema);