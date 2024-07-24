import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Legend, ArcElement, Title } from "chart.js";

ChartJS.register(Tooltip, Legend, Title, ArcElement);

export const PieChartKinhNghiem = (data) => {

  const jobsByKinhNghiem = {
    'Không yêu cầu': [],
    'Dưới 1 năm': [],
    '1 - 3 năm': [],
    '3 - 5 năm': [],
    'Trên 5 năm':[],
};

  data["data"].forEach(item => {
    const kinhnghiem = item.KinhNghiem; // Hàm xác định vùng miền
    if (kinhnghiem) {
        jobsByKinhNghiem[kinhnghiem.trim()].push(item);
    }
});
  const labels = Object.keys(jobsByKinhNghiem);
  const numberJob = labels.map(label => jobsByKinhNghiem[label].length);

  const PieChartData = {
    labels: labels,
    datasets: [{
        title: 'Số lượng CV theo kinh nghiệm',
        data: numberJob,
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',   // Đỏ
            'rgba(54, 162, 235, 0.2)',   // Xanh dương
            'rgba(255, 206, 86, 0.2)',   // Vàng
            'rgba(75, 192, 192, 0.2)',   // Xanh lá cây
            'rgba(153, 102, 255, 0.2)',  // Tím
            'rgba(255, 159, 64, 0.2)',   // Cam
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1
    }]
};
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Phân bố CV theo kinh nghiệm',
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
