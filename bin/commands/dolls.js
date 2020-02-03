//Import the BunCommand class.
const {BunCommand} = require("../command.js");

class DollType {
    constructor(iname,name,baseper){
        this.iname   = iname;
        this.name    = name;
        this.baseper = baseper;
    }

    createDoll(){

    }
}

class Doll {
    constructor(id,type,name,owner,per,friend,orgnl,shiny){
        this.id     = id;
        this.type   = type;
        this.name   = name;
        this.owner  = owner;
        this.per    = per;
        this.friend = friend;
        this.orgnl  = orgnl;
        this.shiny  = shiny;
    }
}

class Area {
    constructor(iname,name,dollts){
        this.iname  = iname;
        this.name   = name;
        this.dollts = dollts; //It's not what you're thinking it is.
    }

    getDoll(){

    }
}

const dollcmd = new BunCommand("doll",{
    alias:["d"],
    func:{
        default:{
            run:function(msg){

            }
        }
    }
});

module.exports = {doll};

//Doll Types
var doll = {};

doll.reimu = new DollType("reimu","Reimu Hakurei",{});
doll.marisa = new DollType("marisa","Marisa Kirisame",{});

//Areas
var area = {};

area.hakurei = new Area("hakurei","Hakurei Shrine",[
    {doll:doll.reimu,prob:80},
    {doll:doll.marisa,prob:70}
]);
