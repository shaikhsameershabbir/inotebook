const jwt = require("jsonwebtoken");

//  get user from the jwttoken and id to rq object
const fetchUser = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ error: "Please authenticate using valided token " });
  }

  try {
    const data = jwt.verify(token, "smasher");
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ error: "Please authenticate using valided token " });
  }
};
module.exports = fetchUser;
