from django.urls import path
from .views import SignupCreateAPIView,LoginAPIView

urlpatterns = [
    path('signup/', SignupCreateAPIView.as_view(), name='signup'),
    path('login/', LoginAPIView.as_view(), name='login'),
]