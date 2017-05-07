from django.shortcuts import render
from django import forms
from django.shortcuts import render_to_response
from django.http import HttpResponse,HttpResponseRedirect
from django.template import RequestContext
from account.models import User



class UserForm(forms.Form):
    username = forms.CharField(label=u'用户名', max_length=100)
    password = forms.CharField(label=u'密码', widget=forms.PasswordInput())
    email = forms.EmailField(label=u'电子邮件')
    phone = forms.CharField(label=u'联系电话')
    domain = forms.CharField(label=u'客户领域')
    vip = forms.BooleanField(label=u'是否为重点长期合作客户')
    clientname = forms.CharField(label=u'客户名称', max_length=100)


def register(request):
    if request.method == "POST":
        uf = UserForm(request.POST)
        if uf.is_valid():
            username = uf.cleaned_data['username']
            password = uf.cleaned_data['password']
            email = uf.cleaned_data['email']
            phone = uf.cleaned_data['phone']
            domain = uf.cleaned_data['domain']
            vip = uf.cleaned_data['vip']
            clientname = uf.cleaned_data['clientname']

            user = User()
            user.username = username
            user.password = password
            user.email = email
            user.phone = phone
            user.domain = domain
            user.vip = vip
            user.clientname = clientname
            user.save()

            return render_to_response('success.html', {'username': username})
    else:
        uf = UserForm()
    return render_to_response('register.html', {'uf': uf})


class UserFormLogin(forms.Form):
    username = forms.CharField(label=u'用户名', max_length=100)
    password = forms.CharField(label=u'密码', widget=forms.PasswordInput())


def login(request):
    if request.method == "POST":
        uf = UserFormLogin(request.POST)
        if uf.is_valid():
            # 获取表单信息
            username = uf.cleaned_data['username']
            password = uf.cleaned_data['password']
            user = User.objects.filter(username__exact=username, password__exact=password)

            if user:
                response = HttpResponseRedirect('/account/index/')
                response.set_cookie('username', username, 3600)
                return response
            else:
                return HttpResponseRedirect('/account/login/')
    else:
        uf = UserFormLogin()
    return render_to_response('login.html', {'uf':uf})


def index(request):
    username = request.COOKIES.get('username','')
    user = User.objects.filter(username__exact=username)
    hasuser = False
    domain = ""
    clientname = ""
    if user:
        domain = user[0].domain
        clientname = u"欢迎回来，" + user[0].clientname
        hasuser = True
    else:
        hasuser = False
    return render_to_response('index.html', {'hasuser':hasuser, 'clientname': clientname, 'domain': domain})


def logout(request):
    response = HttpResponseRedirect('/account/index/')
    #清理cookie里保存username
    response.delete_cookie('username')
    return response


