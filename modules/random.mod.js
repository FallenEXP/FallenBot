exports.id = 'random';
exports.onLoad = api => {
    api.commands.add('random', msg => {
        var args = msg.content.split(/[ ]+/);

        var max = args.join().substring(9);
        var random = Math.floor(Math.random() * max) + 1;
        
        if(args.length == 1) {
            msg.channel.send("You did not define an argument. Usage: `f!random [maximum].`");
            // logActions(msg, `${sender} did not enter an argument for the 8ball command.`);
        }else if(isNaN(random)) {
            msg.reply("You have not entered a number. Please try again.");
            // logActions(msg,`${sender} has not entered a number for the random command.`);
        }else {
            msg.reply(`Your random number is ${random}.`);
            // logActions(msg, `${sender} has generated a random number and has gotten ${random}.`);
        }
    })
};
