exports.id = 'ping';
exports.onLoad = api => {
    api.commands.add('ping', msg => {
        used_handles = {};

        ChannelHandle = function(channel,call) {
            this.channel = channel;
            this.call = call;
            
            if (!used_handles[channel.id]) {
                used_handles[channel.id]=[];
            }
            
            this.marker = used_handles[channel.id].length;
            used_handles[channel.id].push(this);
        };

        ChannelHandle.prototype.destroy = function() {
            used_handles[this.channel.id].splice(this.marker);
        };

        if(used_handles[msg.channel.id] !== undefined) {
            if(used_handles[msg.channel.id].length >= 1) {
                chandleexist = 1;
            }
        }
        
        if(!chandleexist) {
            msg.channel.send("PONG! :ping_pong: " + api.client.pings[0] + "ms");
            // logActions(msg, `PONGED, ${sender}!`);
        }

        cHandle = new ChannelHandle(msg.channel,(handle_message) => {
            let pnog = false;

            if (msg.author.id === handle_message.author.id) {
                if(Math.random() <= 0.1) pnog = true;
            }
            
            if(pnog) {
                msg.channel.send(`PNOG! :ping_pong: ${api.api.client.pings[0]}ms`);
                // logActions(msg, `PNOGED, ${sender}!`);
            }else {
                msg.channel.send(`PONG! :ping_pong: ${api.client.pings[0]}ms`);
                // logActions(msg, `PONGED, ${sender}!`);
            }

            cHandle.destroy();
        });
    })
};
