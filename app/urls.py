from django.urls import path

from . import views

urlpatterns = [
    path('auth/token/', views.CreateTokenView.as_view(), name="token"),
    path('auth/logout/', views.LogoutView.as_view(), name="logout"),
]
