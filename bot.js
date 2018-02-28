//Requires
Discord = require("discord.js");

client = new Discord.Client();

//If Command Is
function commandIs(str, msg) {
    return msg.content.toLowerCase().startsWith("f!" + str);
}

//Permsssions
function pluck(array) {
    return array.map(function(item) { return item["name"];});
}

function hasRole(mem, role){
    if(pluck(mem.roles).includes(role)){
        return true;
    }else {
        return false;
    }
};

//Get Rid of @s and `s
function clean(text) {
    if(typeof(text) === "string") {
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    }else {
        return text;
    }
};

//Log Actions
function logActions(message,info) {
    let prefix = message.guild?message.guild.name + " >> " + "#" + message.channel.name:"DirectMessage";
    console.log(prefix + " >> " + message.author.username + " >> " + info);
}

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

//Update Count / Join and Leave Messages
client.on("guildCreate", (guild) => {   
    console.log("Joined new guild, " + guild.name);
    updateCount();
});

client.on("guildDelete", (guild) => {
    console.log("Left guild, " + guild.name);
    updateCount();
});

updateCount = () => {
    client.user.setActivity(`f!help in ${client.guilds.size} Servers`);
}

//----------------------------------------------------------------------------------------------------

client.on("ready", () => {
    console.log("The Bot is Ready!");
    console.log(" ");
    console.log("Current Servers: ");
    client.guilds.forEach(g=>console.log(g.name));
    console.log(" ");
    updateCount();
});

//----------------------------------------------------------------------------------------------------

