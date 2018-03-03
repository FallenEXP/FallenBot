exports.id = 'ping';
exports.onLoad = api => {
    api.commands.add('ping', msg => {
        var pnog = Math.floor(Math.random() * 10) + 1;
        
        if(pnog == 1) {
            msg.channel.send(`PNOG! :ping_pong: ${api.api.client.pings[0]}ms`);
            // logActions(msg, `PNOGED, ${sender}!`);
        }else {
            msg.channel.send(`PONG! :ping_pong: ${api.client.pings[0]}ms`);
            // logActions(msg, `PONGED, ${sender}!`);
        }
    })
};
