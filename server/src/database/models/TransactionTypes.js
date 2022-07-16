module.exports = (sequelize, type) => {
  return sequelize.define('TransactionType', {
    type_id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    transaction_type: type.STRING
  })
}
