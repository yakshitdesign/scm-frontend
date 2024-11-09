document.addEventListener('DOMContentLoaded', () => {
    let chart;

    function initChart() {
        const isDarkMode = document.documentElement.classList.contains('dark');
        
        const chartConfig = {
            series: [
                {
                    name: "Sales",
                    data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
                },
            ],
            chart: {
                type: "bar",
                height: 240,
                toolbar: {
                    show: false,
                },
                background: isDarkMode ? "#1e1e1e" : "#ffffff",
            },
            title: {
                show: false,
            },
            dataLabels: {
                enabled: false,
            },
            colors: isDarkMode ? ["#ffffff"] : ["#020617"],
            plotOptions: {
                bar: {
                    columnWidth: "40%",
                    borderRadius: 2,
                },
            },
            xaxis: {
                axisTicks: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
                labels: {
                    style: {
                        colors: isDarkMode ? "#e0e0e0" : "#616161",
                        fontSize: "12px",
                        fontFamily: "inherit",
                        fontWeight: 400,
                    },
                },
                categories: [
                    "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
                ],
            },
            yaxis: {
                labels: {
                    style: {
                        colors: isDarkMode ? "#e0e0e0" : "#616161",
                        fontSize: "12px",
                        fontFamily: "inherit",
                        fontWeight: 400,
                    },
                },
            },
            grid: {
                show: true,
                borderColor: isDarkMode ? "#444444" : "#dddddd",
                strokeDashArray: 5,
                xaxis: {
                    lines: {
                        show: true,
                    },
                },
                padding: {
                    top: 5,
                    right: 20,
                },
            },
            fill: {
                opacity: 0.8,
            },
            tooltip: {
                theme: isDarkMode ? "dark" : "light",
            },
        };

        if (chart) {
            chart.destroy();
        }

        chart = new ApexCharts(document.querySelector("#invoiceChart"), chartConfig);
        chart.render();
    }

    initChart();

    const mainToggleButton = document.getElementById('main-theme-toggle');
    const dropdownToggleButton = document.getElementById('dropdown-theme-toggle');

    if (mainToggleButton) {
        mainToggleButton.addEventListener('click', () => {
            setTimeout(initChart, 0);
        });
    }

    if (dropdownToggleButton) {
        dropdownToggleButton.addEventListener('click', () => {
            setTimeout(initChart, 0);
        });
    }
});
