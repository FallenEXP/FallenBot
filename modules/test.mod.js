exports.id = 'test';
exports.onLoad = api => {
    api.commands.add('test', msg => {
        msg.channel.send('The Test Worked!');
    })
};
