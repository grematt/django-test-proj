from django.contrib import admin
from .models import TestClass

class TestClassAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'completed')

admin.site.register(TestClass, TestClassAdmin)
