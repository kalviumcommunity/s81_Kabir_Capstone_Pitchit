

const Pitch = require('../models/Pitch'); 

const createPitch = async (req, res) => {
  try {
    const { name, category, description, videoLink, pdfLink, fundsRequired, estimatedProfit } = req.body;

    const image = req.files && req.files.image ? req.files.image[0].path : null;
    const pptFile = req.files && req.files.pptFile ? req.files.pptFile[0].path : null;

    const newPitch = new Pitch({
      name,
      category,
      description,
      image, 
      videoLink,
      pdfLink,
      fundsRequired,
      estimatedProfit,
      pptFile,
    });

    await newPitch.save();
    res.status(201).json({ message: 'Pitch created successfully', pitch: newPitch });
  } catch (error) {
    console.error('Error creating pitch:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getAllPitches = async (req, res) => {
  try {
    const pitches = await Pitch.find();
    res.status(200).json(pitches);
  } catch (error) {
    console.error('Error fetching pitches:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { createPitch, getAllPitches };
