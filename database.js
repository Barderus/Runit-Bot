const Sequelize = require("sequelize")

const sequelize = new Sequelize("database", "user", "password", {
    dialect: "sqlite",
    host: "localhost",

    storage: "database/database.sqlite",
    logging: false
});

module.exports = sequelize;







































//const Keyv = require('keyv');
//const dbItem = new Keyv('sqlite://database/db2.sqlite');
//module.exports = dbItem;
/* // Function to save auction item to the database
 async function saveAuctionItem(item) {
    try {
        // Construct an object with keys corresponding to column names
        const auctionItemData = {
            'ID': item.id,
            'Item Name': item.name,
            'Bidder Name': item.bidderName,
            'Quantity': item.quantity,
            'Final Bid': item.finalBid,
            'Total Cost': item.totalCost,
            'Date': item.itemDate
        };

        // Save the item data to the database
        await dbItem.set(item.id.toString(), auctionItemData);

        return item.id; // Return the ID of the inserted item
    } catch (error) {
        throw new Error('Error saving auction item to the database: ' + error);
    }
}  */
/*
 module.exports = {
    set: saveAuctionItem
}; 
*/