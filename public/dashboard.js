document.addEventListener('DOMContentLoaded', function() {
    // Get the chart canvas
    const ctx = document.getElementById('tradingChart').getContext('2d');

    // Sample data for the trading performance chart
    const data = {
        labels: ['1 Jan', '2 Jan', '3 Jan', '4 Jan', '5 Jan', '6 Jan', '7 Jan', '8 Jan', '9 Jan', '10 Jan'],
        datasets: [{
            label: 'Account Balance',
            data: [10000, 10250, 10150, 10450, 10380, 10580, 10780, 10680, 10880, 11000],
            borderColor: '#00c99d',
            backgroundColor: 'rgba(0, 201, 157, 0.1)',
            borderWidth: 2,
            fill: true,
            tension: 0.4
        }]
    };

    // Chart configuration
    const config = {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    callbacks: {
                        label: function(context) {
                            return `Balance: ${context.parsed.y.toFixed(2)} BAM`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    },
                    ticks: {
                        callback: function(value) {
                            return value.toLocaleString() + ' BAM';
                        }
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            },
            interaction: {
                intersect: false,
                mode: 'index'
            }
        }
    };

    // Create the chart
    const tradingChart = new Chart(ctx, config);

    // Handle time period buttons
    const buttons = document.querySelectorAll('.chart-controls button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            buttons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            // Update chart data based on selected period
            // This is where you would normally fetch data for different time periods
            // For demo, we'll just show different random data
            if (this.textContent === 'Dan') {
                updateChartData(24, 'hour');
            } else if (this.textContent === 'Sedmica') {
                updateChartData(7, 'day');
            } else if (this.textContent === 'Mjesec') {
                updateChartData(30, 'day');
            }
        });
    });

    // Function to update chart data
    function updateChartData(points, period) {
        const newData = [];
        const newLabels = [];
        let baseValue = 10000;

        for (let i = 0; i < points; i++) {
            const change = (Math.random() - 0.3) * 200;
            baseValue += change;
            newData.push(baseValue);
            
            if (period === 'hour') {
                newLabels.push(`${i}:00`);
            } else {
                newLabels.push(`Dan ${i + 1}`);
            }
        }

        tradingChart.data.labels = newLabels;
        tradingChart.data.datasets[0].data = newData;
        tradingChart.update();
    }
});
