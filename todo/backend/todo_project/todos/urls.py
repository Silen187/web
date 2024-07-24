from django.urls import path, include
from .views import ListTodo, DetailTodo
urlpatterns = [
    path('api/<int:pk>/', DetailTodo.as_view()),
    path('api/', ListTodo.as_view()),
]