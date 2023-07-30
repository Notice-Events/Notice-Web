import React from 'react';
import Link from 'next/link';

const EventDashboard = () => {
  const sidebarStyle = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#f0f0f0',
    width: '250px',
    padding: '20px',
    height: '475px',
    fontFamily: 'Poppins, sans-serif',
  };
  const linkStyle = {
    color: 'black',
    textDecoration: 'none',
    cursor: 'pointer',
  };

  const linkHoverStyle = {
    color: 'blue',
    textDecoration: 'underline',
  };

  const dropdownOptions = ['G & G EVENTS'];
  const dropdownuserOptions = ['👤  Jack'];

  const buttonStyle = {
    backgroundColor: '#ff5935',
    color: 'black',
    padding: '8px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginBottom: '20px',
    boxShadow: '0 4px 4px rgba(0, 0, 0, 1)',
    fontSize: '16px',
    fontWeight: 'bold',
    width: '200px',
    display: 'flex',
    alignItems: 'center',
  };

  const iconStyle = {
    marginRight: '10px',
  };

  const labelStyle = {
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <div style={{ backgroundColor: '#f0f0f0', fontFamily: 'Poppins, sans-serif' }}>
      <div style={sidebarStyle}>
        <h1 style={{ marginLeft: '50px' }}>
          <b>NOTICE</b>
        </h1>
        <div>
          <select
            style={{
              border: 'none',
              width: '200px',
              height: '30px',
              marginBottom: '20px',
              backgroundColor: '#f0f0f0',
              fontWeight: 'bold',
            }}
          >
            {dropdownOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>
        <button style={buttonStyle}>
          <span style={iconStyle}>🖼️</span>
          Dashboard
        </button>
        <div style={labelStyle}>
          <span style={iconStyle}>📌</span>
          <label>Event</label>
        </div>
        <div style={labelStyle}>
          <span style={iconStyle}>📅</span>
          <label>Calendar</label>
        </div>
        <div style={{ marginTop: '40px' }}>
          <div style={labelStyle}>
            <span style={iconStyle}>💰</span>
            <label>Financials</label>
          </div>
          <div style={labelStyle}>
            <span style={iconStyle}>⚙️</span>
            <label>Settings</label>
          </div>
        </div>
        <div style={{ marginTop: '100px', marginBottom: '80px' }}>
          <div style={labelStyle}>
            <span style={iconStyle}>❔</span>
            <label>Help</label>
          </div>
        </div>
        <div
          style={{
            marginTop: '100px',
            backgroundColor: '#fff',
            height: '60px',
            padding: '20px',
            marginLeft: '-20px',
            width: '247px',
          }}
        >
          <select
            style={{
              width: '200px',
              height: '30px',
              marginLeft: '20px',
              backgroundColor: '#fff',
              fontWeight: 'bold',
              borderRadius: '5px',
            }}
          >
            {dropdownuserOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>
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
        <div style={{ marginTop: '100px', display: 'flex', fontFamily: 'Poppins, sans-serif', padding: '20px' }}>
          <div
            style={{
              marginRight: '10px',
              backgroundColor: 'white',
              padding: '20px',
              width: '200px',
              height: '719px',
              opacity: '100px',
            }}
          >
            <h1>Dashboard</h1>
          </div>
          <h1 style={{ padding: '20px' }}>Create Events</h1>
        </div>
        <div
          className="center-div"
          style={{
            width: '85%',
            height: '300px',
            backgroundColor: 'white',
            marginLeft: '80px',
            marginTop: '-580px',
          }}
        ></div>
        <div
          className="center-div"
          style={{
            width: '80%',
            height: '100px',
            backgroundColor: 'white',
            marginLeft: '80px',
            marginTop: '40px',
          }}
        >
          <div style={{ display: 'flex', padding: '10px' }}>
            <h3 style={{ marginTop: '-1px' }}>EVENTS</h3>
            <button style={{ height: '30px', marginLeft: '700px' }}>
              <b>View All ↗</b>
            </button>
          </div>
          <div style={{ marginTop: '-30px', display: 'flex' }}>
      <Link href="#">
        <h5 style={{ ...linkStyle, marginRight: '70px', marginLeft: '10px' }} onMouseEnter={(e) => e.target.style = linkHoverStyle} onMouseLeave={(e) => e.target.style = linkStyle}>
          Active
        </h5>
      </Link>
      <Link href="#">
        <h5 style={{ ...linkStyle }} onMouseEnter={(e) => e.target.style = linkHoverStyle} onMouseLeave={(e) => e.target.style = linkStyle}>
          Pending
        </h5>
      </Link>
    </div>
          <div style={{ display: 'flex', marginRight: '20px' }}>
            <h5 style={{ marginRight: '150px' }}>Name</h5>
            <h5 style={{ marginRight: '150px' }}>Date</h5>
            <h5 style={{ marginRight: '150px' }}>Free/Paid</h5>
            <h5 style={{ marginRight: '70px' }}>Location</h5>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventDashboard;
