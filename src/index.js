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
        console.log('helo worl')
        interaction.channel.send({ content: 'Bot is shutting down' })
    }
});

async function main() {
    const commands = [
        {
            name: 'pay',
            description: 'Give someone money', 
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