module.exports = {
    name: 'Pesquisar',
    aliases: ['sr'],
    category: 'Música',
    utilisation: '{prefix}pesquisar [URL]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Entre em um canal de voz.`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Vocês não estão no mesmo canal de voz.`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - Indique o nome da música.`);

        client.player.play(message, args.join(" "));
    },
};