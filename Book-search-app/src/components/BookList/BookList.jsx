import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { useGlobalContext } from '../../context.';
import Loader from "../Loader/Loader";
import coverImg from "../../images/meomeo.png";
import "./BookList.css";
import {PieChartVungMien}  from "../Chart/VungMien/PieChartVungMien";
import { PieChartCapBac }  from '../Chart/CapBac/PieChartCapBac';
import {PieChartKinhNghiem}  from '../Chart/KinhNghiem/PieChartKinhNghiem';
import { PieChartKhoangLuong } from '../Chart/KhoangLuong/PieChartKhoangLuong';
import renderJobList from "./Filter/FilterComponent"
import Card from "../Chart/Card/Card";


const BookList = () => {
  const {jobs, loading, resultTitle, searchTerm} = useGlobalContext();
  const jobListRef = useRef(null); // Ref đến phần tử cần cuộn
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 20;

  const [filters, setFilters] = useState({
    filter_general: '',
    diaDiem: '',
    loaihinh: '',
    khoangluong: '',
    capbac: '',
    kinhnghiem: '',
  }); 
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);
  const [uniqueDiaDiem, setUniqueDiaDiem] = useState([]);
  const [uniqueLoaiHinh, setUniqueLoaiHinh] = useState([]);
  const [uniqueLuong, setUniqueLuong] = useState([]);
  const [uniqueCapBac, setUniqueCapBac] = useState([]);
  const [uniqueKinhNghiem, setUniqueKinhNghiem] = useState([]);

  const [filteredDiaDiem, setFilteredDiaDiem] = useState(uniqueDiaDiem);
  const [filteredLoaiHinh, setFilteredLoaiHinh] = useState(uniqueLoaiHinh);
  const [filteredLuong, setFilteredLuong] = useState(uniqueLuong);
  const [filteredCapBac, setFilteredCapBac] = useState(uniqueCapBac);
  const [filteredKinhNghiem, setFilteredKinhNghiem] = useState(uniqueKinhNghiem);

  const [expanded, setExpanded] = useState(null);

  const handleFilterChange = (filterName, value) => {
    setFilters({ ...filters, [filterName]: value });
    setIsDropdownOpen(null);
  };

  const handleSearch = (filterName, query) => {
    if (filterName === 'diaDiem') {
      setFilteredDiaDiem(uniqueDiaDiem.filter(diaDiem => diaDiem?.toLowerCase().includes(query.toLowerCase())));
    } else if (filterName === 'loaihinh') {
      setFilteredLoaiHinh(uniqueLoaiHinh.filter(loaihinh => loaihinh?.toLowerCase().includes(query.toLowerCase())));
    } else if (filterName === 'khoangluong') {
      setFilteredLuong(uniqueLuong.filter(luong => luong?.toLowerCase().includes(query.toLowerCase())));
    } else if (filterName === 'capbac') {
      setFilteredCapBac(uniqueCapBac.filter(capbac => capbac?.toLowerCase().includes(query.toLowerCase())));
    } else if (filterName === 'kinhnghiem') {
      setFilteredKinhNghiem(uniqueKinhNghiem.filter(kinhnghiem => kinhnghiem?.toLowerCase().includes(query.toLowerCase())));
    }
  };

  const toggleDropdown = (filterName) => {
    setIsDropdownOpen(prevOpen => (prevOpen === filterName ? null : filterName)); // Đóng nếu đang mở, mở nếu đang đóng
    setFilteredDiaDiem(uniqueDiaDiem);
    setFilteredLoaiHinh(uniqueLoaiHinh);
    setFilteredLuong(uniqueLuong);
    setFilteredCapBac(uniqueCapBac);
    setFilteredKinhNghiem(uniqueKinhNghiem);
  };

  const filteredJobs = jobs.filter((job) => {
    const diaDiemMatch = !filters.diaDiem || job.TinhThanh?.toLowerCase().includes(filters.diaDiem.toLowerCase()) || filters.diaDiem === "Tất cả";
    const LoaiHinhMatch = !filters.loaihinh || job.LoaiHinh?.toLowerCase().includes(filters.loaihinh.toLowerCase()) || filters.loaihinh === "Tất cả";
    const LuongMatch = !filters.khoangluong || job.KhoangLuong?.toLowerCase().includes(filters.khoangluong.toLowerCase()) || filters.khoangluong === "Tất cả";
    const CapBacMatch = !filters.capbac || job.CapBac?.toLowerCase().includes(filters.capbac.toLowerCase()) || filters.capbac === "Tất cả";
    const KinhNghiemMatch = !filters.kinhnghiem || job.KinhNghiem?.toLowerCase().includes(filters.kinhnghiem.toLowerCase()) || filters.kinhnghiem === "Tất cả";
    return diaDiemMatch && LoaiHinhMatch && LuongMatch && CapBacMatch && KinhNghiemMatch;
  });

  useEffect(() => {
    setFilteredDiaDiem(uniqueDiaDiem);
    setFilteredLoaiHinh(uniqueLoaiHinh);
    setFilteredLuong(uniqueLuong);
    setFilteredCapBac(uniqueCapBac);
    setFilteredKinhNghiem(uniqueKinhNghiem);
}, [uniqueDiaDiem, uniqueLoaiHinh, uniqueLuong, uniqueCapBac, uniqueKinhNghiem]);

  useEffect(() => {
    const diaDiemSet = new Set(jobs.map(job => job.TinhThanh));
    const LoaiHinhSet = new Set(jobs.map(job => job.LoaiHinh));
    const KhoangLuongSet = new Set(jobs.map(job => job.KhoangLuong));
    const CapBacSet = new Set(jobs.map(job => job.CapBac));
    const KinhNghiemSet = new Set(jobs.map(job => job.KinhNghiem));
    setUniqueDiaDiem(Array.from(diaDiemSet));
    setUniqueLoaiHinh(Array.from(LoaiHinhSet));
    setUniqueLuong(Array.from(KhoangLuongSet));
    setUniqueCapBac(Array.from(CapBacSet));
    setUniqueKinhNghiem(Array.from(KinhNghiemSet));
  }, [jobs]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isDropdownOpen && !event.target.closest('.dropdown')) {
        setIsDropdownOpen(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  useEffect(() => {
    if (jobListRef.current) {
      jobListRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [jobs, currentPage]); 

  useEffect(() => {
    setFilters({
      diaDiem: '',
      loaihinh: '',
      khoangluong: '',
      capbac: '',
      kinhnghiem: '',
      filter_general: '',
    });
  }, [searchTerm]);
  
  const jobWithCovers = filteredJobs.map((singlejob) => {
    return {
      ...singlejob,
      id: singlejob.ID,
      cover_img: singlejob.Image ? singlejob.Image : coverImg
    }
  });

  const offset = currentPage * itemsPerPage;
  const pageCount = Math.ceil(jobWithCovers.length / itemsPerPage);
  const currentItems = jobWithCovers.slice(offset, offset + itemsPerPage);

  const averageLuongTB = (filteredJobs.reduce((sum, job) => {
    const luongTB = parseFloat(job.LuongTB); // Chuyển đổi sang số (nếu cần)
    return typeof luongTB === 'number' && !isNaN(luongTB) ? sum + luongTB : sum;
  }, 0) / filteredJobs.filter(job => typeof parseFloat(job.LuongTB) === 'number' && !isNaN(parseFloat(job.LuongTB))).length).toFixed(2);

  const totalcount = filteredJobs.reduce((sum, job) => {
    const soluong = parseFloat(job.SoLuong); // Chuyển đổi sang số (nếu cần)
    return typeof soluong === 'number' && !isNaN(soluong) ? sum + soluong : sum;
  }, 0);

  if(loading) return <Loader />;
  return (
      <section className='joblist' ref={jobListRef}>
        <div className='container'>
          <div className='section-title-container'>
            <div className='section-title'>
              <h2>{resultTitle}</h2>
            </div>

            <div className='dropdown' style={{ marginBottom: '-20px' }}>
              <button onClick={() => toggleDropdown('filter_general')}>
              {filters.filter_general === "" ? 'Chọn hiển thị' : `Hiển thị: ${filters.filter_general}`}
              </button>
              {isDropdownOpen === 'filter_general' ? (
                <div className='dropdown-menu'>
                  <ul style = {{top: '0px'}}>
                    {['Địa điểm', 'Loại hình', 'Lương', 'Cấp bậc', 'Kinh nghiệm', 'Chung']
                    .map((filter_general) => (
                      <li key={filter_general} onClick={() => handleFilterChange('filter_general', filter_general)}>
                        Hiển thị: {filter_general}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>

          <div className="filters">
            <div className='row-1'>

              <div className={`dropdown ${isDropdownOpen === 'diaDiem' ? 'open' : ''}`}>
                <button onClick={() => toggleDropdown('diaDiem')}>
                {filters.diaDiem || 'Địa điểm'}
                </button>
                {isDropdownOpen === 'diaDiem' ? (
                  <div className='dropdown-menu'>
                    <input type="text" placeholder="Nhập..." onChange={(e) => handleSearch('diaDiem', e.target.value)} />
                    <ul>
                      {filteredDiaDiem
                      .filter((diaDiem) => diaDiem !== null)
                      .map((diaDiem) => (
                        <li key={diaDiem} onClick={() => handleFilterChange('diaDiem', diaDiem)}>
                          {diaDiem}
                        </li>
                      ))}
                      <li key="tat-ca" onClick={() => handleFilterChange('diaDiem', "Tất cả")}>Tất cả</li>
                    </ul>
                  </div>
                ) : null}
              </div>

              <div className={`dropdown ${isDropdownOpen === 'loaihinh' ? 'open' : ''}`}>
                <button onClick={() => toggleDropdown('loaihinh')}>
                {filters.loaihinh || 'Loại hình'}
                </button>
                {isDropdownOpen === 'loaihinh' ? (
                  <div className='dropdown-menu'>
                    <input type="text" placeholder="Nhập..." onChange={(e) => handleSearch('loaihinh', e.target.value)} />
                    <ul>
                      {filteredLoaiHinh
                      .filter((loaihinh) => loaihinh !== null)
                      .map((loaihinh) => (
                        <li key={loaihinh} onClick={() => handleFilterChange('loaihinh', loaihinh)}>
                          {loaihinh}
                        </li>
                      ))}
                      <li key="tat-ca" onClick={() => handleFilterChange('loaihinh', "Tất cả")}>Tất cả</li>
                    </ul>
                  </div>
                ) : null}
              </div>

              <div className={`dropdown ${isDropdownOpen === 'khoangluong' ? 'open' : ''}`}>
                <button onClick={() => toggleDropdown('khoangluong')}>
                {filters.khoangluong || 'Khoảng lương'}
                </button>
                {isDropdownOpen === 'khoangluong' ? (
                  <div className='dropdown-menu'>
                    <input type="text" placeholder="Nhập..." onChange={(e) => handleSearch('khoangluong', e.target.value)} />
                    <ul>
                      {filteredLuong
                      .filter((khoangluong) => khoangluong !== null)
                      .map((khoangluong) => (
                        <li key={khoangluong} onClick={() => handleFilterChange('khoangluong', khoangluong)}>
                          {khoangluong}
                        </li>
                      ))}
                      <li key="tat-ca" onClick={() => handleFilterChange('khoangluong', "Tất cả")}>Tất cả</li>
                    </ul>
                  </div>
                ) : null}
              </div>

              <div className={`dropdown ${isDropdownOpen === 'capbac' ? 'open' : ''}`}>
                <button onClick={() => toggleDropdown('capbac')}>
                {filters.capbac || 'Cấp bậc'}
                </button>
                {isDropdownOpen === 'capbac' ? (
                  <div className='dropdown-menu'>
                    <input type="text" placeholder="Nhập..." onChange={(e) => handleSearch('capbac', e.target.value)} />
                    <ul>
                      {filteredCapBac
                      .filter((capbac) => capbac !== null)
                      .map((capbac) => (
                        <li key={capbac} onClick={() => handleFilterChange('capbac', capbac)}>
                          {capbac}
                        </li>
                      ))}
                      <li key="tat-ca" onClick={() => handleFilterChange('capbac', "Tất cả")}>Tất cả</li>
                    </ul>
                  </div>
                ) : null}
              </div>

              <div className={`dropdown ${isDropdownOpen === 'kinhnhgiem' ? 'open' : ''}`}>
                <button onClick={() => toggleDropdown('kinhnghiem')}>
                {filters.kinhnghiem || 'Kinh nghiệm'}
                </button>
                {isDropdownOpen === 'kinhnghiem' ? (
                  <div className='dropdown-menu'>
                    <input type="text" placeholder="Nhập..." onChange={(e) => handleSearch('kinhnghiem', e.target.value)} />
                    <ul>
                      {filteredKinhNghiem
                      .filter((kinhnghiem) => kinhnghiem !== null)
                      .map((kinhnghiem) => (
                        <li key={kinhnghiem} onClick={() => handleFilterChange('kinhnghiem', kinhnghiem)}>
                          {kinhnghiem}
                        </li>
                      ))}
                      <li key="tat-ca" onClick={() => handleFilterChange('kinhnghiem', "Tất cả")}>Tất cả</li>
                    </ul>
                  </div>
                ) : null}
              </div>
            </div>
          </div>  
          <div className='grid-chart-container'>
              <div className='inline-flex' style = {{alignItems: 'flex-start', flexDirection: 'column', justifyContent: 'space-between'}}>
                <Card title = "Số lượng tin" number = {filteredJobs.length}/>
                <Card title = "Lương trung bình" number = {`${averageLuongTB} triệu`}/>
                <Card title = "Số lượng tuyển" number = {totalcount}/>
              </div>
              <div className='grid-chart-item'>
                <PieChartVungMien style = {{width: '225px', height: '260px'}} data = {filteredJobs}/>
              </div>
              <div className='grid-chart-item'>
                <PieChartCapBac style = {{width: '225px', height: '260px'}} data = {filteredJobs}/> 
              </div>
              <div className='grid-chart-item'>
                <PieChartKinhNghiem style = {{width: '225px', height: '260px'}} data = {filteredJobs}/> 
              </div>
              <div className='grid-chart-item'>
                <PieChartKhoangLuong style = {{width: '225px', height: '260px'}} data = {filteredJobs}/> 
              </div>
          </div>

          {renderJobList(currentItems, jobWithCovers, filters, pageCount, setCurrentPage, expanded, setExpanded)}
        </div>
        
      </section>
  )
}

export default BookList