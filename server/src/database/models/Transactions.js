module.exports = (sequelize, type) => {
  return sequelize.define('Transaction', {
    transaction_id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    transaction_date: type.DATE,
    transaction_amount: type.INTEGER
  })
}
