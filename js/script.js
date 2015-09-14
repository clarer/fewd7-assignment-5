var city = ["nyc","sf","la","austin","sydney"]
// this is the store for when a user inputs their text. I've named them the same as the image names so it's easy to cross reference.

var images = ["../images/nyc.jpg","../images/sf.jpg","../images/la.jpg","../images/austin.jpg","../images/sydney.jpg"]
// these are the images that will called upon to change the background.


var nyc = ["New York","New York City","NYC"]
var sf = ["San Francisco","SF","Bay Area"]
var la = ["Los Angeles","LA","LAX"]
var austin = ["Austin","ATX"]
var sydney = ["Sydney","SYD"]
// these are the accepted variables of text a user might enter as specified by the brief.


function submitHandler () {
// this is the function that activates the storage of the text that is entered.

        console.log("here");
        var entry = $("#city-type").val(city);
        $('#city-type').
        $('background').html('.nyc');

 }


function changeImage() {
// this is the function that changes the background when any above variables are entered.
// need to return the index # eg. nyc is 0

    if(input === "nyc") {
        $("body").css("background",images[0])
    }
    else if(input === "sf") {
        $("body").css("background",images[1])
    }
}

//does entry===newyork
//if text string === new york then get element #0 (mapping)


$(document).ready(function() {
// this is the function that works upon hitting 'submit'.

    $("#submit-btn").click(submitHandler);
    console.log("city name entered");
    return false;

});



/*

when a user enters text into #city-type
store and search for similar tags
change the background to show the image matching those tags

If a user enters:
"New York" or "New York City" or "NYC" make the background of the page nyc.jpg
"San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg
"Los Angeles" or "LA" or "LAX" make the background of the page la.jpg
"Austin" or "ATX" make the background of the page austin.jpg
"Sydney" or "SYD" make the background of the page sydney.jpg

*/