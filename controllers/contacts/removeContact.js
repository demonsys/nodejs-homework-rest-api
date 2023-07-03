const { HttpError } = require('../../helpers');
const { Contact } = require('../../models/contact');

const removeContact = async (req, res) => {
  const id = req.params.contactId;
  const result = await Contact.findByIdAndDelete(id);
  if (!result) {
    throw HttpError(404, 'Not found');
  }
  res.json({ message: 'contact deleted' });
};

module.exports = {
  removeContact,
};
