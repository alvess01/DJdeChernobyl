module.exports = {
    name: 'Pular',
    aliases: ['s'],
    category: 'Música',
    utilisation: '{prefix}pular',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Entre em um canal de voz.`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Vocês não estão no mesmo canal de voz.`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Nenhuma música tocando!`);

        const success = client.player.skip(message);

        if (success) message.channel.send(`${client.emotes.success} -A música atual foi **pulada** !`);
    },
};