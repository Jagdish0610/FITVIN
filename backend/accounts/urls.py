from django.urls import path
from .views import RegisterView
from .views import login_view


urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', login_view),

]
