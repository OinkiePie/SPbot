import { SlashCommandBuilder } from 'discord.js';

const ban = new SlashCommandBuilder()
    .setName('ban')
    .setDescription('Заблокировать пользователя')
    .addUserOption((option) =>
        option
            .setName('участник')
            .setDescription('Целевой участник')
            .setRequired(true))
    .addStringOption((option) =>
        option
            .setName('длительность')
            .setDescription('Длительность блокировки (Бессрочно если не указано)'))
    .addStringOption((option) =>
        option
            .setName('удалить_сообщения')
            .setDescription('Сколько недавних сообщений пользователя нужно удалить (Ничего если не указано)')
            .setChoices(
                { name: 'Ничего не удалять', value: 'Ничего не удалять' },
                { name: 'За последний час', value: 'За последний час' },
                { name: 'За последние 6 часов', value: 'За последние 6 часов' },
                { name: 'За последние 12 часов', value: 'За последние 12 часа' },
                { name: 'За последние 24 часа', value: 'За последние 24 часа' },
                { name: 'За последние 3 дня', value: 'За последние 3 дня' },
                { name: 'За последние 7 дней', value: 'За последние 7 дней' }))
    .addStringOption((option) =>
        option
            .setName('причина')
            .setDescription('Причина блокировки'))

export default ban.toJSON();