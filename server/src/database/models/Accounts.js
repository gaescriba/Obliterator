module.exports = (sequelize, type) => {
  return sequelize.define('Account', {
    account_id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    account_name: type.STRING,
    account_password: type.INTEGER,
    account_email: type.STRING,
    is_artist: type.INTEGER
  })
}
