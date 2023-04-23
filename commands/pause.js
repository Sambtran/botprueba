const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {
	data: new SlashCommandBuilder()
        .setName("pausa")
        .setDescription("Pausa la cancion"),
	execute: async ({ client, interaction }) => {
        // Get the queue for the server
		const queue = client.player.getQueue(interaction.guildId)

        // Check if the queue is empty
		if (!queue)
		{
			await interaction.reply("No hay canciones en la cola")
			return;
		}

        // Pause the current song
		queue.setPaused(true);

        await interaction.reply("Cancion pausada.")
	},
}
