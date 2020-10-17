//Import the BunCommand class.
const {BunCommand} = require("../command.js");
//Import the discord.js module.
const Discord = require("discord.js");
//Import danbooru.
const Danbooru = require("danbooru");
//Import the bot client.
const {client} = require("../../index.js");
//Grab the config object.
const config = require("../../config.json");
//Create a booru class.
const booru = new Danbooru(config.dbtoken);
//Import the chalk module for some sweet colors.
const chalk = require("chalk");
//Import god's bible.
const garf = require("garfield");
//Import canvas.
const canvas = require("canvas");

//Register Fonts.
canvas.registerFont("./assets/fonts/CC Wild Words Roman.ttf", {family:"CC Wild Words Roman"});

function booruembed(msg,tagstr){
    //Search Danbooru for posts with the 1st tag and the 2nd tag if it exists.
    booru.posts({tags:tagstr,random:true,limit:1}).then(function(post){
        if(!post[0]){
            //Send an error message.
            msg.channel.send("**No post was found meeting the criteria. Maybe you mispelt a tag?**");
            //Log an error message.
            console.log(chalk.red("ERROR: NO POSTS"));
            return;
        }
        msg.channel.send({embed:{
            "title": "Danbooru Post",
            "description": "ID: "+post[0].id,
            "url": "https://danbooru.donmai.us/posts/"+post[0].id,
            "footer": {
                "text": "BunBot"
            },
            "image": {
                "url": post[0].file_url
            },
            "author": {
                "name": msg.author.username,
                "icon_url": msg.author.avatarURL
            },
            "fields": [
                {
                    "name": "Date",
                    "value": post[0].created_at,
                    "inline": true
                },
                {
                    "name": "Rating",
                    "value": post[0].rating,
                    "inline": true
                },
                {
                    "name": "Score",
                    "value": post[0].score,
                    "inline": true
                },
                {
                    "name": "Favorites",
                    "value": post[0].fav_count,
                    "inline": true
                },
                {
                    "name": "Tags",
                    "value": "``"+post[0].tag_string+"``"
                }
            ]
        }});
    }).catch(function(err){
        //Send an error message.
        msg.channel.send("**Danbooru Error.**\n\n``"+err+"``");
        //Log an error message.
        console.log(chalk.red("ERROR: "+err));
    });
}

const danbooru = new BunCommand("danbooru",{
        alias:["db"],
        func:{
            default:{
                nsfw:true,
                para:[{name:"tag1"},{name:"tag2",optional:true},{name:"tag3",optional:true}],
                run:function(msg,para){
                    //Define the string query.
                    var tagstr = "";
                    //If tag1 exists, add it to the query.
                    if(para.tag1) tagstr += " "+para.tag1;
                    //If tag2 exists, add it to the query.
                    if(para.tag2) tagstr += " "+para.tag2;
                    //If tag3 exists, add it to the query.
                    if(para.tag3) tagstr += " "+para.tag3;

                    //Send the picture.
                    booruembed(msg,tagstr);
                }
            }
        }
    }
);

const garfield = new BunCommand("garfield",{
        alias:["bible"],
        func:{
            default:{
                run:function(msg){
                    msg.channel.send(garf.latest());
                }
            },
            rand:{
                run:function(msg){
                    msg.channel.send(garf.random());
                }
            }
        }
    }
);

//Ported from Niit.
const suwako = new BunCommand("suwako",{
    func:{
        default:{
            para:[{name:"text",whole:true}],
            run:function(msg, para){
            	msg.channel.startTyping();
            	const suwa = canvas.createCanvas(798, 897);
            	const ctx = suwa.getContext('2d');
            	const img = new canvas.Image();
            	img.src = "./assets/suwako.png";
            	ctx.drawImage(img, 0, 0);
            	ctx.font = "30px CC Wild Words Roman";
            	ctx.textAlign = "center";
            	ctx.textBaseline = "middle";
            	ctx.fillColor = "#000000";
            	var lines = fragmentText(para.text, 224, ctx);
            	lines.forEach(function(element, index){
            		ctx.fillText(element, 175, (715-(((lines.length)*36) - (lines.length/2)*36))+(index*36));
            	})
            	const attachment = new Discord.Attachment(suwa.toBuffer(), 'suwako.png');
            	msg.channel.send(attachment).then(() => {
            		msg.channel.stopTyping();
            	});
            }
        }
    }
});

module.exports = {danbooru,garfield,suwako};

//Utility Functions
function fragmentText(text, maxWidth, ctx) {
    var words = text.split(' '),
        lines = [],
        line = "";
    if (ctx.measureText(text).width < maxWidth) {
        return [text];
    }
    while (words.length > 0) {
        var split = false;
        while (ctx.measureText(words[0]).width >= maxWidth) {
            var tmp = words[0];
            words[0] = tmp.slice(0, -1);
            if (!split) {
                split = true;
                words.splice(1, 0, tmp.slice(-1));
            } else {
                words[1] = tmp.slice(-1) + words[1];
            }
        }
        if (ctx.measureText(line + words[0]).width < maxWidth) {
            line += words.shift() + " ";
        } else {
            lines.push(line);
            line = "";
        }
        if (words.length === 0) {
            lines.push(line);
        }
    }
    return lines;
}
