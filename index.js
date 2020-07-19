const { Client, MessageEmbed } = require("discord.js");
const bot = new Client();

let prefix = "k!"

bot.on("ready" , function () {
	bot.user.setActivity("Le serveur" , { type: "WATCHING" })
	console.log("Je suis pret !")
});

//Commande test
bot.on("message" , message => {
	if (message.content === prefix + "test") {
		message.channel.send("Je suis la !!")
		console.log("tester")
	}
});

//commande bot 
bot.on("message" , message => {
	//commande help
	if (message.content === prefix + "help") {
		let embed = new MessageEmbed()
		.setColor( 195, 4, 4 )
		.setThumbnail("https://skybot.fr/uploads/1594904373.png")
		.setAuthor("Commandes de KarBot")
		.setDescription("**__Voici toutes mes commandes !__**\n\n**Bot :**\n`help`, Coming soon...\n\n**Outils :**\nComing soon...\n\n**Systèmes :**\nComing soon...\n\n**Fun :**\nComing soon...\n\n**Modération :**\nComing soon...\n\n**Soutenez le projet sur uTip :**\n[https://uTip.io/kspro](https://uTip.io/kspro)\n**Un probleme ? Voila le support :**\nComing soon...\n**Site officiel :**\nComing soon...")
		.setFooter(prefix + "help | " + "Executé par " + message.author.username )
		message.channel.send(embed)
	}
});

bot.login(process.env.TOKEN);
