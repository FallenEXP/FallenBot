exports.id = 'kickme';
exports.onLoad = api => {
    api.commands.add('kickme', msg => {
        msg.member.kick();
        // logActions(msg, `${sender} has kicked themself.`);
    })
};
