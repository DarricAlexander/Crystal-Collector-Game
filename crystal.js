var randomNumber = Math.floor(Math.random() * 120) +1;
var total = 0;
var wins = 0;
var losses = 0;

random_result = Math.floor(Math.random() *69 ) +30;

$("#result").html('Ransom Result: ' + random_result);

for(var i = 0; i < 4; i++) {
    var random = Math.floor(Math.random() *11) + 1;

    var crystal = $("<div>");
    crystal.attr({
        "class": 'crystal',
        "data-random": random

    });

    $(".crystals").append(crystal);

}

$(".crystal").on("click", function () {

    var result = num + 5;

    var num = parseInt($(this).attr("data-random"));

     
    console.log(num, ' + ', result);

});