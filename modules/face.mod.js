exports.id = 'face';
exports.onLoad = api => {
    api.commands.add('face', msg => {
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

        var face = faces[Math.floor(Math.random() * faces.length)];
        
        msg.delete();
        msg.channel.send(face);
        // logActions(msg, `${sender} has requested a face.`);
    })
};
