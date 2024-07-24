from django.test import TestCase

from .models import Todo

class TodoModelTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        Todo.objects.create(title = 'thai', detail = 'Hehe')
        
    def test_title_content(self):
        todo = Todo.objects.get(id = '1')
        expected_object_name = f'{todo.title}'
        self.assertEqual(expected_object_name, 'thai')

    def test_detail_content(self):
        todo = Todo.objects.get(id = '1')
        expected_object_name = f'{todo.detail}'
        self.assertEqual(expected_object_name, 'Hehe')
# Create your tests here.
