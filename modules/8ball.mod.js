exports.id = '8ball';
exports.onLoad = api => {
    api.commands.add('8ball', msg => {
        var args = msg.content.split(/[ ]+/);

        outcomes = [
            "It is Certain",
            "It is Decidedly So",
            "Without a Doubt.",
            "Yes Definitely",
            "You May Rely on it",
            "As I See it, Yes",
            "Most Likely",
            "Outlook Good",
            "Yes",
            "Signs Point to Yes",
            "Reply Hazy Try Again",
            "Ask Again Later",
            "Better Not Tell You Now",
            "Cannot Predict Now",
            "Concentrate and Ask Again",
            "Don't Count on it",
            "My Reply is No",
            "My Sources Say No",
            "Outlook Not So Good",
            "Very Doubtful"
        ]
        
        var result = outcomes[Math.floor(Math.random() * outcomes.length)];
        
        if(args.length == 1) {
            msg.channel.send("You did not define an argument. Usage: `f!8ball [question].`");
            // logActions(msg, `${sender} did not enter an argument for the 8ball command.`);
        }else {
            msg.reply(result)
            // logActions(msg, `The 8 ball has replied ${result} to ${sender}.`);
        }
    })
};
