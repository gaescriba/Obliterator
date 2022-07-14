module.exports = (sequelize, type) => {
    return sequelize.define('User', {
        user_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_name: type.STRING,
        user_description: type.STRING,
        img_url: type.STRING 
    })
}
