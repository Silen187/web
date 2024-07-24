import moment from "moment";

export const navbarBrand = "Tuyển dụng";
export const header =  `Tuyển dụng - Tin mới `;
export const noFound = "Không tìm thấy, xin lỗiii";
export const searching = "Đang tìm nè";
export const arrow = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>

const navs_khoangluong = [
  { nav: "Thỏa thuận", page: "/khoang-luong/thoa-thuan" },
  { nav: "Dưới 3 triệu", page: "/khoang-luong/duoi-3-trieu" },
  { nav: "3-10 triệu", page: "/khoang-luong/3-10-trieu" },
  { nav: "10-15 triệu", page: "/khoang-luong/10-15-trieu" },
  { nav: "15-25 triệu", page: "/khoang-luong/15-25-trieu" },
  { nav: "25-35 triệu", page: "/khoang-luong/25-35-trieu" },
  { nav: "35-50 triệu", page: "/khoang-luong/35-50-trieu" },
  { nav: "50-80 triệu", page: "/khoang-luong/50-80-trieu" },
  { nav: "Trên 80 triệu", page: "/khoang-luong/tren-80-trieu" },
];
const router_khoangluong = [
  { path: "/thoa-thuan", key: "thoa-thuan", official: "khoang-luong", child: "thoa-thuan" },
  { path: "/duoi-3-trieu", key: "duoi-3-trieu", official: "khoang-luong", child: "duoi-3-trieu" },
  { path: "/3-10-trieu", key: "3-10-trieu", official: "khoang-luong", child: "3-10-trieu" },
  { path: "/10-15-trieu", key: "10-15-trieu", official: "khoang-luong", child: "10-15-trieu" },
  { path: "/15-25-trieu", key: "15-25-trieu", official: "khoang-luong", child: "15-25-trieu" },
  { path: "/25-35-trieu", key: "25-35-trieu", official: "khoang-luong", child: "25-35-trieu" },
  { path: "/35-50-trieu", key: "35-50-trieu", official: "khoang-luong", child: "35-50-trieu" },
  { path: "/50-80-trieu", key: "50-80-trieu", official: "khoang-luong", child: "50-80-trieu" },
  { path: "/tren-80-trieu", key: "tren-80-trieu", official: "khoang-luong", child: "tren-80-trieu" },
];


const navs_trangdang = [
  { nav: "ITViec", page: "/trang-dang/itviec" },
  { nav: "CareerViet", page: "/trang-dang/careerviet" },
  { nav: "TopDev", page: "/trang-dang/topdev" },
  { nav: "VietNamWork", page: "/trang-dang/vietnamwork" },
  { nav: "ITNaVi", page: "/trang-dang/itnavi" },
  { nav: "DevWork", page: "/trang-dang/devwork" },
  { nav: "TopCV", page: "/trang-dang/topcv" },
  { nav: "Vieclam24h", page: "/trang-dang/vieclam24h" },
  { nav: "Khác", page: "/trang-dang/khac" },
];
const router_trangdang = [
  { path: "/itviec", key: "itviec", official: "trang-dang", child: "itviec" },
  { path: "/careerviet", key: "careerviet", official: "trang-dang", child: "careerviet" },
  { path: "/topdev", key: "topdev", official: "trang-dang", child: "topdev" },
  { path: "/vietnamwork", key: "vietnamwork", official: "trang-dang", child: "vietnamwork" },
  { path: "/itnavi", key: "itnavi", official: "trang-dang", child: "itnavi" },
  { path: "/devwork", key: "devwork", official: "trang-dang", child: "devwork" },
  { path: "/topcv", key: "topcv", official: "trang-dang", child: "topcv" },
  { path: "/vieclam24h", key: "vieclam24h", official: "trang-dang", child: "vieclam24h" },
  { path: "/khac", key: "khac", official: "trang-dang", child: "khac" },
];


const navs_khuvuc = [
  { nav: "Khu vực Hà Nội", page: "/khu-vuc/ha-noi" },
  { nav: "Khu vực TPHCM", page: "/khu-vuc/ho-chi-minh" },
  { nav: "Khu vực khác", page: "/khu-vuc/khac" },
];
const router_khuvuc = [
  { path: "", key: "tat-ca-khu-vuc", official: "khu-vuc", child:""},
  { path: "/ha-noi", key: "ha-noi", official: "khu-vuc", child: "ha-noi" },
  { path: "/ho-chi-minh", key: "hcm", official: "khu-vuc", child: "hcm" },
  { path: "/khac", key: "khac", official: "khu-vuc", child: "khac" },
];


