from rest_framework import serializers

from facilities.models import Facility

class FacilitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Facility
        fields = ['name', 'address', 'size']
    
    def validate_name(self, value):
        if 'name' not in value:
            raise serializers.ValidationErrors("Name didn't contain substring 'name' and thats not okay")
        return value