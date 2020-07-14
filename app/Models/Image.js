'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Image extends Model {


    static get computed(){
        return ['url']
    }

    //estranho mas é assim mesmo... o getUrl abaixo precisa ter o mesmo nome na linha 10 .
    getUrl({path}){
        return `${Env.get('APP_URL')}/images/${path}`
    }
}

module.exports = Image
