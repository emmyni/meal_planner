from rest_framework import serializers
from mealplan.models import Mealplan

# Pantry Serializer
class MealplanSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mealplan
        fields = '__all__'