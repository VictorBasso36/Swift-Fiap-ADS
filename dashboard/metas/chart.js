let chartInstance = null;


const debounce = (func, delay) => {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
};


const initPerformanceChart = () => {
    const chartCanvas = document.getElementById('performanceChart');
   
    if (!chartCanvas || chartInstance) return;

    const ctx = chartCanvas.getContext('2d');

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
           
            responsive: true,
     
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

const chartObserver = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {

        mutation.addedNodes.forEach(node => {
            if (node.nodeType === 1 && (node.id === 'performanceChart' || node.querySelector('#performanceChart'))) {
                initPerformanceChart();
            }
        });

 
        mutation.removedNodes.forEach(node => {
          
            if (node.nodeType === 1 && (node.id === 'performanceChart' || node.querySelector('#performanceChart')) && chartInstance) {
                chartInstance.destroy();
 
                chartInstance = null;
            }
        });
    }
});


chartObserver.observe(document.body, {
    childList: true,
    subtree: true
});


document.addEventListener('DOMContentLoaded', initPerformanceChart);


window.addEventListener('resize', debounce(() => {
    if (chartInstance) {
        chartInstance.resize();
    }
}, 250)); 