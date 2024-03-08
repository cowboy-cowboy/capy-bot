const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with Pong!"),
  async execute(message, args) {
    message.channel
      .send("Pong!")
      .then(() => console.log("Ping command executed successfully."))
      .catch((error) => {
        console.error(
          "Error sending the pong message:",
          error.message,
          error.stack
        );
      });
  },
};
