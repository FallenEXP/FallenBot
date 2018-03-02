//Requires
const fs = require('fs');

Discord = require("discord.js");
client = new Discord.Client();

const BotCore = require('reputation-core');
let config = Object.assign({
	modulePath: 'modules',
	token: process.env.token
}, JSON.parse(fs.readFileSync('config.json')));
let bot = new BotCore(config);

bot.on('ready', () => {
	console.log(`Logged in as ${bot.client.user.tag}`);
});
