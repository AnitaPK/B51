const User = require('../models/userModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()


async function register(req,res){
   
   try {
    const { name, email, mobileNumber, password, role } = req.body;

    // Validate input
    if (!name || !email || !mobileNumber || !password) {
      return res.status(400).json({ success: false, msg: "All fields are required" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ success: false, msg: "Email already registered" });
    }

    // Create new user
    const newUser = await User.create({
      name,
      email,
      mobileNumber,
      password,
      role: role || "User"
    });
    if(!newUser){res.status(400).send({msg:"Error while registering user"})}
    res.status(200).json({ 
      success: true, 
      msg: "User registered successfully" });
  } catch (error) {
    res.status(500).send({ msg: "Server error" });
  }
}


async function login(req,res){
 try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ success: false, msg: "Email and password required" });
    }

    // Check if user exists
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ success: false, msg: "User not found" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, msg: "Invalid credentials" });
    }

    const token = jwt.sign({id:user.id, role:user.role}, process.env.SECREATE_KEY, {expiresIn:'1h'})

    res.status(200).json({
      success: true,
      msg: "Login successful",
      token:token
    });
  } catch (error) {
    res.status(500).send({ msg: "Server error" });
  }
}

async function getUserInfo(req,res){
 console.log(req.params.ID, "In controller");

  try {
    const userId = req.params.ID;

    const user = await User.findByPk(userId, {
      attributes: ['id', 'name', 'email', 'mobileNumber', 'role']
    });

    if (!user) {
      return res.status(404).json({ success: false, msg: "User not found" });
    }

    res.status(200).json({ success: true, user });
  } catch (error) {
    res.status(500).send({ msg: "Server error" });
  }
}

module.exports ={
    register,
    login,
    getUserInfo   
}