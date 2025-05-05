from django.shortcuts import render
from .models import UserProfile

def profile_view(request):
    user_profile = UserProfile.objects.get(user=request.user)
    return render(request, 'profile.html', {'profile': user_profile})
