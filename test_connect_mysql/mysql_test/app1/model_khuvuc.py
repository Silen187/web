from django.db import models, connection

    
def KhuVuc_HaNoi():
    with connection.cursor() as cursor:
        cursor.execute("SELECT Web, NganhCon, Link, TenCV, CongTy, TinhThanh, LoaiHinh, HanNopCV, KinhNghiem, Luong, Image FROM Stg_Data_Raw where TinhThanh = 'Hà Nội' LIMIT 2000")
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


def KhuVuc_HCM():
    with connection.cursor() as cursor:
        cursor.execute("SELECT Web, NganhCon, Link, TenCV, CongTy, TinhThanh, LoaiHinh, HanNopCV, KinhNghiem, Luong, Image FROM Stg_Data_Raw where TinhThanh = 'Hồ Chí Minh' LIMIT 100")
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
    
def KhuVuc_khac():
    with connection.cursor() as cursor:
        cursor.execute("SELECT Web, NganhCon, Link, TenCV, CongTy, TinhThanh, LoaiHinh, HanNopCV, KinhNghiem, Luong, Image FROM Stg_Data_Raw where TinhThanh not in ( 'Hà Nội' , 'Hồ Chí Minh') LIMIT 100")
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

def KhuVuc_All():
    with connection.cursor() as cursor:
        cursor.execute("SELECT Web, NganhCon, Link, TenCV, CongTy, TinhThanh, LoaiHinh, HanNopCV, KinhNghiem, Luong, Image FROM Stg_Data_Raw LIMIT 100")
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