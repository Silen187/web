import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Book from '../Book';
import ReactPaginate from 'react-paginate';

const renderJobList = (currentItems, jobWithCovers, filters, pageCount, setCurrentPage, expanded, setExpanded) => {
    if (filters.filter_general === '' || filters.filter_general === 'Chung') {
        return (
          <div>
            <div className='joblist-content grid'>
                {currentItems.map((item) => (
                    <Book key={item.ID} {...item} />
                ))}
            </div>
            <ReactPaginate
            previousLabel={<FontAwesomeIcon icon={faChevronLeft} />}
            nextLabel={<FontAwesomeIcon icon={faChevronRight} />}
            pageCount={pageCount}
            onPageChange={(event) => setCurrentPage(event.selected)}
            containerClassName={"pagination"}
            activeClassName={"active"}
            />
          </div>
            
        );
    } else if (filters.filter_general === 'Địa điểm') {

        const jobsByRegion = {
            'Bắc': [],
            'Trung': [],
            'Nam': [],
            'Khác': [],
        };

        jobWithCovers.forEach(item => {
            const region = getRegion(item.TinhThanh); // Hàm xác định vùng miền
            if (region) {
                jobsByRegion[region.trim()].push(item);
            }
        });

        const luongTBregion = {
          'Bắc': 0,
          'Trung': 0,
          'Nam': 0,
          'Khác': 0,
        }

        Object.keys(luongTBregion).forEach(key => {
          const validJobs = jobsByRegion[key].filter(job => typeof parseFloat(job.LuongTB) === 'number' && !isNaN(parseFloat(job.LuongTB)));
          const averageLuongTB = validJobs.length > 0 
              ? (validJobs.reduce((sum, job) => sum + parseFloat(job.LuongTB), 0) / validJobs.length).toFixed(2) 
              : "Không đủ dữ liệu";
          luongTBregion[key] = averageLuongTB;
      });

        return (
            <div className='region'>
                {Object.keys(jobsByRegion).map(region => {
                  const isExpanded = expanded === region;
                  if (jobsByRegion[region].length > 0) {
                    return (
                        <div key={region} className='region-section' style = {{marginBottom: '70px'}}>
                          <div className='section-title'>
                            <div className='flex' style = {{justifyContent: 'space-between'}}>
                              <h2 style={{ padding: '0px' }}>{region === "Khác" ? `${region}(${jobsByRegion[region].length}) - Lương TB: ${luongTBregion[region]} triệu` : `Công việc tại miền ${region}(${jobsByRegion[region].length}) - Lương TB: ${luongTBregion[region]} triệu`}</h2>
                              {jobsByRegion[region].length > 8 && (
                                <button onClick={() => setExpanded(isExpanded ? null : region)}>
                                  <h2 style={{ padding: '0px' }}>
                                    {isExpanded ? 'Thu gọn' : 'Xem thêm'}
                                  </h2>
                                </button>
                              )}
                            </div>
                            <hr style={{ padding: '0px', marginBottom: '20px', height: '2px', marginTop: '0px' }} />
                          </div>
                          <div className='joblist-content grid'>
                            {jobsByRegion[region].slice(0, isExpanded ? jobsByRegion[region].length : 8).map(item => (
                            <Book key={item.ID} {...item} />
                            ))}
                          </div>
                        </div>
                    );
                  } else {
                    return null; 
                  }
                })}
            </div>
        );
    } else if (filters.filter_general === 'Loại hình') {

      const jobsByLoaiHinh = {
          'Toàn thời gian': [],
          'Bán thời gian': [],
          'Hình thức khác': [],
      };

      jobWithCovers.forEach(item => {
          const loaihinh = item.LoaiHinh // Hàm xác định loaihinh
          if (loaihinh) {
              jobsByLoaiHinh[loaihinh.trim()].push(item);
          }
      });

      const luongTBLoaiHinh = {
        'Toàn thời gian': 0,
        'Bán thời gian': 0,
        'Hình thức khác': 0,
      };

      Object.keys(luongTBLoaiHinh).forEach(key => {
        const validJobs = jobsByLoaiHinh[key].filter(job => typeof parseFloat(job.LuongTB) === 'number' && !isNaN(parseFloat(job.LuongTB)));
        const averageLuongTB = validJobs.length > 0 
            ? (validJobs.reduce((sum, job) => sum + parseFloat(job.LuongTB), 0) / validJobs.length).toFixed(2) 
            : "Không đủ dữ liệu";
        luongTBLoaiHinh[key] = averageLuongTB;
    });

      return (
          <div className='region'>
              {Object.keys(jobsByLoaiHinh).map(loaihinh => {
                const isExpanded = expanded === loaihinh;
                if (jobsByLoaiHinh[loaihinh].length > 0) {
                  return (
                      <div key={loaihinh} className='region-section' style = {{marginBottom: '60px'}}>
                        <div className='section-title'>
                          <div className='flex' style = {{justifyContent: 'space-between'}}>
                            <h2 style={{ padding: '0px' }}>Công việc {loaihinh}({jobsByLoaiHinh[loaihinh].length}) - Lương TB: {luongTBLoaiHinh[loaihinh]} triệu</h2>
                            {jobsByLoaiHinh[loaihinh].length > 8 && (
                              <button onClick={() => setExpanded(isExpanded ? null : loaihinh)}>
                                <h2 style={{ padding: '0px' }}>
                                  {isExpanded ? 'Thu gọn' : 'Xem thêm'}
                                </h2>
                              </button>
                            )}
                          </div>
                          <hr style={{ padding: '0px', marginBottom: '20px', height: '2px', marginTop: '0px' }} />
                        </div>
                        <div className='joblist-content grid'>
                          {jobsByLoaiHinh[loaihinh].slice(0, isExpanded ? jobsByLoaiHinh[loaihinh].length : 8).map(item => (
                          <Book key={item.ID} {...item} />
                          ))}
                        </div>
                      </div>
                  );
                } else {
                  return null; 
                }
              })}
          </div>
      );
   } else if (filters.filter_general === 'Cấp bậc') {

    const jobsByCapBac = {
        'Intership': [],
        'Fresher': [],
        'Junior': [],
        'Mid-level': [],
        'Senior':[],
        'Lead/Principal':[],
        'Project Manager':[],
        'Khác':[],
    };

    jobWithCovers.forEach(item => {
        const capbac = item.CapBac // Hàm xác định loaihinh
        if (capbac) {
            jobsByCapBac[capbac.trim()].push(item);
        }
    });

    const luongTBCapBac = {
      'Intership': 0,
      'Fresher': 0,
      'Junior': 0,
      'Mid-level': 0,
      'Senior':0,
      'Lead/Principal':0,
      'Project Manager':0,
      'Khác':0,
    };

    Object.keys(luongTBCapBac).forEach(key => {
      const validJobs = jobsByCapBac[key].filter(job => typeof parseFloat(job.LuongTB) === 'number' && !isNaN(parseFloat(job.LuongTB)));
      const averageLuongTB = validJobs.length > 0 
          ? (validJobs.reduce((sum, job) => sum + parseFloat(job.LuongTB), 0) / validJobs.length).toFixed(2) 
          : "Không đủ dữ liệu";
      luongTBCapBac[key] = averageLuongTB;
  });


    return (
        <div className='region'>
            {Object.keys(jobsByCapBac).map(capbac => {
              const isExpanded = expanded === capbac;
              if (jobsByCapBac[capbac].length > 0) {
                return (
                    <div key={capbac} className='region-section' style = {{marginBottom: '60px'}}>
                      <div className='section-title'>
                        <div className='flex' style = {{justifyContent: 'space-between'}}>
                          <h2 style={{ padding: '0px' }}>Công việc {capbac}({jobsByCapBac[capbac].length}) - Lương TB: {luongTBCapBac[capbac]} triệu</h2>
                          {jobsByCapBac[capbac].length > 8 && (
                            <button onClick={() => setExpanded(isExpanded ? null : capbac)}>
                              <h2 style={{ padding: '0px' }}>
                                {isExpanded ? 'Thu gọn' : 'Xem thêm'}
                              </h2>
                            </button>
                          )}
                        </div>
                        <hr style={{ padding: '0px', marginBottom: '20px', height: '2px', marginTop: '0px' }}/>
                      </div>
                      <div className='joblist-content grid'>
                        {jobsByCapBac[capbac].slice(0, isExpanded ? jobsByCapBac[capbac].length : 8).map(item => (
                        <Book key={item.ID} {...item} />
                        ))}
                      </div>
                    </div>
                );
              } else {
                return null; 
              }
            })}
        </div>
    );
 } else if (filters.filter_general === 'Kinh nghiệm') {

  const jobsByKinhNghiem = {
      'Không yêu cầu': [],
      'Dưới 1 năm': [],
      '1 - 3 năm': [],
      '3 - 5 năm': [],
      'Trên 5 năm':[],
  };

  jobWithCovers.forEach(item => {
      const kinhnghiem = item.KinhNghiem // Hàm xác định kinhnghiem
      if (kinhnghiem) {
        jobsByKinhNghiem[kinhnghiem.trim()].push(item);
      }
  });

  const luongTBKinhNghiem = {
    'Không yêu cầu': 0,
    'Dưới 1 năm': 0,
    '1 - 3 năm': 0,
    '3 - 5 năm': 0,
    'Trên 5 năm':0,
  };

  Object.keys(luongTBKinhNghiem).forEach(key => {
    const validJobs = jobsByKinhNghiem[key].filter(job => typeof parseFloat(job.LuongTB) === 'number' && !isNaN(parseFloat(job.LuongTB)));
    const averageLuongTB = validJobs.length > 0 
        ? (validJobs.reduce((sum, job) => sum + parseFloat(job.LuongTB), 0) / validJobs.length).toFixed(2) 
        : "Không đủ dữ liệu";
    luongTBKinhNghiem[key] = averageLuongTB;
});

  return (
      <div className='region'>
          {Object.keys(jobsByKinhNghiem).map(kinhnghiem => {
            const isExpanded = expanded === kinhnghiem;
            if (jobsByKinhNghiem[kinhnghiem].length > 0) {
              return (
                  <div key={kinhnghiem} className='region-section' style = {{marginBottom: '60px'}}>
                    <div className='section-title'>
                      <div className='flex' style = {{justifyContent: 'space-between'}}>
                        <h2 style={{ padding: '0px' }}>Kinh nghiệm: {kinhnghiem}({jobsByKinhNghiem[kinhnghiem].length}) - Lương TB: {luongTBKinhNghiem[kinhnghiem]} triệu</h2>
                        {jobsByKinhNghiem[kinhnghiem].length > 8 && (
                          <button onClick={() => setExpanded(isExpanded ? null : kinhnghiem)}>
                            <h2 style={{ padding: '0px' }}>
                              {isExpanded ? 'Thu gọn' : 'Xem thêm'}
                            </h2>
                          </button>
                        )}
                      </div>
                      <hr style={{ padding: '0px', marginBottom: '20px', height: '2px', marginTop: '0px' }}/>
                    </div>
                    <div className='joblist-content grid'>
                      {jobsByKinhNghiem[kinhnghiem].slice(0, isExpanded ? jobsByKinhNghiem[kinhnghiem].length : 8).map(item => (
                      <Book key={item.ID} {...item} />
                      ))}
                    </div>
                  </div>
              );
            } else {
              return null; 
            }
          })}
      </div>
  );
} else if (filters.filter_general === 'Lương') {

  const jobsByKhoangLuong = {
    'Thỏa thuận': [],
    'Dưới 3 triệu': [],
    '3-10 triệu': [],
    '10-15 triệu': [],
    '15-25 triệu':[],
    '25-35 triệu':[],
    '35-50 triệu':[],
    '50-80 triệu': [],
    'Trên 80 triệu': [],
};

  jobWithCovers.forEach(item => {
      const khoangluong = item.KhoangLuong // Hàm xác định kinhnghiem
      if (khoangluong) {
        jobsByKhoangLuong[khoangluong.trim()].push(item);
      }
  });

  const luongTBKhoangLuong = {
    'Thỏa thuận': 0,
    'Dưới 3 triệu': 0,
    '3-10 triệu': 0,
    '10-15 triệu': 0,
    '15-25 triệu':0,
    '25-35 triệu':0,
    '35-50 triệu':0,
    '50-80 triệu': 0,
    'Trên 80 triệu': 0,
  };

  Object.keys(luongTBKhoangLuong).forEach(key => {
    const validJobs = jobsByKhoangLuong[key].filter(job => typeof parseFloat(job.LuongTB) === 'number' && !isNaN(parseFloat(job.LuongTB)));
    const averageLuongTB = validJobs.length > 0 
        ? (validJobs.reduce((sum, job) => sum + parseFloat(job.LuongTB), 0) / validJobs.length).toFixed(2) 
        : "Không đủ dữ liệu";
    luongTBKhoangLuong[key] = averageLuongTB;
  });

  return (
      <div className='region'>
          {Object.keys(jobsByKhoangLuong).map(khoangluong => {
            const isExpanded = expanded === khoangluong;
            if (jobsByKhoangLuong[khoangluong].length > 0) {
              return (
                  <div key={khoangluong} className='region-section' style = {{marginBottom: '60px'}}>
                    <div className='section-title'>
                      <div className='flex' style = {{justifyContent: 'space-between'}}>
                        <h2 style={{ padding: '0px' }}>Khoảng lương: {khoangluong}({jobsByKhoangLuong[khoangluong].length}) - Lương TB: {luongTBKhoangLuong[khoangluong]} triệu</h2>
                        {jobsByKhoangLuong[khoangluong].length > 8 && (
                          <button onClick={() => setExpanded(isExpanded ? null : khoangluong)}>
                            <h2 style={{ padding: '0px' }}>
                              {isExpanded ? 'Thu gọn' : 'Xem thêm'}
                            </h2>
                          </button>
                        )}
                      </div>
                      <hr style={{ padding: '0px', marginBottom: '20px', height: '2px', marginTop: '0px' }}/>
                    </div>
                    <div className='joblist-content grid'>
                      {jobsByKhoangLuong[khoangluong].slice(0, isExpanded ? jobsByKhoangLuong[khoangluong].length : 8).map(item => (
                      <Book key={item.ID} {...item} />
                      ))}
                    </div>
                  </div>
              );
            } else {
              return null; 
            }
          })}
      </div>
  );
}
};

