//Import SQLite.
const sqlite3 = require("sqlite3");

//Connect to the database file.
var db = new sqlite3.Database("../../data.db", function(err){
    if(err) console.log(err);
});

// Create each SQL table if it doesn't already exist
db.run(`
    CREATE TABLE IF NOT EXISTS user (
        id INTEGER NOT NULL,
        level INTEGER DEFAULT 0,
        exp INTEGER DEFAULT 0
    );

    CREATE TABLE IF NOT EXISTS server (
        id INTEGER NOT NULL,
        dollarea INTEGER,
        dollareachng INTEGER,
        shop TEXT
    );

    CREATE TABLE IF NOT EXISTS dolls (
        type TEXT,
        name TEXT,
        owner INTEGER,
        per TEXT,
        friends TEXT,
        orgnl INTEGER
    );
`);

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
            res(new Doll(id,row.type,row.name,row.owner,row.per,row.friends,row.orgnl));
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
        db.get(`INSERT INTO doll (type,name,personality,trust,friends,original)
        VALUES ((?),(?),(?),(?),(?),(?),(?))`,[doll.type.iname,doll.name,doll.personality,doll.friends,doll.original],function(err,row){
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

module.exports = {getUserData, getDolls, getDollData, setDollData, newDoll};