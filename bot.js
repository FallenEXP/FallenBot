const BotCore = require('reputation-core');
const fs = require('fs');

let config = Object.assign({
	modulePath: 'modules',
	token: process.env.token
}, JSON.parse(fs.readFileSync('config.json')));
let bot = new BotCore(config);

bot.on('ready', () => {
	console.log("The Bot is Ready!");
	console.log(`Logged in as ${bot.client.user.tag}`);
	// updateCount();
	// displayServers();
});



var args = msg.content.split(/[ ]+/);

//Log Actions
function logActions(message,info) {
    let prefix = message.guild?message.guild.name + " >> " + "#" + message.channel.name:"DirectMessage";
    console.log(prefix + " >> " + message.author.username + " >> " + info);
}

//Get Rid of @s and `s
function clean(text) {
    if(typeof(text) === "string") {
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    }else {
        return text;
    }
};

//Channel Handles
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

//Channel Handles
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

// //Joined Guild
// bot.on("guildCreate", (guild) => {   
//     console.log("Joined new guild, " + guild.name);
//     updateCount();
// });

// //Left Guild
// bot.on("guildDelete", (guild) => {
//     console.log("Left guild, " + guild.name);
//     updateCount();
// });

// //Update Server Count
// updateCount = () => {
//     bot.user.setActivity(`f!help in ${client.guilds.size} Servers`);
// }

//Display Server
displayServers = () => {
    console.log(" ");
    console.log("Current Servers: ");
    bot.guilds.forEach(g=>console.log(g.name));
    console.log(" ");
}
