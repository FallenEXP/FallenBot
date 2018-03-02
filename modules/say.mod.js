exports.id = 'say';
exports.onLoad = api => {
    api.commands.add('say', message => {
        var say = args.join(" ").substring(6);
        
        if(args.length === 1) {
            message.channel.send("You did not define an argument. Usage: `f!say [message to say]`");
            logActions(message, `${sender} did not enter an argument for the say command`)
        }else {
            message.channel.send(say);
            logActions(message, `${sender} used the say command to say ${say}.`);
        }  
    })
};
