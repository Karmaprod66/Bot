const { prefix } = require("./prefix.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
	name: "support",
	execute(message, args) {
		if (message.content === prefix + "support") {
			let supportEmbed = new MessageEmbed()
			.setColor("DARK_RED")
			.setAuthor("Le serveur support de KarBot")
			.setDescription("*Le serveur support n'est pas encore accecible pour le moment*")
			.setFooter(prefix + "support | Executé par " + message.author.username )
			message.channel.send( supportEmbed )
		}
	}
}
