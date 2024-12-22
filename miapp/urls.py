from django.urls import path
from . import views
from django.views.generic import RedirectView

urlpatterns = [
    path('', views.login_view, name='login'),  # Página de login
    path('home/', views.love_page, name='index'),
]