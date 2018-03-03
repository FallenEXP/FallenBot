exports.id = 'yesorno';
exports.onLoad = api => {
    api.commands.add('yesorno', msg => {
        var args = msg.content.split(/[ ]+/);
        
        var yes = Math.floor(Math.random() * 2) + 1;
        
        if(args.length == 1) {
            msg.channel.send("You did not define an argument. Usage: `f!yesorno [question]`");
            // logActions(msg,`${sender} did not enter an argument for the yesorno command.`);
        }else {
            if(yes == 1) {
                msg.reply("Yes.");
                // logActions(msg,`Replied yes to ${sender}.`);
            }else {
                msg.reply("No.");
                // logActions(msg,`Replied no to ${sender}.`);
            }
        }
    })
};
