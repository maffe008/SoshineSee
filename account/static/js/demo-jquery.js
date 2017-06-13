/**
* Created by Maffee on 2016/12/13.
*/
$(document).ready(function(){
    $("#optionToggle").click(function(){
        $("#optionBar").toggle();
        $(this).toggleClass("ToggleLogoLayer");
        if($(".esri-ui-corner").css("left") == "300px"){
            //alert($(".esri-ui-corner").css("left"));
            $(".esri-ui-corner").css({"left":"0"});
            //$("#overviewDiv").css({"left":"12px"});
            $("#curcordDiv").css({"left":"12px","bottom":"28px"});
            $("#overviewDiv").css({"display":"none"});
            //$("#curcordDiv").css({"bottom":"28px"})
        }
        else {
            //alert($(".esri-ui-corner").css("left"));
            $(".esri-ui-corner").css({"left":"300px"});
            //$("#overviewDiv").css({"left":"312px"});
            $("#curcordDiv").css({"left":"312px","bottom":"268px"});
            $("#overviewDiv").css({"display":"block"});
            //$("#curcordDiv").css({"bottom":"268px"})
        }

    });
});

$(document).ready(function(){
    $("#dataToggle").click(function(){
        $("#dataBar").toggle();
        $(this).toggleClass("ToggleLogoLayer");
    });
});

$(document).ready(function(){
    $("#listToggle").click(function(){
        $("#listBar").toggle();
        $(this).toggleClass("ToggleLogoEtc");

    });
});

$(document).ready(function(){
    $(".optionToolBlock").mouseover(function(){
        $(this).css({"background-color":"rgba(241,242,242,0.9)","color":"#222222"})
    });
});
$(document).ready(function(){
    $(".optionToolBlock").mouseout(function(){
        $(this).css({"background-color":"transparent","color":"#f1f2f2"})
    });
});

$(document).ready(function(){
    $(".blocklist-heading").mouseover(function(){
        $(this).css({"background-color":"rgba(241,242,242,0.7)","color":"#222222","font-weight":"bold"})
    });
});
$(document).ready(function(){
    $(".blocklist-heading").mouseout(function(){
        $(this).css({"background-color":"transparent","color":"#f1f2f2","font-weight":"normal"})
    });
});

$(document).ready(function(){
    $(".Blockname").mouseover(function(){
        $(this).css({"background-color":"rgba(241,242,242,0.7)","color":"#222222","font-weight":"bold"})
    });
});
$(document).ready(function(){
    $(".Blockname").mouseout(function(){
        $(this).css({"background-color":"transparent","color":"#f1f2f2","font-weight":"normal"})
    });
});

$(document).ready(function(){
    $(".glyphicon").mouseover(function(){
        $(this).css({"color":"#ff8c00"})
    });
});
$(document).ready(function(){
    $(".glyphicon").mouseout(function(){
        $(this).css({"color":"#f1f2f2"})
    });
});