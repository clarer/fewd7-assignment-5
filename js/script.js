
/*
THE BRIEF:
When a user enters acceptable text into '#city-type' id,
then hits enter or clicks '#submit-btn' id,
change the 'body background' to show the image matching the acceptable text.
*/


$(document).ready(function() {

    var images = ["url(images/nyc.jpg)", "url(images/sf.jpg)", "url(images/la.jpg)", "url(images/austin.jpg)", "url(images/sydney.jpg)"];
    // this is my array of images that will appear in the background when the user types the acceptable text.

    function changeImages(event) {
    // this is the function called in the final click function.
        
        event.preventDefault();
        // this prevents refresh of the page.
        var cityInputVal = $("#city-type").val().toLowerCase();
        // this variable allows the user enter either all lowercase or case sensitive text.

        if (cityInputVal === "new york" || cityInputVal === "new york city" || cityInputVal === "nyc") {
            $("body").css("background", images[0]);
        } else if (cityInputVal === "san francisco" || cityInputVal === "sf" || cityInputVal === "bay area" ) {
            $("body").css("background", images[1]);
        } else if (cityInputVal === "los angeles" || cityInputVal === "la" || cityInputVal === "lax") {
            $("body").css("background", images[2]);
        } else if (cityInputVal === "austin" || cityInputVal === "atx") {
            $("body").css("background", images[3]);
        } else if (cityInputVal === "sydney" || cityInputVal === "syd") {
            $("body").css("background", images[4]);
        }
        // this is the list of acceptable text that maps to the correct images from my 'images' array.

    }

    $("#submit-btn").click(changeImages);
    // this runs when the user enters acceptable text and presses 'enter' or clicks 'submit'.

});