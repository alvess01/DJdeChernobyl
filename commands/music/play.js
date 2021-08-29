module.exports = {
    name: 'Play',
    aliases: ['p'],
    category: 'Música',
    utilisation: '{prefix}play [name/URL]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Entre em um canal de voz.`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Vocês não estão no mesmo canal de voz.`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - Indique o título da música`);

        client.player.play(message, args.join(" "), { firstResult: true });
    },
};