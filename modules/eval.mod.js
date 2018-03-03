exports.id = 'eval';
exports.onLoad = api => {
    api.commands.add('eval', msg => {
        var args = msg.content.split(/[ ]+/);

        function clean(text) {
            if(typeof(text) === "string") {
                return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
            }else {
                return text;
            }
        };

        if(msg.author.id !== "169477336796889088") {
            msg.reply("You do not have permission to run this command.");
            // logActions(msg, `${sender} did not have permission to run the eval command`);
            return;
        }
        
        try {
            var code = args.join(" ").substring(7);
            var evaled = eval(code);

            if(typeof evaled !== "string") {
                evaled = require("util").inspect(evaled);
            }

            msg.channel.send(":inbox_tray: Input:" + "```" + code + "```");
            msg.channel.send(":outbox_tray: Output" + "```" + clean(evaled) + "```");

            // logActions(msg, `${sender} used the eval command.`);
        }catch(err){
            msg.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
            // logActions(msg, `${sender} used the eval command and got an error.`);
        }
    })
};
