from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import SearchSerializer
from .model_Search import Search, GetID


class SearchView(APIView):
    def get(self, request):
        keyword = request.GET.get('keyword')
        your_data = Search(keyword)
        serializer = SearchSerializer(your_data, many=True)
        return Response({"results": serializer.data, "keyword": keyword})
    
class GetIDView(APIView):
    def get(self, request):
        id = request.GET.get('id')
        your_data = GetID(id)
        serializer = SearchSerializer(your_data, many=True)
        return Response({"results": serializer.data, "id": id})