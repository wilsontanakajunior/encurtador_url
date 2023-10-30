const Sequelize = require('sequelize');
const database = require('../db/db');

const Url = database.define('url', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    urlNormal: {
        type: Sequelize.STRING,
        allowNull: false
    },
    urlEncurtada: {
        type: Sequelize.STRING,
        allowNull: false
    },
    createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
    },
})

module.exports = Url;