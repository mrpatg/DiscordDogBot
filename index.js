require('dotenv').config()
const fetch = require('node-fetch');
const Discord = require('discord.js')
const client = new Discord.Client()
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})
client.on('message', msg => {
  if (msg.content === 'dogme') {
      fetch('https://dog.ceo/api/breed/husky/images/random')
      .then(res => res.json())
      .then(json => msg.reply(json.message));
    
  }
})
client.login(process.env.TOKEN)