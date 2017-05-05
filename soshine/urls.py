from django.conf.urls import url
from soshine import views

urlpatterns = [
    url(r'^sogis/$',views.sogis,name = 'sogis'),
    url(r'^somap/(\d+)$',views.somap,name = 'somap'),
    url(r'^index/$',views.index,name = 'soshineindex'),
]



