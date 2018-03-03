exports.id = 'sendpublicmessage';
exports.onLoad = api => {
    api.commands.add('sendpublicmessage', msg => {
        var args = msg.content.split(/[ ]+/);
        
        if(msg.author.id !== "169477336796889088") {
            msg.reply("You do not have permission to run this command.");
            // logActions(message, `${sender} did not have permission to run the sendPublicMessage command`);
            return;
        }else {
            var messageToSend = args.join().substring(20);
        
            if(args.length === 1) {
                msg.channel.send("You did not define an argument. Usage: `f!sendPublicMessage [message to send]`");
                logActions(msg, `${sender} did not enter an argument for sendPublicMessage command`)
            }else {
                try {
                    guildList.forEach(guild => guild.defaultChannel.send(messageToSend));
                    msg.channel.send("Sent! Check Console for Errors!");
                } catch (err) {
                    console.log("Could not send message to " + guild.name);
                }
            }
            // logActions(msg, `${sender} used the sendPublicMessage command`);
        }
    })
};
