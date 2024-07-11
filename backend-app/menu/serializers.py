from core.abstract.serializers import AbstractSerializer
from .models import Category, MenuItem
from rest_framework import serializers


class MenuItemSerializers(AbstractSerializer):
    file_name = serializers.SerializerMethodField()

    class Meta:
        model = MenuItem
        fields = ['name', 'description', 'price', 'file_name']

    def get_file_name(self, obj):
        return obj.model.name.split('/')[-1] 




class CategorySerializer(AbstractSerializer):

    key = serializers.CharField(source='id')
    label = serializers.CharField(source='name')
    class Meta:
        model = Category
        fields = ['key', 'label']


