import React from 'react';
import dynamic from 'next/dynamic';

const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const NetSalesChart = () => {
  const netSalesData = {
    options: {
      chart: {
        id: 'netSalesChart',
        type: 'line',
        toolbar: {
          show: true,
        },
      },
      xaxis: {
        categories: ['25 Nov', '27 Nov', '29 Nov', '01 Dec'],
      },
      yaxis: {
        tickAmount: 3, 
        labels: {
          formatter: function (value) {
            return `K${value}`;
          },
        },
        show: true,
      },
      markers: {
        show: false,
      },
      stroke: {
        width: 2,
        curve: 'smooth',
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left', 
        itemMargin: {
          vertical: 2,
        },
      },
      title: {
        text: 'Net Sales over the previous 7 days were K0.00',
        align: 'left',
        padding: '20px',
        margin: 10,
      },
      tooltip: {
        shared: false,
        y: {
          formatter: function (val) {
            return `$ ${val.toFixed(2)}`;
          },
        },
        custom: function ({ seriesIndex, dataPointIndex, w }) {
          const seriesName = w.globals.seriesNames[seriesIndex];
          const dataValue = w.globals.series[seriesIndex][dataPointIndex];

          return `<span style="color: ${seriesIndex === 2 ? '#4b0082' : '#808080'}">${seriesName}</span>: K ${dataValue.toFixed(2)}`;
        },
      },
    },
    series: [
      {
        name: 'Last 7 Days, Nov 25-Dec 01',
        data: [3000, 900, 3000, 1000],
        color: '#4b0082',
      },
      {
        name: 'Prev 7 Days, Nov 18 - Nov 24',
        data: [2500, 3700, 2000, 3500],
        color: '#ffff00',
      },
      {
        name: 'Average Daily Sales over Last 7 Days: 2,345.87',
        data: [1500, 1900, 1500, 1900],
        color: '#808080',
      },
    ],
  };

  return <ApexChart options={netSalesData.options} series={netSalesData.series} type="line" height={300} />;
};

export default NetSalesChart;
