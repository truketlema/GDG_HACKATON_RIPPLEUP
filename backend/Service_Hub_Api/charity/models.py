from django.db import models

# Create your models here.

class Charity(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    category = models.CharField(max_length=100)
    logo = models.URLField()
    impact = models.CharField(max_length=255)

    def __str__(self):
        return self.name


