from django.db import models
from core.abstract.models import AbstractModel
from django.utils import timezone
import pytz
# # Create your models here.


class Event(AbstractModel):
    DAYS_OF_WEEK = [
        ('MO', 'Monday'),
        ('TU', 'Tuesday'),
        ('WE', 'Wednesday'),
        ('TH', 'Thursday'),
        ('FR', 'Friday'),
        ('SA', 'Saturday'),
        ('SU', 'Sunday'),
    ]

    title = models.CharField(max_length=200)
    description = models.TextField(max_length=600)
    start = models.DateTimeField()
    end = models.DateTimeField(null=True, blank=True)
    is_recurring = models.BooleanField(default=False)
    recurring_days = models.JSONField(null=True, blank=True)
    recurrence_frequency = models.IntegerField(null=True, blank=True)
    recurrence_end_date = models.DateField(null=True, blank=True) 

    def __str__(self):
        return self.title
