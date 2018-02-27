//Requires
Discord = require("discord.js");
color = require("colors");

client = new Discord.Client();

//If Command Is
function commandIs(str, msg) {
    return msg.content.toLowerCase().startsWith("f!" + str);
}



client.login(process.env.token);
