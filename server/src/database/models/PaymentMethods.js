module.exports = (sequelize, type) => {
    return sequelize.define('PaymentMethod', {
        method_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        method_name: type.STRING
    })
}
