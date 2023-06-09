const { SlashCommandBuilder} = require("@discordjs/builders")
const { EmbedBuilder  } = require("discord.js")
const { QueryType } = require("discord-player")

module.exports = {
	data: new SlashCommandBuilder()
		.setName("play")
		.setDescription("YOUTUBE.")
		.addSubcommand(subcommand =>
			subcommand
				.setName("search")
				.setDescription("Busca por una canción")
				.addStringOption(option =>
					option.setName("searchterms").setDescription("Que quieres buscar").setRequired(true)
				)
		)
        .addSubcommand(subcommand =>
			subcommand
				.setName("playlist")
				.setDescription("Plays a playlist from YT")
				.addStringOption(option => option.setName("url").setDescription("url de playlist").setRequired(true))
		)
		.addSubcommand(subcommand =>
			subcommand
				.setName("song")
				.setDescription("Plays a single song from YT")
				.addStringOption(option => option.setName("url").setDescription("url de la cancion").setRequired(true))
		),
	execute: async ({ client, interaction }) => {
        // Make sure the user is inside a voice channel
		if (!interaction.member.voice.channel) return interaction.reply("Cacho nesesitas estar en un canal.");

        // Create a play queue for the server
		const queue = await client.player.createQueue(interaction.guild);

        // Wait until you are connected to the channel
		if (!queue.connection) await queue.connect(interaction.member.voice.channel)

		let embed = new EmbedBuilder()

		if (interaction.options.getSubcommand() === "song") {
            let url = interaction.options.getString("url")
            
            // Search for the song using the discord-player
            const result = await client.player.search(url, {
                requestedBy: interaction.user,
                searchEngine: QueryType.YOUTUBE_VIDEO
            })

            // finish if no tracks were found
            if (result.tracks.length === 0)
                return interaction.reply("No results")

            // Add the track to the queue
            const song = result.tracks[0]
            await queue.addTrack(song)
            embed
                .setDescription(`**[${song.title}](${song.url})** Se ha añadido a la cola`)
                .setThumbnail(song.thumbnail)
                .setFooter({ text: `Duración de la canción: ${song.duration}`})

		}
        else if (interaction.options.getSubcommand() === "playlist") {

            // Search for the playlist using the discord-player
            let url = interaction.options.getString("url")
            const result = await client.player.search(url, {
                requestedBy: interaction.user,
                searchEngine: QueryType.YOUTUBE_PLAYLIST
            })

            if (result.tracks.length === 0)
                return interaction.reply(`No hay playlist en  ${url}`)
            
            // Add the tracks to the queue
            const playlist = result.playlist
            await queue.addTracks(result.tracks)
            embed
                .setDescription(`**${result.tracks.length} Las canciones de [${playlist.title}](${playlist.url})** Se han agregado`)
                .setThumbnail(playlist.thumbnail)

		} 
        else if (interaction.options.getSubcommand() === "search") {

            // Search for the song using the discord-player
            let url = interaction.options.getString("searchterms")
            const result = await client.player.search(url, {
                requestedBy: interaction.user,
                searchEngine: QueryType.AUTO
            })

            // finish if no tracks were found
            if (result.tracks.length === 0)
                return interaction.editReply("No results")
            
            // Add the track to the queue
            const song = result.tracks[0]
            await queue.addTrack(song)
            embed
                .setDescription(`**[${song.title}](${song.url})** se ha añadido a la cola`)
                .setThumbnail(song.thumbnail)
                .setFooter({ text: `Duración: ${song.duration}`})
    .setThumbnail(song.thumbnail)
                .setFooter({ text: `Duración: ${song.duration}`})
    .setThumbnail(song.thumbnail)
                .setFooter({ text: `Duración: ${song.duration}`})
    .setThumbnail(song.thumbnail)
                .setFooter({ text: `Duración: ${song.duration}`})
    .setThumbnail(song.thumbnail)
                .setFooter({ text: `Duración: ${song.duration}`})
    .setThumbnail(song.thumbnail)
                .setFooter({ text: `Duración: ${song.duration}`})
    .setThumbnail(song.thumbnail)
                .setFooter({ text: `Duración: ${song.duration}`})
    .setThumbnail(song.thumbnail)
                .setFooter({ text: `Duración: ${song.duration}`})
		}

        // Play the song
        if (!queue.playing) await queue.play()
        
        // Respond with the embed containing information about the player
        await interaction.reply({
            embeds: [embed]
        })
	},
}
