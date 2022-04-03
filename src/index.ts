const { Client, Intents } = require('discord.js')

const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN

const client = new Client({ intents: Object.keys(Intents.FLAGS) })

client.on('ready', () => {
  console.log(`logged in as ${client.user.tag}`)
})

client.on('messageCreate', async (msg: any) => {
  if (msg.content === '!ping') {
    msg.channel.send('Pong!')
  }
})

client.login(DISCORD_BOT_TOKEN)