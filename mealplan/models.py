from django.db import models
from django.contrib.auth.models import User

class Mealplan(models.Model):
    name = models.CharField(max_length=100)
    recipe_id1 = models.IntegerField()
    recipe_id2 = models.IntegerField()
    recipe_id3 = models.IntegerField()
    details = models.CharField(max_length=500, blank=True)
    date = models.DateField(blank=True)
    calories = models.IntegerField()
    protein = models.IntegerField()
    fat = models.IntegerField()
    carbohydrates = models.IntegerField()
    owner = models.ForeignKey(User, related_name="mealplans", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
