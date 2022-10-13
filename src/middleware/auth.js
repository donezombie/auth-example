const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const auth = async (req, res, next) => {
  const token = req?.header("Authorization")?.replace("Bearer ", "") || "";
  try {
    if (token) {
      const data = jwt.verify(token, process.env.JWT_KEY);
      const user = await User.findOne({ _id: data._id, "tokens.token": token });
      if (!user) {
        throw new Error();
      }
      req.user = user;
      req.token = token;
      next();
    } else {
      res.status(401).send({ error: "Not authorized to access this resource" });
    }
  } catch (error) {
    res.status(401).send({ error: "Not authorized to access this resource" });
  }
};
module.exports = auth;
