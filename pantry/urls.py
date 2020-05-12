from rest_framework import routers
from .api import PantryViewSet

router = routers.DefaultRouter()
router.register('api/pantry', PantryViewSet, 'pantry')

urlpatterns = router.urls