////// Start Chart

const chartData = {
    gold: {
        title: "أسعار الذهب",
        day: {
            value: "3,289.15",
            change: "-0.81% (-26.57)",
            data: [67.3, 67.4, 67.5, 67.2, 67.1, 66.9, 66.8]
        },
        month: {
            value: "3,350.55",
            change: "+0.23% (7.45)",
            data: [65, 65.5, 66.5, 66.8, 67, 67.3, 67.1]
        },
        year: {
            value: "3,589.80",
            change: "+1.88% (70.30)",
            data: [60.1, 62.3, 64, 65.7, 66.4, 67.2, 68.1]
        },
        "5years": {
            value: "4,010.30",
            change: "+8.15% (320.80)",
            data: [45, 50.2, 55, 60.8, 65.5, 67.2, 70]
        }
    },
    silver: {
        title: "أسعار الفضة",
        day: {
            value: "950.00",
            change: "-0.32% (-3.00)",
            data: [24, 24.1, 24.2, 24, 23.9, 23.8, 23.7]
        },
        month: {
            value: "980.00",
            change: "+1.50% (14.50)",
            data: [22.5, 23, 23.5, 24, 24.3, 24.5, 24.4]
        },
        year: {
            value: "1,050.00",
            change: "+4.00% (40.00)",
            data: [20, 21.5, 22.5, 23.5, 24.2, 25, 26]
        },
        "5years": {
            value: "1,300.00",
            change: "+10.00% (120.00)",
            data: [15, 17.5, 20, 22.5, 25, 26, 27]
        }
    },
    oil: {
        title: "أسعار الخام",
        day: {
            value: "1,200.00",
            change: "-1.00% (-12.00)",
            data: [70, 71, 72, 71, 70, 69, 68]
        },
        month: {
            value: "1,260.00",
            change: "+1.20% (15.00)",
            data: [66, 68, 69, 70, 71, 72, 73]
        },
        year: {
            value: "1,400.00",
            change: "+3.50% (45.00)",
            data: [60, 63, 66, 69, 71, 72, 74]
        },
        "5years": {
            value: "1,600.00",
            change: "+8.00% (120.00)",
            data: [50, 55, 60, 65, 70, 72, 75]
        }
    }
};

let currentMetal = 'gold';
let currentPeriod = 'day';
let chart;

function renderChart() {
    const ctx = document.getElementById('chart').getContext('2d');
    const selected = chartData[currentMetal][currentPeriod];

    // تحديث القيم
    $('#main-value').text(selected.value);
    $('#change').text(selected.change);
    $('#tab-title').text(chartData[currentMetal].title);

    if (chart) chart.destroy();

    chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["1", "2", "3", "4", "5", "6", "7"],
            datasets: [{
                data: selected.data,
                fill: true,
                backgroundColor: 'rgba(255,0,0,0.1)',
                borderColor: 'red',
                tension: 0.3
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: false
                }
            }
        }
    });
}

$(document).ready(function() {
    renderChart();

    $('.tab-button').click(function() {
        $('.tab-button').removeClass('active');
        $(this).addClass('active');
        currentMetal = $(this).data('metal');
        renderChart();
    });

    $('.days a').click(function() {
        $('.days a').removeClass('active');
        $(this).addClass('active');
        currentPeriod = $(this).data('period');
        renderChart();
    });
});


////// End  Chart