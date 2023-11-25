import { SlashCommandBuilder } from 'discord.js';

const role = new SlashCommandBuilder()
    .setName('role')
    .setDescription('Управление ролями')
    .addSubcommand((subcommand) =>
        subcommand
            .setName('add')
            .setDescription('Добавить роль')
            .addUserOption((option) =>
                option
                    .setName('участник')
                    .setDescription('Целевой участник')
                    .setRequired(true))
            .addRoleOption((option) =>
                option
                    .setName('роль')
                    .setDescription('Целевая роль')
                    .setRequired(true))
            .addStringOption((option) =>
                option
                    .setName('длительность')
                    .setDescription('Длительность блокировки (Бессрочно если не указано)'))
    )
    .addSubcommand((subcommand) =>
        subcommand
            .setName('remove')
            .setDescription('Удалить роль')
            .addUserOption((option) =>
                option
                    .setName('участник')
                    .setDescription('Целевой участник')
                    .setRequired(true))
            .addRoleOption((option) =>
                option
                    .setName('роль')
                    .setDescription('Целевая роль')
                    .setRequired(true))
    )


export default role.toJSON();