//START COMMANDS
client.on("message", message => {
    //Variables
    var args = message.content.split(/[ ]+/);
    var sender = message.author.username;
    
    if (message.channel.id in used_handles) {
        let handles = used_handles[message.channel.id];
        let exit = false;
        for (i in handles) {
            handle = handles[i];
            try{
                exit = exit || handle.call(message);
            } catch(e) {
                console.log(e);
            }
        }
    }
    
    if((message.content.trim() === "f!")) {
        message.channel.send("You did not enter a command. Usage: `f![command]`");
        logActions(message, `${sender} has not entered a command.`);
    }
    
    if(commandIs("help", message)) {
        message.reply("Sent to the DMs!");
        message.author.send({
            embed: {
            color: 3447003,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL
            },
            title: "All FallenBot Commands",
            description: "Use f! infront of every command.",
            fields: [{
                name: "hello",
                value: "Hello!"
            },
            {
                name: "ping",
                value: "PONG!"
            },
            {
                name: "say [message]",
                value: "Make me say something."
            },
            {
                name: "invite",
                value: "Generate a link to invite me to other servers."
            },
            {
                name: "roll",
                value: "Roll a die and get a number 1-6."
            },
            {
                name: "flip",
                value: "Flip a coin."
            },
            {
                name: "throw [someone]",
                value: "Throw a random object at a mentioned user.."
            },
            {
                name: "random [maximum]",
                value: "Generate a random number with a maximum outcome."
            },
            {
                name: "meme",
                value: "Posts a random meme in my collection."
            },
            {
                name: "8ball [question]",
                value: "Ask the 8 ball a question."
            },
            {
                name: "Russian Roulette",
                value: "IN DEVELOPMENT"
            },
            {
                name: "yesorno [question]",
                value: "Ask a yes or no question and get a yes or a no."
            },
            {
                name: "smack [someone]",
                value: "Smacks a mentioned user."
            },
            {
                name: "kill [someone]",
                value: "Kill someone in a random way."
            },
            {
                name: "bold",
                value: "Your next message will be sent in bold. - Credit to ImDaveead for Code"
            },
            {
                name: "lennyface",
                value: "Posts a lenny in chat."
            },
            {
                name: "quote",
                value: "Posts a random quote in chat."
            },
            {
                name: "idea",
                value: "Generates a link where you can submit your idea to the developer. "
            },
            {
                name: "face",
                value: "Posts a random text face. "
            },
            {
                name: "suicide",
                value: "You kill your self. "
            }]
            }
        });
        
        logActions(message, `${sender} requested help.`);
    }
    
    if(commandIs("hello", message)) {
        message.channel.send("Hello, " + message.author + ".");
        logActions(message, `Said hello to, ${sender}.`);
    }
    
    if(commandIs("ping", message)) {
        let chandleexist = false;

        if(used_handles[message.channel.id] !== undefined) {
            if(used_handles[message.channel.id].length >= 1) {
                chandleexist = 1;
            }
        }
        
        if(!chandleexist) {
            message.channel.send("PONG! :ping_pong: " + client.pings[0] + "ms");
            logActions(message, `PONGED, ${sender}!`);
        }

        cHandle = new ChannelHandle(message.channel,(handle_message) => {
            if(commandIs("ping",handle_message)) {
                let pnog = false;
                if (message.author.id === handle_message.author.id) {
                    if(Math.random() <= 0.1) pnog = true;
                }
                if(pnog) {
                    message.channel.send("PNOG! :ping_pong: " + client.pings[0] + "ms");
                    logActions(message, `PNOGED, ${sender}!`);
                }else {
                    message.channel.send("PONG! :ping_pong: " + client.pings[0] + "ms");
                    logActions(message, `PONGED, ${sender}!`);
                }
            }
            cHandle.destroy();
  });
}
    
    if(commandIs("say", message)) {
        var say = args.join(" ").substring(6);
        
        if(args.length === 1) {
            message.channel.send("You did not define an argument. Usage: `f!say [message to say]`");
            logActions(message, `${sender} did not enter an argument for the say command`)
        }else {
            message.channel.send(say);
            logActions(message, `${sender} used the say command to say ${say}.`);
        }        
    }
    
    if(commandIs("invite", message)) {
        message.channel.send("Use this link to invite me to other servers! https://discordapp.com/oauth2/authorize?client_id=418153623424466954&scope=bot&permissions=66579527");
        logActions(message, `Generated an invite for ${sender}.`);
    }
    
    if(commandIs("roll", message)) {
        var roll = Math.floor(Math.random() * 6) + 1;
        
        message.reply(`You have rolled a ${roll} :game_die:`);
        logActions(message, `${sender} has rolled a die and has gotten ${roll}.`);
    }
    
    if(commandIs("flip", message)) {
        var flip = Math.floor(Math.random() * 2) + 1;
        if(flip == 1) {
            message.reply("You have flipped heads! :red_circle:");
            logActions(message, `${sender} has flipped a coin and had gotten heads.`);
        }else {
            message.reply("You have flipped tails! :large_blue_circle:");
            logActions(message, `${sender} has flipped a coin and had gotten tails.`);
        }
    }

    throwables = [
        "a book",
        "a dog",
        "a cat",
        "a car",
        "a dog",
        "a house",
        "a computer",
        "a desk",
        "a pencil",
        "a nuke",
        "a truck",
        "a robot",
        "an apple",
        "a sock",
        "a DDoS attack",
        "a shoe",
        "a clock",
        "0.5 a presses",
        "a bubble",
        "a GTX 1080",
        "a calculator",
        "a keyboard",
        "a pair of headphones",
        "a battery",
        "a mug",
        "a kappa"
    ]
    if(commandIs("throw", message)) {
        if(args.length == 1) {
            message.channel.send("You did not define an argument. Usage: `f!throw [person]`");
            logActions(message,"did not enter an argument for the throw command.");
        }else {
            var throws = throwables[Math.floor(Math.random() * throwables.length)];
            var victim = args.join().substring(8);

            message.delete();
            message.channel.send(`${message.author.username} throws ${throws} at ${victim}.`);
            logActions(message, `${sender} has thrown ${throws} at ${victim}.`);
        }
    }
    
    if(commandIs("random", message)) {
        var max = args.join().substring(9);
        var random = Math.floor(Math.random() * max) + 1;
        
        if(isNaN(random)) {
            message.reply("You have not entered a number. Please try again.");
            logActions(message,`${sender} has not entered a number for the random command.`);
        }else {
            message.reply(`Your random number is ${random}.`);
            logActions(message, `${sender} has generated a random number and has gotten ${random}.`);
        }
    }
    
    memes = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7"
    ]
    if(commandIs("meme", message)) {
        var meme = memes[Math.floor(Math.random() * memes.length)];
        
        message.channel.send(`Meme #${meme}.`, {file: `memes/${meme}.png`});
        logActions(message,` Sent meme #${meme} to ${message.author.username}.`);
    }
    
    outcomes = [
        "It is Certain",
        "It is Decidedly So",
        "Without a Doubt.",
        "Yes Definitely",
        "You May Rely on it",
        "As I See it, Yes",
        "Most Likely",
        "Outlook Good",
        "Yes",
        "Signs Point to Yes",
        "Reply Hazy Try Again",
        "Ask Again Later",
        "Better Not Tell You Now",
        "Cannot Predict Now",
        "Concentrate and Ask Again",
        "Don't Count on it",
        "My Reply is No",
        "My Sources Say No",
        "Outlook Not So Good",
        "Very Doubtful"
    ]
    if(commandIs("8ball", message)) {
        var result = outcomes[Math.floor(Math.random() * outcomes.length)];
        
        if(args.length == 1) {
            message.channel.send("You did not define an argument. Usage: `f!8ball [question].`");
            logActions(message, `${sender} did not enter an argument for the 8ball command.`);
        }else {
            message.reply(result)
            logActions(message, `The 8 ball has replied ${result} to ${sender}.`);
        }
    }
    
    if(commandIs("yesorno", message)) {
        var yes = Math.floor(Math.random() * 2) + 1;
        
        if(args.length == 1) {
            message.channel.send("You did not define an argument. Usage: `f!yesorno [question]`");
            logActions(message,`${sender} did not enter an argument for the yesorno command.`);
        }else {
            if(yes == 1) {
                message.reply("Yes.");
                logActions(message,`Replied yes to ${sender}.`);
            }else {
                message.reply("No.");
                logActions(message,`Replied no to ${sender}.`);
            }
        }
    }
    
    //Russian Roulette
    if(commandIs("56328569138161", message)) {
        var dead = Math.floor(Math.random() * 2) + 1;
        
        if(dead == 1) {
            message.channel.send(`You have been killed. As a result, you have been muted for 5 minutes.`);            
            logActions(message, `${sender} has played russian roulette, and has gotten killed and muted for 5 minutes.`);
        }else {
            message.channel.send(`You have gotten away alive!`);
            logActions(message, `${sender} has played russian roulette, and has gotten away alive.`);
        }
    }
    
    if(commandIs("smack", message)) {
        var victim = args.join().substring(8);
        if(args.length == 1) {
            message.channel.send("You did not define an argument. Usage: `f!smack [person]`");
            logActions(message, `${sender} did not enter an argument for the smack command.`);
        }else {
            message.delete();
            message.channel.send(`${sender} smacks, ${victim}.`);
            logActions(message, `${sender} smacked, ${victim}.`);
        }
    }
    
    if(commandIs("kill", message)) {
        var kill = Math.floor(Math.random() * 3) + 1;
        var victim = args.join().substring(7);
        
        if(args.length == 1) {
            message.channel.send("You did not define an argument. Usage: `f!kill [person]`");
            logActions(message, `${sender} did not enter an argument for the kill command.`);
        }else {
            if(kill == 1) {
                message.delete();
                message.channel.send(message.author.username + " fed, " + victim + " to the lions.");
                logActions(message, `${sender} fed, ${victim} to the lions.`);
            }
            
            if(kill == 2) {
                message.delete();
                message.channel.send(message.author.username + " pushed, " + victim + " off a building.");
                logActions(message, `${sender} pushed, ${victim} off a building.`);
            }
            
            if(kill == 3) {
                message.delete();
                message.channel.send(message.author.username + " kicked, " + victim + " really hard.");
                logActions(message, `${sender} kicked, ${victim} really hard.`);
            }
        }
    }
    
    if(commandIs("bold", message)) {
        message.delete();
        cHandle = new ChannelHandle(message.channel,(handle_message) => {
            if (message.author.id === handle_message.author.id) {
                message.channel.send(`** ${handle_message.content} **`);
                cHandle.destroy();
            }
        });
        
        logActions(message, `${sender} has ran the bold command.`)
    }
    
    if(commandIs("lenny", message)) {
        message.delete();
        message.channel.send("( ͡° ͜ʖ ͡°)");
        logActions(message, `${sender} has requested a lennyface.`);
    }
    
    quotes = [
        "\"If it takes a little bit of effort, but allows me to be lazier, then I have no problem doing it.\" -Mp6 \n Source: https://clips.twitch.tv/ShortFragileLarkPeteZarollTie",
        "\"I like dick in my mouse, but I don't like fucking incompetent dick in my mouth.\" -SenslessStreamer \n Source: https://clips.twitch.tv/CourageousHorribleChoughPrimeMe",
        "\"Can we blame Obama, because we can only do that for a few more months?\" - SenselessStreamer"
    ]
    if(commandIs("quote", message)) {
        var quote = quotes[Math.floor(Math.random() * quotes.length)];
        
        message.channel.send(quote);
        logActions(message, `${sender} has requested a quote.`);   
    }
    
    if(commandIs("idea", message)) {
        message.channel.send("Please submit any ideas you have here. https://goo.gl/forms/yxbQUzIXbZgEa7Z53");
        logActions(message, `${sender} has requested an idea submission link.`);
    }
    
    faces = [
        "( ͡° ͜ʖ ͡°)",
        "¯\_(ツ)_/¯",
        "̿̿ ̿̿ ̿̿ ̿'̿'\̵͇̿̿\з= ( ▀ ͜͞ʖ▀) =ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿",
        "( ͡°( ͡° ͜ʖ( ͡° ͜ʖ ͡°)ʖ ͡°) ͡°)",
        "(▀̿Ĺ̯▀̿ ̿)",
        "༼ つ ◕_◕ ༽つ",
        "(づ｡◕‿‿◕｡)づ",
        "｡◕‿‿◕｡",
        "^̮^",
        "=U",
        "(･.◤)",
        "☼.☼"
        
    ]
    if(commandIs("face", message)) {
        var face = faces[Math.floor(Math.random() * faces.length)];
        
        message.delete();
        message.channel.send(face);
        logActions(message, `${sender} has requested a face.`);
    }
    
    suicides = [
        "jumped off of a building.",
        "shot themself in the head with a gun.",
        "drowned themself.",
        "sliced themself open.",
        "suffocated themself in sand.",
        "suffocated themself in water.",
        "suffocated themself in space.",
        "shot themself in the head with a gun.",
        "exploded themself.",
        "gotten too drunk.",
        "gotten in a car crash",
        "gotten to high.",
        "electrocuted themself.",
        "gone skydiving without a parachute."
    ]
    if(commandIs("suicide", message)) {
        var suicide = suicides[Math.floor(Math.random() * suicides.length)];

        message.delete();
        message.channel.send(`${message.author.username} has ${suicide}`);
        logActions(message, `${sender} has killed themself with suicide.`);
    }

    //Only My Commands
    if(commandIs("eval", message)) {
        if(message.author.id !== "169477336796889088") {
            message.reply("You do not have permission to run this command.");
            logActions(message, `${sender} did not have permission to run the eval command`);
            return;
        }
        
        try {
            var code = args.join(" ").substring(7);
            var evaled = eval(code);

            if(typeof evaled !== "string") {
                evaled = require("util").inspect(evaled);
            }

            message.channel.send(":inbox_tray: Input:" + "```" + code + "```");
            message.channel.send(":outbox_tray: Output" + "```" + clean(evaled) + "```");

        }catch(err){
            message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
        }
    }
    
    if(commandIs("servers", message)) {
        if(message.author.id !== "169477336796889088") {
            message.reply("You do not have permission to run this command.");
            logActions(message, `${sender} did not have permission to run the servers command`);
            return;
        }else {
            message.channel.send("Sent to the console!");
            console.log(" ");
            console.log("Current Servers: ");
            client.guilds.forEach(g =>console.log(g.name));
            console.log(" ");
            logActions(message, `${sender} used the servers command`);
        } 
    }
    
});
//END COMMANDS

client.login(process.env.token);
