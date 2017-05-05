from django.shortcuts import render

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
    return render(request, 'somap.html', {'abc_id':abc_id,'abc_name': abc_name})


def abc_id_to_abc_name(argument):
    switcher = {
        '1': "呼伦贝尔",
        '2': "重庆",
        '3': "大连",
        '4': "青岛",
        '5': "博罗",
        '6': "赵光",
        '7': "新疆",
        '8': "张家口",
    }
    return switcher.get(argument, "nothing")
