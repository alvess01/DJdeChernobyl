module.exports = {
    name: 'Tocando',
    aliases: ['tc'],
    category: 'Música',
    utilisation: '{prefix}tocando',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Entre em um canal de voz.`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Vocês não estão no mesmo canal de voz.`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Nenhuma música tocando!`);

        const track = client.player.nowPlaying(message);
        const filters = [];

        Object.keys(client.player.getQueue(message).filters).forEach((filterName) => client.player.getQueue(message).filters[filterName]) ? filters.push(filterName) : false;

        message.channel.send({
            embed: {
                color: 'RED',
                author: { name: track.title },
                footer: { text: 'Esse BOT foi criado pelo Fernando, aquele lindo bolsominion...' },
                fields: [
                    { name: 'Canal', value: track.author, inline: true },
                    { name: 'Pedido por', value: track.requestedBy.username, inline: true },
                    { name: 'Da playlist', value: track.fromPlaylist ? 'Sim' : 'Não', inline: true },

                    { name: 'Views', value: track.views, inline: true },
                    { name: 'Duração', value: track.duration, inline: true },
                    { name: 'Filtros ativos', value: filters.length + '/' + client.filters.length, inline: true },

                    { name: 'Volume', value: client.player.getQueue(message).volume, inline: true },
                    { name: 'Repetição', value: client.player.getQueue(message).repeatMode ? 'Sim' : 'Não', inline: true },
                    { name: 'Pausado', value: client.player.getQueue(message).paused ? 'Sim' : 'Não', inline: true },

                    { name: 'Progresso', value: client.player.createProgressBar(message, { timecodes: true }), inline: true }
                ],
                thumbnail: { url: track.thumbnail },
                timestamp: new Date(),
            },
        });
    },
};