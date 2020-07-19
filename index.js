const { Client, MessageEmbed } = require("discord.js");
const bot = new Client();

let prefix = "k!"

bot.on("ready" , function () {
	bot.user.setActivity("Se repose apres une dure journée" , { type: "CUSTOM_STATUS" })
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
		.setDescription("**__Voici toutes mes commandes !__**\n\n**Bot :**\n`help`, `site`, `support`, `betatesteur`, `prefix`, Coming soon...\n\n**Systemes :**\nComing soon...\n\n**Modération :**\nComing soon...\n\n**Fun :**\nComing soon...\n\n**Outils :**\nComing soon...\n\n**Soutenez le projet sur uTip :**\n[https://uTip.io/kspro](https://uTip.io/kspro)\n**Un probleme ? Voila le support :**\nComing soon...\n**Site officiel :**\nComing soon...")
		.setFooter(prefix + "help | " + "Executé par " + message.author.username )
		message.channel.send(embed)
	}	
        //commande Site
	if (message.content === prefix + "site") {
	    message.channel.send("Le site est actuellement en developpement...")
	}
	//commande support
	if (message.content === prefix + "support") {
	    message.channel.send("*Le serveur support n'est, pour le moment, pas encore fait ou terminer mais sera accesible tres bientot.*")
	}
	//commande betatesteur
	if (message.content === prefix + "betatesteur") {
	    message.channel.send("**Énorme remerciement aux betatesteur :**\n- Aucun pour le moment TwT")
	}
        //commande prefix
        if (message.content === prefix + "prefix") {
            message.channel.send("Mon prefix actuel est : " + prefix)
        }
});

bot.login(process.env.TOKEN);
