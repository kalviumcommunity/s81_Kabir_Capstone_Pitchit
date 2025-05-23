
const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User'); 

const router = express.Router();

// SIGNUP Route
router.post("/signup", async (req, res) => {
  try {
    const { username, displayName, email, password, role } = req.body;

   
    if (!username || !displayName || !email || !password || !role) {
      return res.status(400).json({ message: "All fields are required" });
    }

  
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

   
    const newUser = new User({
      username,
      displayName,
      email,
      password: hashedPassword,
      role,
    });

   
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.error("Error during signup:", err);
    res.status(500).json({ error: err.message });
  }
});

// LOGIN Route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

  
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

  
    console.log("User found:", user);

   
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }


    res.status(200).json({ message: "Login successful", user });
  } catch (err) {
    console.error("Error during login:", err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
