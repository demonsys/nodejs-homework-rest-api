const { HttpError } = require('../../helpers');
const { Contact } = require('../../models/contact');

const updateContact = async (req, res) => {
  const id = req.params.contactId;
  const result = await Contact.findByIdAndUpdate({ _id: id }, req.body, { new: true });
  if (!result) {
    throw HttpError(404, 'Not found');
  }
  res.json(result);
};

module.exports = {
  updateContact,
};
