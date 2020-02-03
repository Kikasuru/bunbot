//Import SQLite.
const sqlite3 = require("sqlite3");

//Connect to the database file.
var db = new sqlite3.Database("../../data.db", function(err){
    if(err) console.log(err);
});

//Create a sql schema.
var schema = {
    user:[
        {name:"id",type:"INTEGER"},
        {name:"level",type:"INTEGER"},
        {name:"exp",type:"INTEGER"}
    ],
    server:[
        {name:"id",type:"INTEGER"},
        {name:"dollarea",type:"INTEGER"},
        {name:"shop",type:"TEXT"}
    ],
    dolls:[
        {name:"type",type:"TEXT"},
        {name:"name",type:"TEXT"},
        {name:"owner",type:"INTEGER"},
        {name:"per",type:"TEXT"},
        {name:"friend",type:"TEXT"},
        {name:"orgnl",type:"INTEGER"},
        {name:"shiny",type:"INTEGER"}
    ]
}



function getUserData(user){

}

function getDolls(user){
    return new Promise(function(res,rej){
        db.get("SELECT rowid FROM doll WHERE owner = (?)",[user.id],function(err,rows){
            //If error, reject with the error.
            if(err) {
                rej(err);
                return;
            }
            //Otherwise, resolve with the information.
            res(rows);
        });
    });
}

function getDollData(id){
    return new Promise(function(res,rej){
        db.get("SELECT * FROM doll WHERE rowid = (?)",[id],function(err,row){
            //If error, reject with the error.
            if(err) {
                rej(err);
                return;
            }
            //Otherwise, resolve with the doll.
            res(new Doll(id,row.type,row.name,row.owner,row.per,row.friend,row.orgnl,row.shiny));
        });
    });
}

function setDollData(id,col,value){
    return new Promise(function(res,rej){
        db.run("UPDATE doll SET (?) = (?) WHERE rowid = (?)",[col,value,id],function(err){
            //If error, reject with the error.
            if(err) {
                rej(err);
                return;
            }
            //Otherwise, resolve.
            res();
        });
    });
}

function newDoll(doll,user){
    return new Promise(function(res,rej){
        db.get(`INSERT INTO doll (type,name,personality,trust,friends,original,shiny)
        VALUES ((?),(?),(?),(?),(?),(?),(?))`,[doll.type.iname,doll.name,doll.personality,doll.friends,doll.original,doll.shiny:1?0],function(err,row){
            //If error, reject with the error.
            if(err) {
                rej(err);
                return;
            }
            //If a user is specified, set the doll's owner.
            if(user) setDollData(row.rowid,"owner",user.id);
            //Resolve with the ID of the doll.
            res(row.rowid);
        });
    });
}
