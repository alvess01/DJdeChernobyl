module.exports = (client, message, queue, playlist) => {
    message.channel.send(`${client.emotes.music} - ${playlist.title} já está na playlist (**${playlist.tracks.length}** músicas) !`);
};