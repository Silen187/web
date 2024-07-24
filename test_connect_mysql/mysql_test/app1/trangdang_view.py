from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import YourDataSerializer
from .model_trangdang import TrangDang_TopDev, TrangDang_CareerViet, TrangDang_ITViec, TrangDang_ITNaVi, TrangDang_Vieclam24h, TrangDang_DevWork, TrangDang_TopCV, TrangDang_VietNamWork, TrangDang_Khac

class TopDevView(APIView):
    def get(self, request):
        your_data = TrangDang_TopDev()
        serializer = YourDataSerializer(your_data, many=True)
        return Response(serializer.data)
    
class CareerVietView(APIView):
    def get(self, request):
        your_data = TrangDang_CareerViet()
        serializer = YourDataSerializer(your_data, many=True)
        return Response(serializer.data)
    
class ITViecView(APIView):
    def get(self, request):
        your_data = TrangDang_ITViec()
        serializer = YourDataSerializer(your_data, many=True)
        return Response(serializer.data)

class ITNaViView(APIView):
    def get(self, request):
        your_data = TrangDang_ITNaVi()
        serializer = YourDataSerializer(your_data, many=True)
        return Response(serializer.data)
    
class Vieclam24hView(APIView):
    def get(self, request):
        your_data = TrangDang_Vieclam24h()
        serializer = YourDataSerializer(your_data, many=True)
        return Response(serializer.data)

class DevWorkView(APIView):
    def get(self, request):
        your_data = TrangDang_DevWork()
        serializer = YourDataSerializer(your_data, many=True)
        return Response(serializer.data)

class TopCVView(APIView):
    def get(self, request):
        your_data = TrangDang_TopCV()
        serializer = YourDataSerializer(your_data, many=True)
        return Response(serializer.data)

class VietNamWorkView(APIView):
    def get(self, request):
        your_data = TrangDang_VietNamWork()
        serializer = YourDataSerializer(your_data, many=True)
        return Response(serializer.data)

class TrangDangKhacView(APIView):
    def get(self, request):
        your_data = TrangDang_Khac()
        serializer = YourDataSerializer(your_data, many=True)
        return Response(serializer.data)
