const prefix = "k!"
const { MessageEmbed } = require("discord.js");

module.exports = {
	name: "prefix",
	execute(message, args) {
		if (message.content === prefix + "prefix") {
			let prefixEmbed = new MessageEmbed()
			.setColor("DARK_RED")
			.setAuthor("Prefix actuel de KarBot") 
			.addField("Voici le prefix actuel défini de Karbot", "Prefix : `" + prefix + "`") 
			.setFooter(prefix + "prefix | Executé par " + message.author.username )
			message.channel.send( prefixEmbed )
		}
	}
}
