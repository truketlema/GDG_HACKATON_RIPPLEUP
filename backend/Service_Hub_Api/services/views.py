from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Service
from .serializers import ServiceSerializer

class ServiceListView(APIView):
    def get(self, request):
        services = Service.objects.all()
        serializer = ServiceSerializer(services, many=True)
        return Response(serializer.data)

class SingleServiceView(APIView):
    def get(self, request, pk):
        try:
            service = Service.objects.get(pk=pk)
            serializer = ServiceSerializer(service)
            return Response(serializer.data)
        except Service.DoesNotExist:
            return Response({'error': 'Service not found'}, status=status.HTTP_404_NOT_FOUND)

class CategoryServiceView(APIView):
    def get(self, request, category):
        services = Service.objects.filter(category__iexact=category)
        serializer = ServiceSerializer(services, many=True)
        return Response(serializer.data)
