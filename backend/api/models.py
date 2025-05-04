from django.db import models
import uuid

class User(models.Model):
    ROLE_CHOICES = (
        ('customer', 'Customer'),
        ('business', 'Business'),
    )

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    role = models.CharField(max_length=10, choices=ROLE_CHOICES)
    full_name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    country = models.CharField(max_length=100)
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    points = models.IntegerField(null=True, blank=True)
    business_name = models.CharField(max_length=150)
    website = models.URLField(null=True, blank=True)

    def __str__(self):
        return self.full_name


class Package(models.Model):
    CATEGORIES = (
        ('spa', 'Spa'),
    )

    id = models.AutoField(primary_key=True)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='packages')
    title = models.CharField(max_length=200)
    description = models.TextField()
    goal = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.URLField()
    category = models.CharField(max_length=50, choices=CATEGORIES)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    details = models.TextField()
    features = models.TextField()
    star = models.IntegerField()

    def __str__(self):
        return self.title
