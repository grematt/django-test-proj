from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ArtSerializer
from .models import Art

# Create your views here.

class ArtView(viewsets.ModelViewSet):
    serializer_class = ArtSerializer
    queryset = Art.objects.all()