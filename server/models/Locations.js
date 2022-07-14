module.exports = (sequelize, type) => {
    return sequelize.define('Location', {
        location_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        location_name: type.STRING
    })
}
