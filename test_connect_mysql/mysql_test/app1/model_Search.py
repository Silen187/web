from django.db import models, connection
import datetime

def Search(keyword):
    if keyword != "":
        words = keyword.split()
        if len(words) == 1:
            subphrases = []
            for i in range(len(words)):
                for j in range(i + 1, len(words) + 1):
                    subphrases.append(" ".join(words[i:j]))
            
            conditions = " OR ".join([f"(Web LIKE '%{phrase}%' OR Dim_NganhCon.NganhCon LIKE '%{phrase}%' OR TenCV LIKE '%{phrase}%' OR CongTy LIKE '%{phrase}%' OR Dim_TinhThanh.TinhThanh LIKE '%{phrase}%' OR Dim_LoaiHinh.LoaiHinh LIKE '%{phrase}%' OR Dim_KinhNghiem.KinhNghiem LIKE '%{phrase}%' OR Luong LIKE '%{phrase}%' OR Dim_CapBac.CapBac LIKE '%{phrase}%')" for phrase in subphrases])

            query = f"""
        SELECT Web, Dim_NganhCon.NganhCon, Link, TenCV, CongTy, Dim_TinhThanh.TinhThanh as TinhThanh, Dim_LoaiHinh.LoaiHinh as LoaiHinh, HanNopCVDate as HanNopCV, Dim_KinhNghiem.KinhNghiem as KinhNghiem, LuongETL as Luong, Image, ID, MoTa, YeuCau, PhucLoi, Dim_CapBac.CapBac as CapBac, LuongTB, Dim_KhoangLuong.KhoangLuong as KhoangLuong, SoLuong FROM 
            ThongTinTuyenDung.Data_Lake
            LEFT JOIN Dim_TinhThanh ON Data_Lake.ID_TinhThanh = Dim_TinhThanh.ID_TinhThanh
            LEFT JOIN Dim_LoaiHinh ON Data_Lake.ID_LoaiHinh = Dim_LoaiHinh.ID_LoaiHinh
            LEFT JOIN Dim_KinhNghiem ON Data_Lake.ID_KinhNghiem = Dim_KinhNghiem.ID_KinhNghiem
            LEFT JOIN Dim_CapBac ON Data_Lake.ID_CapBac = Dim_CapBac.ID_CapBac
            LEFT JOIN Dim_NganhCon ON Data_Lake.ID_NganhCon = Dim_NganhCon.ID_NganhCon
            LEFT JOIN Dim_KhoangLuong ON Data_Lake.ID_KhoangLuong = Dim_KhoangLuong.KhoangLuong_ID
            WHERE {conditions}
            """
        else:
            subphrases = []
            for i in range(len(words)):
                for j in range(i + 2, len(words) + 1):
                    subphrases.append(" ".join(words[i:j]))
                    
            conditions = " OR ".join([f"(Web LIKE '%{phrase}%' OR Dim_NganhCon.NganhCon LIKE '%{phrase}%' OR TenCV LIKE '%{phrase}%' OR CongTy LIKE '%{phrase}%' OR Dim_TinhThanh.TinhThanh LIKE '%{phrase}%' OR Dim_LoaiHinh.LoaiHinh LIKE '%{phrase}%' OR Dim_KinhNghiem.KinhNghiem LIKE '%{phrase}%' OR Luong LIKE '%{phrase}%' OR Dim_CapBac.CapBac LIKE '%{phrase}%')" for phrase in subphrases])

            query = f"""
        SELECT Web, Dim_NganhCon.NganhCon, Link, TenCV, CongTy, Dim_TinhThanh.TinhThanh as TinhThanh, Dim_LoaiHinh.LoaiHinh as LoaiHinh, HanNopCVDate as HanNopCV, Dim_KinhNghiem.KinhNghiem as KinhNghiem, LuongETL as Luong, Image, ID, MoTa, YeuCau, PhucLoi, Dim_CapBac.CapBac as CapBac, LuongTB, Dim_KhoangLuong.KhoangLuong as KhoangLuong, SoLuong FROM 
            ThongTinTuyenDung.Data_Lake
            LEFT JOIN Dim_TinhThanh ON Data_Lake.ID_TinhThanh = Dim_TinhThanh.ID_TinhThanh
            LEFT JOIN Dim_LoaiHinh ON Data_Lake.ID_LoaiHinh = Dim_LoaiHinh.ID_LoaiHinh
            LEFT JOIN Dim_KinhNghiem ON Data_Lake.ID_KinhNghiem = Dim_KinhNghiem.ID_KinhNghiem
            LEFT JOIN Dim_CapBac ON Data_Lake.ID_CapBac = Dim_CapBac.ID_CapBac
            LEFT JOIN Dim_NganhCon ON Data_Lake.ID_NganhCon = Dim_NganhCon.ID_NganhCon
            LEFT JOIN Dim_KhoangLuong ON Data_Lake.ID_KhoangLuong = Dim_KhoangLuong.KhoangLuong_ID
            WHERE {conditions}
            """    
    else:
        query = f"""
        SELECT Web, Dim_NganhCon.NganhCon, Link, TenCV, CongTy, Dim_TinhThanh.TinhThanh as TinhThanh, Dim_LoaiHinh.LoaiHinh as LoaiHinh, HanNopCVDate as HanNopCV, Dim_KinhNghiem.KinhNghiem as KinhNghiem, LuongETL as Luong, Image, ID, MoTa, YeuCau, PhucLoi, Dim_CapBac.CapBac as CapBac, LuongTB, Dim_KhoangLuong.KhoangLuong as KhoangLuong, SoLuong FROM 
            ThongTinTuyenDung.Data_Lake
            LEFT JOIN Dim_TinhThanh ON Data_Lake.ID_TinhThanh = Dim_TinhThanh.ID_TinhThanh
            LEFT JOIN Dim_LoaiHinh ON Data_Lake.ID_LoaiHinh = Dim_LoaiHinh.ID_LoaiHinh
            LEFT JOIN Dim_KinhNghiem ON Data_Lake.ID_KinhNghiem = Dim_KinhNghiem.ID_KinhNghiem
            LEFT JOIN Dim_CapBac ON Data_Lake.ID_CapBac = Dim_CapBac.ID_CapBac
            LEFT JOIN Dim_NganhCon ON Data_Lake.ID_NganhCon = Dim_NganhCon.ID_NganhCon
            LEFT JOIN Dim_KhoangLuong ON Data_Lake.ID_KhoangLuong = Dim_KhoangLuong.KhoangLuong_ID;"""
        
    with connection.cursor() as cursor:
        cursor.execute(query)
        rows = cursor.fetchall()
        data = []
        for row in rows:
            # Xử lý mỗi hàng và thêm vào list data
            data.append({
                'Web': row[0],
                'NganhCon': row[1],
                'Link': row[2],
                'TenCV': row[3],
                'CongTy': row[4],
                'TinhThanh': row[5],
                'LoaiHinh': row[6],
                'HanNopCV': row[7].strftime('%d-%m-%Y'),
                'KinhNghiem': row[8],
                'Luong': row[9],
                'Image':row[10],
                'ID': row[11],
                'MoTa': row[12],
                'YeuCau': row[13],
                'PhucLoi': row[14],
                'CapBac': row[15],
                'LuongTB': row[16],
                'KhoangLuong': row[17],
                'SoLuong': row[18],
            })
        return data
    
