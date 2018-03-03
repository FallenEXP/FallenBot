exports.id = 'meme';
exports.onLoad = api => {
    api.commands.add('meme', msg => {
        memes = [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7"
        ]
        
        msg.delete();
        var meme = memes[Math.floor(Math.random() * memes.length)];
        
        msg.channel.send(`Meme #${meme}.`, {file: `memes/${meme}.png`});
        // logActions(msg,` Sent meme #${meme} to ${message.author.username}.`);
    })
};
