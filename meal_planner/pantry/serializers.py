from rest_framework import serializers
from pantry.models import Pantry

# Pantry Serializer
class PantrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Pantry
        fields = '__all__'