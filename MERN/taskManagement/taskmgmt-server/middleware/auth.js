const jwt = require("jsonwebtoken");
require("dotenv").config();

const protect = (req, res, next) => {
  try {
    const authToken = req.headers.authorization;
    // console.log(authToken);
    if (!authToken) {
      res.status(400).send({ msg: "Token not found" });
    } else {
      const token = authToken.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECREATE_KEY);

      req.user = decoded;
      next();
    }
  } catch (error) {
    res.status(500).send({ msg: "server error" });
  }
};

const adminOnly = (req, res, next) => {
  if (req.user.role != "admin") {
    return res.status(403).send({ msg: "You are not admin" });
  }
  next();
};


module.exports = {
    protect, adminOnly
}