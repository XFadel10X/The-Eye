const Discord = require("discord.js")
const client = new Discord.Client({intents: 3276799})
const config = require("./config")

client.login(config.token)

client.on("ready", async () => {

    console.log(`${client.user.tag} est bien en ligne !`)
})