// Sales Chart
const salesCtx = document.getElementById('salesChart').getContext('2d');
let salesChart = new Chart(salesCtx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr'],
        datasets: [{
            label: 'Sales',
            data: [120, 150, 180, 90],
            backgroundColor: '#4CAF50'
        }]
    }
});

// Growth Chart
const growthCtx = document.getElementById('growthChart').getContext('2d');
let growthChart = new Chart(growthCtx, {
    type: 'line',
    data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [{
            label: 'User Growth',
            data: [30, 50, 70, 90],
            borderColor: '#2196F3',
            fill: false
        }]
    }
});

// Update Sales Chart every 5 seconds
setInterval(() => {
    salesChart.data.datasets[0].data = salesChart.data.datasets[0].data.map(
        val => val + Math.floor(Math.random() * 20 - 10)
    );
    salesChart.update();
}, 5000);
