
/*
THE BRIEF:
When a user enters acceptable text into #city-type id
then hits enter or clicks #submit-btn id
change the body background to show the image matching the acceptable text
*/


$(document).ready(function() {


    var images = ["url(images/nyc.jpg)", "url(images/sf.jpg)", "url(images/la.jpg)", "url(images/austin.jpg)", "url(images/sydney.jpg)"];
    // these is my array of images that will appear in the background when the user types the acceptable text.


        // input.toLowerCase();
        // now I need to figure out how to use the above thing
        // so I can use it in each of the following 'if' statements.
        // var newStuff = $("#city-type").val().toLowerCase();


    function changeImages() {
    // this is my function that is used below, that maps back to the image in my 
        if (cityInputVal === "New York" || cityInputVal === "New York City" || cityInputVal === "NYC") {
            $("body").css("background", images[0]);
        } else if (cityInputVal === "San Francisco" || cityInputVal === "SF" || cityInputVal === "Bay Area" ) {
            $("body").css("background", images[1]);
        } else if (cityInputVal === "Los Angeles" || cityInputVal === "LA" || cityInputVal === "LAX") {
            $("body").css("background", images[2]);
        } else if (cityInputVal === "Austin" || cityInputVal === "ATX") {
            $("body").css("background", images[3]);
        } else if (cityInputVal === "Sydney" || cityInputVal === "SYD") {
            $("body").css("background", images[4]);
        }
    }


    $("#submit-btn").click(function(event) {
    // this is the function that runs when the user enters acceptable text and presses 'enter' or clicks 'submit'.
        cityInputVal = $("#city-type").val();
        changeImages();
        event.preventDefault();
    });


});