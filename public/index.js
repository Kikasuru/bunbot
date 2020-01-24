const texts = [
    "Humans are even less worrisome.",
    "I'll show you two everything of the moon's insanity!",
    "It's my hypnosis, that drove the humans who came to the moon insane.",
    "The moon drives people mad.",
    "Left, right, up and down...",
    "Your sense of direction has already gone insane.",
    "You've only been thinking of the moon...",
    "Those with short ones are rough, and those with long ones are carefree.",
    "I'm just a useless little bunny, only good for my sex appeal."
]

class textObject{
    constructor(text){
        this.text = text;
        this.typed = 0;
        this.typetic = 2;
        this.fadetic = 1000;
    }

    spawn(){
        //Create an element for the text.
        var span = document.createElement("span");
        //Set the class of said span to a floating text.
        span.className = "floattext";
        //Add said span to the background element.
        document.getElementById("floattextback").appendChild(span);
        //Set the span to a random spot.
        span.style.top = getRandomInt(100)+"%";
        //span.style.left = getRandomInt(100)+"%";

        //Make a this variable for the setInterval.
        var text = this;
        console.log(text)
        //Start an interval for every 16 milliseconds.
        var texttic = setInterval(function(){
            //Check if the typetic has gotten to 0.
            if(text.typetic === 0){
                //Set it to 5.
                text.typetic = 2;
                //Increase typed.
                text.typed++;
            } else {
                //Decrease typetic.
                text.typetic--;
            }
            //Check if the fadetic has gotten to 0.
            if(text.fadetic === 0){
                //Remove the span.
                document.getElementById("floattextback").removeChild(span);
                //Clear the interval.
                clearInterval(texttic);
            } else {
                //Decrease fadetic.
                text.fadetic--;
            }
            //Set the text to the typed number.
            span.innerHTML = text.text.slice(0,text.typed);
            //Set the transparency of the text.
            span.style.opacity = text.fadetic/1000
            //Set the position of the text.
            span.style.left = (((text.fadetic/10)-100)*-1)+"%";
        },16);
    }
}

function init(){
    //Set a text to spawn every second.
    setInterval(function(){
        var text = new textObject(texts[getRandomInt(texts.length)]);
        text.spawn();
    },1000);
}

//Utility Functions
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
