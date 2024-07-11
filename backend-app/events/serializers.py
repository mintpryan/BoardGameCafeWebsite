from rest_framework import serializers
from .models import Event

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'


    def to_representation(self, instance):
        representation = super().to_representation(instance)
        if instance.start:
            representation['start'] = instance.start.isoformat()
        if instance.end:
            representation['end'] = instance.end.isoformat()
        return representation