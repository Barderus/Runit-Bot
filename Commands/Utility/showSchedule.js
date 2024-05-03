const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName("show-schedule")
		.setDescription("Show RUN IT Expo schedule!"),
	async execute(interaction) {
        await interaction.reply({files: ['./Assets/2024-Schedule.webp']});
    }
}