exports.id = 'testMod';
exports.onLoad = api => {
    api.commands.add('testMod', (msg) => {
        msg.channel.send('The Test Worked!');
    })
};