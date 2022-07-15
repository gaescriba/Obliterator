module.exports = (sequelize, type) => {
    return sequelize.define('3dModel', {
        model_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        model_name: type.STRING,
        
        image_url: type.STRING,
        price: type.INTEGER
    })
}
