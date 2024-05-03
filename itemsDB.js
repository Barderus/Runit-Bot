const Sequelize = require("sequelize")
const sequelize = require("./database.js")

const Bids = sequelize.define("bidsItem", {
    id: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    itemName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    bidderName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    finalBid: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    totalCost: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false
    },
    date: {
        type: Sequelize.STRING,
        allowNull: false
    },
});

module.exports = Bids;