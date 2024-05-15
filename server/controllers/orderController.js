const Order = require("../models/orderModel");
const mongoose = require("mongoose");

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

  const emptyFields = [];

  if (!fullname) emptyFields.push("fullname");
  if (!phone) emptyFields.push("phone");
  if (!wilaya) emptyFields.push("wilaya");
  if (!address) emptyFields.push("address");
  if (!product) emptyFields.push("product");
  if (!size) emptyFields.push("size");
  if (!quantity) emptyFields.push("quantity");
  if (!price) emptyFields.push("price");

  if (emptyFields.length > 0) {
    return res.status(400).json({
      error: "Please fill in all required fields",
      missingFields: emptyFields,
    });
  }

  try {
    //* Create a new order
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
    return res.status(200).json({ data: order });
  } catch (error) {
    console.error("Error creating order:", error);
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  post_order,
};
