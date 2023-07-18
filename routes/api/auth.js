const express = require("express");

const { validateBody, authenticate } = require("../../middlewares");
const { schemas } = require("../../models/user");
const ctrlUsers = require("../../controllers/auth");

const router = express.Router();

router.post(
  "/register",
  validateBody(schemas.registerSchema),
  ctrlUsers.register
);

router.post("/login", validateBody(schemas.loginSchema), ctrlUsers.login);

router.post("/logout", authenticate, ctrlUsers.logout);

router.get("/current", authenticate, ctrlUsers.getCurrent);

router.patch(
  "/",
  authenticate,
  validateBody(schemas.updateSubscriptionSchema),
  ctrlUsers.updateSubscription
);

module.exports = router;
