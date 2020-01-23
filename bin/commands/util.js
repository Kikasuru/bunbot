//Import the BunCommand class.
const {BunCommand} = require("../command.js");

const help = new BunCommand("help",{
    func:{default:{run:function(msg){
        msg.channel.send("**Under Construction!**");
    }}}
});

const invite = new BunCommand("invite",{
    func:{default:{run:function(msg){
        msg.channel.send("Here's your invite!\nhttps://discordapp.com/api/oauth2/authorize?client_id=668687198035509254&permissions=268741696&scope=bot");
    }}}
});

module.exports = {help,invite};
