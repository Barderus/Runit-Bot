const { SlashCommandBuilder } = require('discord.js');
const generateUniqueId = require('generate-unique-id');
const Bids = require("../../itemsDB.js");


const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth() + 1;
const currentDay = currentDate.getDate();

console.log(`Current date: ${currentMonth}-${currentDay}-${currentYear}`);
module.exports = {
    data: new SlashCommandBuilder()
        .setName("auction-item")
        .setDescription("Add auction item to the database!")
        .addStringOption(option =>
            option
                .setName('item-name')
                .setDescription('The name of the item.')
                .setRequired(true))
        .addMentionableOption(option =>
            option
                .setName('bidder-name')
                .setDescription('The name of the winner bidder.')
                .setRequired(true))
        .addIntegerOption(option =>
            option
                .setName('quantity')
                .setDescription('The quantity of the item.')
                .setRequired(true))
        .addNumberOption(option =>
            option
                .setName('final-bid')
                .setDescription('The price of the item.')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('category')
                .setDescription('The gif category')
                .setRequired(true)
                .addChoices(
                    { name: 'Dry good', value: 'Dry good' },
                    { name: 'Live animal', value: 'Live animal' },
                        )),
            

    async execute(interaction) {
        try {
            const id = generateUniqueId({
                length: 8,
                useLetters: false
              });

            const name = interaction.options.getString('item-name');
            const mentionedName = interaction.options.getMentionable('bidder-name');
            const bidderName = mentionedName.user.displayName;
            const quantity = interaction.options.getInteger('quantity');
            const finalBid = interaction.options.getNumber('final-bid');
            const totalCost = quantity * finalBid;
            const categoryType = interaction.options.getString('category')
            const itemDate = `${currentMonth}-${currentDay}-${currentYear}`;

            const newBid = await Bids.create({
                id: id,
                itemName: name,
                bidderName: bidderName,
                quantity: quantity,
                finalBid: finalBid,
                totalCost: totalCost,
                category: categoryType,
                date: itemDate

            });
            
            console.log('New bid:', newBid);
            
            await interaction.deferReply();
            await interaction.editReply({ content: `${newBid.bidderName} purchased ${newBid.quantity} ${newBid.itemName} for $${newBid.totalCost}. `});
        } catch (error) {
            // If there was an error, send an error message
            console.log("Error saving item: ", error)
            await interaction.reply({ content: 'An error occurred while adding the item to the database.', ephemeral: true });
        }
    },  
};