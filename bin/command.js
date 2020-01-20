//Import the chalk module for some sweet colors.
const chalk = require("chalk");
//Get the client and prefix from the main script.
const {client,prefix} = require("../index.js");

//Make a command count.
var commandCount = 0;

class BunCommand {
    constructor(name,help,parameters,callback){
        this.name = name;
        this.help = help;

        //Initialise the command.
        client.on("message", function(msg){
            //If the content starts with the command..
            if(msg.content.startsWith(prefix+name)){
                //Log that a command execution has been attempted.
                console.log(msg.author.tag+chalk.gray(" HAS EXECUTED ")+msg.content);

                //Split the message.
                var splt = msg.content.split(" ");
                //Check if the parameters are set.
                if(splt.length === parameters.length+1){
                    //If they are, index the parameters into an object.
                    var para = {};
                    parameters.forEach(function(e,i){
                        para[e] = splt[i+1];
                    });

                    //Finnaly, execute the command.
                    callback(msg,para);
                } else {
                    //Send an error message.
                    msg.reply("**Incorrect parameters.**\n\nParameters needed are:\n``"+parameters.join(" ")+"``");
                    //Log an error message.
                    console.log(chalk.red("ERROR: INCORRECT PARAMETERS"));
                }
            }
        });

        //Log the command that has been added.
        console.log(chalk.gray("COMMAND ")+name+chalk.gray(" LOADED"));
        //Increase the command count.
        commandCount++;
    }
}

//Export BunCommand.
module.exports.BunCommand = BunCommand;

//Load command scripts.
var util = require("./commands/util.js");

const help = new BunCommand("help","Show tooltips and help on commands!",[],function(msg,para){
    //Make an object for the commands featured in this help screen.
    const cmds = [
        {
            name:"Utility",
            cmds:[
                help,
                util.invite
            ]
        }
    ]

    //Make a help message based on the command object.
    var helpStg = "";

    cmds.forEach(function(ecat){
        helpStg += "\n**"+ecat.name+"**\n```"
        ecat.cmds.forEach(function(ecmd,i){
            helpStg += "  - "+ecmd.name+" - "+ecmd.help+"\n";
        });
        helpStg +="```\n\n"
    });
    msg.channel.send(helpStg);
});

//Export the command count.
module.exports.commandCount = commandCount;
