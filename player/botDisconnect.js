module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - O ambiente estava muito tóxico e eu resolvi me desconectar. Se precisar me chama.`);
};