//Get the pfp list.
const profile = require("../assets/profile_pictures/index.json");
//Import the chalk module for some sweet colors.
const chalk = require("chalk");

//Create a function for changing the profile picture and status.
function change(client, prefix){
    //Get the pfp id.
    var pfp = getRandomInt(profile.pictures.length);
    //Set the avatar.
    client.user.setAvatar("./assets/profile_pictures/"+profile.pictures[pfp].image);
    //Set the status.
    client.user.setActivity(prefix+"help | Danbooru Sauce: "+profile.pictures[pfp].sauce,{type:0});
    //Log this data.
    console.log(chalk.gray("PROFILE PICTURE SET TO: ")+profile.pictures[pfp].sauce);
}

class PFPChanger {
    constructor(){}
    start(client, prefix){
        function changeWithCP() {change(client, prefix)};
        changeWithCP();
        //Set an interval to trigger every 30 minutes.
        setInterval(changeWithCP,1800000);
    }
}

//Export PFPChanger.
module.exports.PFPChanger = PFPChanger;

//Utility Functions
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
