


const express = require('express');
const multer = require('multer');
const { createPitch, getAllPitches ,putAllPitches} = require('../controllers/pitchController');
const router = express.Router();


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); 
  },
});

const upload = multer({ storage });


router.post('/create', upload.fields([{ name: 'image', maxCount: 1 }, { name: 'pptFile', maxCount: 1 }]), createPitch);


router.get('/', getAllPitches);


router.put('/:id',putAllPitches);

module.exports = router;

module.exports = router;

