module.exports = (client, message, query, tracks) => {
    message.channel.send({
        embed: {
            color: 'BLUE',
            author: { name: `Aqui está a sua pesquisa ${query}` },
            footer: { text: 'Esse BOT é do Fernando. Aquele lindo bolsominion...' },
            timestamp: new Date(),
            description: `${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`,
        },
    });
};