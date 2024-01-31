const express = require("express");

//router object
const router = express.Router();

const { getContact, getContacts, createContact, updateContact, deleteContact } = require("../controllers/contactController")

//routes GET|POST|PUT:UPDATE|DELETE
router.route("/").get(getContacts).post(createContact);

router.route("/:id").get(getContact).put(updateContact);

router.route("/:id").delete(deleteContact);

module.exports = router;
