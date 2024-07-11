from django.contrib import admin
from . import models

admin.site.site_header = "Board Game Cafe Admin Panel"
admin.site.site_title = "Cafe's Menu"


class MenuItemAdmin(admin.ModelAdmin):
    list_display = ('name','category','price')


class MenuItemInline(admin.TabularInline):
    model = models.MenuItem
    # template = 'MenuItemForm.html'
    exclude = ['created_at']
    extra = 1


class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name',)
    exclude = ['created_at']
    fieldsets = [(None, {'fields': ['name']}),]
                
                 


# Register your models here.
admin.site.register(models.Category, CategoryAdmin)
admin.site.register(models.MenuItem, MenuItemAdmin)
