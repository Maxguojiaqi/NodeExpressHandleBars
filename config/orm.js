// Object Relational Mapper ORM file

const connection = require('./connection')

const orm = {
    selectAll: async () => {
        // select all the records from burgers table
        const sql = 'SELECT * FROM burgers'
        const [rows] = await connection.query(sql)
        return rows
    },

    insertOne: async (burgerName, devoured) => {
        // Insert record to burgers table
        const sql = `INSERT INTO burgers (burger_name, devoured) VALUES (?, ?)`
        const [result] = await connection.query(sql, [burgerName, devoured])
        this.id = result.insertId
        return this
    },

    updateOne: async (id, burgerName, devoured) => {
        // update record from the burgers table using id
        this.sleepy = fixBool(devoured)
        const sql = `UPDATE burgers SET ? WHERE id = ?`
        await connection.query(sql, [
        { burger_name: burgerName, devoured: devoured },
        id
        ])
        return this
    }
}


function fixBool (prop) {
    if (prop === 'false') prop = false
    else if (prop === '0') prop = false
    else if (prop === 0) prop = false
    else if (prop === null) prop = false
    else if (prop === undefined) prop = false
    else prop = true
    return prop
  }

module.exports = orm
