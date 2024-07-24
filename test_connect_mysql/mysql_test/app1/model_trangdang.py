from django.db import models, connection

def TrangDang_CareerViet():
    with connection.cursor() as cursor:
        cursor.execute(f"SELECT Web, NganhCon, Link, TenCV, CongTy, TinhThanh, LoaiHinh, HanNopCV, KinhNghiem, Luong, Image FROM Stg_Data_Raw where Web = 'CareerViet' LIMIT 100")
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
                'HanNopCV': row[7],
                'KinhNghiem': row[8],
                'Luong': row[9],
                'Image':row[10]
            })
        return data
    
def TrangDang_ITViec():
    with connection.cursor() as cursor:
        cursor.execute(f"SELECT Web, NganhCon, Link, TenCV, CongTy, TinhThanh, LoaiHinh, HanNopCV, KinhNghiem, Luong, Image FROM Stg_Data_Raw where Web = 'ITViec' LIMIT 100")
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
                'HanNopCV': row[7],
                'KinhNghiem': row[8],
                'Luong': row[9],
                'Image':row[10]
            })
        return data

def TrangDang_TopDev():
    with connection.cursor() as cursor:
        cursor.execute(f"SELECT Web, NganhCon, Link, TenCV, CongTy, TinhThanh, LoaiHinh, HanNopCV, KinhNghiem, Luong, Image FROM Stg_Data_Raw where Web = 'TopDev' LIMIT 100")
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
                'HanNopCV': row[7],
                'KinhNghiem': row[8],
                'Luong': row[9],
                'Image':row[10]
            })
        return data

def TrangDang_VietNamWork():
    with connection.cursor() as cursor:
        cursor.execute(f"SELECT Web, NganhCon, Link, TenCV, CongTy, TinhThanh, LoaiHinh, HanNopCV, KinhNghiem, Luong, Image FROM Stg_Data_Raw where Web = 'VietNamWork' LIMIT 100")
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
                'HanNopCV': row[7],
                'KinhNghiem': row[8],
                'Luong': row[9],
                'Image':row[10]
            })
        return data
    
def TrangDang_ITNaVi():
    with connection.cursor() as cursor:
        cursor.execute(f"SELECT Web, NganhCon, Link, TenCV, CongTy, TinhThanh, LoaiHinh, HanNopCV, KinhNghiem, Luong, Image FROM Stg_Data_Raw where Web = 'ITNaVi' LIMIT 100")
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
                'HanNopCV': row[7],
                'KinhNghiem': row[8],
                'Luong': row[9],
                'Image':row[10]
            })
        return data

def TrangDang_DevWork():
    with connection.cursor() as cursor:
        cursor.execute(f"SELECT Web, NganhCon, Link, TenCV, CongTy, TinhThanh, LoaiHinh, HanNopCV, KinhNghiem, Luong, Image FROM Stg_Data_Raw where Web = 'DevWork' LIMIT 100")
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
                'HanNopCV': row[7],
                'KinhNghiem': row[8],
                'Luong': row[9],
                'Image':row[10]
            })
        return data

def TrangDang_TopCV():
    with connection.cursor() as cursor:
        cursor.execute(f"SELECT Web, NganhCon, Link, TenCV, CongTy, TinhThanh, LoaiHinh, HanNopCV, KinhNghiem, Luong, Image FROM Stg_Data_Raw where Web = 'TopCV' LIMIT 100")
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
                'HanNopCV': row[7],
                'KinhNghiem': row[8],
                'Luong': row[9],
                'Image':row[10]
            })
        return data
    
def TrangDang_Vieclam24h():
    with connection.cursor() as cursor:
        cursor.execute(f"SELECT Web, NganhCon, Link, TenCV, CongTy, TinhThanh, LoaiHinh, HanNopCV, KinhNghiem, Luong, Image FROM Stg_Data_Raw where Web = 'Vieclam24h' LIMIT 100")
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
                'HanNopCV': row[7],
                'KinhNghiem': row[8],
                'Luong': row[9],
                'Image':row[10]
            })
        return data

def TrangDang_Khac():
    with connection.cursor() as cursor:
        cursor.execute(f"SELECT Web, NganhCon, Link, TenCV, CongTy, TinhThanh, LoaiHinh, HanNopCV, KinhNghiem, Luong, Image FROM Stg_Data_Raw where Web NOT IN ('CareerViet', 'ITViet', 'TopDev', 'VietNamWork', 'ITNaVi', 'DevWork', 'TopCV', 'Vieclam24h') LIMIT 100")
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
                'HanNopCV': row[7],
                'KinhNghiem': row[8],
                'Luong': row[9],
                'Image':row[10]
            })
        return data