const router_loaihinh = [
  { path: "/toan-thoi-gian", key: "toan-thoi-gian", official: "loai-hinh", child: "toan-thoi-gian" },
  { path: "/ban-thoi-gian", key: "ban-thoi-gian", official: "loai-hinh", child: "ban-thoi-gian" },
  { path: "/loai-hinh-khac", key: "loai-hinh-khac", official: "loai-hinh", child: "loai-hinh-khac" },
];
const navs_loaihinh = [
  { nav: "Toàn thời gian", page: "/loai-hinh/toan-thoi-gian" },
  { nav: "Bán thời gian", page: "/loai-hinh/ban-thoi-gian" },
  { nav: "Loại hình khác", page: "/loai-hinh/loai-hinh-khac" },
];


const navs_nganhnghe =[
  {nav : "Dịch vụ", page: "/nganh-nghe/dich-vu"},
  {nav: "Marketing và truyền thông", page: "/nganh-nghe/marketing-va-truyen-thong"},
  {nav: "Tài chính", page: "/nganh-nghe/tai-chinh"},
  {nav: "Kinh doanh và bán hàng", page: "/nganh-nghe/kinh-doanh-va-ban-hang"},
  {nav: "IT", page: "/nganh-nghe/it"},
  {nav: "Tất cả", page: "/nganh-nghe"}
]

const router_nganhnghe = [
  { path: "/nganh-nghe", key: "general", category: "general", country: "us" },
  { path: "/nganh-nghe/dich-vu", key: "general", category: "general", country: "us" },
  { path: "/nganh-nghe/marketing-va-truyen-thong", key: "general", category: "general", country: "us" },
  { path: "/nganh-nghe/tai-chinh", key: "general", category: "general", country: "us" },
  { path: "/nganh-nghe/kinh-doanh-va-ban-hang", key: "general", category: "general", country: "us" },
  { path: "/nganh-nghe/it", key: "general", category: "general", country: "us" },
];


const navs_kinhnghiem =[
  {nav: "Không yêu cầu", page: "/kinh-nghiem/khong-yeu-cau"},
  {nav: "Dưới 1 năm", page: "/kinh-nghiem/duoi-1-nam"},
  {nav: "1-3 năm", page: "/kinh-nghiem/1-3-nam"},
  {nav: "3-5 năm", page: "/kinh-nghiem/3-5-nam"},
  {nav: "Trên 5 năm", page: "/nganh-nghe/tren-5-nam"},
];

const router_kinhnghiem = [
  { path: "/khong-yeu-cau", key: "khong-yeu-cau", official: "kinh-nghiem", child: "khong-yeu-cau" },
  { path: "/duoi-1-nam", key: "duoi-1-nam", official: "kinh-nghiem", child: "duoi-1-nam" },
  { path: "/1-3-nam", key: "1-3-nam", official: "kinh-nghiem", child: "1-3-nam" },
  { path: "/3-5-nam", key: "3-5-nam", official: "kinh-nghiem", child: "3-5-nam"},
  { path: "/tren-5-nam", key: "tren-5-nam", official: "kinh-nghiem", child: "tren-5-nam" },
];

export const navs = [
  { nav: "Khu vực", page: "/khu-vuc", list: navs_khuvuc },
  { nav: "Ngành nghề", page: "/nganh-nghe", list: navs_nganhnghe }, 
  { nav: "Khoảng lương", page: "/khoang-luong", list: navs_khoangluong }, 
  { nav: "Trang đăng", page: "/trang-dang", list:navs_trangdang }, 
  { nav: "Loại hình", page: "/loai-hinh", list: navs_loaihinh },
  { nav: "Kinh Nghiệm", page: "/kinh-nghiem", list:navs_kinhnghiem },
  { nav: "Power BI", page: "/power-bi" },
];

export const router = [
  { path: "*", key: "general", list: router_khuvuc },
  { path: "/khu-vuc/*", key: "khu-vuc" , list: router_khuvuc},
  { path: "/nganh-nghe/*", list: router_nganhnghe},
  { path: "/khoang-luong/*", key: "khoang-luong", list: router_khoangluong },
  { path: "/trang-dang/*", key: "trang-dang", list: router_trangdang },
  { path: "/loai-hinh/*", key: "loai-hinh", list: router_loaihinh },
  { path: "/kinh-nghiem/*", list: router_kinhnghiem },
  { path: "/power-bi", key: "power-bi", list:["https://app.powerbi.com/view?r=eyJrIjoiZGIxZTk2NmUtN2E0ZC00NjRlLTgxOTItOGUxMWI4MWY4ZTcwIiwidCI6IjJmODVkYzc0LWI2YjQtNDU4NC1iZWVlLWNjZGE3MTQ0NDk3MCIsImMiOjZ9"] },
];



export const summary = "Trang đăng và hạn nộp CV";
export const newsChannel = (channel) => `${channel}`;
export const lastUpdate = (published) =>
  `${moment(published).format("ddd, DD MMM YYYY")}`;

