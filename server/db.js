const Sequelize = require('sequelize')

const LocationModel = require('./models/Locations')
const PolygonModel = require('./models/Polygons')
const PaymentMethodModel = require('./models/PaymentMethods')
const TransactionTypeModel = require('./models/TransactionTypes')
const UserModel = require('./models/Users')
const TransactionModel = require('./models/Transactions')
const d3ModelModel = require('./models/3dModels')
const ProjectModel = require('./models/Projects')
const AccountModel = require('./models/Accounts')

const sequelize = new Sequelize("obliteratorDb", "root", "root", {
    host: "localhost",
    dialect: "mysql"
})

const Location = LocationModel(sequelize, Sequelize)
const Polygon = PolygonModel(sequelize, Sequelize)
const PaymentMethod = PaymentMethodModel(sequelize, Sequelize)
const TransactionType = TransactionTypeModel(sequelize, Sequelize)
const User = UserModel(sequelize, Sequelize)
const Transaction = TransactionModel(sequelize, Sequelize)
const d3Model = d3ModelModel(sequelize, Sequelize)
const Project = ProjectModel(sequelize, Sequelize)
const Account = AccountModel(sequelize, Sequelize)

sequelize.sync({force: false})
    .then(() => console.log('Tablas actualizadas')) 

Account.hasOne(User)
Location.hasMany(User)
PaymentMethod.hasOne(Transaction)
TransactionType.hasOne(Transaction)
Polygon.hasOne(d3Model)
User.belongsToMany(Project, {through: 'Projects_has_User'})
Project.belongsToMany(d3Model, {through: 'Projects_has_3dModels'})
User.belongsToMany(Transaction, {through: 'Transactions_has_User'})

module.exports = {
    Location,
    Polygon,
    PaymentMethod,
    TransactionType,
    User,
    Transaction,
    d3Model,
    Project,
    Account
}
