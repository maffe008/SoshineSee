/**
 * Created by Maffee on 2016/12/13.
 */
function Demo_focus_Comprt(area,block,comprt){
    if (block == undefined){
        alert(area)
    }
    else if(comprt == undefined){
        alert(area + ":" + block)
    }
    else if (comprt != undefined){
        alert(area + ":" + block + "|" + comprt)
    }
    else{
        alert("Demo_focus_Comprt ERROR")
    }
}

function change_intro(id){
    if (id == 'BL' ) {
        document.getElementById("comprtInfo").style.display = 'none' ;
        document.getElementById("sysintro").style.display = 'none' ;
        document.getElementById("Aintro").style.display = 'block' ;
        document.getElementById("Bintro0001").style.display = 'none' ;
        document.getElementById("Bintro0002").style.display = 'none' ;
        document.getElementById("Cintro00010001").style.display = 'none' ;
        document.getElementById("Cintro00010002").style.display = 'none' ;
        document.getElementById("Cintro00010003").style.display = 'none' ;
        document.getElementById("Cintro00020001").style.display = 'none' ;
        document.getElementById("Cintro00020002").style.display = 'none' ;
        document.getElementById("HAintro").style.display = 'none' ;
        document.getElementById("HBintro0001").style.display = 'none' ;
        document.getElementById("HBintro0002").style.display = 'none' ;
    }
    else if(id == 'BL_0001' ) {
        document.getElementById("comprtInfo").style.display = 'none' ;
        document.getElementById("sysintro").style.display = 'none' ;
        document.getElementById("Aintro").style.display = 'none' ;
        document.getElementById("Bintro0001").style.display = 'block' ;
        document.getElementById("Bintro0002").style.display = 'none' ;
        document.getElementById("Cintro00010001").style.display = 'none' ;
        document.getElementById("Cintro00010002").style.display = 'none' ;
        document.getElementById("Cintro00010003").style.display = 'none' ;
        document.getElementById("Cintro00020001").style.display = 'none' ;
        document.getElementById("Cintro00020002").style.display = 'none' ;
        document.getElementById("HAintro").style.display = 'none' ;
        document.getElementById("HBintro0001").style.display = 'none' ;
        document.getElementById("HBintro0002").style.display = 'none' ;
    }
    else if(id == 'BL_0002' ) {
        document.getElementById("comprtInfo").style.display = 'none' ;
        document.getElementById("sysintro").style.display = 'none' ;
        document.getElementById("Aintro").style.display = 'none' ;
        document.getElementById("Bintro0001").style.display = 'none' ;
        document.getElementById("Bintro0002").style.display = 'block' ;
        document.getElementById("Cintro00010001").style.display = 'none' ;
        document.getElementById("Cintro00010002").style.display = 'none' ;
        document.getElementById("Cintro00010003").style.display = 'none' ;
        document.getElementById("Cintro00020001").style.display = 'none' ;
        document.getElementById("Cintro00020002").style.display = 'none' ;
        document.getElementById("HAintro").style.display = 'none' ;
        document.getElementById("HBintro0001").style.display = 'none' ;
        document.getElementById("HBintro0002").style.display = 'none' ;
    }
    else if(id == 'BL_0001_0001' ) {
        document.getElementById("comprtInfo").style.display = 'block' ;
        document.getElementById("sysintro").style.display = 'none' ;
        document.getElementById("Aintro").style.display = 'none' ;
        document.getElementById("Bintro0001").style.display = 'none' ;
        document.getElementById("Bintro0002").style.display = 'none' ;
        document.getElementById("Cintro00010001").style.display = 'block' ;
        document.getElementById("Cintro00010002").style.display = 'none' ;
        document.getElementById("Cintro00010003").style.display = 'none' ;
        document.getElementById("Cintro00020001").style.display = 'none' ;
        document.getElementById("Cintro00020002").style.display = 'none' ;
        document.getElementById("HAintro").style.display = 'none' ;
        document.getElementById("HBintro0001").style.display = 'none' ;
        document.getElementById("HBintro0002").style.display = 'none' ;
    }
    else if(id == 'BL_0001_0002' ) {
        document.getElementById("comprtInfo").style.display = 'block' ;
        document.getElementById("sysintro").style.display = 'none' ;
        document.getElementById("Aintro").style.display = 'none' ;
        document.getElementById("Bintro0001").style.display = 'none' ;
        document.getElementById("Bintro0002").style.display = 'none' ;
        document.getElementById("Cintro00010001").style.display = 'none' ;
        document.getElementById("Cintro00010002").style.display = 'block' ;
        document.getElementById("Cintro00010003").style.display = 'none' ;
        document.getElementById("Cintro00020001").style.display = 'none' ;
        document.getElementById("Cintro00020002").style.display = 'none' ;
        document.getElementById("HAintro").style.display = 'none' ;
        document.getElementById("HBintro0001").style.display = 'none' ;
        document.getElementById("HBintro0002").style.display = 'none' ;
    }
    else if(id == 'BL_0001_0003' ) {
        document.getElementById("comprtInfo").style.display = 'block' ;
        document.getElementById("sysintro").style.display = 'none' ;
        document.getElementById("Aintro").style.display = 'none' ;
        document.getElementById("Bintro0001").style.display = 'none' ;
        document.getElementById("Bintro0002").style.display = 'none' ;
        document.getElementById("Cintro00010001").style.display = 'none' ;
        document.getElementById("Cintro00010002").style.display = 'none' ;
        document.getElementById("Cintro00010003").style.display = 'block' ;
        document.getElementById("Cintro00020001").style.display = 'none' ;
        document.getElementById("Cintro00020002").style.display = 'none' ;
        document.getElementById("HAintro").style.display = 'none' ;
        document.getElementById("HBintro0001").style.display = 'none' ;
        document.getElementById("HBintro0002").style.display = 'none' ;
    }
    else if(id == 'BL_0002_0001' ) {
        document.getElementById("comprtInfo").style.display = 'block' ;
        document.getElementById("sysintro").style.display = 'none' ;
        document.getElementById("Aintro").style.display = 'none' ;
        document.getElementById("Bintro0001").style.display = 'none' ;
        document.getElementById("Bintro0002").style.display = 'none' ;
        document.getElementById("Cintro00010001").style.display = 'none' ;
        document.getElementById("Cintro00010002").style.display = 'none' ;
        document.getElementById("Cintro00010003").style.display = 'none' ;
        document.getElementById("Cintro00020001").style.display = 'block' ;
        document.getElementById("Cintro00020002").style.display = 'none' ;
        document.getElementById("HAintro").style.display = 'none' ;
        document.getElementById("HBintro0001").style.display = 'none' ;
        document.getElementById("HBintro0002").style.display = 'none' ;
    }
    else if(id == 'BL_0002_0002' ) {
        document.getElementById("comprtInfo").style.display = 'block' ;
        document.getElementById("sysintro").style.display = 'none' ;
        document.getElementById("Aintro").style.display = 'none' ;
        document.getElementById("Bintro0001").style.display = 'none' ;
        document.getElementById("Bintro0002").style.display = 'none' ;
        document.getElementById("Cintro00010001").style.display = 'none' ;
        document.getElementById("Cintro00010002").style.display = 'none' ;
        document.getElementById("Cintro00010003").style.display = 'none' ;
        document.getElementById("Cintro00020001").style.display = 'none' ;
        document.getElementById("Cintro00020002").style.display = 'block' ;
        document.getElementById("HAintro").style.display = 'none' ;
        document.getElementById("HBintro0001").style.display = 'none' ;
        document.getElementById("HBintro0002").style.display = 'none' ;
    }
    else if(id == 'Hulbr' ) {
        document.getElementById("comprtInfo").style.display = 'none' ;
        document.getElementById("sysintro").style.display = 'none' ;
        document.getElementById("Aintro").style.display = 'none' ;
        document.getElementById("Bintro0001").style.display = 'none' ;
        document.getElementById("Bintro0002").style.display = 'none' ;
        document.getElementById("Cintro00010001").style.display = 'none' ;
        document.getElementById("Cintro00010002").style.display = 'none' ;
        document.getElementById("Cintro00010003").style.display = 'none' ;
        document.getElementById("Cintro00020001").style.display = 'none' ;
        document.getElementById("Cintro00020002").style.display = 'none' ;
        document.getElementById("HAintro").style.display = 'block' ;
        document.getElementById("HBintro0001").style.display = 'none' ;
        document.getElementById("HBintro0002").style.display = 'none' ;
    }
    else if(id == 'Hulbr_T' ) {
        document.getElementById("comprtInfo").style.display = 'none' ;
        document.getElementById("sysintro").style.display = 'none' ;
        document.getElementById("Aintro").style.display = 'none' ;
        document.getElementById("Bintro0001").style.display = 'none' ;
        document.getElementById("Bintro0002").style.display = 'none' ;
        document.getElementById("Cintro00010001").style.display = 'none' ;
        document.getElementById("Cintro00010002").style.display = 'none' ;
        document.getElementById("Cintro00010003").style.display = 'none' ;
        document.getElementById("Cintro00020001").style.display = 'none' ;
        document.getElementById("Cintro00020002").style.display = 'none' ;
        document.getElementById("HAintro").style.display = 'none' ;
        document.getElementById("HBintro0001").style.display = 'block' ;
        document.getElementById("HBintro0002").style.display = 'none' ;
    }
    else if(id == 'Hulbr_X' ) {
        document.getElementById("comprtInfo").style.display = 'none' ;
        document.getElementById("sysintro").style.display = 'none' ;
        document.getElementById("Aintro").style.display = 'none' ;
        document.getElementById("Bintro0001").style.display = 'none' ;
        document.getElementById("Bintro0002").style.display = 'none' ;
        document.getElementById("Cintro00010001").style.display = 'none' ;
        document.getElementById("Cintro00010002").style.display = 'none' ;
        document.getElementById("Cintro00010003").style.display = 'none' ;
        document.getElementById("Cintro00020001").style.display = 'none' ;
        document.getElementById("Cintro00020002").style.display = 'none' ;
        document.getElementById("HAintro").style.display = 'none' ;
        document.getElementById("HBintro0001").style.display = 'none' ;
        document.getElementById("HBintro0002").style.display = 'block' ;
    }
    else{
        document.getElementById("comprtInfo").style.display = 'none' ;
        document.getElementById("sysintro").style.display = 'block' ;
        document.getElementById("Aintro").style.display = 'none' ;
        document.getElementById("Bintro0001").style.display = 'none' ;
        document.getElementById("Bintro0002").style.display = 'none' ;
        document.getElementById("Cintro00010001").style.display = 'none' ;
        document.getElementById("Cintro00010002").style.display = 'none' ;
        document.getElementById("Cintro00010003").style.display = 'none' ;
        document.getElementById("Cintro00020001").style.display = 'none' ;
        document.getElementById("Cintro00020002").style.display = 'none' ;
        document.getElementById("HAintro").style.display = 'none' ;
        document.getElementById("HBintro0001").style.display = 'none' ;
        document.getElementById("HBintro0002").style.display = 'none' ;
    }
}

