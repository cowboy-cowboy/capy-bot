// Load environment variables from .env file
require("dotenv").config();
const fs = require("fs");

// Import the discord.js library with updated imports
const {
  Client,
  GatewayIntentBits,
  Routes,
  REST,
  Events,
} = require("discord.js");

// Initialize a new Discord client with necessary intents using GatewayIntentBits
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});

// Convert CHANNEL_IDS from .env to an array. Assuming CHANNEL_IDS are comma-separated if multiple.
const channelIds = process.env.CHANNEL_IDS.split(",");
const guildId = process.env.GUILD_ID;
const clientId = process.env.CLIENT_ID;
const discordBotToken = process.env.DISCORD_BOT_TOKEN; // Correctly refers to the environment variable for the Discord bot token

// Event listener for when the bot is ready
client.once("ready", () => {
  console.log("Capy-bot is online!");
});

// Event listener for new messages
client.on("messageCreate", (message) => {
  try {
    // Check if the message comes from one of the specified channels
    if (channelIds.includes(message.channel.id)) {
      console.log(
        `Message from ${message.author.tag} in channel ${message.channel.id}: "${message.content}"`
      );

      // Command execution block
      if (message.content.startsWith("!") && !message.author.bot) {
        const args = message.content.slice(1).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();

        if (client.commands.has(commandName)) {
          const command = client.commands.get(commandName);

          try {
            command.execute(message, args);
          } catch (error) {
            console.error(
              "Error executing command:",
              error.message,
              error.stack
            );
            message.reply("There was an error trying to execute that command!");
          }
        }
      }
    }
  } catch (error) {
    console.error("Error processing message:", error.message, error.stack);
  }
});

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "ping") {
    await interaction.reply({ content: "Public Pong!" });
  }
});

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "secret-ping") {
    await interaction.reply({ content: "Secret Pong!", ephemeral: true });
  }
});

// Log in the Discord bot using the token from the .env file
client.login(discordBotToken).catch((error) => {
  console.error("Failed to login to Discord API:", error.message, error.stack);
  process.exit(1); // Exit the process in case of login failure
});
