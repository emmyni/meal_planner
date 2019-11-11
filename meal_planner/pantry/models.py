from django.db import models

class Pantry(models.Model):
    name = models.CharField(max_length=100, unique=True)
    quantity = models.IntegerField()
    details = models.CharField(max_length=500, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
