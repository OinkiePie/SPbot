import { SlashCommandBuilder } from 'discord.js';

const ping = new SlashCommandBuilder()
    .setName('Ping')
    .setDescription('Показать задержку бота')

export default ping.toJSON();