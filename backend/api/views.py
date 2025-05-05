from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import SignupSerializer,UserSerializer,PackageSerializer,UserDetailSerializer
from .models import Package
from drf_spectacular.utils import extend_schema
from rest_framework.generics import GenericAPIView,ListAPIView,RetrieveAPIView
from django.contrib.auth import authenticate
from rest_framework.permissions import IsAuthenticated
class SignupCreateAPIView(APIView):
    @extend_schema(
        request=SignupSerializer,
        responses={201: SignupSerializer}
    )
    
    def post(self, request, *args, **kwargs):
        serializer = SignupSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()


        role = 'customer' if hasattr(user, 'customer') else 'business'


        refresh = RefreshToken.for_user(user)
        token = str(refresh.access_token)

        response_data = {
            "message": "Account created successfully",
            "user": {
                "id": user.id,
                "email": user.email,
                "name": f"{user.first_name} {user.last_name}",
                "role": role
            },
            "token": token
        }

        return Response(response_data, status=status.HTTP_201_CREATED)

class LoginAPIView(GenericAPIView):
    serializer_class = UserSerializer

    def post(self, request, *args, **kwargs):
        email = request.data.get('email')
        password = request.data.get('password')


        user = authenticate(email=email, password=password)
        
        if not user:
            return Response({"detail": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)

        refresh = RefreshToken.for_user(user)
        access_token = str(refresh.access_token)


        response_data = {
            "token": access_token,
            "id": str(user.id),
            "role": 'business' if hasattr(user, 'business') else 'customer',
            "full_name": f"{user.first_name} {user.last_name}",
            "email": user.email,
            "points": getattr(user.customer, 'points', 0) if hasattr(user, 'customer') else 0,
            "business_name": getattr(user.business, 'business_name', '') if hasattr(user, 'business') else '',
            "website": getattr(user.business, 'website', '') if hasattr(user, 'business') else ''
        }

        return Response(response_data, status=status.HTTP_200_OK)

class PackageListView(ListAPIView):
    queryset = Package.objects.all()
    serializer_class = PackageSerializer
    permission_classes = [IsAuthenticated]

class PackageDetailView(RetrieveAPIView):
    queryset = Package.objects.all()
    serializer_class = PackageSerializer
    lookup_field = 'id'
    permission_classes = [IsAuthenticated]

class UserDetailAPIView(RetrieveAPIView):
    serializer_class = UserDetailSerializer
    permission_classes = [IsAuthenticated]
    def get_object(self):
        return self.request.user