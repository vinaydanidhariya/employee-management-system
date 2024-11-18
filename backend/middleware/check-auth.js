const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  if (req.method === "OPTIONS") {
    return next();
  }
  try {
    const token = await req.headers.authorization.split(" ")[1];
    if (!token) {
      throw new Error("Authentication failed!");
    }
    // console.log(token);
    
    // const decodedToken = jwt.verify(token, "secret_secret");
    // console.log(decodedToken);
    
    // const auth_user = (req.userData = { userId: decodedToken.userId });
    next();
  } catch (err) {
    console.log(err);
    
    const error = new Error("Authentication failed!", 401);
    return next(error);
  }
};
