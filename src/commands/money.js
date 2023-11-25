import { SlashCommandBuilder } from 'discord.js';

const money = new SlashCommandBuilder()
    .setName('money')
    .setDescription('Управление валютой')
    .addSubcommand((subcommand) =>
        subcommand
            .setName('add')
            .setDescription('Добавить деньги на баланс')
            .addUserOption((option) =>
                option
                    .setName('участник')
                    .setDescription('Целевой участник')
                    .setRequired(true))
            .addIntegerOption((option) =>
                option
                    .setName('количество')
                    .setDescription('Количетсво валюты')
                    .setRequired(true))

    )
    .addSubcommand((subcommand) =>
        subcommand
            .setName('remove')
            .setDescription('Удалить деньги с баланса')
            .addUserOption((option) =>
                option
                    .setName('участник')
                    .setDescription('Целевой участник')
                    .setRequired(true))
            .addIntegerOption((option) =>
                option
                    .setName('количество')
                    .setDescription('Количетсво валюты')
                    .setRequired(true))
    )

export default money.toJSON();