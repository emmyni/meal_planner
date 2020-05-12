from shopping_list.models import ShoppingList
from rest_framework import viewsets, permissions
from .serializers import ShoppingListSerializer

# ShoppingList Viewset

class ShoppingListViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = ShoppingListSerializer

    def get_queryset(self):
        return self.request.user.shopping_list_items.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
