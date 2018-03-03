exports.id = 'bomb';
exports.onLoad = api => {
    api.commands.add('bomb', msg => {
        msg.channel.createWebhook('Nuke Bomb','https://cdn0.iconfinder.com/data/icons/business-vector-tab-bar-icons/48/A-bomb-512.png').then(a=>{a.send('Bomb Incoming in 5:00').then(()=>{a.delete()})});
    })
};
