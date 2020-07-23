//Import the chalk module for some sweet colors.
const chalk = require("chalk");

class BunCommand {
    constructor(name,data){
        this.name = name;
        this.data = data;

        //Log the command that has been created.
        console.log(chalk.gray("COMMAND ")+name+chalk.gray(" CREATED"));
    }
}

//Export BunCommand.
module.exports.BunCommand = BunCommand;
