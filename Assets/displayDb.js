/* const { SlashCommandBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder} = require('discord.js');
const paginationEmbed = require('discordjs-button-pagination'); // Import paginationEmbed


module.exports = {
    data: new SlashCommandBuilder()
        .setName('paginated')
        .setDescription('Display paginated embeds with buttons.'),

    async execute(interaction) {
        const embed1 = new EmbedBuilder()
            .setTitle('First Page')
            .setDescription('This is the first page');

        const embed2 = new EmbedBuilder()
            .setTitle('Second Page')
            .setDescription('This is the second page');

        const previousButton = new ButtonBuilder()
            .setCustomId('previousbtn')
            .setLabel('Previous')
            .setStyle(ButtonStyle.Danger);

        const nextButton = new ButtonBuilder()
            .setCustomId('nextbtn')
            .setLabel('Next')
            .setStyle(ButtonStyle.Success);

        const buttonRow = new ActionRowBuilder()
            .addComponents(previousButton, nextButton);

        
        const pages = [embed1, embed2]; // Added
        const buttons = [previousButton, nextButton] // Added
        const time = 1000 * 3600; // Added

        //interaction.reply({ embeds: [embed1], components: [buttonRow] });
        paginationEmbed(interaction, pages, buttons, time)
    }
};
 */