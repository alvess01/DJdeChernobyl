module.exports = (client, error, message, ...args) => {
    switch (error) {
        case 'NotPlaying':
            message.channel.send(`${client.emotes.error} - Não tem nenhuma música tocando, tá surdo?`);
            break;
        case 'NotConnected':
            message.channel.send(`${client.emotes.error} - Você tem que estar dentro de uma call, corno.`);
            break;
        case 'UnableToJoin':
            message.channel.send(`${client.emotes.error} - Eu não tô conseguindo entrar no canal, me da ADM.`);
            break;
        case 'VideoUnavailable':
            message.channel.send(`${client.emotes.error} - ${args[0].title} não tá disponível no Brasil. Pulando...`);
            break;
        case 'MusicStarting':
            message.channel.send(`A música está começando... espere e tente novamente.`);
            break;
        default:
            message.channel.send(`${client.emotes.error} - Alguma coisa tá errada, erro: ${error}. Manda para o Fernando que ele resolve.`);
    };
};
