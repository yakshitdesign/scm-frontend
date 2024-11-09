const ctx = document.getElementById('myChart').getContext('2d');

const gradientFill = ctx.createLinearGradient(0, 0, 0, 400);
gradientFill.addColorStop(0, 'rgba(192, 192, 192, 0.3)');
gradientFill.addColorStop(1, 'rgba(192, 192, 192, 0)');

const myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['5Y', '3Y', '1Y', '8M', '4M', '1M'],
    datasets: [{
      label: 'Data',
      data: [12, 8, 32, 24, 40, 32,],
      backgroundColor: gradientFill,
      borderColor: 'rgba(0, 0, 0, 0.8)',
      borderWidth: 2,
      fill: true,
      pointRadius: 0,
      tension: 0.15 
    }]
  },
  options: {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: '#6B7280'
        }
      },
      y: {
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
          drawBorder: false
        },
        ticks: {
          display: false
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }
    }
  }
});