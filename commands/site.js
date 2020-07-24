const prefix = "k!"
const { MessageEmbed } = require("discord.js");

module.exports = {
	name: "site",
	execute(message, args) {
		if (message.content === prefix + "site") {
			let siteEmbed = new MessageEmbed()
			.setColor("DARK_RED")
			.setAuthor("Site officiel de Karma's Production")
			message.channel.send("Le site est actuellement en developpement...")
		}
	}
}
