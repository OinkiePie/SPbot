import { config } from 'dotenv'; 
import { Client, GatewayIntentBits, Routes } from 'discord.js';
import { REST } from '@discordjs/rest';

config();

const TOKEN = process.env.TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;
const GUILD_ID = process.env.GUILD_ID;

const rest = new REST({ version: '10'}).setToken(TOKEN);

const client = new Client ({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
});

client.on('ready', () => {console.log(`Bot ${client.user.tag} has logged in.`)});

client.on('interactionCreate', (interaction) => {
    if (interaction.isChatInputCommand()) {
        console.log('command');
        // interaction.reply(`Amount of money: ${interaction.options.getInteger('amount')}\nMember: ${interaction.options.getUser('member')}`);
        if (interaction.options.getString('operation') == 'add') {
            interaction.reply(`You ${interaction.options.getString('operation')}ed ${interaction.options.getInteger('amount')} money to ${interaction.options.getUser('member')}'s balance`);
        } else {
            interaction.reply(`You ${interaction.options.getString('operation')}ed ${interaction.options.getInteger('amount')} money to ${interaction.options.getUser('member')}'s balance`);
        }
    }
});

async function main() {
    const commands = [
        {
            name: 'pay',
            description: 'Перевести валюту другому участнику.', 
            options: [
                {
                    name: 'member',
                    description: 'Участник',
                    type: 6,
                    required: true,
                },
                {
                    name: 'amount',
                    description: 'Количетсво передаваемой валюты',
                    type: 4,
                    required: true,
                }
            ]
        },
        {
            name: 'money',
            description: 'Управление валютой',
            options: [
                {
                    name: 'operation',
                    description: 'Операция',
                    type: 3,
                    required: true,
                    choices: [
                        {
                            name: 'Add',
                            description: 'Добавить на баланс',
                            value: 'add'
                        },
                        {
                            name: 'Remove',
                            description: 'Удалить с баланса',
                            value: 'remove'
                        }
                    ]
                },
                {
                    name: 'member',
                    description: 'Участник',
                    type: 6,
                    required: true,
                },
                {
                    name: 'amount',
                    description: 'Количетсво валюты',
                    type: 4,
                    required: true,
                }
            ]
        }
    ];

    client.login(TOKEN);
    try {
        await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), {
            body: commands,
        });
        client.login(TOKEN);
    } catch (error) {
        console.log(error)
        console.log(`Apparently you can't use this bot :(`)
    }
}

main();

client.on('messageCreate', (message) => {
    if (message.content == 'des' && message.author.id == '804950325265825815') {
        console.log(`des`);
        client.destroy();
    }
});