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
    console.log(" ");
    console.log("Current Servers: ");
    bot.client.guilds.forEach(g =>console.log(g.name));
    console.log(" ");
    updateCount();
});



//Log Actions
function logActions(msg,info) {
    let prefix = msg.guild?msg.guild.name + " >> " + "#" + msg.channel.name:"DirectMessage";
    console.log(msg + " >> " + msg.author.username + " >> " + info);
}

//Joined Guild
bot.client.on("guildCreate", (guild) => {   
    console.log("Joined new guild, " + guild.name);
    updateCount();
});

//Left Guild
bot.client.on("guildDelete", (guild) => {
    console.log("Left guild, " + guild.name);
    updateCount();
});

//Update Server Count
updateCount = () => {
    bot.user.setActivity(`f!help in ${bot.client.guilds.size} Servers`);
}
