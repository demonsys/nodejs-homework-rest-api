const express = require('express');
const ctrlContacts = require('../../controllers/contacts');
const { validateBody, isValidId } = require('../../middlewares');
const { schemas } = require('../../models/contact');

const router = express.Router();

router.get('/', ctrlContacts.listContacts);
router.get('/:contactId', isValidId, ctrlContacts.getContactById);
router.post('/', validateBody(schemas.addContactSchema), ctrlContacts.addContact);
router.delete('/:contactId', isValidId, ctrlContacts.removeContact);
router.put(
  '/:contactId',
  isValidId,
  validateBody(schemas.addContactSchema),
  ctrlContacts.updateContact
);
router.patch(
  '/:contactId/favorite',
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  ctrlContacts.updateStatusContact
);

module.exports = router;
