from django.shortcuts import render

# Create your views here.
# charity/views.py
from rest_framework import generics
from .models import Charity
from .serializers import CharitySerializer

class CharityListAPIView(generics.ListAPIView):
    queryset = Charity.objects.all()
    serializer_class = CharitySerializer
