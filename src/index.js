import { config } from 'dotenv';
import { Client, GatewayIntentBits, Routes} from 'discord.js';
import { ActionRowBuilder, StringSelectMenuBuilder } from '@discordjs/builders';
import { REST } from '@discordjs/rest';

import payCommand from './commands/pay.js'
import moneyCommand from './commands/money.js'
import roleCommand from './commands/role.js'
import banCommand from './commands/ban.js'
import pingCommand from './commands/ping.js'
import setCommand from './commands/set.js'


config();

const TOKEN = process.env.TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;
const GUILD_ID = process.env.GUILD_ID;
const FATHER = process.env.FATHER;

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
        if (interaction.commandName === 'set') {
            console.log(interaction);
            const actionRowComponent = new ActionRowBuilder().setComponents(
                new StringSelectMenuBuilder().setCustomId('settings').setOptions([
                    { label: 'var1', value: 'var1' },
                    { label: 'var2', value: 'var2' },
                    { label: 'var3', value: 'var3' },
                ])
            );
            interaction.reply({
                components: [actionRowComponent.toJSON()]
            });
        } else {
            interaction.reply(`${interaction.commandName.toString()}:\n\t${interaction.toString()}`);
        }

    }
});

async function init() {
    const commands = [payCommand, moneyCommand, roleCommand, banCommand, pingCommand, setCommand];

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

client.on('messageCreate', (message) => {
    if (message.content == 'des' && message.author.id == FATHER) {
        console.log(`des`);
        client.destroy();
    }
});

export default init();