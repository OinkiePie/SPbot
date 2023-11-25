import { SlashCommandBuilder } from 'discord.js';

const pay = new SlashCommandBuilder()
    .setName('дать')
    .setDescription('Перевести валюту другому участнику')
    .addUserOption((option) =>
        option
            .setName('участник')
            .setDescription('Целевой частник')
            .setRequired(true))
    .addIntegerOption((option) =>
        option
            .setName('количество')
            .setDescription('Количетсво передаваемой валюты')
            .setRequired(true));

export default pay.toJSON();