exports.id = 'bold';
exports.onLoad = api => {
    api.commands.add('bold', msg => {
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

        msg.delete();
        cHandle = new ChannelHandle(msg.channel,(handle_message) => {
            if (msg.author.id === handle_message.author.id) {
                msg.channel.send(`** ${handle_message.content} **`);
                cHandle.destroy();
            }
        });
        
        logActions(msg, `${sender} has ran the bold command.`)
    })
};
