exports.id = 'throw';
exports.onLoad = api => {
    api.commands.add('throw', msg => {
        var args = msg.content.split(/[ ]+/);
        
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

        if(args.length == 1) {
            msg.channel.send("You did not define an argument. Usage: `f!throw [person]`");
            // logActions(msg,"did not enter an argument for the throw command.");
        }else {
            var throws = throwables[Math.floor(Math.random() * throwables.length)];
            var victim = args.join().substring(8);

            msg.delete();
            msg.channel.send(`${msg.author.username} throws ${throws} at ${victim}.`);
            // logActions(msg, `${sender} has thrown ${throws} at ${victim}.`);
        }
    })
};
