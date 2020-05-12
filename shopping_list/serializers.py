from rest_framework import serializers
from shopping_list.models import ShoppingList

# ShoppingList Serializer
class ShoppingListSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShoppingList
        fields = '__all__'