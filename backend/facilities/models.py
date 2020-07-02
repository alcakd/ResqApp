from django.db import models

# Create your models here.
class Facility(models.Model):
    name = models.TextField()
    address = models.TextField()
    size = models.TextField()
    last_modified = models.DateTimeField(auto_now_add=True)
