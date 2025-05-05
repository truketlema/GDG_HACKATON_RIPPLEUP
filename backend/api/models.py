from django.db import models
from django.contrib.auth.models import AbstractUser
class User(AbstractUser):
    username = None
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
    email = models.EmailField(unique=True)

    
class Business(models.Model):
    business_name = models.CharField(max_length=150)
    website = models.URLField(null=True, blank=True)
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='business')
            
    def __str__(self):
        return self.business_name

class Customer(models.Model):
    points = models.IntegerField(null=True, blank=True)
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='customer')

    def __str__(self):
        return self.user.first_name + ' ' + self.user.last_name

class Category(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name

class Package(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='package')
    title = models.CharField(max_length=200)
    description = models.TextField()
    goal = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.URLField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='packages')
    price = models.DecimalField(max_digits=10, decimal_places=2)
    details = models.TextField()
    features = models.TextField()
    star = models.IntegerField()

    def __str__(self):
        return self.title