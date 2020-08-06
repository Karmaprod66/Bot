const fs = require("fs")
const { Client, MessageEmbed, Collection } = require("discord.js");
const { prefix } = require("./commands/prefix.js");
const bot = new Client();

bot.commands = new Collection();

const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	bot.commands.set(command.name, command)
}

bot.on("ready" , function () {
	bot.user.setActivity("l'avenir" , { type: "LISTENING" })
	console.log("Je suis ON !")
});

bot.on("message" , message => {

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (!bot.commands.has(command)) return;
	bot.commands.get(command).execute(message, args);
});

bot.login(TOKEN);
