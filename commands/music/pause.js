module.exports = {
    name: 'Pause',
    aliases: [],
    category: 'Música',
    utilisation: '{prefix}pause',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Entre em um canal de voz.`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Vocês não estão no mesmo canal de voz.`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Nenhuma música tocando!`);

        if (client.player.getQueue(message).paused) return message.channel.send(`${client.emotes.error} - A música já está pausada.`);

        const success = client.player.pause(message);

        if (success) message.channel.send(`${client.emotes.success} - Música ${client.player.getQueue(message).playing.title} pausada!`);
    },
};