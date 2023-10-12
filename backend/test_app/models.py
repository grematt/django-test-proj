from django.db import models
from django.core.files.storage import FileSystemStorage

# Create your models here.

class Art(models.Model):
  title = models.CharField(max_length=120)
  content = models.TextField(max_length=10000)

  def _str_(self):
    return self.title