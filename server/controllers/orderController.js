const Order = require("../models/orderModel");
const mongoose = require("mongoose");
const Joi = require("joi");

//* ADD a new order
const post_order = async (req, res) => {
  const {
    fullname,
    phone,
    wilaya,
    address,
    product,
    size,
    quantity,
    price,
    deliveryPrice,
    total,
  } = req.body;

  //* Joi schema to validate incoming data from the frontend form
  const orderValidationSchema = Joi.object({
    fullname: Joi.string().min(3).max(50).required().messages({
      "string.min": "Fullname must be at least 3 characters long.",
      "string.max": "Fullname must be less than or equal to 50 characters.",
      "any.required": "Fullname is required.",
    }),
    phone: Joi.string()
      .pattern(/^\d{10}$/) //? Ensures 10 digits (already checks for digits)
      .length(10)
      .required()
      .messages({
        "string.pattern.base":
          "Phone number must contain only digits (0-9) and be 10 digits long.",
        "string.length": "Phone number must be 10 digits long.",
        "any.required": "Phone number is required.",
      }),
    wilaya: Joi.string()
      .required()
      .messages({ "any.required": "Wilaya is required." }),
    address: Joi.string()
      .max(255)
      .required()
      .messages({ "any.required": "Address is required." }),
    product: Joi.string()
      .required()
      .messages({ "any.required": "Product is required." }),
    size: Joi.number().integer().min(10).max(99).required().messages({
      "number.base": "Size must be a number.",
      "number.integer": "Size must be a whole number.", //? specific message for non-integer input
      "number.min": "Size must be a two-digit number (between 10 and 99).", //? Specific message for minimum value
      "number.max": "Size must be a two-digit number (between 10 and 99).", //? Specific message for exceeding maximum value
      "any.required": "Size is required.",
    }),

    quantity: Joi.number().min(1).required().messages({
      "number.min": "Quantity must be at least 1.",
      "any.required": "Quantity is required.",
    }),
    price: Joi.number()
      .positive()
      .required()
      .messages({ "any.required": "Price is required" }),
    deliveryPrice: Joi.number()
      .positive()
      .required()
      .messages({ "any.required": "Delivery Price is required" }),
    total: Joi.number()
      .positive()
      .required()
      .messages({ "any.required": "Total is required" }),
  });

  //* Validate request body using Joi schema
  const { error } = orderValidationSchema.validate(req.body);

  if (error) {
    //* Handle validation errors
    return res.status(400).json({
      message: "Validation errors:",
      errors: error.details.map((detail) => ({
        field: detail.path[0], //? Extract the field name from the error path
        message: detail.message, //? Use the customized message from Joi validation
      })),
    });
  }

  //* Create a New Order (after successful validation)
  try {
    const order = await Order.create({
      fullname,
      phone,
      wilaya,
      address,
      product,
      size,
      quantity,
      price,
      deliveryPrice,
      total,
    });

    console.log("New order created successfully:", order);
    return res.status(201).json({ data: order });
  } catch (error) {
    console.error("Error creating order:", error);
    return res.status(500).json({ message: "Internal server error" }); //? Generic error for security
  }
};

module.exports = {
  post_order,
};
