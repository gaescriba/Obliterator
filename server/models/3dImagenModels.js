module.exports = (sequelize, type) => {
    return sequelize.define('3dModel', {
        imagen_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
       
        image_url: type.STRING,
        
    })
}
