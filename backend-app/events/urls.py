from django.urls import path
from .views import GetEvents
urlpatterns = [
    path('', GetEvents.as_view()),
]
