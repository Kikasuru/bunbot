//Import the BunCommand class.
const {BunCommand} = require("../command.js");

const invite = new BunCommand("invite",{help:{desc:"Display the invite for the bot."}},function(msg){
    msg.channel.send("Here's your invite!\nhttps://discordapp.com/api/oauth2/authorize?client_id=668687198035509254&permissions=268741696&scope=bot");
});

module.exports = {invite}
