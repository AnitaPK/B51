const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const{ ObjectId } = require('mongoose');

async function register(req, res) {
  const { name, email, password } = req.body;
  console.log(req.body, "reqBody")
  try {
    const existsUser = await User.findOne({ email });
    if (existsUser) return res.status(400).json({ message: "Email already used" });

    const genSalt1 =await bcrypt.genSalt(8)
    const hashPassword =await bcrypt.hash(password, genSalt1)
    console.log(hashPassword, "hashPassword")
    const newUser = await User.create({ name, email, password:hashPassword });
    await newUser.save();
    console.log(newUser, "newUser")
    res.status(200).json({message:"Register successfully"})

  } catch (error) {
    console.error("createUser error", error);
    res.status(500).json({ message: "Server error" });
  }
}
async function login(req, res) {
    const { email, password} = req.body
  try {
    const loggedUser = await User.findOne({email})
    if(!loggedUser) return res.status(200).json({message:"User doesn't exists"})
    const match = await bcrypt.compare(password, loggedUser.password)
    if(!match) return res.status(200).json({message:"Invalid password"})
    const token = jwt.sign({_id:loggedUser._id, role:loggedUser.role},process.env.JWT_SECREATE_KEY,{expiresIn:'1d'})
    res.status(202).json({message:"login successfully", token:token})
  } catch (error) {
    console.error("createUser error", error);
    res.status(500).json({ message: "Server error" });
  }
}
async function getUserInfo(req, res) {
    console.log(req.user, "req user")
    const Userid = req.user._id
  try {
    const userInfo = await User.findOne({_id:Userid})
    console.log(userInfo,"userInfo")
    res.status(200).json({userInfo:userInfo})
  } catch (error) {
    console.error("createUser error", error);
    res.status(500).json({ message: "Server error" });
  }
}

module.exports = {
  register,
  login,
  getUserInfo,
};
