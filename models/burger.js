// bring in the database connection file
// const connection = require('../config/connection')
const orm = require('../config/orm')


const burger = {
    
    findAllBurger: async () => await orm.selectAll(),

    insertNewBurger: async (burgerName, devoured) => await orm.insertOne(burgerName, devoured),

    updateBurger: async (burgerID, devoured) => await orm.updateOne(burgerID, devoured)
}

module.exports = burger