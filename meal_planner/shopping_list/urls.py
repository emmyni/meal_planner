from rest_framework import routers
from .api import ShoppingListViewSet

router = routers.DefaultRouter()
router.register('api/shopping-list', ShoppingListViewSet, 'shopping_list')

urlpatterns = router.urls