//Import the BunCommand class.
const {BunCommand} = require("../command.js");
//Import danbooru.
const Danbooru = require("danbooru");
//Import the bot client.
const {client} = require("../../index.js");
//Grab the token object.
const token = require("../../token.json");
//Create a booru class.
const booru = new Danbooru(token.dbtoken);
//Import the chalk module for some sweet colors.
const chalk = require("chalk");
//Import god's bible.
const garf = require("garfield");

function booruembed(msg,tagstr){
    //Search Danbooru for posts with the 1st tag and the 2nd tag if it exists.
    booru.posts({tags:tagstr,random:true,limit:1}).then(function(post){
        msg.channel.send({embed:{
            "title": "Danbooru Post",
            "description": "ID: "+post[0].id,
            "url": "https://danbooru.donmai.us/posts/"+post[0].id,
            "footer": {
                "icon_url": client.user.avatarURL,
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
        nsfw:true,
        func:{
            default:{
                para:[{name:"tag1",optional:true},{name:"tag2",optional:true},{name:"tag3",optional:true}],
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
            },
            id:{
                para:[{name:"id"}],
                run:function(msg,para){
                    booruembed(msg,"id:"+para.id);
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

module.exports = {danbooru,garfield};
