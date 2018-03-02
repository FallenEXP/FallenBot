exports.id = 'invite';
exports.onLoad = api => {
    api.commands.add('invite', msg => {
        message.channel.send("Use this link to invite me to other servers! https://discordapp.com/oauth2/authorize/?permissions=1878523079&scope=bot&client_id=418153623424466954");
        // logActions(message, `Generated an invite for ${sender}.`);
    })
};
