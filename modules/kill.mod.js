exports.id = 'kill';
exports.onLoad = api => {
    api.commands.add('kill', msg => {
        var args = msg.content.split(/[ ]+/);

        var kill = Math.floor(Math.random() * 3) + 1;
        var victim = args.join().substring(7);
        
        if(args.length == 1) {
            msg.channel.send("You did not define an argument. Usage: `f!kill [person]`");
            // logActions(msg, `${sender} did not enter an argument for the kill command.`);
        }else {
            if(kill == 1) {
                msg.delete();
                msg.channel.send(msg.author.username + " fed, " + victim + " to the lions.");
                // logActions(msg, `${sender} fed, ${victim} to the lions.`);
            }
            
            if(kill == 2) {
                msg.delete();
                msg.channel.send(msg.author.username + " pushed, " + victim + " off a building.");
                // logActions(msg, `${sender} pushed, ${victim} off a building.`);
            }
            
            if(kill == 3) {
                msg.delete();
                msg.channel.send(msg.author.username + " kicked, " + victim + " really hard.");
                // logActions(msg, `${sender} kicked, ${victim} really hard.`);
            }
        }
    })
};
