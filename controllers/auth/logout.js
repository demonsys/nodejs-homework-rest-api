const { User } = require("../../models/user");

const logout = async (req, res) => {
  const user = req.user;
  await User.findByIdAndUpdate(user._id, { token: "" });

  res.status(201).json({ message: "No Content" });
};
module.exports = logout;