// Hàm xác định vùng miền dựa trên tỉnh thành
const getRegion = (tinhThanh) => {
    const bac = [
      "Bắc Giang",
      "Bắc Kạn",
      "Bắc Ninh",
      "Cao Bằng",
      "Điện Biên",
      "Hà Giang",
      "Hà Nam",
      "Hà Nội",
      "Hải Dương",
      "Hải Phòng",
      "Hòa Bình",
      "Hưng Yên",
      "Lai Châu",
      "Lạng Sơn",
      "Lào Cai",
      "Nam Định",
      "Ninh Bình",
      "Phú Thọ",
      "Quảng Ninh",
      "Sơn La",
      "Thái Bình",
      "Thái Nguyên",
      "Tuyên Quang",
      "Vĩnh Phúc",
      "Yên Bái"
    ];
    const trung = [
      "Bình Định",
      "Bình Thuận",
      "Đà Nẵng",
      "Đắk Lắk",
      "Đắk Nông",
      "Gia Lai",
      "Hà Tĩnh",
      "Khánh Hòa",
      "Kon Tum",
      "Lâm Đồng",
      "Nghệ An",
      "Ninh Thuận",
      "Phú Yên",
      "Quảng Bình",
      "Quảng Nam",
      "Quảng Ngãi",
      "Quảng Trị",
      "Thanh Hóa",
      "Thừa Thiên Huế"
    ];
    const nam = [
      "An Giang",
      "Bà Rịa - Vũng Tàu",
      "Bạc Liêu",
      "Bến Tre",
      "Bình Dương",
      "Bình Phước",
      "Cà Mau",
      "Cần Thơ",
      "Đồng Nai",
      "Đồng Tháp",
      "Hậu Giang",
      "Kiên Giang",
      "Long An",
      "Sóc Trăng",
      "Tây Ninh",
      "Tiền Giang",
      "Hồ Chí Minh",
      "Trà Vinh",
      "Vĩnh Long"
    ];
      if (bac.includes(tinhThanh)) return 'Bắc';
      if (trung.includes(tinhThanh)) return 'Trung';
      if (nam.includes(tinhThanh)) return 'Nam';
      return 'Khác'; // Nếu không thuộc vùng nào
  };

export default renderJobList;