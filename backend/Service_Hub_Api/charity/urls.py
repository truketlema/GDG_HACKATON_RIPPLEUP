from django.urls import path
from .views import CharityListAPIView  

urlpatterns = [
    path('', CharityListAPIView.as_view(), name='charity-default'), 
    path('charities/', CharityListAPIView.as_view(), name='charity-list'),  
]
