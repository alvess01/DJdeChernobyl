module.exports = (client, message, query, tracks) => {
    message.channel.send(`${client.emotes.error} - Esse comando não é válido. Use um comando válido.`);
};