//Import the BunCommand class.
const {BunCommand} = require("../command.js");

const help = new BunCommand("help",{
    func:{default:{run:function(msg){
        msg.channel.send("**Under Construction!**");
    }}}
});

const invite = new BunCommand("invite",{
    func:{default:{run:function(msg){
        msg.channel.send("My invite is in my webpage!\nhttps://kikasuru.github.io/bunbot/");
    }}}
});

module.exports = {help,invite};
