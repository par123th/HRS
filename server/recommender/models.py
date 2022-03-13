from django.db import models

# Create your models here.

#database to save users hotel history
class Hotel_history(models.Model):
    Name = models.CharField(max_length=100, null=False, blank=False)
    categories = models.CharField(max_length=100, blank=True, null=True)
    hotel_rating = models.IntegerField(null=True, blank=True)
