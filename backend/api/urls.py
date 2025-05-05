from django.urls import path
from .views import SignupCreateAPIView,LoginAPIView,PackageListView,PackageDetailView

urlpatterns = [
    path('signup/', SignupCreateAPIView.as_view(), name='signup'),
    path('login/', LoginAPIView.as_view(), name='login'),
    path('packages/', PackageListView.as_view(), name='package-list'),
    path('packages/<int:id>/', PackageDetailView.as_view(), name='package-detail'),
]