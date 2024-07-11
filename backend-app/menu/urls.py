from django.urls import path
from .views import GetCategories,GetMenuItems
urlpatterns = [
    path('category/',GetCategories.as_view() ),
    path('category/<int:id>/menu-item/',GetMenuItems.as_view() ),
]
