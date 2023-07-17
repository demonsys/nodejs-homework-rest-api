const { Contact } = require("../../models/contact");

const listContacts = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 10, favorite } = req.query;
  const skip = (page - 1) * limit;
  const filterParams = favorite === undefined ? { owner } : { owner, favorite };
  const result = await Contact.find(filterParams, "-updatedAt", {
    skip,
    limit,
  })
    .populate("owner")
    .populate("owner", "email subscription");
  res.json(result);
};
module.exports = {
  listContacts,
};
