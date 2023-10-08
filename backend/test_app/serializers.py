from rest_framework import serializers
from .models import TestClass

class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = TestClass
        fields = ('id', 'title', 'description', 'completed')