const { User } = require("../../models/user");

const updateSubscription = async (req, res) => {
  const user = req.user;
  const { subscription } = req.body;
  const result = await User.findByIdAndUpdate(
    user._id,
    { subscription },
    { new: true }
  );

  res.json({
    user: {
      email: result.email,
      subscription: result.subscription,
    },
  });
};

module.exports = updateSubscription;
