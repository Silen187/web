import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Legend, ArcElement, Title } from "chart.js";

ChartJS.register(Tooltip, Legend, Title, ArcElement);

export const PieChartKhoangLuong = (data) => {

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

  data["data"].forEach(item => {
    const khoangluong = item.KhoangLuong; // Hàm xác định vùng miền
    if (khoangluong) {
        jobsByKhoangLuong[khoangluong.trim()].push(item);
    }
});
  const labels = Object.keys(jobsByKhoangLuong);
  const numberJob = labels.map(label => jobsByKhoangLuong[label].length);

  const PieChartData = {
    labels: labels,
    datasets: [{
        title: 'Phân bố CV theo khoảng lương',
        data: numberJob,
        backgroundColor: [
            'rgba(255, 99, 132, 0.7)',   // Đỏ
            'rgba(54, 162, 235, 0.2)',   // Xanh dương
            'rgba(255, 206, 86, 0.2)',   // Vàng
            'rgba(75, 192, 192, 0.2)',   // Xanh lá cây
            'rgba(153, 102, 255, 0.2)',  // Tím
            'rgba(255, 159, 64, 0.2)',   // Cam
            'rgba(240, 128, 128, 0.2)',  // Hồng nhạt
            'rgba(34, 139, 34, 0.2)',     // Xanh đậm
            'rgba(128, 0, 128, 0.2)' ,    // Tím đậm
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',   // Đỏ
            'rgba(54, 162, 235, 1)',   // Xanh dương
            'rgba(255, 206, 86, 1)',   // Vàng
            'rgba(75, 192, 192, 1)',   // Xanh lá cây
            'rgba(153, 102, 255, 1)',  // Tím
            'rgba(255, 159, 64, 1)',   // Cam
            'rgba(240, 128, 128, 1)',  // Hồng nhạt
            'rgba(34, 139, 34, 1)',     // Xanh đậm
            'rgba(128, 0, 128, 1)' ,    // Tím đậm
        ],
        borderWidth: 1
    }]
};
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Phân bố CV theo khoảng lương',
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
            size: 8
          },
          boxWidth: 10,
        },
        position: 'bottom', 
        align: 'center',
      }
    }
    }
  return <Pie options = { options } data = {PieChartData} />;
}
