module.exports = {
    name: 'Volume',
    aliases: [],
    category: 'Música',
    utilisation: '{prefix}volume [1-100]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Entre em um canal de voz.`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Vocês não estão no mesmo canal de voz.`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} -  Nenhuma música tocando!`);

        if (!args[0] || isNaN(args[0]) || args[0] === 'Infinito') return message.channel.send(`${client.emotes.error} - Escreva um número válido!`);

        if (Math.round(parseInt(args[0])) < 1 || Math.round(parseInt(args[0])) > 100) return message.channel.send(`${client.emotes.error} - Escreva um número válido (entre 1 e 100)!`);

        const success = client.player.setVolume(message, parseInt(args[0]));

        if (success) message.channel.send(`${client.emotes.success} - Volume em **${parseInt(args[0])}%**!`);
    },
};