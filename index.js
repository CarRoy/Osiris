const config = require("./config.json");
const token = require("./config.json")
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);

  bot.user.setActivity("how to shart without making a mess", {type: "WATCHING"});

  //bot.user.setGame("on SourceCade!");
});


