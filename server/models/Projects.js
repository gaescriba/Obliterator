module.exports = (sequelize, type) => {
    return sequelize.define('Project', {
        project_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        project_name: type.STRING,
        project_price: type.INTEGER,
        project_url: type.STRING, 
        project_description: type.STRING
    })
}
