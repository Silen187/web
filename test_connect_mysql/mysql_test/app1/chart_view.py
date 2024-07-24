from django.http import JsonResponse
from rest_framework.views import APIView
import matplotlib.pyplot as plt
import io
import base64
import json
from collections import Counter

class ChartView(APIView):
    def post(self, request):
        filter_data = request.data

        # Tổng hợp số lượng công việc theo TỉnhThành
        tinh_thanh_counts = Counter(job['TinhThanh'] for job in filter_data)
        labels = list(tinh_thanh_counts.keys())
        values = list(tinh_thanh_counts.values())

        # Tạo biểu đồ cột
        plt.figure(figsize=(10, 6))
        plt.bar(labels, values, color='skyblue')
        plt.title('Tổng hợp số lượng công việc theo Tỉnh/Thành phố')
        plt.xlabel('Tỉnh/Thành phố')
        plt.ylabel('Số lượng công việc')
        plt.xticks(rotation=45, ha="right")

        # Lưu biểu đồ vào bộ nhớ đệm và chuyển đổi sang base64
        buffer = io.BytesIO()
        plt.savefig(buffer, format='png')
        buffer.seek(0)
        image_png = buffer.getvalue()
        buffer.close()

        graphic = base64.b64encode(image_png)
        graphic = graphic.decode('utf-8')

        # Trả về dữ liệu biểu đồ dưới dạng JSON
        return JsonResponse({'image': graphic})