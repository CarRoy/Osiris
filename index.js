const config = require("./config.json");
const Discord = require("discord.js");
const prefix = config.prefix;
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
    console.log(bot.token)
    console.log(`${bot.user.username} is online!`);
  
    bot.user.setActivity("yeet", {type: "WATCHING"});
  });
  bot.on("message", async message => {

    if(message.content === `${prefix}ping`) {
    
    let msg = await message.channel.send('poggers');
        
      msg.edit(`Pong! latency is \`${msg.createdTimestamp - message.createdTimestamp}ms\``);
    }
    });

bot.login(config.token);
