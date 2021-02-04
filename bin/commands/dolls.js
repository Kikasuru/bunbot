//Import canvas.
const canvas = require("canvas");
//Import the BunCommand class.
const {BunCommand} = require("../command.js");
//Import dolls and areas from the doll index.
const {doll,area} = require("../dolls/index.js");
// Import the client from index
const {client} = require("../../index.js");

const dollcmd = new BunCommand("doll",{
    alias:["d"],
    func:{
        default:{
            run:function(msg){
                msg.channel.send("Coming soon!");
            }
        },

        emotes:{
            devonly:true,
            para:[{name:"start"}],
            run:function(msg,para){
                //Define a variable for the server's emoji manager.
                const emoteManager = msg.guild.emojis;
                //Define an image and set it to doll spritesheet.
                const img = new canvas.Image();
            	img.src = "./assets/dollsheet.png";

                //Get the keys for all of the dolls.
                var dollNames = Object.keys(doll);
                //Remove the start of the keys.
                dollNames.splice(0,parseInt(para.start));
                //Remove all of the keys after 50+start.
                dollNames.splice(50+parseInt(para.start),-1);

                dollNames.forEach(function(e){
                    //Make a canvas for the new emote and make a context for it.
                    const emote = canvas.createCanvas(32,32);
                    const ctx = emote.getContext('2d');

                    //Draw the doll onto the canvas.
                    ctx.drawImage(img,doll[e].flags.spr[0]*32,doll[e].flags.spr[1]*32,32,32,0,0,32,32);

                    //Create the emote.
                    msg.guild.createEmoji(emote.toBuffer(),"doll_"+e);
                });
            }
        },
        
        emotetest:{
            devonly:true,
            para:[{name:"doll",optional:true}],
            run:function(msg,para){
                let emotedoll = "";

                // Check if the doll parameter is used and points to a valid doll
                if (para.doll && Object.keys(doll).includes(para.doll)) {
                    // Set the emote to this doll
                    emotedoll = para.doll;

                    msg.channel.send(`${doll[emotedoll].grabEmote(client)}`);
                }
            }
        }
    }
});

module.exports.commands = {dollcmd};
