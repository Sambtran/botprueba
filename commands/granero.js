const { SlashCommandBuilder } = require("@discordjs/builders")
const { EmbedBuilder  } = require("discord.js")
var frases = ["Estaba en un granero","No siento las piernas","Eran todo charlies!","Chao pescao","HOLAA"];
var fotosrambo = [
    "https://elcomercio.pe/resizer/rq9ph8Sfh3ftJTHzsbWtYEf7SmQ=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/SSHTW6CRSJBAZO5V4YZOADKVPU.jpg",
    "https://media.gq.com.mx/photos/5ebd88d88f9c683ef7a485de/1:1/w_746,h_746,c_limit/rambo.jpg",
    "https://imagenes.elpais.com/resizer/LLVdIaHNtvEpx5A4zx2Ymdsn4Sc=/1960x1470/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/XI32H7H3OVWTOPALYRD7TBYK7E.jpg",
]
module.exports = {
	data: new SlashCommandBuilder()
        .setName("rambo")
        .setDescription("Cuenta un chiste"),

	execute: async ({ client, interaction }) => {
        do{
            var rand1 = Math.round(Math.random()*frases.length)-1
            }while(rand1<0)
        do{
            var rand2 = Math.round(Math.random()*fotosrambo.length)-1
            }while(rand2<0)
        await interaction.reply({
            embeds: [
                new EmbedBuilder ()
                    .setTitle(frases[rand1])
                    .setImage(fotosrambo[rand2])
         
            ]
        })
	},
}