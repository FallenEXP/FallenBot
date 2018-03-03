exports.id = 'roll';
exports.onLoad = api => {
    api.commands.add('roll', msg => {
        var roll = Math.floor(Math.random() * 6) + 1;
        
        msg.reply(`You have rolled a ${roll} :game_die:`);
        // logActions(msg, `${sender} has rolled a die and has gotten ${roll}.`);
    })
};
