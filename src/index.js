import { config } from 'dotenv';
import { Client, GatewayIntentBits, Routes } from 'discord.js';
import { REST } from '@discordjs/rest';

import payCommand from './commands/pay.js'
import moneyCommand from './commands/money.js'
import roleCommand from './commands/role.js'
import banCommand from './commands/ban.js'
import pingCommand from './commands/ping.js'

config();

const TOKEN = process.env.TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;
const GUILD_ID = process.env.GUILD_ID;

const rest = new REST({ version: '10' }).setToken(TOKEN);

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
});

client.on('ready', () => { console.log(`Bot ${client.user.tag} has logged in.`) });

client.on('interactionCreate', (interaction) => {
    if (interaction.isChatInputCommand()) {
        console.log('Command received');
        interaction.reply(interaction.toString());
    }
});

async function init() {
    const commands = [payCommand, moneyCommand, roleCommand, banCommand, pingCommand];

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

init();

client.on('messageCreate', (message) => {
    if (message.content == 'des' && message.author.id == '804950325265825815') {
        console.log(`des`);
        client.destroy();
    }
});