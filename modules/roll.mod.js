exports.id = 'invite';
exports.onLoad = api => {
    api.commands.add('invite', msg => {
        var roll = Math.floor(Math.random() * 6) + 1;
        
        msg.reply(`You have rolled a ${roll} :game_die:`);
        // logActions(message, `${sender} has rolled a die and has gotten ${roll}.`);
    })
};
