from django.urls import path
from tree import views

urlpatterns = [
    path('', views.index, name='tree'),
]