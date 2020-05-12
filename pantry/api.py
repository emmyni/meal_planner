from pantry.models import Pantry
from rest_framework import viewsets, permissions
from .serializers import PantrySerializer

# Pantry Viewset

class PantryViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = PantrySerializer

    def get_queryset(self):
        return self.request.user.pantry_items.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
