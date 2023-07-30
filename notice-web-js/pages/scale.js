import React from 'react';
import Link from 'next/link';
import { Bar } from 'react-chartjs-2';
import { Chart } from 'chart.js'; // Import the Chart object from chart.js

// Register the required scale explicitly
Chart.register(...require('chart.js/auto').registerables);

const EventDashboard = () => {
  const sidebarStyle = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    width: '250px',
    padding: '20px',
    height: '100%',
    fontFamily: 'Poppins, sans-serif',
  };

  // ... (rest of your existing styles)

  // Net sales chart data and options
  const netSalesData = {
    labels: ['25 Nov', '27 Nov', '29 Nov', '01 Dec'],
    datasets: [
      {
        label: 'Net Sales',
        data: [2000, 4000, 3000, 1000], // Replace this data with your actual net sales amounts
        backgroundColor: '#007bff', // Customize the bar color
      },
    ],
  };

  const netSalesOptions = {
    scales: {
      y: {
        type: 'linear', // Set the scale type explicitly to "linear"
        beginAtZero: true,
        max: 4000, // Customize the maximum value on the y-axis
        ticks: {
          stepSize: 1000, // Customize the step size on the y-axis
        },
      },
    },
  };

  return (
    <div style={{ backgroundColor: '#f0f0f0', fontFamily: 'Poppins, sans-serif', height: '100vh' }}>
      <div style={sidebarStyle}>
        <h1 style={{ marginLeft: '50px' }}>
          <b>NOTICE</b>
        </h1>
        {/* ... (rest of your existing sidebar content) */}
      </div>
      <section
        style={{
          height: '780px',
          width: '85%',
          marginLeft: '268px',
          marginTop: '-585px',
          fontFamily: 'Poppins, sans-serif',
        }}
      >
        <div style={{ marginTop: '0px', display: 'flex', fontFamily: 'Poppins, sans-serif', padding: '20px' }}>
          {/* ... (rest of your existing content) */}
        </div>
        <section style={{ marginBottom: '20px' }}>
          {/* ... (rest of your existing content) */}
        </section>
        {/* Add the Net Sales Chart here */}
        <div
          className="center-div"
          style={{
            width: '85%',
            height: '300px',
            backgroundColor: 'white',
            marginLeft: '80px',
            marginTop: '0px',
          }}
        >
          <Bar data={netSalesData} options={netSalesOptions} />
        </div>
        <div
          className="center-div"
          style={{
            width: '85%',
            height: '100px',
            backgroundColor: 'white',
            marginLeft: '80px',
            marginTop: '40px',
          }}
        >
          {/* ... (rest of your existing content) */}
        </div>
      </section>
    </div>
  );
};

export default EventDashboard;
