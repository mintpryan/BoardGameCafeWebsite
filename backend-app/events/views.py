from django.shortcuts import render
from rest_framework import generics

from rest_framework import permissions
from .models import Event
from .serializers import EventSerializer

# Create your views here.


class GetEvents(generics.ListAPIView):
    queryset = Event.objects.all()
    permission_classes = (permissions.AllowAny,)
    serializer_class = EventSerializer
