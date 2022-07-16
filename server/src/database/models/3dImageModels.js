module.exports = (sequelize, type) => {
  return sequelize.define('3dImageModel', {
    image_id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    image_url: type.STRING
  })
}
