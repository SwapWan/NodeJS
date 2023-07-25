const db = require('./db')

const Cliente = db.sequelize.define('clientes',{
    nome: {
        type:db.Sequelize.STRING
    },
    endereco: {
        type:db.Sequelize.STRING
    }
})

module.exports = Cliente

//Cliente.sync({force:true})