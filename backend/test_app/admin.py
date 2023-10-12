from django.contrib import admin
from .models import Art

class ArtAdmin(admin.ModelAdmin):
    list_display = ('title', 'content')

admin.site.register(Art, ArtAdmin)
