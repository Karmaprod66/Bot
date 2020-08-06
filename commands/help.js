const { prefix } = require("./prefix.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
	name: "help",
	execute(message, args) {
		if (message.content === prefix + "help") {
			let embed = new MessageEmbed()
			.setColor("DARK_RED")
			.setThumbnail("https://skybot.fr/uploads/1594904373.png")
			.setAuthor("Commandes de KarBot")
			.setDescription("**Le support :** *Coming soon...*\n**Site officiel :** *Coming soon...*\n**Notre uTip :** [https://uTip.io/kspro](https://uTip.io/kspro)\nPour voir le prfix du bot il suffit de le mentionner.")
			.addField("Bot :", "`help`, `site`, `support`, `staff`, `serveurinfo`, `userinfo`, *Coming soon...*")
			.addField("Systèmes :", "*Coming soon...*")
			.addField("Modération :", "*Coming soon...*")
			.addField("Fun :", "*Coming soon...*")
			.addField("Outils :", "`avatar`, *Coming soon...*")
			.setFooter(prefix + "help | " + "Executé par " + message.author.username )
			message.channel.send(embed)
		}
	}
}