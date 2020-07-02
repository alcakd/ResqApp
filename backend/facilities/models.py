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
#     last_modified = models.DateTimeField(auto_now_add=True)
#     SIZE_CHOICES = [('SML', 'Small'), ('MED': 'Medium'), ('LRG', 'Large') ]
#     size = models.CharField(
#       max_length=200
#       choices=SIZE_CHOICES
#     )
#     or size can be foreign key to FacilitySize depending on how hardcoded or programmatic you'd like

# class FacilitySize(models.Model):
#     name = models.CharField(max_length=200)
#     description = models.CharField()

#update and clean up model field types