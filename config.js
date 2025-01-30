require('dotenv').config();

module.exports = {
  DISCORD_TOKEN: process.env.DISCORD_TOKEN,
  ENVIRONMENT: process.env.ENVIRONMENT || 'dev',
  GUILD_ERROR_CHANNEL_ID: process.env.GUILD_ERROR_CHANNEL_ID,
  GUILD_JOIN_CHANNEL_ID: process.env.GUILD_JOIN_CHANNEL_ID,
  GUILD_LEAVE_CHANNEL_ID: process.env.GUILD_LEAVE_CHANNEL_ID,
  GUILD_LOGS_CHANNEL_ID: process.env.GUILD_LOGS_CHANNEL_ID,
  OWNER_DISCORD_ID: process.env.OWNER_DISCORD_ID,
  SUPPORT_GUILD_LINK: process.env.SUPPORT_GUILD_LINK,
  CLIENT_ID: process.env.CLIENT_ID,
  GUILD_ID: process.env.GUILD_ID,
  API_URL: process.env.API_URL,
};
