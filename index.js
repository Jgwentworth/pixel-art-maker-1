$(document).ready(makeBox())

function makeBox(){
    for (i = 0; i < 2640; i++){ 
        let $gridBox = $("<div></div>").css({"width": "10px", 
                "height": "10px",
                "outline": "1px solid gray",
                "float": "left"});
        $gridBox.attr("id", i)
        $gridBox.attr("class", "grid")
                 
        $("#pixel-container").append($gridBox);                              
        }
};

let colorHold = "black"

$(".grid").click(function(){
    $(this).css("background-color", colorHold);
});

$(".color").change(function(){
    colorHold = this.value
    console.log(colorHold)
    return colorHold
})

$('.tap-target').tapTarget('open');
$('.tap-target').tapTarget('close');


