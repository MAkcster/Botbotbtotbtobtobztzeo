const Discord = require('discord.js');
const bot = new Discord.Client();
const cfg require('./index.json');
const prefix = (cfg.prefix);
const token = process.env.token;
bot.on('ready', function () {
    console.log("Je suis prêt à être utilisé.")
    bot.user.setActivity('rien').catch(console.error)
});


bot.login(token);
