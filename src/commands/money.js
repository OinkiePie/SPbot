import { SlashCommandBuilder } from 'discord.js';

const money = new SlashCommandBuilder()
        .setName('money')
        .setDescription('Управление валютой')
        .addStringOption((option) =>
            option.setName('operation')
            .setDescription('Операция')
            .setRequired(true)
            .setChoices(
                { name: 'add', description: 'Добавить на баланс', value: 'add'},
                { name: 'remove', description: 'Удалить с баланса', value: 'remove'}))
        .addUserOption((option) =>
            option.setName('member')
            .setDescription('Участник')
            .setRequired(true))
        .addIntegerOption((option) => 
            option.setName('amount')
            .setDescription('Количетсво валюты')
            .setRequired(true));

export default money.toJSON();