const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'Check the bot\'s ping',
    execute(message, args) {
        const ping = message.client.ws.ping;
        const embed = new EmbedBuilder()
            .setColor('#476DE1')
            .setTitle('Bot Latency')
            .setDescription(`📊 The bot's ping is ${ping}ms.`)
            .setTimestamp();


        message.reply({ embeds: [embed] });
    },
};
