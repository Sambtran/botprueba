const { SlashCommandBuilder } = require("@discordjs/builders")
const { EmbedBuilder  } = require("discord.js")
const { QueryType } = require("discord-player")
module.exports = {
	data: new SlashCommandBuilder()
        .setName("rambovoz")
        .setDescription("Cuenta un chiste"),
        
	execute: async ({ client, interaction }) => {
        const url = "https://youtu.be/FwbhktuB_MM"
        const queue = await client.player.createQueue(interaction.guild);
        const result = await client.player.search("https://youtu.be/FwbhktuB_MM", {
            requestedBy: interaction.user,
            searchEngine: QueryType.YOUTUBE_VIDEO
        })
        if (!queue.connection) await queue.connect(interaction.member.voice.channel)
        const song = result.tracks[0]
        await queue.addTrack(song)
        if (!queue.playing) await queue.play()
        await interaction.reply({
   
            embeds: [
                new EmbedBuilder ()
                .setDescription("voy")
            ]
        })
          },
}