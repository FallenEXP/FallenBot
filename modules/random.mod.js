exports.id = 'random';
exports.onLoad = api => {
    api.commands.add('random', msg => {
        var args = msg.content.split(/[ ]+/);

        var max = args.join().substring(9);
        var random = Math.floor(Math.random() * max) + 1;
        
        if(isNaN(random)) {
            msg.reply("You have not entered a number. Please try again.");
            // logActions(msg,`${sender} has not entered a number for the random command.`);
        }else {
            msg.reply(`Your random number is ${random}.`);
            // logActions(msg, `${sender} has generated a random number and has gotten ${random}.`);
        }
    })
};
