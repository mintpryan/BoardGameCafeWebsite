from django.urls import path
from .views import GetEvents,EventDetailAPIView
urlpatterns = [
    path('', GetEvents.as_view()),
    path('<str:public_id>', EventDetailAPIView.as_view()),
]
