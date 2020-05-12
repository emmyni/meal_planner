from mealplan.models import Mealplan
from rest_framework import viewsets, permissions
from .serializers import MealplanSerializer

# Mealplan Viewset

class MealplanViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = MealplanSerializer

    def get_queryset(self):
        return self.request.user.mealplans.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)