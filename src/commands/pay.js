import { SlashCommandBuilder } from 'discord.js';

const pay = new SlashCommandBuilder()
        .setName('pay')
        .setDescription('Перевести валюту другому участнику.')
        .addUserOption((option) => 
            option.setName('member')
            .setDescription('Участник')
            .setRequired(true))
        .addIntegerOption((option) => 
            option.setName('amount')
            .setDescription('Количетсво передаваемой валюты')
            .setRequired(true));

export default pay.toJSON();