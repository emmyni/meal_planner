from recipes.models import Recipes
from rest_framework import viewsets, permissions
from .serializers import RecipesSerializer

# Recipe Viewset

class RecipesViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = RecipesSerializer

    def get_queryset(self):
        return self.request.user.recipes.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
