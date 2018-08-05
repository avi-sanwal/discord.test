const Discord = require('discord.js');
const client = new Discord.Client();

let receiver = null;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.guilds.forEach((guild, id) => {
    console.log("ID: " + id + " guild : " + guild);
    guild.channels.forEach(function(channel, key) {
      console.log("channel : " + channel.id + " typeof " + channel.type);
      if(channel.type === 'voice') {
        channel.join().then(connection => {
          receiver = connection.createReceiver();
          receiver.on('opus', handleOpus);
        }).catch(console.log);
      }
    });
  });
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  } else if (!msg.author.bot) {
    msg.reply('What do you mean: ' + msg.content);
  }
});

function handleOpus(user, buffer) {
  console.log(user.id + " is saying something " + buffer.length);
}

client.login('NDczOTMyMzU2NDQ5OTkyNzA2.DkYsig.vReQqI78fG0jblTqLnEO6BM3xiY');
