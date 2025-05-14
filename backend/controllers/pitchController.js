



const Pitch = require('../models/pitch'); 

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

const putAllPitches = async (req, res) => {
  try {
    const { name, category, description, videoLink, pdfLink, fundsRequired, estimatedProfit } = req.body;

  
    const image = req.files && req.files.image ? req.files.image[0].path : undefined;
    const pptFile = req.files && req.files.pptFile ? req.files.pptFile[0].path : undefined;

 
    const updateData = {
      name,
      category,
      description,
      videoLink,
      pdfLink,
      fundsRequired,
      estimatedProfit,
    };

    if (image !== undefined) updateData.image = image;
    if (pptFile !== undefined) updateData.pptFile = pptFile;

    const updatedPitch = await Pitch.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    if (!updatedPitch) {
      return res.status(404).json({ message: 'Pitch not found' });
    }

    res.status(200).json({ message: 'Pitch updated successfully', pitch: updatedPitch });
  } catch (error) {
    console.error('Error updating pitch:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { createPitch, getAllPitches, putAllPitches };
