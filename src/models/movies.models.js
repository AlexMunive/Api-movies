const { DataTypes } = require('sequelize')

const db= require('../utils/database')

const Movies = db.define('movies',{
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false,   //* not null
    },
    name: {
        type: DataTypes.STRING,  //* varchar
        allowNull: false,

    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    releaseDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        field: 'release_date'
    }
})


module.exports = Movies
