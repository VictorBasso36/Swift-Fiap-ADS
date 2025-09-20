let chartInstance = null;

// Debounce function to limit how often a function is called
const debounce = (func, delay) => {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
};


const initPerformanceChart = () => {
    const chartCanvas = document.getElementById('performanceChart');
    // Check if the canvas exists and hasn't been initialized already
    if (!chartCanvas || chartInstance) return;

    const ctx = chartCanvas.getContext('2d');
    
    // Assign the new chart to the global instance variable
    chartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            datasets: [{
                label: 'Pontuação',
                data: [120, 190, 150, 210, 170, 230, 776, 849, 123, 340, 500, 123],
                backgroundColor: 'rgba(231, 80, 37, 0.6)',
                borderColor: 'rgb(175, 61, 30)',
                borderWidth: 1,
                borderRadius: 4
            }]
        },
        options: {
            // This option makes the chart responsive by default
            responsive: true,
            // Set to false if you want the chart to fill the container's height and width independently
            maintainAspectRatio: true, 
            scales: {
                y: {
                    beginAtZero: true,
                    display: false
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.y !== null) {
                                label += context.parsed.y;
                            }
                            return label;
                        }
                    }
                }
            }
        }
    });
};

// Observer to handle chart initialization and destruction dynamically
const chartObserver = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
        // Check for added nodes
        mutation.addedNodes.forEach(node => {
            if (node.nodeType === 1 && (node.id === 'performanceChart' || node.querySelector('#performanceChart'))) {
                initPerformanceChart();
            }
        });

        // Check for removed nodes
        mutation.removedNodes.forEach(node => {
            if (node.nodeType === 1 && node.id === 'performanceChart' && chartInstance) {
                chartInstance.destroy();
                // Clear the instance variable
                chartInstance = null;
            }
        });
    }
});

// Start observing the entire document body for additions/removals
chartObserver.observe(document.body, {
    childList: true,
    subtree: true
});

// Initial call for the first page load
document.addEventListener('DOMContentLoaded', initPerformanceChart);

// Add a resize event listener to the window
window.addEventListener('resize', debounce(() => {
    if (chartInstance) {
        // Call the chart's resize method
        chartInstance.resize();
    }
}, 250)); // 250ms delay