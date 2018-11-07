exports.run = async (bot, message) => {
 
    let botuser = message.mentions.users.first()
    message.reply(message.author.avatarURL);

  exports.help = {
    name: 'av',
    category: 'Bot Information',
    description: 'displays users avatar',
    usage: 'av'
  }  
};