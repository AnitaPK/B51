const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();



const baseURL = 'http://localhost:5000/download/'

async function register(req, res) {
  const { name, email, password } = req.body;
  const avatar = req.file ? req.file.filename : null

  console.log(req.body, "reqBody")
  try {
    const existsUser = await User.findOne({ email });
    if (existsUser) return res.status(400).json({ message: "Email already used" });

    const genSalt1 =await bcrypt.genSalt(8)
    const hashPassword =await bcrypt.hash(password, genSalt1)
    console.log(hashPassword, "hashPassword")
    const newUser = await User.create({ name, email, password:hashPassword , avatar});
    await newUser.save();
    console.log(newUser, "newUser")
    res.status(200).json({message:"Register successfully"})

  } catch (error) {
    console.error("register error", error);
    res.status(500).json({ message: "Server error" });
  }
}
async function login(req, res) {
    const { email, password} = req.body
  try {
    const loggedUser = await User.findOne({email})
    if(!loggedUser) return res.status(401).json({message:"User doesn't exists"})
    const match = await bcrypt.compare(password, loggedUser.password)
    if(!match) return res.status(401).json({message:"Invalid password"})
    const token = jwt.sign({_id:loggedUser._id, role:loggedUser.role},process.env.JWT_SECREATE_KEY,{expiresIn:'1d'})
    res.status(200).json({message:"login successfully", token:token})
  } catch (error) {
    console.error("login error", error);
    res.status(500).json({ message: "Server error" });
  }
}
async function getUserInfo(req, res) {
    console.log(req.user, "req user")
    const Userid = req.user._id
  try {
    const userInfo = await User.findOne({_id:Userid})

    const updatedUserInfo = {
      _id:userInfo._id,
      name: userInfo.name,
      email:userInfo.email,
      role:userInfo.role,
      avatar: userInfo.avatar ? `${baseURL}${userInfo.avatar}` : ''
    }


    console.log(userInfo,"userInfo")
    res.status(200).json({userInfo:updatedUserInfo})
  } catch (error) {
    console.error("getUserInfo error", error);
    res.status(500).json({ message: "Server error" });
  }
}

async function getAllUsers(req, res) {
  try {
    const users = await User.find({});
    const updated = users.map(u => ({
      _id: u._id,
      name: u.name,
      email: u.email,
      role: u.role,
      avatar: u.avatar ? `${baseURL}${u.avatar}` : ''
    }));
    res.status(200).json({ users: updated });
  } catch (error) {
    console.error('getAllUsers error', error);
    res.status(500).json({ message: 'Server error' });
  }
}

module.exports = {
  register,
  login,
  getUserInfo,
  getAllUsers
};
