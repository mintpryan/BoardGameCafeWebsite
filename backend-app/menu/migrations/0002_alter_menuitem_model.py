# Generated by Django 5.0.6 on 2024-07-10 08:15

import menu.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('menu', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='menuitem',
            name='model',
            field=models.FileField(upload_to=menu.models.get_file_path),
        ),
    ]
