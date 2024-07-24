import React , {useRef} from 'react';
import coverImg from "../../images/logo_.png";
import "./BookDetails.css";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loader from "../Loader/Loader";
import axios from 'axios';

const BookDetails = () => {
  const navigate = useNavigate();
  const jobListRef = useRef(null);
  const { id } = useParams(); 
  const [job, setJob] = useState(null); // Thêm state để lưu trữ dữ liệu công việc
  const [loading, setLoading] = useState(true); // Thêm state để xử lý trạng thái loading
  const [error, setError] = useState(null); // Thêm state để xử lý lỗi

  useEffect(() => {
    if (jobListRef.current) {
      jobListRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [job]);
  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/id/?id=${id}`); // Lấy chi tiết công việc dựa trên id
        setJob(response.data["results"][0]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchJobDetails();
  }, [id]);
  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <div>Lỗi: {error}</div>; 
  }
  return (
    <section className='book-details' ref={jobListRef}>
      <div className='container'>
        <div className='btn-flex'>
          <button type='button' className='flex flex-c back-btn' onClick={() => navigate("/job")}>
            <FaArrowLeft size = {22} />
            <span className='fs-18 fw-6'>Quay lại</span>
          </button>
          <button type='button' className='flex flex-c back-btn' onClick={() => window.open(`${job.Link}`, '_blank')}>
            <span className='fs-18 fw-6'>Đến trang gốc</span>
            <FaArrowRight size = {22} />
          </button>
        </div>

        <div className='book-details-content grid'>
          <div className='book-details-img'>
            <img src = {coverImg} alt = "cover img" />
          </div>
          <div className='book-details-info'>
            <div className='book-details-item title'>
              <span className='fw-6 fs-24'>{job.TenCV}</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>Công Ty: </span>
              <span className='text-italic'>{job.CongTy}</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>Trang đăng: </span>
              <span className='text-italic'>{job.Web}</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>Chuyên ngành: </span>
              <span>{job.NganhCon}</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>Kinh Nghiệm: </span>
              <span className='text-italic'>{job.KinhNghiem}</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>Loại hình: </span>
              <span className='text-italic'>{job.LoaiHinh}</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>Cấp bậc: </span>
              <span className='text-italic'>{job.CapBac}</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>Tỉnh thành: </span>
              <span className='text-italic'>{job.TinhThanh}</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>Hạn nộp CV: </span>
              <span className='text-italic'>{job.HanNopCV}</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>Lương: </span>
              <span className='text-italic'>{job.Luong}</span>
            </div>
            <div className='book-details-item description wrap'>
              <span className='fw-6'>Mô Tả: </span><br></br>
              <span>{job.MoTa}</span>
            </div>
            <div className='book-details-item description wrap'>
              <span className='fw-6'>Yêu Cầu: </span><br></br>
              <span>{job.YeuCau}</span>
            </div>
            <div className='book-details-item description wrap'>
              <span className='fw-6'>Phúc Lợi: </span><br></br>
              <span>{job.PhucLoi}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookDetails