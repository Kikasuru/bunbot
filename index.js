//Import the discord.js module.
const Discord = require("discord.js");
//Import the chalk module for some sweet colors.
const chalk = require("chalk");
//Import FileSystem
const fs = require("fs");

//Create an instance of a Discord client.
const client = new Discord.Client();

//Set the prefix.
const prefix = "b*";

client.on("ready", function(){
    console.log(chalk.green("BUNBOT API STARTED"));
    console.log(chalk.gray("COMMANDS LOADED: ")+cmds.length);
    console.log(chalk.gray("LOGGED IN AS: ")+client.user.tag);

    //Create new CommandHandler and PFPChanger objects.
    cmdhandler = new CommandHandler();
    pfpchanger = new PFPChanger();

    //Start these new objects.
    client.on("message", cmdhandler.handler(prefix, cmds));
    pfpchanger.start(client, prefix);
});

//Grab the CommandHandler and PFPChanger classes.
const {CommandHandler} = require("./bin/commandhandler.js");
const {PFPChanger} = require("./bin/pfpchanger.js");

//Make a command array.
var cmds = [];

//Read the command directiory.
fs.readdir("./bin/commands", function(err,files){
    files.forEach(function(e){
        //Require the command script.
        const i = require("./bin/commands/" + e);

        //Put all of the commands into the command array.
        Object.keys(i.commands).forEach(function(cmd){
            cmds.push(i.commands[cmd]);
        });
    });

    //Grab the token from the config file.
    const config = require("./config.json");
    //Sign in using the token.
    client.login(config.token);
});

//Export the client, prefix, and command list for other scripts.
module.exports = {client,prefix,cmds};
