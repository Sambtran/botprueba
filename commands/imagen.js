const { SlashCommandBuilder } = require("@discordjs/builders")
const { EmbedBuilder  } = require("discord.js")
var imagenes = ["https://media.tenor.com/Yg2_pPHemJMAAAAC/carl-carl-wheezer.gif","https://media.discordapp.net/attachments/538071533470351363/1021166921195986995/serpies22.gif"
,"https://media.discordapp.net/attachments/538071533470351363/991325030870958170/miguelestudioso.png.gif","https://media.discordapp.net/attachments/538071533470351363/1037362462380527707/unknown.png?width=395&height=702"];
module.exports = {
	data: new SlashCommandBuilder()
        .setName("meme")
        .setDescription("meme"),
	execute: async ({ client, interaction }) => {
        do{
        var rand = Math.round(Math.random()*imagenes.length)-1
        }while(rand<0)
        await interaction.reply({
            embeds: [
                new EmbedBuilder ()
                    .setTitle("Para ti guapo")
                    .setImage(imagenes[rand])
                    
            ]
        })
	},
}