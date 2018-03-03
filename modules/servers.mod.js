exports.id = 'servers';
exports.onLoad = api => {
    api.commands.add('servers', msg => {
        msg.channel.send("Sent to the console!");
        console.log(" ");
        console.log("Current Servers: ");
        client.guilds.forEach(g =>console.log(g.name));
        console.log(" ");
        // logActions(msg, `${sender} used the servers command.`);
    })
};
