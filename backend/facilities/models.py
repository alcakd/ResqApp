from django.db import models

# Create your models here.
class Facility(models.Model):
    #implicit id primary key
    name = models.TextField()
    address = models.TextField()
    size = models.TextField()
    last_modified = models.DateTimeField(auto_now_add=True)


# class Facility(models.Model):
#     name = models.CharField(max_length=200)
#     address = models.CharField(max_length=200)
#     size = models.ForeignKey(FacilitySize)
#     last_modified = models.DateTimeField(auto_now_add=True)

# class FacilitySize(models.Model):
#     name = models.CharField(max_length=200)
#     description = models.CharField(max_length=200)

#update and clean up model field types