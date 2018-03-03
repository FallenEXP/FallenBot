exports.id = 'suicide';
exports.onLoad = api => {
    api.commands.add('suicide', msg => {
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

            var suicide = suicides[Math.floor(Math.random() * suicides.length)];
    
            msg.delete();
            msg.channel.send(`${msg.author.username} has ${suicide}`);
            // logActions(msg, `${sender} has killed themself with suicide.`);
    })
};
