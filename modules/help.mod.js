exports.id = 'help';
exports.onLoad = api => {
    api.commands.add('help', msg => {
        msg.reply("Sent to the DMs!");
        msg.author.send({
            embed: {
            color: 3447003,
            author: {
              name: api.client.user.username,
              icon_url: api.client.user.avatarURL
            },
            title: "All FallenBot Commands",
            description: "Use f! infront of every command. A lot of commands need the permission to manage messages, others are listed in the description of each command.",
            fields: [{
                name: "hello",
                value: "Hello!"
            },
            {
                name: "ping",
                value: "PONG!"
            },
            {
                name: "say [message]",
                value: "Make me say something."
            },
            {
                name: "invite",
                value: "Get a link to invite me to other servers."
            },
            {
                name: "roll",
                value: "Roll a die and get a number 1-6."
            },
            {
                name: "flip",
                value: "Flip a coin."
            },
            {
                name: "throw [someone]",
                value: "Throw a random object at a mentioned user.."
            },
            {
                name: "random [maximum]",
                value: "Generate a random number with a maximum outcome."
            },
            {
                name: "meme",
                value: "Posts a random meme in my collection. (Bot Requires Attach Files Perms)"
            },
            {
                name: "8ball [question]",
                value: "Ask the 8 ball a question."
            },
            {
                name: "Russian Roulette",
                value: "IN DEVELOPMENT"
            },
            {
                name: "yesorno [question]",
                value: "Ask a yes or no question and get a yes or a no."
            },
            {
                name: "smack [someone]",
                value: "Smacks a mentioned user."
            },
            {
                name: "kill [someone]",
                value: "Kill someone in a random way."
            },
            {
                name: "lennyface",
                value: "Posts a lenny in chat."
            },
            {
                name: "quote",
                value: "Posts a random quote in chat."
            },
            {
                name: "idea",
                value: "Generates a link where you can submit your idea to the developer. "
            },
            {
                name: "face",
                value: "Posts a random text face. "
            },
            {
                name: "kickme",
                value: "Kicks yourself. (Bot Requires Kick Perms)"
            },
            {
                name: "banme",
                value: "Bans yourself. (Bot Requires Ban Perms)"
            },
            {
                name: "bomb",
                value: "Sends a bomb that does nothing yet. (Bot Requires Manage Webhooks Perms)"
            }]
            }
        });

        // logActions(msg, `${sender} requested help.`);
    })
};
