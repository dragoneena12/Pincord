import { Client, Intents, IntentsString } from "discord.js"

const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN

const client = new Client({ intents: Object.keys(Intents.FLAGS) as IntentsString[] })

client.on('ready', () => {
  console.log(`logged in as ${client.user?.tag}`)
})

client.on("messageReactionAdd", async (reaction, user) => {
	if (reaction.emoji.name === "📌"){
    reaction.message.pin()
  }
});

client.on("messageReactionRemove", async (reaction, user) => {
	if (reaction.emoji.name === "📌"){
    reaction.message.unpin()
  }
});

client.login(DISCORD_BOT_TOKEN)