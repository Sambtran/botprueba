const { SlashCommandBuilder } = require("@discordjs/builders")
const { EmbedBuilder  } = require("discord.js")
var chistes = ["Si pusieramos mosquiteras en africa salvariamos a muchos mosquitos de pillar sida","Mario llegando a la hora","Paleto ha trabajado","Fleta ha salido de casa","Estaba en un granero"];
module.exports = {
	data: new SlashCommandBuilder()
        .setName("chiste")
        .setDescription("Cuenta un chiste"),

	execute: async ({ client, interaction }) => {
        do{
        var rand = Math.round(Math.random()*chistes.length)-1
        }while(rand<0)
        
        await interaction.reply({
            embeds: [
                new EmbedBuilder ()
                    .setDescription(chistes[rand])
                    
            ]
        })
	},
}