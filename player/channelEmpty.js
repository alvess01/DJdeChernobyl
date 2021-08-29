module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - Eu estava sozinho na call e me desconectei. Não sou obrigado a ficar lá sozinho.`);
};