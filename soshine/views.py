#-*- coding: UTF-8 -*-
from django.shortcuts import render
import json
# Create your views here.


def index(request):
    soshine_index = u'SoshineTech 首页'
    return render(request, 'index.html', {'soshine_index': soshine_index})


def sogis(request):
    gisname = u"SoshineSeeScene - Maffee's GIS 欢迎使用！"
    return render(request, 'sogis.html', {'gisname': gisname})


def somap(request, param1):

    abc_id = param1
    abc_name = abc_id_to_abc_name(abc_id)
    (centerPlng, centerPlat, zoom) = abc_id_to_abc_centerP(abc_id)
    (n, s, w, e) = abc_id_to_abc_imgloc(abc_id)
    (NCurl, NDVIurl) = abc_id_to_abc_imgurl(abc_id)

    return render(request, 'somap.html', {
        'abc_id': abc_id,
        'abc_name': abc_name,
        'centerPlng': json.dumps(centerPlng),
        'centerPlat': json.dumps(centerPlat),
        'zoom': json.dumps(zoom),
        'img_n': json.dumps(n),
        'img_s': json.dumps(s),
        'img_w': json.dumps(w),
        'img_e': json.dumps(e),
        'NCurl': json.dumps(NCurl),
        'NDVIurl': json.dumps(NDVIurl)
    })


def abc_id_to_abc_name(argument):
    switcher = {
        '1': "呼伦贝尔",
        '2': "重庆",
        '3': "大连",
        '4': "青岛",
        '5': "博罗镇罗阳县",
        '6': "赵光",
        '7': "新疆",
        '8': "张家口",
        '50001': "博罗镇罗阳县示例林班0001",
        '50002': "博罗镇罗阳县示例林班0002",
        '500010001': "示例小班00010001",
        '500010002': "示例小班00010002",
        '500010003': "示例小班00010003",
        '500020001': "示例小班00020001",
        '500020002': "示例小班00020002",
    }
    return switcher.get(argument, "nothing")


def abc_id_to_abc_centerP(argument):
    switcherlng = {
        '1': "119.768149",
        '2': "106.649726",
        '3': "121.582007",
        '4': "120.486218",
        '5': "114.19348",
        '6': "126.745324",
        '7': "87.509639",
        '8': "114.848022",
        '50001': "114.1999",
        '50002': "114.19272",
        '500010001': "114.20085",
        '500010002': "114.20049",
        '500010003': "114.19927",
        '500020001': "114.19264",
        '500020002': "114.19237",
    }
    switcherlat = {
        '1': "49.2171",
        '2': "29.548126",
        '3': "38.918376",
        '4': "36.133996",
        '5': "23.12573",
        '6': "48.063039",
        '7': "43.895667",
        '8': "40.785556",
        '50001': "23.12269",
        '50002': "23.12816",
        '500010001': "23.1232",
        '500010002': "23.12243",
        '500010003': "23.12192",
        '500020001': "23.12883",
        '500020002': "23.12758",
    }
    switcherzoom = {
        '1': "12",
        '2': "12",
        '3': "12",
        '4': "12",
        '5': "16",
        '6': "12",
        '7': "12",
        '8': "12",
        '50001': "18",
        '50002': "18",
        '500010001': "20",
        '500010002': "20",
        '500010003': "20",
        '500020001': "20",
        '500020002': "20",
    }
    return switcherlng.get(argument, "116.358"), \
           switcherlat.get(argument, "40"), \
           switcherzoom.get(argument, "15")


def abc_id_to_abc_imgloc(argument):
    switchernorth = {
        '5': "23.130875",
        '50001': "23.12440317",
        '50002': "23.1308756",
        '500010001': "23.12440317",
        '500010002': "23.12298",
        '500010003': "23.12278505",
        '500020001': "23.12967",
        '500020002': "23.128448",
    }
    switchersouth = {
        '5': "23.121167",
        '50001': "23.12116692",
        '50002': "23.1260213",
        '500010001': "23.12224568",
        '500010002': "23.12203",
        '500010003': "23.121166927",
        '500020001': "23.12805",
        '500020002': "23.1260213",
    }
    switcherwest = {
        '5': "114.191878",
        '50001': "114.1981759",
        '50002': "114.191877",
        '500010001': "114.199575",
        '500010002': "114.19974",
        '500010003': "114.1981759",
        '500020001': "114.191877",
        '500020002': "114.191877",
    }
    switchereast = {
        '5': "114.202375",
        '50001': "114.2023747",
        '50002': "114.193977",
        '500010001': "114.2023747",
        '500010002': "114.20105",
        '500010003': "114.2009751",
        '500020001': "114.193977",
        '500020002': "114.193977",
    }
    return switchernorth.get(argument, "23"),\
           switchersouth.get(argument, "23"),\
           switcherwest.get(argument, "114"),\
           switchereast.get(argument, "114")


def abc_id_to_abc_imgurl(argument):
    switchernc = {
        '5': "/static/img/Areaimg/BL_nc.png",
        '50001': "/static/img/Blockimg/BL_0001_nc.png",
        '50002': "/static/img/Blockimg/BL_0002_nc.png",
        '500010001': "/static/img/Compartmentimg/BL_0001_0001_nc.png",
        '500010002': "/static/img/Compartmentimg/BL_0001_0002_nc.png",
        '500010003': "/static/img/Compartmentimg/BL_0001_0003_nc.png",
        '500020001': "/static/img/Compartmentimg/BL_0002_0001_nc.png",
        '500020002': "/static/img/Compartmentimg/BL_0002_0002_nc.png",
    }
    switcherndvi = {
        '5': "/static/img/Areaimg/BL_ndvi.png",
        '50001': "/static/img/Blockimg/BL_0001_ndvi.png",
        '50002': "/static/img/Blockimg/BL_0002_ndvi.png",
        '500010001': "/static/img/Compartmentimg/BL_0001_0001_ndvi.png",
        '500010002': "/static/img/Compartmentimg/BL_0001_0002_ndvi.png",
        '500010003': "/static/img/Compartmentimg/BL_0001_0003_ndvi.png",
        '500020001': "/static/img/Compartmentimg/BL_0002_0001_ndvi.png",
        '500020002': "/static/img/Compartmentimg/BL_0002_0002_ndvi.png",
    }
    return switchernc.get(argument, "/static/img/default.png"),\
           switcherndvi.get(argument, "/static/img/default.png")
