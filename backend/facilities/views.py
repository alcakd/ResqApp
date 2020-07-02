from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import generics
from facilities.models import Facility
from .serializers import FacilitySerializer

# Create your views here.

# class FacilityCreateAPIView(generics.CreateAPIView):
#     queryset = Facility.objects.all()
#     serializer_class = FacilitySerializer
#     permission_classes = []
#     authentication_classes = []

class FacilityCLView(generics.ListAPIView):
    lookup_field = 'id'
    serializer_class = FacilitySerializer

    def get_queryset(self):
            return Facility.objects.all()

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class FacilityRUDView(generics.RetrieveUpdateDestroyAPIView):
    lookup_field = 'id'
    serializer_class = FacilitySerializer
    queryset = Facility.objects.all() 


# class FacilityViewSet(generics.ListAPIView):
#     serializer_class = FacilitySerializer
#     permission_classes = []
#     authentication_classes = []

#     def list(self, request):
#         queryset = Facility.objects.all()
#         # serializer = serializer_class()
#         serializer = FacilitySerializer(queryset, many=True)
#         return Response(serializer.data)

# #     def create(self, request):
# #         pass

# #     def retrieve(self, request, pk=None):
# #         pass

# #     def update(self, request, pk=None):
# #         pass

# #     def partial_update(self, request, pk=None):
# #         pass

# #     def destroy(self, request, pk=None):
# #         pass
