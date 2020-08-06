const { prefix } = require("./prefix.js");
const { MessageEmbed, guild} = require("discord.js");

function maDate(dateàTester) {
	let date = new Date(dateàTester)
	const jours = new Array("Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi")
	const mois = new Array("Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre")
	let message = jours[date.getDay()] + " ";
		message += date.getDate() + " ";
		message += mois[date.getMonth()] + " ";
		message += date.getFullYear() + " à ";
		message += date.getHours() + "h";
	let minutes = date.getMinutes();
	let sec = date.getSeconds()
	if(minutes < 10) {
	minutes = "0" + minutes;
	}
	if(sec < 10) {
	  sec = "0" + sec;
	}
	message += minutes + ' '
	message += sec + "s "
	return message
}

module.exports = {
	name: "serveurinfo",
	execute(message, args){
		if (message.content === prefix + "serveurinfo") {
			let serverinfoEmbed = new MessageEmbed()
			.setColor("DARK_RED")
			.setThumbnail(message.guild.iconURL())
			.setAuthor("Information sur le serveur")
			.addField("*Nom du serveur :*", message.guild.name)
			.addField("*Propriétaire :*", message.guild.owner)
			.addField("*Nombre de membres* :", message.guild.memberCount)
			.addField("*Crée le :*", maDate(message.guild.createdTimestamp))
			.setFooter(prefix + "serverinfo | " + "Executé par " + message.author.username )
			message.channel.send(serverinfoEmbed)
		}
	}
}