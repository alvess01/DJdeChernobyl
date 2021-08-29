module.exports = (client, message, query) => {
    message.channel.send(`${client.emotes.error} - Não achei isso no YouTube ${query} !`);
};