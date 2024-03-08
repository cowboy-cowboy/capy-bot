# Capy-bot
![arauj_capybara_drinking_coffee _3299a767-234b-4242-bc15-850bd1297853](https://github.com/cowboy-cowboy/capy-bot/assets/69636803/8192cc86-2a75-460f-880f-bf6e5f96414d)


Capy-bot is a specialized Discord bot designed to enhance the experience within Discord servers by focusing on real-time message reading in specific channels, without storing messages. It leverages the discord.js library for seamless interaction with Discord's API, emphasizing simplicity and efficiency in its operations.

## Overview

The architecture of Capy-bot is built around the Node.js environment, incorporating the discord.js library for all interactions with Discord's API. This design ensures modularity and scalability, allowing for future extensions or modifications. The bot operates by monitoring messages in designated Discord channels, configured through environment variables or a configuration file.

## Features

- **Message Reading:** Monitors and reads messages in specific channels, enhancing content moderation, community engagement, and live interaction facilitation.
- **Channel Specificity:** Targets particular channels for monitoring, optimizing resource usage and relevance.
- **Real-Time Operation:** Focuses on real-time responsiveness and interaction without storing messages.

## Getting started

### Requirements

- Node.js
- A Discord account and a Discord server where you have permissions to add bots.

### Quickstart

1. Clone the repository to your local machine.
2. Install the dependencies by running `npm install`.
3. Register the bot with the Discord Developer Portal to obtain a bot token.
4. Configure the `.env` file with the obtained DISCORD_BOT_TOKEN and CHANNEL_IDS.
5. Start the bot by running `npm start`.

### License

Copyright (c) 2024.
