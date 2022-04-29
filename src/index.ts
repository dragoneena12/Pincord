import { Client, Intents } from "discord.js";

const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  ],
  partials: ["MESSAGE", "REACTION"],
});

client.on("ready", () => {
  console.log(`logged in as ${client.user?.tag}`);
});

client.on("messageReactionAdd", async (reaction, user) => {
  if (reaction.partial) {
    try {
      await reaction.fetch();
    } catch (error) {
      console.error("Something went wrong when fetching the message:", error);
      return;
    }
  }

  if (reaction.emoji.name === "📌") {
    reaction.message.pin();
  }
});

client.on("messageReactionRemove", async (reaction, user) => {
  if (reaction.partial) {
    try {
      await reaction.fetch();
    } catch (error) {
      console.error("Something went wrong when fetching the message:", error);
      return;
    }
  }
  
  if (reaction.emoji.name === "📌") {
    reaction.message.unpin();
  }
});

client.login(DISCORD_BOT_TOKEN);
