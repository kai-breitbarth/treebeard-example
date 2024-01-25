from django.contrib import admin
from treebeard.admin import TreeAdmin
from treebeard.forms import movenodeform_factory
from .models import Category


class CategoryAdmin(TreeAdmin):
    list_display = ("name", "description")
    form = movenodeform_factory(Category)


admin.site.register(Category, CategoryAdmin)
