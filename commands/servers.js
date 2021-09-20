const { MessageEmbed } = require("discord.js");
const i18n = require("../util/i18n");

module.exports = {
  name: "servers",
  aliases: ["svr"],
  execute(message, args, client) {
    let serverlist = ''
    client.guilds.cache.forEach((guild) => {
        serverlist = serverlist.concat(" - **" + guild.name + ":** ID: " + guild.id + "\n")
    })

    const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Servidores que utilizam o VMusic", '')
    .setDescription(serverlist)
    if (message.author.id === '279990044884729859') return message.channel.send({embed});
    message.channel.send(':x: Comando restrito');
  }
};
