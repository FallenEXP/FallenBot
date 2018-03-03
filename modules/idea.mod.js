exports.id = 'idea';
exports.onLoad = api => {
    api.commands.add('idea', msg => {
        msg.channel.send("Please submit any ideas you have here. https://goo.gl/forms/yxbQUzIXbZgEa7Z53");
        // logActions(msg, `${sender} has requested an idea submission link.`);
    })
};
