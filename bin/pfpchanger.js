//Get the client and prefix from the main script.
const {client,prefix} = require("../index.js");
//Get the pfp list.
const profile = require("../assets/profile_pictures/index.json");
//Import the chalk module for some sweet colors.
const chalk = require("chalk");

//Create a function for changing the profile picture and status.
function change(){
    //Get the pfp id.
    var pfp = getRandomInt(profile.pictures.length);
    //Set the avatar.
    client.user.setAvatar("./assets/profile_pictures/"+profile.pictures[pfp].image);
    //Set the status.
    client.user.setActivity(prefix+"help | Danbooru Sauce: "+profile.pictures[pfp].sauce,{type:0});
    //Log this data.
    console.log(chalk.gray("PROFILE PICTURE SET TO: ")+profile.pictures[pfp].image);
}

client.on("ready", function(){
    change();
    //Set an interval to trigger every 30 minutes.
    setInterval(change,1800000);
});

//Utility Functions
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
