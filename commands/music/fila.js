module.exports = {
    name: 'Fila',
    aliases: [],
    category: 'Música',
    utilisation: '{prefix}fila',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Entre em um canal de voz.!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Vocês não estão no mesmo canal de voz.`);

        const queue = client.player.getQueue(message);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Nenhuma música tocando!`);

        message.channel.send(`**Fila - ${message.guild.name} ${client.emotes.queue} ${client.player.getQueue(message).loopMode ? '(loop)' : ''}**\nAtual : ${queue.playing.title} | ${queue.playing.author}\n\n` + (queue.tracks.map((track, i) => {
            return `**#${i + 1}** - ${track.title} | ${track.author} (pedido por : ${track.requestedBy.username})`
        }).slice(0, 5).join('\n') + `\n\n${queue.tracks.length > 5 ? `E **${queue.tracks.length - 5}** outras músicas...` : `Na playlist **${queue.tracks.length}** música(s)...`}`));
    },
};