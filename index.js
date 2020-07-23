//Import the discord.js module.
const Discord = require("discord.js");
//Import the chalk module for some sweet colors.
const chalk = require("chalk");

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
    cmdhandler.start(client, prefix, cmds);
    pfpchanger.start(client, prefix);
});

//Grab the CommandHandler and PFPChanger classes.
const {CommandHandler} = require("./bin/commandhandler.js");
const {PFPChanger} = require("./bin/pfpchanger.js");

//Load command scripts.
const util = require("./bin/commands/util.js");
const fun  = require("./bin/commands/fun.js");
const doll = require("./bin/commands/dolls.js");
const test = require("./bin/commands/test.js");

//Make a command array.
var cmds = [
    util.help,
    util.invite,
    fun.danbooru,
    fun.garfield,
    doll.dollcmd,
    test.whole
];

//Export the client, prefix, and command list for other scripts.
module.exports = {client,prefix,cmds};

//Grab the token.
const token = require("./token.json");
//Sign in using the token.
client.login(token.token);
