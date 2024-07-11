from django.shortcuts import render
from rest_framework import generics

from rest_framework import permissions
from .models import Category, MenuItem
from .serializers import CategorySerializer, MenuItemSerializers

# Create your views here.


class GetCategories(generics.ListAPIView):
    queryset = Category.objects.all()
    permission_classes = (permissions.AllowAny,)
    serializer_class = CategorySerializer


class GetMenuItems(generics.ListAPIView):
    serializer_class = MenuItemSerializers

    def get_queryset(self):
        category_id = self.kwargs['id']
        return MenuItem.objects.filter(category_id=category_id)
