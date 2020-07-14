'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {
    image(){
        return this.belongsTo('App/Models/Image')
    }
    ///relacionamento entre produto e imagens
    //galeria imagnes do produto
    images(){
        return this.belongsToMany('App/Models/Image')
    }

    //relacionamento entre produtos e categorias
    categories(){
        return this.belongsToMany('App/Models/Category')
    }

    //relacionamento entre produtos e cupons de desconto
    coupons(){
        return this.belongsToMany('App/Models/Coupon')
    }
}

module.exports = Product
