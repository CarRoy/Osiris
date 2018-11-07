const config = require("./config.json");
const Discord = require("discord.js");
const prefix = config.prefix;
const bot = new Discord.Client({disableEveryone: true});
const token = require("./config.json");


bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`);
  
    bot.user.setActivity("tutorials on TSC", {type: "WATCHING"});
  });
  bot.on("message", async () => {
if(!message.content.startsWith === prefix) return;
  
    const msg = await message.channel.send('Poggers!');

    if(cmd === `${prefix}ping`){     
msg.edit(`Pong! I took \`${msg.createdTimestamp - message.createdTimestamp}ms\``);    
    }  
});

bot.login(token);
