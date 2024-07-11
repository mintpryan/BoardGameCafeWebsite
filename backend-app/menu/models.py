from django.db import models
from core.abstract import AbstractModel
import uuid
import os
# Create your models here.


class Category(AbstractModel):
    name = models.CharField(max_length=128)

    def __str__(self) -> str:
        return self.name


def get_file_path(instance, filename):
    ext = filename.split('.')[-1]
    filename = f"{uuid.uuid4()}.{ext}"
    return os.path.join('3dModels/', filename)

class MenuItem(AbstractModel):
    name = models.CharField(max_length=200)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    description = models.TextField(max_length=512)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    model = models.FileField(upload_to=get_file_path)

    def __str__(self) -> str:
        return self.name
