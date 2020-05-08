from django.db import models
from django.contrib.auth.models import User

class Recipes(models.Model):
    recipe_id = models.IntegerField(unique=True)
    title = models.CharField(max_length=100)
    readyInMinutes = models.IntegerField()
    servings = models.IntegerField()
    sourceUrl = models.CharField(max_length=500)
    image = models.CharField(max_length=500,blank=True)
    summary = models.TextField(blank=True)
    inMealplan = models.BooleanField(default=False)
    owner = models.ForeignKey(User, related_name="recipes", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
