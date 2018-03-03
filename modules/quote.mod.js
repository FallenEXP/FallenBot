exports.id = 'quote';
exports.onLoad = api => {
    api.commands.add('quote', msg => {
        quotes = [
            "\"If it takes a little bit of effort, but allows me to be lazier, then I have no problem doing it.\" -Mp6 \n Source: https://clips.twitch.tv/ShortFragileLarkPeteZarollTie",
            "\"I like dick in my mouse, but I don't like fucking incompetent dick in my mouth.\" -SenslessStreamer \n Source: https://clips.twitch.tv/CourageousHorribleChoughPrimeMe",
            "\"Can we blame Obama, because we can only do that for a few more months?\" - SenselessStreamer"
        ]

        var quote = quotes[Math.floor(Math.random() * quotes.length)];
        
        msg.channel.send(quote);
        // logActions(msg, `${sender} has requested a quote.`);   
    })
};
