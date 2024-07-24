import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Legend, ArcElement, Title } from "chart.js";

ChartJS.register(Tooltip, Legend, Title, ArcElement);

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

export const PieChartVungMien = (data) => {

  const jobsByRegion = {
    'Bắc': [],
    'Trung': [],
    'Nam': [],
    'Khác': [],
};

  data["data"].forEach(item => {
    const region = getRegion(item.TinhThanh); // Hàm xác định vùng miền
    if (region) {
        jobsByRegion[region.trim()].push(item);
    }
});
  const labels = Object.keys(jobsByRegion);
  const numberJob = labels.map(label => jobsByRegion[label].length);

  const PieChartData = {
    labels: labels,
    datasets: [{
        title: 'Số lượng CV theo miền',
        data: numberJob,
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1
    }]
};
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Phân bố CV theo miền',
        font: {
          size: 14,
          weight: 'bold'
        },
        color: 'black',
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || '';
            const value = context.parsed || 0;
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const percentage = ((value / total) * 100).toFixed(2) + '%';
            return `${label}: ${value} (${percentage})`; // Hiển thị cả số lượng và phần trăm
          }
        }
      },
      legend: {
        labels: {
          font: {
            size: 10
          },
          boxWidth: 15,
        },
        position: 'bottom', 
        align: 'center',
      }
    }
    }
  return <Pie options = { options } data = {PieChartData} />;
}