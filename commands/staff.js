const prefix = "k!"
const { MessageEmbed } = require("discord.js");

module.exports = {
	name: "staff",
	execute(message, args) {
		if (message.content === prefix + "staff") {
			let staffEmbed = new MessageEmbed()
			.setColor("DARK_RED")
			.setAuthor("Merci à vous !")
			.addField("Énorme remerciement au Staff :", "- Kurøkii 🌈\n- Kiwi 🃏\n- Choupette 🦇")
			.setFooter("Vous etes les meilleurs ! ❤")
			message.channel.send( staffEmbed )
		}
	}
}
		
