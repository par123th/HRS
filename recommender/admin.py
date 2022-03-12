from django.contrib import admin
from .models import Hotel_history
#from import_export.admin import ImportExportModelAdmin


# Register your models here.
# @admin.register(Hotel_history)
# class Hotel_historyAdmin(ImportExportModelAdmin):
#     pass
admin.site.register(Hotel_history)