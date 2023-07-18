const express = require("express");
const ctrlContacts = require("../../controllers/contacts");
const { validateBody, isValidId, authenticate } = require("../../middlewares");
const { schemas } = require("../../models/contact");

const router = express.Router();

router.get("/", authenticate, ctrlContacts.listContacts);
router.get("/:contactId", authenticate, isValidId, ctrlContacts.getContactById);
router.post(
  "/",
  authenticate,
  validateBody(schemas.addContactSchema),
  ctrlContacts.addContact
);
router.delete(
  "/:contactId",
  authenticate,
  isValidId,
  ctrlContacts.removeContact
);
router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(schemas.addContactSchema),
  ctrlContacts.updateContact
);
router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  ctrlContacts.updateStatusContact
);

module.exports = router;
