module.exports = (sequelize, type) => {
    return sequelize.define('Polygon', {
        polygons_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        polygons_quantity: type.INTEGER,
        polygons_type: type.STRING
    })
}
