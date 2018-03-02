exports.id = 'say';
exports.onLoad = api => {
    api.commands.add('say', msg => {
        var args = msg.content.split(/[ ]+/);
        var say = args.join().substring(6);
        
        if(args.length === 1) {
            msg.channel.send("You did not define an argument. Usage: `f!say [message to say]`");
            logActions(msg, `${sender} did not enter an argument for the say command`)
        }else {
            msg.channel.send(say);
            logActions(msg, `${sender} used the say command to say ${say}.`);
        }  
    })
};
