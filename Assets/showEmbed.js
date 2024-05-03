const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const buttonPagination = require("../../buttonPagination.js");
const auctionItem = require('../../AuctionItem.js'); // Import the AuctionItem class

module.exports = {
    data: new SlashCommandBuilder()
        .setName("show-embed")
        .setDescription("Send an embed"),
    async execute(interaction) {
        try {
            // Fetch all auction items (you need to implement this method)
            const allItems = auctionItem.getAllItems(); 

            console.log("Show-Embed items: ")
            console.log(allItems)

            if (!allItems || allItems.length === 0) {
                await interaction.reply({ content: "No auction items found.", ephemeral: true });
                return;
            }

            // Create embeds for each auction item
            const embeds = allItems.map(item => {
                return new EmbedBuilder()
                    .setTitle("Auction Item Details")
                    .setDescription(`Item ID: ${item.id}\nItem Name: ${item.name}\nWinner Bidder: ${item.bidderName}\nQuantity: ${item.quantity}\nFinal Bid: $${item.finalBid}\nTotal Cost: $${item.totalCost}\nDate: ${item.bidDate}`)
                    .setColor("#0099ff");
            });
            console.log(`${item.name}`)
            // Add button pagination pages
            for (let i = 0; i < 4; i++) {
                embeds.push(new EmbedBuilder().setDescription(`This is page ${i + 1}`));
            }

            // Send button pagination with embeds
            await buttonPagination(interaction, embeds);
        } catch (err) {
            console.log(err);
            await interaction.reply({ content: "An error occurred. Please try again later.", ephemeral: true });
        }
    },
};
