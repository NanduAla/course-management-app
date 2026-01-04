const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(403).json({ message: "Token missing" });
  }

  try {
    jwt.verify(token, "secretKey");
    next();
  } catch {
    res.status(401).json({ message: "Unauthorized" });
  }
};
