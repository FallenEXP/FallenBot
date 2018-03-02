exports.id = 'test';
exports.onLoad = api => {
    api.commands.add('test', message => {
        message.channel.send('The Test Worked!');
    })
};
