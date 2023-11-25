import { SlashCommandBuilder } from 'discord.js';

const ping = new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Показать задержку бота');
    
export default ping.toJSON();