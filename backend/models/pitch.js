const mongoose = require('mongoose');

const pitchSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String }, 
  videoLink: { type: String },
  pdfLink: { type: String },
  fundsRequired: { type: Number, required: true },
  estimatedProfit: { type: Number, required: true },
  pptFile: { type: String }, 
});

const Pitch = mongoose.model('Pitch', pitchSchema);

module.exports =Pitch;