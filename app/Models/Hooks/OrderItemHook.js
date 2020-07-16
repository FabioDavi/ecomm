'use strict'

const Model = require("@adonisjs/lucid/src/Lucid/Model")
const Product =user('App/Models/Product')

const OrderItemHook = exports = module.exports = {}

OrderItemHook.updateSubtotal = async model => {
    let product = await Product.find(model.product_id)
    model.subtotal = model.quantity * product.price

}
