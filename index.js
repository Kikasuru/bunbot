//Import the discord.js module.
const Discord = require("discord.js");
//Import the chalk module for some sweet colors.
const chalk = require("chalk");

//Create an instance of a Discord client.
const client = new Discord.Client();

//Set the prefix.
const prefix = "b*"

client.on("ready", function(){
    console.log(chalk.green("BUNBOT API STARTED"));
    console.log(chalk.gray("COMMANDS LOADED: ")+commandCount);
    console.log(chalk.gray("LOGGED IN AS: ")+client.user.tag);
});

//Export the client and prefix for other scripts.
module.exports = {client,prefix};
//Load the Profile Picture changing script.
require("./bin/pfpchanger.js");
//Load the commands, and grab the command count from the file.
const {commandCount} = require("./bin/command.js");

//Grab the token.
const token = require("./token.json");
//Sign in using the token.
client.login(token.token);
