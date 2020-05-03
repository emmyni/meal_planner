from rest_framework import routers
from .api import RecipesViewSet

router = routers.DefaultRouter()
router.register('api/recipe', RecipesViewSet, 'recipe')

urlpatterns = router.urls