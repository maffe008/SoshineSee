
function NC_onclick(){
    NC_choose = document.getElementById("NC_choose");
    if (NC_choose.className == "check-box glyphicon glyphicon-unchecked"){
        NC_choose.className ='check-box glyphicon glyphicon-check';
        document.getElementById("NCviewDiv").style.zIndex = 2;
        //alert(ncview);
        //alert("!!");
    }else if(NC_choose.className == "check-box glyphicon glyphicon-check"){
        NC_choose.className ='check-box glyphicon glyphicon-unchecked';
        document.getElementById("NCviewDiv").style.zIndex = -3;
        //alert("??");
    }else{
        alert("NC_choose ERROR");
    }
}
function CIR_onclick(){
    NC_choose = document.getElementById("CIR_choose");
    if (NC_choose.className == "check-box glyphicon glyphicon-unchecked"){
        NC_choose.className ='check-box glyphicon glyphicon-check';
    }else if(NC_choose.className == "check-box glyphicon glyphicon-check"){
        NC_choose.className ='check-box glyphicon glyphicon-unchecked';
    }else{
        alert("CIR_choose ERROR");
    }
}
function NDVI_onclick(){
    NC_choose = document.getElementById("NDVI_choose");
    if (NC_choose.className == "check-box glyphicon glyphicon-unchecked"){
        NC_choose.className ='check-box glyphicon glyphicon-check';
        document.getElementById("NDVIviewDiv").style.zIndex = 3;
    }else if(NC_choose.className == "check-box glyphicon glyphicon-check"){
        NC_choose.className ='check-box glyphicon glyphicon-unchecked';
        document.getElementById("NDVIviewDiv").style.zIndex = -2;
    }else{
        alert("NDVI_choose ERROR");
    }
}
function Thermal_onclick(){
    NC_choose = document.getElementById("Thermal_choose");
    if (NC_choose.className == "check-box glyphicon glyphicon-unchecked"){
        NC_choose.className ='check-box glyphicon glyphicon-check';
    }else if(NC_choose.className == "check-box glyphicon glyphicon-check"){
        NC_choose.className ='check-box glyphicon glyphicon-unchecked';
    }else{
        alert("Thermal_choose ERROR");
    }
}
function DSM_onclick(){
    NC_choose = document.getElementById("DSM_choose");
    if (NC_choose.className == "check-box glyphicon glyphicon-unchecked"){
        NC_choose.className ='check-box glyphicon glyphicon-check';
    }else if(NC_choose.className == "check-box glyphicon glyphicon-check"){
        NC_choose.className ='check-box glyphicon glyphicon-unchecked';
    }else{
        alert("DSM_choose ERROR");
    }
}