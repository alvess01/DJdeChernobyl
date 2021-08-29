module.exports = {
    name: 'Limparfila',
    aliases: ['lf'],
    category: 'Música',
    utilisation: '{prefix}limparfila',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Entre em um canal de voz.`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Vocês não estão no mesmo canal de voz.`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Nenhuma música tocando!`);

        if (client.player.getQueue(message).tracks.length <= 1) return message.channel.send(`${client.emotes.error} - Só tem uma música na fila.`);

        client.player.clearQueue(message);

        message.channel.send(`${client.emotes.success} - A fila foi **removida** !`);
    },
};