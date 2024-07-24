import React from 'react';
import { Link } from 'react-router-dom';
import "./BookList.css";

const Book = (book) => {
  return (
    <div className='job-item flex flex-column flex-sb'>
      <div className='job-item-img'>
        <img src = {book.cover_img} alt = "cover" />
      </div>
      <div className='job-item-info text-center'>
        <Link to = {`/job/${book.id}`}>
          <div className='book-item-info-item title fs-15'>
            <span className='fw-7'>{book.TenCV}</span>
          </div>
        </Link>

        <div className='job-item-info-item author fs-15'>
          <span className='text-capitalize fw-7'>{book.CongTy}</span>
        </div>

        <div className='job-item-info-item'>
          <span>Kinh nghiệm: {book.KinhNghiem}</span>
        </div>

        <div className='job-item-info-item'>
          <span>Lương: {book.Luong}</span>
        </div>

        <div className='job-item-info-item'>
          <span>Loại hình: {book.LoaiHinh}</span>
        </div>

        <div className='job-item-info-item'>
          <span>Tỉnh thành: {book.TinhThanh}</span>
        </div>

        <div className='job-item-info-item web fs-15'>
          <span className='text-capitalize fw-7'>{book.Web}</span>
        </div>

        <div className='job-item-info-item publish-year fs-15'>
          <span className='text-capitalize fw-7'>Hạn nộp CV: {book.HanNopCV}</span>
        </div>
        
      </div>
    </div>
  )
}

export default Book