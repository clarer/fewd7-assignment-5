
/*
the brief:
when a user enters text into #city-type
store and search for similar tags
change the background to show the image matching those tags
*/


$(document).ready(function() {


    var images = ["../images/nyc.jpg","../images/sf.jpg","../images/la.jpg","../images/austin.jpg","../images/sydney.jpg"];
    // these are the images that are called upon to change the background, in order where .nyc is index '0'.


    var input = [];
    // this is where the text is stored when entered into #city-type.


    function checkInput() {
    // this is the function that activates the storage of the text that is entered.
        var input = $("#city-type").val();
                
        if(input === parsedInput) {
            changeImage()
        }
    }


    function changeImage() {
    // this is the function that changes the background when the inputs defined are entered.
        var parsedInput = input.toLowerCase();
        // this has created a variable that I can use in each of the following 'if' statements.
        if(parsedInput === "New York" || parsedInput === "New York City" || parsedInput === "NYC") {
            $("body").css("background",images[0])
        }
        else if(parsedInput === "San Francisco" || parsedInput === "SF" || parsedInput === "Bay Area") {
            $("body").css("background",images[1])
        }
        else if(parsedInput === "Los Angeles" || parsedInput === "LA" || parsedInput === "LAX") {
            $("body").css("background",images[2])
        }
        else if(parsedInput === "Austin" || parsedInput === "ATX") {
            $("body").css("background",images[3])
        }
        else if(parsedInput === "Sydney" || parsedInput === "SYD") {
            $("body").css("background",images[4])
        }
    }


    $("#submit-btn").on("submit",function() {
    // this is the function that works upon hitting 'submit'.
    changeImage();
    checkInput();
    console.log("clicked submit");
    });

});