const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    fullname: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 50,
    },
    phone: {
      type: String,
      required: true,
      validate: {
        validator: (value) => /^\d{10}$/.test(value), //? Ensures 10 digits
        message: (props) =>
          `${props.value} is not a valid phone number (10 digits only).`,
      },
    },
    wilaya: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
      maxlength: 255,
    },
    product: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      default: 1,
    },
    price: {
      type: Number,
      required: true,
    },
    deliveryPrice: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: "pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
