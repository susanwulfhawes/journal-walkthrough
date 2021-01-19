//const { DataTypes } = require("sequelize/types");
//const sequelize = require("../db");

module.exports = (sequelize, DataTypes) => {
    const Journal = sequelize.define('journal', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date: {
            type: DataTypes.STRING,
            allowNull: false
        },
        entry: {
            type: DataTypes.STRING,
            allowNull: false
        },
        owner: {
            type: DataTypes.INTEGER
        }
    })
    return Journal;
};
