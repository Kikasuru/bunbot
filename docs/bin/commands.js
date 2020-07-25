var helptext = [
    "BunBot Commands List",
    "",
    "--Utility--",
    "help - Redirects you to this site.",
    "invite - Redirects you to the main site, where the invite is.",
    "",
    "--Fun--",
    "danbooru - Search Danbooru for some cool anime images! (NSFW)",
    "\u00A0\u00A0Aliases: db",
    "garfield - Show the most recent page of the holy bible.",
    "\u00A0\u00A0Aliases: bible",
    "\u00A0\u00A0Functions:",
    "\u00A0\u00A0\u00A0\u00A0rand - Show a random page of the holy bible."
]

function init(){
    //Grab elements
    var lineCount = document.getElementById("linecount");
    var text = document.getElementById("text");

    //Go through each line of text.
    helptext.forEach(function(e,i){
        //-- Line Count --
        //Create a text node with the number of the line.
        var lctn = document.createTextNode(i);
        //Append the text node to the line count.
        lineCount.appendChild(lctn);
        //Create a line break.
        var lcbr = document.createElement("br");
        //Append the line break to the line count.
        lineCount.appendChild(lcbr);

        //-- Text --
        //Create a text node with the line of text.
        var txtn = document.createTextNode(e);
        //Append the text node to the text.
        text.appendChild(txtn);
        //Create a line break.
        var txbr = document.createElement("br");
        //Append the line break to the text.
        text.appendChild(txbr);
    });
}
