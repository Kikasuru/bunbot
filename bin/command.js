//Import the chalk module for some sweet colors.
const chalk = require("chalk");
//Get the client and prefix from the main script.
const {client,prefix} = require("../index.js");

class BunCommand {
    constructor(name,options,func){
        this.name = name;
        this.optn = options;
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
        splt[0] = splt[0].replace(prefix,"");
        //Check if the name equals the name or an alias of the command.
        var cmd = cmds.find(function(e){return e.name === splt[0] || (e.optn.alias && e.optn.alias.includes(splt[0]))});

        //If a command has been found..
        if(cmd){
            //Log that a command execution has been attempted.
            console.log(msg.author.tag+chalk.gray(" HAS EXECUTED ")+msg.content);
            //Check if the command is NSFW and not in a NSFW channel or DM channel.
            if(cmd.optn.nsfw && (!msg.channel.nsfw || !msg.type === "dm")){
                //Send an error message.
                msg.channel.send("**Command is NSFW.**\nPlease run this command in an NSFW channel or a DM to the bot.");
                //Log an error message.
                console.log(chalk.red("ERROR: NOT NSFW"));
                return;
            }
            //Check if the command needs parameters.
            if(cmd.optn.para){
                //Go through each parameter and index variables into an object.
                var para = {};
                var paraFilled = true;

                for(var i=0;i<cmd.optn.para.length;i++){
                    //Check if a variabe is avalible for this parameter.
                    if(splt[i+1]){
                        //Add an entry for this command.
                        para[cmd.optn.para[i].name] = splt[i+1];
                    } else {
                        //Check if this parameter is not optional.
                        if(!cmd.optn.para[i].optional) paraFilled = false;
                    }
                }

                //Check if the parameters are set.
                if(paraFilled){
                    //Execute the command.
                    cmd.func(msg,para);
                } else {
                    //Send an error message.
                    msg.channel.send("**Incorrect parameters.**\n\nParameters needed are:\n``"+cmd.optn.para.join(" ")+"``");
                    //Log an error message.
                    console.log(chalk.red("ERROR: INCORRECT PARAMETERS"));
                }
            } else {
                //If not, execute the command.
                cmd.func(msg);
            }

        }
    }
});

//Export BunCommand.
module.exports.BunCommand = BunCommand;

//Load command scripts.
const util = require("./commands/util.js");

const help = new BunCommand("help",{help:{desc:"Show tooltips and help on commands!"}},function(msg){
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
        helpStg += "**"+ecat.name+"**\n```"
        ecat.cmds.forEach(function(ecmd,i){
            helpStg += "  - "+ecmd.name+" - "+ecmd.optn.help.desc+"\n";
        });
        helpStg +="```\n"
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
