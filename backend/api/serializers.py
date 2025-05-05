from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Customer, Business

User = get_user_model()

class SignupSerializer(serializers.Serializer):
    email = serializers.EmailField()
    first_name = serializers.CharField()
    last_name = serializers.CharField()
    password = serializers.CharField(write_only=True)
    role = serializers.ChoiceField(choices=['customer', 'business'])
    business_name = serializers.CharField(required=False)
    website = serializers.URLField(required=False)

    def validate(self, data):
        if data['role'] == 'business':
            if 'business_name' not in data:
                raise serializers.ValidationError("Business name is required for business users.")
        return data

    def create(self, validated_data):
        role = validated_data.pop('role')
        password = validated_data.pop('password')

        business_name = validated_data.pop('business_name', None)
        website = validated_data.pop('website', None)

        user = User.objects.create(
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name']
        )
        user.set_password(password)
        user.save()

        if role == 'customer':
            Customer.objects.create(user=user)
        elif role == 'business':
            Business.objects.create(user=user, business_name=business_name, website=website)


        user._role = role
        return user

    def to_representation(self, instance):
        return {
            "id": instance.id,
            "email": instance.email,
            "first_name": instance.first_name,
            "last_name": instance.last_name,
            "role": getattr(instance, "_role", None)
        }

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'first_name', 'last_name']