from pantry.models import Pantry
from rest_framework import viewsets, permissions 
from .serializers import PantrySerializer

# Pantry Viewset
class PantryViewSet(viewsets.ModelViewSet):
    queryset = Pantry.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = PantrySerializer