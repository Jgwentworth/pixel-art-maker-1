$(document).ready()

makeBox()

function makeBox(){
    for (i = 0; i < 2500; i++){ 
        let $gridBox = $("<div></div>").css({"width": "10px", 
                "height": "10px",
                "outline": "1px solid gray",
                "float": "left"});
        $gridBox.attr("id", i)
        $gridBox.attr("class", "grid")
                 
        $("#container").append($gridBox);                              
    }
}

$(".grid").click(function(){
    $(this).css("background-color", "red");
});
