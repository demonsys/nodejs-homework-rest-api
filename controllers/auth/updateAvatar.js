const path = require("path");
const Jimp = require("jimp");
// const fs = require("fs/promises");
const { User } = require("../../models/user");
const { HttpError } = require("../../helpers");

const updateAvatar = async (req, res, next) => {
  const user = req.user;
  const { path: tempUpload, originalname } = req.file;
  const filename = `${user._id}_${originalname}`;

  const avatarsDir = path.join(__dirname, "../../", "public", "avatars");
  const resultUpload = path.join(avatarsDir, filename);

  Jimp.read(tempUpload, (err, avatar) => {
    if (err) throw HttpError(400, `Can't read the avatar's file`);
    avatar.resize(250, 250).write(resultUpload);
  });
  // await fs.rename(tempUpload, resultUpload);
  const avatarURL = path.join("avatars", filename);

  const result = await User.findByIdAndUpdate(
    user._id,
    { avatarURL },
    { new: true }
  );
  res.json({
    avatarURL: result.avatarURL,
  });
};

module.exports = updateAvatar;
