const { Client, MessageEmbed } = require("discord.js");
const bot = new Client();

let prefix = "k!"

bot.on("ready" , function () {
	bot.user.setActivity("Le silence.." , { type: "LISTENING" })
});

//Commande test
bot.on("message" , message => {
	if (message.author.id === 393747608176164875 & message.content === prefix + "test") {
		message.channel.send("Je suis la !!")
	}
});

//commande bot 
bot.on("message" , message => {
	//commande help
	if (message.content === prefix + "help") {
		let embed = new MessageEmbed()
		.setColor("DARK_RED")
		.setThumbnail("https://skybot.fr/uploads/1594904373.png")
		.setAuthor("Commandes de KarBot")
		.setDescription("**Le support :** *Coming soon...*\n**Site officiel :** *Coming soon...*\n**Notre uTip :** [https://uTip.io/kspro](https://uTip.io/kspro)")
		.addField("Bot :", "`help`, `site`, `support`, `staff`, Coming soon...")
		.addField("Systèmes :", "Coming soon...")
		.addField("Modération :", "Coming soon...")
		.addField("Fun :", "Coming soon...")
		.addField("Outils :", "Coming soon...")
		.setFooter(prefix + "help | " + "Executé par " + message.author.username )
		message.channel.send(embed)
	}	
        //commande Site
	if (message.content === prefix + "site") {
		let siteEmbed = new MessageEmbed()
		.setColor("DARK_RED")
		.setAuthor("Site officiel de Karma's Production")
	    	message.channel.send("Le site est actuellement en developpement...")
	}
	//commande support
	if (message.content === prefix + "support") {
		let supportEmbed = new MessageEmbed()
		.setColor("DARK_RED")
		.setAuthor("Le serveur Support de KarBot")
		.setDescription("*Le serveur support n'est, pour le moment, pas encore fait ou terminer mais sera accesible tres bientot.*")
		.setFooter(prefix + "support | Executé par " + message.author.username )
	    	message.channel.send( supportEmbed )
	}
	//commande staff
	if (message.content === prefix + "staff") {
		let staffEmbed = new MessageEmbed()
		.setColor("DARK_RED")
		.setAuthor("Merci à vous !")
		.addField("Énorme remerciement au Staff :", "- Aucun pour le moment TwT")
		.setFooter("Vous etes les meilleurs ! ❤")
	    	message.channel.send( staffEmbed )
	}
        //commande prefix
        if (message.content === prefix + "prefix") {
		let prefixEmbed = new MessageEmbed()
		.setColor("DARK_RED")
		.setAuthor("Prefix actuel de KarBot") 
		.addField("Voici le prefix actuel défini de Karbot", "Prefix : " + prefix) 
		.setFooter(prefix + "prefix | Executé par " + message.author.username )
            	message.channel.send( prefixEmbed )
        }
});

bot.login(process.env.TOKEN);
