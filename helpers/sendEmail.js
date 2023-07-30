const sgMail = require("@sendgrid/mail");
const { SENDGRID_API_KEY } = process.env;
sgMail.setApiKey(SENDGRID_API_KEY);

// const msg = {
//   to: "kukol@ukr.net",
//   from: "dmytro_kukol@meta.ua",
//   subject: "My test",
//   html: "<strong>and easy to do anywhere, even with Node.js</strong>",
// };
const sendEmail = async (data) => {
  const email = { ...data, from: "dmytro_kukol@meta.ua" };
  await sgMail.send(email);
  return true;
};

module.exports = sendEmail;
