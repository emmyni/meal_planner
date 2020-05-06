from django.db import models
from django.contrib.auth.models import User

class ShoppingList(models.Model):
    name = models.CharField(max_length=100, unique=True)
    quantity = models.IntegerField()
    units = models.CharField(max_length=50, blank=True)
    details = models.CharField(max_length=500, blank=True)
    owner = models.ForeignKey(User, related_name="shopping_list_items", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
