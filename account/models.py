# by Maxh

from django.db import models
from django.contrib import admin


class User(models.Model):
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=50)
    email = models.EmailField()
    phone = models.CharField(max_length=50)
    domain = models.CharField(max_length=50)
    vip = models.BooleanField
    clientname = models.CharField(max_length=50)

    def __unicode__(self):
        return self.username

class UserAdmin(admin.ModelAdmin):
    list_display = ('username', 'email', 'phone', 'domain', 'clientname')

admin.site.register(User, UserAdmin)