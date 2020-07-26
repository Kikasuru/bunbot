//Import the chalk module for some sweet colors.
const chalk = require("chalk");
//Grab the config file, this has the developer's ids in it.
const config = require("../config.json");

class CommandHandler {
    constructor(){}
    handler(prefix, cmds){
        //Return the command handler.
        return function(msg){
            //If the content starts with the prefix..
            if(msg.content.startsWith(prefix)){
                //Split the message.
                var splt = msg.content.split(" ");
                //Remove the prefix from the command.
                splt[0] = splt[0].replace(prefix,"");
                //Set the function to default, we'll change this later.
                var func = "default"
                //Check if the name equals the name or an alias of the command.
                var cmd = cmds.find(function(e){return e && (e.name === splt[0] || (e.data.alias && e.data.alias.includes(splt[0])))});
                //Remove the command from splt.
                splt.shift()

                //If a command has been found..
                if(cmd){
                    //Log that a command execution has been attempted.
                    console.log(msg.author.tag+chalk.gray(" HAS EXECUTED ")+msg.content);
                    //Check if an inital function exists and execute it and save the variable if it does.
                    var init;
                    if(cmd.data.func.init) init = cmd.data.func.init(msg);
                    //Check if the function referenced by the first parameter exists.
                    if(cmd.data.func[splt[0]]){
                        //Change func to the name of the function.
                        func = splt[0];
                        //Remove the function from the parameters.
                        splt.shift()
                    }
                    //Check if the function is NSFW and not in a NSFW channel or DM channel.
                    if(cmd.data.func[func].nsfw && (!msg.channel.nsfw || !msg.type === "dm")){
                        //Send an error message.
                        msg.channel.send("**Command is NSFW.**\nPlease run this command in an NSFW channel or a DM to the bot.");
                        //Log an error message.
                        console.log(chalk.red("ERROR: NOT NSFW"));
                        return;
                    }
                    //Check if this function is a dev only command.
                    if(cmd.data.func[func].devonly && !config.devids.includes(msg.author.id)){
                        //Send an error message.
                        msg.channel.send("**Command is Dev-only.**\nPlease ask a developer to run this command.");
                        //Log an error message.
                        console.log(chalk.red("ERROR: NOT DEV"));
                        return;
                    }
                    //Check if the command needs parameters.
                    if(cmd.data.func[func].para){
                        //Go through each parameter and index variables into an object.
                        var para = {};
                        var paraFilled = true;

                        for(var i=0;i<cmd.data.func[func].para.length;i++){
                            //Check if a variabe is avalible for this parameter.
                            var paraVar = splt[i];
                            if(paraVar){
                                //Check if this parameter needs the whole sentence, and mash all the splits if so.
                                if(cmd.data.func[func].para[i].whole) paraVar = splt.join(" ")
                                //Add an entry for this command.
                                para[cmd.data.func[func].para[i].name] = paraVar;
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
                            msg.channel.send("**Incorrect parameters.**\n\nPlease check the information for this command here.\nhttps://github.com/Kikasuru/bunbot/wiki/Commands#"+cmd.name);
                            //Log an error message.
                            console.log(chalk.red("ERROR: INCORRECT PARAMETERS"));
                        }
                    } else {
                        //If not, execute the command.
                        cmd.data.func[func].run(msg,init?init:null);
                    }

                }
            }
        };
    }
}

//Export CommandHandler.
module.exports.CommandHandler = CommandHandler;
