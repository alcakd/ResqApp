from django.shortcuts import render
from rest_framework import generics
from facilities.models import Facility
from .serializers import FacilitySerializer

# Create your views here.

class FacilityCreateAPIView(generics.CreateAPIView):
    queryset = Facility.objects.all()
    serializer_class = FacilitySerializer
    permission_classes = []
    authentication_classes = []