def GetID(id):
    query = f"""
       SELECT Web, Dim_NganhCon.NganhCon, Link, TenCV, CongTy, Dim_TinhThanh.TinhThanh as TinhThanh, Dim_LoaiHinh.LoaiHinh as LoaiHinh, HanNopCVDate as HanNopCV, Dim_KinhNghiem.KinhNghiem as KinhNghiem, LuongETL as Luong, Image, ID, MoTa, YeuCau, PhucLoi, Dim_CapBac.CapBac as CapBac, LuongTB, Dim_KhoangLuong.KhoangLuong as KhoangLuong, SoLuong FROM 
        ThongTinTuyenDung.Data_Lake
        LEFT JOIN Dim_TinhThanh ON Data_Lake.ID_TinhThanh = Dim_TinhThanh.ID_TinhThanh
        LEFT JOIN Dim_LoaiHinh ON Data_Lake.ID_LoaiHinh = Dim_LoaiHinh.ID_LoaiHinh
        LEFT JOIN Dim_KinhNghiem ON Data_Lake.ID_KinhNghiem = Dim_KinhNghiem.ID_KinhNghiem
        LEFT JOIN Dim_CapBac ON Data_Lake.ID_CapBac = Dim_CapBac.ID_CapBac
        LEFT JOIN Dim_NganhCon ON Data_Lake.ID_NganhCon = Dim_NganhCon.ID_NganhCon
        LEFT JOIN Dim_KhoangLuong ON Data_Lake.ID_KhoangLuong = Dim_KhoangLuong.KhoangLuong_ID
        WHERE ID = {id}
        """
    with connection.cursor() as cursor:
        cursor.execute(query)
        rows = cursor.fetchall()
        data = []
        for row in rows:
            data.append({
                'Web': row[0],
                'NganhCon': row[1],
                'Link': row[2],
                'TenCV': row[3],
                'CongTy': row[4],
                'TinhThanh': row[5],
                'LoaiHinh': row[6],
                'HanNopCV': row[7].strftime('%d-%m-%Y'),
                'KinhNghiem': row[8],
                'Luong': row[9],
                'Image':row[10],
                'ID': row[11],
                'MoTa': row[12],
                'YeuCau': row[13],
                'PhucLoi': row[14],
                'CapBac': row[15],
                'LuongTB': row[16],
                'KhoangLuong': row[17],
                'SoLuong': row[18],
            })
        return data