module.exports = {
    name: 'Filtro',
    aliases: [],
    category: 'Música',
    utilisation: '{prefix}filtro [nome do filtro]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Entre em um canal de voz.`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Vocês não estão no mesmo canal de voz.`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Nenhuma música tocando!`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - Especifique um filtro válido para aplicar.`);

        const filterToUpdate = client.filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        if (!filterToUpdate) return message.channel.send(`${client.emotes.error} - Esse filtro não existe. Tente algo como (8D, vibrato, pulsator...)!`);

        const filtersUpdated = {};

        filtersUpdated[filterToUpdate] = client.player.getQueue(message).filters[filterToUpdate] ? false : true;

        client.player.setFilters(message, filtersUpdated);

        if (filtersUpdated[filterToUpdate]) message.channel.send(`${client.emotes.music} - Estou **adicionando** o filtro para a música, aguarde... Nota : quanto maior a música, mais tempo vou demorar (sou uma pessoa, não uma máquina).`);
        else message.channel.send(`${client.emotes.music} - Estou **removendo** o filtro da música, aguarde... Nota : quanto maior a música, mais tempo vou demorar (sou uma pessoa, não uma máquina).`);
    },
};