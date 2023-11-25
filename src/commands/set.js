import { SlashCommandBuilder } from 'discord.js';

const set = new SlashCommandBuilder()
    .setName('set')
    .setDescription('Настройка сервера');

export default set.toJSON();