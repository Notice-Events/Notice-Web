import React from 'react';
import Link from 'next/link';
import NetSalesChart from '../Components/chart';

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

  const buttonStyle = {
    backgroundColor: '#ff5935',
    color: 'black',
    padding: '8px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginBottom: '20px',
    boxShadow: '0 4px 4px rgba(0, 0, 0, 0.2)',
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

  const linkStyle = {
    color: 'black',
    textDecoration: 'none',
    cursor: 'pointer',
  };

  const linkHoverStyle = {
    color: 'blue',
    textDecoration: 'underline',
  };

  const dropdownOptions = ['Lusaka festival'];
  const dropdownuserOptions = ['👤 Jack'];
  const dropdowndaysOptions = ['Last 7 days'];

  return (
    <div style={{ backgroundColor: '#f0f0f0', fontFamily: 'Poppins, sans-serif', minHeight: '100vh' }}>
      <div style={sidebarStyle}>
        <h1 style={{ marginLeft: '50px', marginBottom: '20px' }}>
          <b>NOTICE</b>
        </h1>
        <div>
          <select
            style={{
              border: 'none',
              width: '200px',
              height: '30px',
              marginBottom: '20px',
              backgroundColor: '#fff',
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
        <div style={labelStyle}>
          <span style={iconStyle}>👤</span>
          <label>Scan</label>
        </div>
        <div>
          <div style={labelStyle}>
            <span style={iconStyle}>💰</span>
            <label>Financials</label>
          </div>
          <div style={labelStyle}>
            <span style={iconStyle}>👤</span>
            <label>Manage users</label>
          </div>
          <div style={labelStyle}>
            <span style={iconStyle}>⚙️</span>
            <label>Settings</label>
          </div>
          <div style={{ marginTop: '100px' }}>
            <div style={labelStyle}>
              <span style={iconStyle}>❔</span>
              <label>Help</label>
            </div>
            <div style={labelStyle}>
              <span style={iconStyle}>※</span>
              <label>Accessibility</label>
            </div>
          </div>
        </div>
        <div style={{ marginTop: 'auto', backgroundColor: '#fff', height: '60px', padding: '20px', marginLeft: '-20px', width: '247px' }}>
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
      <section style={{ minHeight: 'calc(100vh - 60px)', width: '85%', marginLeft: '268px', fontFamily: 'Poppins, sans-serif' }}>
        <div style={{ marginTop: '-550px', display: 'flex', fontFamily: 'Poppins, sans-serif', padding: '20px' }}>
          <div style={{ marginRight: '40px', padding: '20px', width: '200px', opacity: '100px', marginLeft: '40px', marginTop: '-200px', display: 'flex' }}>
            <h1 style={{ marginRight: '40px' }}>Dashboard</h1>
            <select style={{ height: '30px', marginTop: '20px', marginLeft: '20px', border: 'none', backgroundColor: '#f0f0f0', fontWeight: 'bold' }}>
              {dropdowndaysOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>
        <section style={{ marginBottom: '40px' }}>
          <div className='Div1' style={{ backgroundColor: 'white', width: '200px', height: '100px', marginLeft: '80px', marginTop: '-130px', padding: '10px' }}>
            <h4 style={{ marginTop: '-1px' }}>Tickets sold</h4>
            <h1 style={{ fontSize: '50px', marginTop: '-1px', marginLeft: '30px' }}> 0/100</h1>
          </div>
          <div className='Div1' style={{ backgroundColor: 'white', width: '200px', height: '100px', marginLeft: '350px', marginTop: '-120px', padding: '10px' }}>
            <h4 style={{ marginTop: '-1px' }}>Net Sales</h4>
            <h1 style={{ fontSize: '30px' }}> K 0.00</h1>
          </div>
          <div className='Div1' style={{ backgroundColor: 'white', width: '200px', height: '100px', marginLeft: '620px', marginTop: '-120px', padding: '10px' }}>
            <h4 style={{ marginTop: '-1px' }}>Event followers</h4>
            <h1 style={{ fontSize: '30px' }}> 20</h1>
          </div>
        </section>
        <div className="center-div" style={{ width: '85%', height: '300px', backgroundColor: 'white', marginLeft: '80px' }}>
          <NetSalesChart />
        </div>
        <div className="center-div" style={{ width: '85%', height: '100px', backgroundColor: 'white', marginLeft: '80px', marginTop: '40px' }}>
          <div style={{ display: 'flex', padding: '10px' }}>
            <h3 style={{ marginTop: '-1px' }}>Orders</h3>
            <button style={{ height: '30px', marginLeft: '800px' }}>
              <b>View All ↗</b>
            </button>
          </div>
          <div style={{ marginTop: '-30px', display: 'flex' }}>
            <Link href="#">
              <h5 style={{ ...linkStyle, marginRight: '70px', marginLeft: '10px' }} onMouseEnter={(e) => (e.target.style = linkHoverStyle)} onMouseLeave={(e) => (e.target.style = linkStyle)}>
                Pending
              </h5>
            </Link>
            <Link href="#">
              <h5 style={{ ...linkStyle }} onMouseEnter={(e) => (e.target.style = linkHoverStyle)} onMouseLeave={(e) => (e.target.style = linkStyle)}>
                Active
              </h5>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventDashboard;
