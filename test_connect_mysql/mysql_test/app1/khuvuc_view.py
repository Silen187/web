from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import YourDataSerializer
from .model_khuvuc import KhuVuc_All, KhuVuc_HCM, KhuVuc_HaNoi, KhuVuc_khac

class HaNoiView(APIView):
    def get(self, request):
        your_data = KhuVuc_HaNoi()
        serializer = YourDataSerializer(your_data, many=True)
        return Response(serializer.data)

class HCMView(APIView):
    def get(self, request):
        # Lấy dữ liệu từ cơ sở dữ liệu MySQL
        your_data = KhuVuc_HCM()
        
        # Chuyển đổi dữ liệu sang dạng JSON sử dụng Serializer
        serializer = YourDataSerializer(your_data, many=True)
        
        # Trả về JSON response
        return Response(serializer.data)
    
class KhacView(APIView):
    def get(self, request):
        # Lấy dữ liệu từ cơ sở dữ liệu MySQL
        your_data = KhuVuc_khac()
        
        # Chuyển đổi dữ liệu sang dạng JSON sử dụng Serializer
        serializer = YourDataSerializer(your_data, many=True)
        
        # Trả về JSON response
        return Response(serializer.data)

class AllView(APIView):
    def get(self, request):
        # Lấy dữ liệu từ cơ sở dữ liệu MySQL
        your_data = KhuVuc_All()
        
        # Chuyển đổi dữ liệu sang dạng JSON sử dụng Serializer
        serializer = YourDataSerializer(your_data, many=True)
        
        # Trả về JSON response
        return Response(serializer.data)

    