# Generated by Django 5.0.6 on 2024-07-10 11:16

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0005_remove_event_end_date_remove_event_end_time_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='start',
            field=models.DateTimeField(default=datetime.datetime(2024, 7, 10, 11, 16, 5, 985398, tzinfo=datetime.timezone.utc)),
        ),
    ]
