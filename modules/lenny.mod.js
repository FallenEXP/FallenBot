exports.id = 'lenny';
exports.onLoad = api => {
    api.commands.add('lenny', msg => {
        msg.delete();
        msg.channel.send("( ͡° ͜ʖ ͡°)");
        // logActions(msg, `${sender} has requested a lennyface.`);
    })
};
