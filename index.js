const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, GatewayIntentBits, IntentsBitField } = require('discord.js');
const { token } = require('./config.json');

const myIntents = new IntentsBitField();
myIntents.add(IntentsBitField.Flags.Guilds, IntentsBitField.Flags.GuildMembers, IntentsBitField.Flags.DirectMessages);

const client = new Client({ intents: myIntents });

client.commands = new Collection();
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		if ('data' in command && 'execute' in command) {
			client.commands.set(command.data.name, command);
		} else {
			console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
		}
	}
}

const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

client.on('guildMemberAdd', member => {
    // Send a welcome message to the new member's direct messages
	member.send(`
	**Welcome to the server the RUN IT Server!** 🎉
	We're glad to have you here.
	
	*Make sure that your Discord name is identical to the name entered in the registration form.*
	
	**Make sure to read the rules at [Terms of Service Policies](https://runitreptileexpo.com/pages/terms-of-service-policies)!** 📜
	`);
	
});

client.login(token);