// Define a global array to store all auction items
let auctionItems = [];

module.exports = class bidItem {
    constructor(id = "", name = "", bidderName = "", quantity = 0, finalBid = 0.0, totalCost = 0.0, bidCategory = " ", bidDate = "") {
        this.id = id;
        this.name = name;
        this.bidderName = bidderName;
        this.quantity = quantity;
        this.finalBid = finalBid;
        this.totalCost = totalCost;
        this.bidCategory = bidCategory
        this.bidDate = bidDate;

        // Add the created bidItem instance to the array
        auctionItems.push(this);
    }

    // Define a static method to retrieve all auction items
    static getAllItems() {
        console.log("Auction items: ")
        console.log(auctionItems)
        return auctionItems;
    }
};
