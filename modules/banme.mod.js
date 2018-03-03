exports.id = 'banme';
exports.onLoad = api => {
    api.commands.add('banme', msg => {
        msg.member.ban();
        // logActions(msg, `${sender} has banned themself.`);
    })
};
