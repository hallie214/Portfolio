$(document).ready(function() {

// alert("[whatever-little-message-you-want]");

$(document).keydown(function(event) {

    var key = (event.keyCode ? event.keyCode : event.which);

    if (key == '39')
    $("#image3").show();

    if (key == '39')
    $("#image1").hide();
    if (key == '39')
    $("#image2").hide();
    if (key == '39')
    $("#image4").hide();

    if (key == '37')
    $("#image4").show();

    if (key == '37')
    $("#image1").hide();
    if (key == '37')
    $("#image2").hide();
    if (key == '37')
    $("#image3").hide();

});

$(document).keyup(function(event) {

    var key = (event.keyCode ? event.keyCode : event.which);

    if (key == '39')
    $("#image1").show();

    if (key == '39')
    $("#image2").hide();
    if (key == '39')
    $("#image3").hide();
    if (key == '39')
    $("#image4").hide();

    if (key == '37')
    $("#image2").show();

    if (key == '37')
    $("#image1").hide();
    if (key == '37')
    $("#image3").hide();
    if (key == '37')
    $("#image4").hide();

});


})
