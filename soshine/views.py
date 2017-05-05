from django.shortcuts import render

# Create your views here.


def index(request):
    soshine_index = u'SoshineTech 首页'
    return render(request, 'index.html', {'soshine_index': soshine_index})

def sogis(request):
    gisname = u"SoshineScene - Maffee's GIS 欢迎使用！"
    return render(request, 'sogis.html', {'gisname': gisname})