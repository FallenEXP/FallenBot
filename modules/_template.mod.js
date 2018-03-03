exports.id = 'template';
exports.onLoad = api => {
    api.commands.add('template', msg => {
        msg.channel.send('The Template!');
    })
};
