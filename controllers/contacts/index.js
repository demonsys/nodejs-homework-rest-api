const { ctrlWrapper } = require('../../helpers');
const { addContact } = require('./addContact');
const { getContactById } = require('./getContactById');
const { listContacts } = require('./listContacts');
const { removeContact } = require('./removeContact');
const { updateContact } = require('./updateContact');
const { updateStatusContact } = require('./updateStatusContact');

module.exports = {
  listContacts: ctrlWrapper(listContacts),
  getContactById: ctrlWrapper(getContactById),
  addContact: ctrlWrapper(addContact),
  removeContact: ctrlWrapper(removeContact),
  updateContact: ctrlWrapper(updateContact),
  updateStatusContact: ctrlWrapper(updateStatusContact),
};
