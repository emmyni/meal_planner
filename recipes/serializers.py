from rest_framework import serializers
from recipes.models import Recipes

# Recipe Serializer
class RecipesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipes
        fields = '__all__'