const Contact = require("../models/contactModel");

exports.submitContactForm = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    const contact = await Contact.create({
      name,
      email,
      message,
    });

    res.status(201).json({
      success: true,
      contact,
    });
  } catch (error) {
    console.error("Error in submitContactForm:", error);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
};
