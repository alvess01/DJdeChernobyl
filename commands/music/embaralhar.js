module.exports = {
    name: 'Embaralhar',
    aliases: ['sh'],
    category: 'Música',
    utilisation: '{prefix}embaralhar',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Entre em um canal de voz.`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Vocês não estão no mesmo canal de voz.`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Nenhuma música tocando!`);

        const success = client.player.shuffle(message);

        if (success) message.channel.send(`${client.emotes.success} - Fila embaralhada **${client.player.getQueue(message).tracks.length}** música(s) !`);
    },
};