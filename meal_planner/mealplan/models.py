from django.db import models
from django.contrib.auth.models import User

class Mealplan(models.Model):
    name = models.CharField(max_length=100, unique=True)
    recipe_id1 = models.IntegerField()
    recipe_id2 = models.IntegerField()
    recipe_id3 = models.IntegerField()
    details = models.CharField(max_length=500, blank=True)
    date = models.DateTimeField(blank=True)
    owner = models.ForeignKey(User, related_name="mealplans", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
