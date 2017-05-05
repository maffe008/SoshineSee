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


function show_comprt_info(Bid) {

    switch (Bid) {

        case "A01":
            document.getElementById("blocktitle").innerHTML = "博罗县罗阳镇A01";
            document.getElementById("comprtInfo-status").className = "alert alert-info";
            document.getElementById("comprtInfo-status").innerHTML = "正常";
            document.getElementById("blockcordN").innerHTML = "N:23.13087";
            document.getElementById("blockcordS").innerHTML = "S:23.127825";
            document.getElementById("blockcordW").innerHTML = "W:114.19187";
            document.getElementById("blockcordE").innerHTML = "E:114.205437";
            document.getElementById("blockm2").innerHTML = "面积:22388㎡";
            document.getElementById("blockdate").innerHTML = "日期:2016/03/15";
            document.getElementById("blockproduct").innerHTML = "作物:树木";
            document.getElementById("blockintro").innerHTML = "信息:无";
            break;
        case "A02":
            document.getElementById("blocktitle").innerHTML = "博罗县罗阳镇A02";
            document.getElementById("comprtInfo-status").className = "alert alert-warning";
            document.getElementById("comprtInfo-status").innerHTML = "异常";
            document.getElementById("blockcordN").innerHTML = "N:23.130986";
            document.getElementById("blockcordS").innerHTML = "S:23.128963";
            document.getElementById("blockcordW").innerHTML = "W:114.204368";
            document.getElementById("blockcordE").innerHTML = "E:114.206205";
            document.getElementById("blockm2").innerHTML = "面积:22490㎡";
            document.getElementById("blockdate").innerHTML = "日期:2016/03/15";
            document.getElementById("blockproduct").innerHTML = "作物:树木";
            document.getElementById("blockintro").innerHTML = "信息:地块北侧,路南房东鱼塘水质异常";
            break;
        case "A03":
            document.getElementById("blocktitle").innerHTML = "博罗县罗阳镇A03";
            document.getElementById("comprtInfo-status").className = "alert alert-info";
            document.getElementById("comprtInfo-status").innerHTML = "正常";
            document.getElementById("blockcordN").innerHTML = "N:23.129466";
            document.getElementById("blockcordS").innerHTML = "S:23.128465";
            document.getElementById("blockcordW").innerHTML = "W:114.205181";
            document.getElementById("blockcordE").innerHTML = "E:114.206744";
            document.getElementById("blockm2").innerHTML = "面积:9672㎡";
            document.getElementById("blockdate").innerHTML = "日期:2016/03/15";
            document.getElementById("blockproduct").innerHTML = "作物:树木";
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
            document.getElementById("blocktitle").innerHTML = "博罗县罗阳镇B01";
            document.getElementById("comprtInfo-status").className = "alert alert-info";
            document.getElementById("comprtInfo-status").innerHTML = "正常";
            document.getElementById("blockcordN").innerHTML = "N:23.126819";
            document.getElementById("blockcordS").innerHTML = "S:23.125502";
            document.getElementById("blockcordW").innerHTML = "W:114.204310";
            document.getElementById("blockcordE").innerHTML = "E:114.206331";
            document.getElementById("blockm2").innerHTML = "面积:18120㎡";
            document.getElementById("blockdate").innerHTML = "日期:2016/03/15";
            document.getElementById("blockproduct").innerHTML = "作物:树木";
            document.getElementById("blockintro").innerHTML = "信息:无";
            break;
        case "B02":
            document.getElementById("blocktitle").innerHTML = "博罗县罗阳镇B02";
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

