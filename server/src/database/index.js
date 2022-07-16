import { Sequelize } from 'sequelize'

const DB_DIALECT = process.env.DB_DIALECT
const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
const DB_HOST = process.env.DB_HOST
const DB_PORT = process.env.DB_PORT
const DB_NAME = process.env.DB_NAME

// const LocationModel = require('./models/Locations')
// const PolygonModel = require('./models/Polygons')
// const PaymentMethodModel = require('./models/PaymentMethods')
// const TransactionTypeModel = require('./models/TransactionTypes')
// const UserModel = require('./models/Users')
// const TransactionModel = require('./models/Transactions')
// const d3ModelModel = require('./models/3dModels')
// const ProjectModel = require('./models/Projects')
// const AccountModel = require('./models/Accounts')
// const d3ImagenModel = require('./models/3dImagenModels')

let sequelize

const dbConnection = async () => {
  return {
    connect: () => {
      if (!sequelize) {
        sequelize = new Sequelize(
          `${DB_DIALECT}://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`
        )
        console.log('Mysql connection established.')
      }

      return sequelize
    },
    disconnect: () => {
      console.log('Postgres connection closed.')

      return sequelize?.close()
    }
  }
}

// const Location = LocationModel(sequelize, Sequelize)
// const Polygon = PolygonModel(sequelize, Sequelize)
// const PaymentMethod = PaymentMethodModel(sequelize, Sequelize)
// const TransactionType = TransactionTypeModel(sequelize, Sequelize)
// const User = UserModel(sequelize, Sequelize)
// const Transaction = TransactionModel(sequelize, Sequelize)
// const d3Model = d3ModelModel(sequelize, Sequelize)
// const Project = ProjectModel(sequelize, Sequelize)
// const Account = AccountModel(sequelize, Sequelize)
// const d3Imagen = d3ImagenModel(sequelize, Sequelize)
// sequelize.sync({ force: false })
//     .then(() => console.log('Tablas actualizadas'))

// Account.hasOne(User)
// d3Imagen.hasOne(d3Model)
// Location.hasMany(User)
// PaymentMethod.hasOne(Transaction)
// TransactionType.hasOne(Transaction)
// Polygon.hasOne(d3Model)
// User.belongsToMany(Project, {through: 'Projects_has_User'})
// Project.belongsToMany(d3Model, {through: 'Projects_has_3dModels'})
// User.belongsToMany(Transaction, {through: 'Transactions_has_User'})

export { sequelize, dbConnection }
