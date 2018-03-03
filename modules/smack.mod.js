exports.id = 'smack';
exports.onLoad = api => {
    api.commands.add('smack', msg => {
        var args = msg.content.split(/[ ]+/);

        var victim = args.join().substring(8);

        if(args.length == 1) {
            msg.channel.send("You did not define an argument. Usage: `f!smack [person]`");
            // logActions(msg, `${sender} did not enter an argument for the smack command.`);
        }else {
            msg.delete();
            msg.channel.send(`${sender} smacks, ${victim}.`);
            // logActions(msg, `${sender} smacked, ${victim}.`);
        }
    })
};
