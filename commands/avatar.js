const { prefix } = require("./prefix.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
	name: "avatar",
	execute(message, args) {
		if (message.content === prefix + "avatar") {
			let embed = new MessageEmbed()
			.setColor("DARK_RED")
			.setAuthor("Voici votre avatar !")
			.setImage(message.author.displayAvatarURL()) 
			.setFooter(prefix + "avatar | " + "Executé par " + message.author.username )
			message.channel.send(embed)
		}
	}
}