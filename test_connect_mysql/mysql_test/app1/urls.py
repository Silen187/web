from django.urls import path
from .khuvuc_view import AllView, KhacView, HaNoiView, HCMView
from .search_view import SearchView, GetIDView
from .trangdang_view import TopDevView, CareerVietView, ITViecView, ITNaViView, Vieclam24hView, DevWorkView, TopCVView, VietNamWorkView, TrangDangKhacView
from .chart_view import ChartView
urlpatterns = [
    path('api/khu-vuc', AllView.as_view(), name='tat-ca-khu-vuc'),
    path('api/khu-vuc/ha-noi', HaNoiView.as_view(), name='khu-vuc-ha-noi'),
    path('api/khu-vuc/hcm', HCMView.as_view(), name='khu-vuc-hcm'),
    path('api/khu-vuc/khac', KhacView.as_view(), name='khu-vuc-khac'),
    
    path('api/search/', SearchView.as_view(), name='tim-kiem'),
    path('api/id/', GetIDView.as_view(), name='lay-id'),
    
    path('api/trang-dang/topdev', TopDevView.as_view(), name ='top-dev'),
    path('api/trang-dang/careerviet', CareerVietView.as_view(), name='career-viet'),
    path('api/trang-dang/itviec', ITViecView.as_view(), name='it-viec'),
    path('api/trang-dang/itnavi', ITNaViView.as_view(), name='it-navi'),
    path('api/trang-dang/vieclam24h', Vieclam24hView.as_view(), name='vieclam-24h'),
    path('api/trang-dang/devwork', DevWorkView.as_view(), name='dev-work'),
    path('api/trang-dang/topcv', TopCVView.as_view(), name='top-cv'),
    path('api/trang-dang/vietnamwork', VietNamWorkView.as_view(), name='vietnam-work'),
    path('api/trang-dang/khac', TrangDangKhacView.as_view(), name='khac'),
    
    path('api/chart', ChartView.as_view(), name='chart'),
]