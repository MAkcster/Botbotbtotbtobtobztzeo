const Discord = require('discord.js');
const client = new Discord.Client();
const cfg require('./index.json');
const prefix = (cfg.prefix);
client.login('NTQ5MzE5NzE2OTQ3MDk5NjQ4.D1VSVQ.Xp_BtqpHKMsyQxrqj5kdqF7Ap6s');
client.on('message',message{
    if(message.content === "tu fais quoi?"){
    message.reply('rien');
    console.log('répond a tfq');
}
})
const token = process.env.token;
bot.on('ready', function () {
    console.log("Je suis prêt à être utilisé.")
    bot.user.setActivity('rien').catch(console.error)
});


bot.login(token);
