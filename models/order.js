const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;

var productCartSchema = new mongoose.Schema({
    product: {
        type: ObjectId,
        ref: "Product"
    },
    name: String,
    count: Number,
    price: Number
})

Const ProductCart = mongoose.model("ProductCart", productCartSchema)

var OrderSchema = new mongoose.Schema(
    {
      products: [productCartSchema],
      transaction_id: {},
      amount: { type: Number},
      address: String,
      updated: Date,
      user: {
          type: ObjectId,
          ref: "User"
      }
    },
    { timestamps: true}
);

const Order = mongoose.model("Order", OrderSchema)

module.exports = { Order, ProductCart };