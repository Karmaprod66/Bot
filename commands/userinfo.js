const prefix = "k!";
const { MessageEmbed } = require("discord.js");

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
	name: "userinfo",
	execute(message, args){
		if (message.content === prefix + "userinfo") {
			let userinfoEmbed = new MessageEmbed()
			.setColor("DARK_RED")
			.setThumbnail(message.author.displayAvatarURL())
			.setAuthor("Voici votre carte d'identité !")
			.addField("Utilisateur :", message.author.tag + "\nID : " + message.author.id )
			.addField("Pseudo :", message.member.nickname)
			.addField("Status :", message.author.presence.status)
			.addField("Date de création du compte :", maDate(message.author.createdTimestamp))
			.addField("Date d'arriver sur le serveur :", maDate(message.member.joinedTimestamp))
			.setFooter(prefix + "userinfo | " + "Executé par " + message.author.username )
			message.channel.send(userinfoEmbed)
		}
	}
}