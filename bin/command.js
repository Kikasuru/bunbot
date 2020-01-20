//Import the chalk module for some sweet colors.
const chalk = require("chalk");
//Get the client and prefix from the main script.
const {client,prefix} = require("../index.js");

class BunCommand {
    constructor(name,help,parameters,func){
        this.name = name;
        this.help = help;
        this.para = parameters;
        this.func = func;

        //Log the command that has been created.
        console.log(chalk.gray("COMMAND ")+name+chalk.gray(" CREATED"));
    }
}

//Start the command handler.
client.on("message", function(msg){
    //If the content starts with the prefix..
    if(msg.content.startsWith(prefix)){
        //Split the message.
        var splt = msg.content.split(" ");
        //Find the command.
        var cmd = cmds.find(function(e){return prefix+e.name === splt[0]});

        //If a command has been found..
        if(cmd){
            //Log that a command execution has been attempted.
            console.log(msg.author.tag+chalk.gray(" HAS EXECUTED ")+msg.content);
            //Check if the parameters are set.
            if(splt.length === cmd.para.length+1){
                //If they are, index the parameters into an object.
                var para = {};
                cmd.para.forEach(function(e,i){
                    para[e] = splt[i+1];
                });

                //Finnaly, execute the command.
                cmd.func(msg,para);
            } else {
                //Send an error message.
                msg.channel.send("**Incorrect parameters.**\n\nParameters needed are:\n``"+cmd.para.join(" ")+"``");
                //Log an error message.
                console.log(chalk.red("ERROR: INCORRECT PARAMETERS"));
            }
        }
    }
});

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

//Make a command array.
var cmds = [
    help,
    util.invite
];

//Export the command count.
module.exports.commandCount = cmds.length;
