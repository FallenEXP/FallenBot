exports.id = 'hello';
exports.onLoad = api => {
    api.commands.add('hello', msg => {
        msg.channel.send("Hello, " + msg.author + ".");
        // logActions(msg, `Said hello to, ${sender}.`);
    })
};
