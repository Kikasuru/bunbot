//Import the chalk module for some sweet colors.
const chalk = require("chalk");
//Get the client and prefix from the main script.
const {client,prefix} = require("../index.js");

class BunCommand {
    constructor(name,data){
        this.name = name;
        this.data = data;

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
        var func = splt[0].split(":");
        //Check if the name equals the name or an alias of the command.
        var cmd = cmds.find(function(e){return e.name === func[0] || (e.data.alias && e.data.alias.includes(func[0]))});

        //If a command has been found..
        if(cmd){
            //Log that a command execution has been attempted.
            console.log(msg.author.tag+chalk.gray(" HAS EXECUTED ")+msg.content);
            //Check if an inital function exists and execute it and save the variable if it does.
            var init;
            if(cmd.data.func.init) init = cmd.data.func.init(msg);
            //Check if a function has been called and if said function exists.
            if(func[1] && cmd.data.func[func[1]]){
                //Change func to the name of the function.
                func = func[1];
            } else {
                //Change func to default.
                func = "default";
            }
            //Check if the command is NSFW and not in a NSFW channel or DM channel.
            if(cmd.data.nsfw && (!msg.channel.nsfw || !msg.type === "dm")){
                //Send an error message.
                msg.channel.send("**Command is NSFW.**\nPlease run this command in an NSFW channel or a DM to the bot.");
                //Log an error message.
                console.log(chalk.red("ERROR: NOT NSFW"));
                return;
            }
            //Check if the command needs parameters.
            if(cmd.data.func[func].para){
                //Go through each parameter and index variables into an object.
                var para = {};
                var paraFilled = true;

                for(var i=0;i<cmd.data.func[func].para.length;i++){
                    //Check if a variabe is avalible for this parameter.
                    if(splt[i+1]){
                        //Add an entry for this command.
                        para[cmd.data.func[func].para[i].name] = splt[i+1];
                    } else {
                        //Check if this parameter is not optional.
                        if(!cmd.data.func[func].para[i].optional) paraFilled = false;
                    }
                }

                //Check if the parameters are set.
                if(paraFilled){
                    //Execute the command.
                    cmd.data.func[func].run(msg,para,init?init:null);
                } else {
                    //Send an error message.
                    msg.channel.send("**Incorrect parameters.**\n\nParameters needed are:\n``"+cmd.data.para.join(" ")+"``");
                    //Log an error message.
                    console.log(chalk.red("ERROR: INCORRECT PARAMETERS"));
                }
            } else {
                //If not, execute the command.
                cmd.data.func[func].run(msg,init?init:null);
            }

        }
    }
});

//Export BunCommand.
module.exports.BunCommand = BunCommand;

//Load command scripts.
const util = require("./commands/util.js");
const fun  = require("./commands/fun.js");
const doll = require("./commands/dolls.js");

//Make a command array.
var cmds = [
    util.help,
    util.invite,
    fun.danbooru,
    fun.garfield,
    doll.dollcmd
];

//Export the command count.
module.exports.commandCount = cmds.length;