function show_comprt_info(Bid) {

    switch (Bid) {

        case "A01":
            document.getElementById("blocktitle").innerHTML = "博罗县罗阳镇00010001";
            document.getElementById("comprtInfo-status").className = "alert alert-danger";
            document.getElementById("comprtInfo-status").innerHTML = "异常";
            document.getElementById("blockcordN").innerHTML = "N:23.1239 ";
            document.getElementById("blockcordS").innerHTML = "S:23.12264";
            document.getElementById("blockcordW").innerHTML = "W:114.19974";
            document.getElementById("blockcordE").innerHTML = "E:114.20213";
            document.getElementById("blockm2").innerHTML = "面积:29.02ha";
            document.getElementById("blockdate").innerHTML = "日期:2016/03/15";
            document.getElementById("blockproduct").innerHTML = "作物:榕树";
            document.getElementById("blockintro").innerHTML = "信息:北坡病树多";
            break;
        case "A02":
            document.getElementById("blocktitle").innerHTML = "博罗县罗阳镇00010002";
            document.getElementById("comprtInfo-status").className = "alert alert-warning";
            document.getElementById("comprtInfo-status").innerHTML = "异常";
            document.getElementById("blockcordN").innerHTML = "N:23.12287";
            document.getElementById("blockcordS").innerHTML = "S:23.12193";
            document.getElementById("blockcordW").innerHTML = "W:114.19981";
            document.getElementById("blockcordE").innerHTML = "E:114.20111";
            document.getElementById("blockm2").innerHTML = "面积:29.02ha";
            document.getElementById("blockdate").innerHTML = "日期:2016/03/15";
            document.getElementById("blockproduct").innerHTML = "作物:榕树";
            document.getElementById("blockintro").innerHTML = "信息:病树零星分布在和老树接壤的边缘";
            break;
        case "A03":
            document.getElementById("blocktitle").innerHTML = "博罗县罗阳镇00010003";
            document.getElementById("comprtInfo-status").className = "alert alert-info";
            document.getElementById("comprtInfo-status").innerHTML = "正常";
            document.getElementById("blockcordN").innerHTML = "N:23.12236";
            document.getElementById("blockcordS").innerHTML = "S:23.12118";
            document.getElementById("blockcordW").innerHTML = "W:114.1982";
            document.getElementById("blockcordE").innerHTML = "E:114.20047";
            document.getElementById("blockm2").innerHTML = "面积:29.02ha";
            document.getElementById("blockdate").innerHTML = "日期:2016/03/15";
            document.getElementById("blockproduct").innerHTML = "作物:榕树";
            document.getElementById("blockintro").innerHTML = "信息:无";
            break;
        case "A04":
            document.getElementById("blocktitle").innerHTML = "博罗县罗阳镇A04";
            document.getElementById("comprtInfo-status").className = "alert alert-info";
            document.getElementById("comprtInfo-status").innerHTML = "正常";
            document.getElementById("blockcordN").innerHTML = "N:23.132257";
            document.getElementById("blockcordS").innerHTML = "S:23.130517";
            document.getElementById("blockcordW").innerHTML = "W:114.207768";
            document.getElementById("blockcordE").innerHTML = "E:114.209035";
            document.getElementById("blockm2").innerHTML = "面积:13460㎡";
            document.getElementById("blockdate").innerHTML = "日期:2016/03/15";
            document.getElementById("blockproduct").innerHTML = "作物:树木";
            document.getElementById("blockintro").innerHTML = "信息:无";
            break;
        case "A05":
            document.getElementById("blocktitle").innerHTML = "博罗县罗阳镇A05";
            document.getElementById("comprtInfo-status").className = "alert alert-info";
            document.getElementById("comprtInfo-status").innerHTML = "正常";
            document.getElementById("blockcordN").innerHTML = "N:23.132033";
            document.getElementById("blockcordS").innerHTML = "S:23.131049";
            document.getElementById("blockcordW").innerHTML = "W:114.203604";
            document.getElementById("blockcordE").innerHTML = "E:114.205437";
            document.getElementById("blockm2").innerHTML = "面积:7111㎡";
            document.getElementById("blockdate").innerHTML = "日期:2016/03/15";
            document.getElementById("blockproduct").innerHTML = "作物:树木";
            document.getElementById("blockintro").innerHTML = "信息:无";
            break;
        case "A06":
            document.getElementById("blocktitle").innerHTML = "博罗县罗阳镇A06";
            document.getElementById("comprtInfo-status").className = "alert alert-info";
            document.getElementById("comprtInfo-status").innerHTML = "正常";
            document.getElementById("blockcordN").innerHTML = "N:23.132033";
            document.getElementById("blockcordS").innerHTML = "S:23.131049";
            document.getElementById("blockcordW").innerHTML = "W:114.203604";
            document.getElementById("blockcordE").innerHTML = "E:114.205437";
            document.getElementById("blockm2").innerHTML = "面积:7111㎡";
            document.getElementById("blockdate").innerHTML = "日期:2016/03/15";
            document.getElementById("blockproduct").innerHTML = "作物:树木";
            document.getElementById("blockintro").innerHTML = "信息:无";
            break;
        case "A07":
            document.getElementById("blocktitle").innerHTML = "博罗县罗阳镇A07";
            document.getElementById("comprtInfo-status").className = "alert alert-info";
            document.getElementById("comprtInfo-status").innerHTML = "正常";
            document.getElementById("blockcordN").innerHTML = "N:23.132033";
            document.getElementById("blockcordS").innerHTML = "S:23.131049";
            document.getElementById("blockcordW").innerHTML = "W:114.203604";
            document.getElementById("blockcordE").innerHTML = "E:114.205437";
            document.getElementById("blockm2").innerHTML = "面积:7111㎡";
            document.getElementById("blockdate").innerHTML = "日期:2016/03/15";
            document.getElementById("blockproduct").innerHTML = "作物:树木";
            document.getElementById("blockintro").innerHTML = "信息:无";
            break;
        case "B01":
            document.getElementById("blocktitle").innerHTML = "博罗县罗阳镇00020001";
            document.getElementById("comprtInfo-status").className = "alert alert-info";
            document.getElementById("comprtInfo-status").innerHTML = "正常";
            document.getElementById("blockcordN").innerHTML = "N:23.12945";
            document.getElementById("blockcordS").innerHTML = "S:23.12827";
            document.getElementById("blockcordW").innerHTML = "W:114.19189";
            document.getElementById("blockcordE").innerHTML = "E:114.19373";
            document.getElementById("blockm2").innerHTML = "面积:29.02ha";
            document.getElementById("blockdate").innerHTML = "日期:2016/03/15";
            document.getElementById("blockproduct").innerHTML = "作物:榕树";
            document.getElementById("blockintro").innerHTML = "信息:无";
            break;
        case "B02":
            document.getElementById("blocktitle").innerHTML = "博罗县罗阳镇00020002";
            document.getElementById("comprtInfo-status").className = "alert alert-warning";
            document.getElementById("comprtInfo-status").innerHTML = "异常";
            document.getElementById("blockcordN").innerHTML = "N:23.12843";
            document.getElementById("blockcordS").innerHTML = "S:23.12649";
            document.getElementById("blockcordW").innerHTML = "W:114.19163";
            document.getElementById("blockcordE").innerHTML = "E:114.19371";
            document.getElementById("blockm2").innerHTML = "面积:29.02ha";
            document.getElementById("blockdate").innerHTML = "日期:2016/03/15";
            document.getElementById("blockproduct").innerHTML = "作物:榕树";
            document.getElementById("blockintro").innerHTML = "信息:西北角有病树";
            break;
        case "B03":
            document.getElementById("blocktitle").innerHTML = "博罗县罗阳镇B03";
            document.getElementById("comprtInfo-status").className = "alert alert-warning";
            document.getElementById("comprtInfo-status").innerHTML = "异常";
            document.getElementById("blockcordN").innerHTML = "N:23.125540";
            document.getElementById("blockcordS").innerHTML = "S:23.124755";
            document.getElementById("blockcordW").innerHTML = "W:114.204310";
            document.getElementById("blockcordE").innerHTML = "E:114.205209";
            document.getElementById("blockm2").innerHTML = "面积:6284㎡";
            document.getElementById("blockdate").innerHTML = "日期:2016/03/15";
            document.getElementById("blockproduct").innerHTML = "作物:树木";
            document.getElementById("blockintro").innerHTML = "信息:农田异常信息";
            break;
        case "B04":
            document.getElementById("blocktitle").innerHTML = "博罗县罗阳镇B04";
            document.getElementById("comprtInfo-status").className = "alert alert-warning";
            document.getElementById("comprtInfo-status").innerHTML = "异常";
            document.getElementById("blockcordN").innerHTML = "N:23.125540";
            document.getElementById("blockcordS").innerHTML = "S:23.124755";
            document.getElementById("blockcordW").innerHTML = "W:114.204310";
            document.getElementById("blockcordE").innerHTML = "E:114.205209";
            document.getElementById("blockm2").innerHTML = "面积:6284㎡";
            document.getElementById("blockdate").innerHTML = "日期:2016/03/15";
            document.getElementById("blockproduct").innerHTML = "作物:树木";
            document.getElementById("blockintro").innerHTML = "信息:农田异常信息";
            break;
        case "B05":
            document.getElementById("blocktitle").innerHTML = "博罗县罗阳镇B05";
            document.getElementById("comprtInfo-status").className = "alert alert-warning";
            document.getElementById("comprtInfo-status").innerHTML = "异常";
            document.getElementById("blockcordN").innerHTML = "N:23.125540";
            document.getElementById("blockcordS").innerHTML = "S:23.124755";
            document.getElementById("blockcordW").innerHTML = "W:114.204310";
            document.getElementById("blockcordE").innerHTML = "E:114.205209";
            document.getElementById("blockm2").innerHTML = "面积:6284㎡";
            document.getElementById("blockdate").innerHTML = "日期:2016/03/15";
            document.getElementById("blockproduct").innerHTML = "作物:树木";
            document.getElementById("blockintro").innerHTML = "信息:农田异常信息";
            break;
        case "C01":
            document.getElementById("blocktitle").innerHTML = "博罗县罗阳镇C01";
            document.getElementById("comprtInfo-status").className = "alert alert-info";
            document.getElementById("comprtInfo-status").innerHTML = "正常";
            document.getElementById("blockcordN").innerHTML = "N:23.130059";
            document.getElementById("blockcordS").innerHTML = "S:23.127978";
            document.getElementById("blockcordW").innerHTML = "W:114.210532";
            document.getElementById("blockcordE").innerHTML = "E:114.210873";
            document.getElementById("blockm2").innerHTML = "面积:16193㎡";
            document.getElementById("blockdate").innerHTML = "日期:2016/03/15";
            document.getElementById("blockproduct").innerHTML = "作物:树木";
            document.getElementById("blockintro").innerHTML = "信息:无";
            break;
        case "C02":
            document.getElementById("blocktitle").innerHTML = "博罗县罗阳镇C02";
            document.getElementById("comprtInfo-status").className = "alert alert-info";
            document.getElementById("comprtInfo-status").innerHTML = "正常";
            document.getElementById("blockcordN").innerHTML = "N:23.128593";
            document.getElementById("blockcordS").innerHTML = "S:23.127625";
            document.getElementById("blockcordW").innerHTML = "W:114.209611";
            document.getElementById("blockcordE").innerHTML = "E:114.210572";
            document.getElementById("blockm2").innerHTML = "面积:4757㎡";
            document.getElementById("blockdate").innerHTML = "日期:2016/03/15";
            document.getElementById("blockproduct").innerHTML = "作物:树木";
            document.getElementById("blockintro").innerHTML = "信息:无";
            break;
        case "C03":
            document.getElementById("blocktitle").innerHTML = "博罗县罗阳镇C03";
            document.getElementById("comprtInfo-status").className = "alert alert-danger";
            document.getElementById("comprtInfo-status").innerHTML = "警告";
            document.getElementById("blockcordN").innerHTML = "N:23.126013";
            document.getElementById("blockcordS").innerHTML = "S:23.124755";
            document.getElementById("blockcordW").innerHTML = "W:114.205743";
            document.getElementById("blockcordE").innerHTML = "E:114.206637";
            document.getElementById("blockm2").innerHTML = "面积:7743㎡";
            document.getElementById("blockdate").innerHTML = "日期:2016/03/15";
            document.getElementById("blockproduct").innerHTML = "作物:树木";
            document.getElementById("blockintro").innerHTML = "信息:北侧农田警告信息";
            break;
        default:
    }

    //var hdimg = document.getElementById("hdimg");
    //hdimg.src = hdimageurl;
}

