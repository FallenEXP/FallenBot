exports.id = 'russianroulette';
exports.onLoad = api => {
    api.commands.add('russianroulette', msg => {
        var dead = Math.floor(Math.random() * 2) + 1;
        
        if(dead == 1) {
            msg.channel.send(`You have been killed. As a result, you have been muted for 5 minutes.`);            
            // logActions(msg, `${sender} has played russian roulette, and has gotten killed and muted for 5 minutes.`);
        }else {
            msg.channel.send(`You have gotten away alive!`);
            // logActions(msg, `${sender} has played russian roulette, and has gotten away alive.`);
        }
    })
};
