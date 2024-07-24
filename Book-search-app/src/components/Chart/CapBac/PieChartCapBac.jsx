import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Legend, ArcElement, Title } from "chart.js";

ChartJS.register(Tooltip, Legend, Title, ArcElement);

export const PieChartCapBac = (data) => {

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

  data["data"].forEach(item => {
    const capbac = item.CapBac; // Hàm xác định vùng miền
    if (capbac) {
        jobsByCapBac[capbac.trim()].push(item);
    }
});
  const labels = Object.keys(jobsByCapBac);
  const numberJob = labels.map(label => jobsByCapBac[label].length);

  const PieChartData = {
    labels: labels,
    datasets: [{
        title: 'Số lượng CV theo cấp bậc',
        data: numberJob,
        backgroundColor: [
            'rgba(255, 99, 132, 0.7)',   // Đỏ
            'rgba(54, 162, 235, 0.2)',   // Xanh dương
            'rgba(255, 206, 86, 0.2)',   // Vàng
            'rgba(75, 192, 192, 0.2)',   // Xanh lá cây
            'rgba(153, 102, 255, 0.2)',  // Tím
            'rgba(255, 159, 64, 0.2)',   // Cam
            'rgba(240, 128, 128, 0.2)',  // Hồng nhạt
            'rgba(34, 139, 34, 0.2)'     // Xanh đậm
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(240, 128, 128, 1)',
            'rgba(34, 139, 34, 1)'
        ],
        borderWidth: 1
    }]
};
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Phân bố CV theo cấp bậc',
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
          boxWidth: 5,
        },
        position: 'bottom', 
        align: 'center',
      }
    }
    }
  return <Pie options = { options } data = {PieChartData} />;
}
