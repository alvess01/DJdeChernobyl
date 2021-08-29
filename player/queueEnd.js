module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - A música parou por não ter mais nada na playlist.`);
};