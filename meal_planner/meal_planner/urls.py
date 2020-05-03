from django.contrib import admin
from django.urls import path, include 

urlpatterns = [
    # path('admin/', admin.site.urls),
    path('', include('frontend.urls')),
    path('', include('pantry.urls')),
    path('', include('accounts.urls')),
    path('', include('recipes.urls')),
    # path('', include('mealplan.urls'))
]
