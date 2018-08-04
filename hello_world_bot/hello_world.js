const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  } else if (!msg.author.bot) {
    msg.reply('What do you mean: ' + msg.content);
  }
});

client.login('NDczOTMyMzU2NDQ5OTkyNzA2.DkYsig.vReQqI78fG0jblTqLnEO6BM3xiY');
