const { SlashCommandBuilder, StringSelectMenuBuilder, ActionRowBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('send-rules')
        .setDescription('Send rules to the chat that anyone can see.'),

    async execute(interaction) {
        // Create select menu for rule selection
        const selectMenu = new StringSelectMenuBuilder()
            .setCustomId('select_rules')
            .setPlaceholder('Select rules category')
            .addOptions([
                {
                    label: 'General Rules',
                    description: 'View general rules',
                    value: 'general_rules'
                },
                {
                    label: 'Shipping Rules',
                    description: 'View shipping rules',
                    value: 'shipping_rules'
                }
            ]);

        const row = new ActionRowBuilder()
            .addComponents(selectMenu);

        await interaction.reply({ content: 'Please select a rules category:', components: [row] });
    },
};
    