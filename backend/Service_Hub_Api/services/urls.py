from django.urls import path
from .views import ServiceListView, SingleServiceView, CategoryServiceView

urlpatterns = [
    path('', ServiceListView.as_view(), name='service-list'),  
    path('<int:pk>/', SingleServiceView.as_view(), name='service-detail'),
    path('category/<str:category>/', CategoryServiceView.as_view(), name='service-category'),
]
