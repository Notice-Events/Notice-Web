import Navbar from "../Components/Navbar";
import Footer from "../Components/footer";
import Image from "next/image";


const about = ()=> {
return (
    <div className="about" style={{fontFamily:"poppins"}}>
        <Navbar/>
        <section
        className="section1"
        style={{
          backgroundColor: "#DEDEDE",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <h3 style={{ fontSize: "40px", marginTop:"20px" }}>
          <b>We are Notice</b>
        </h3>
        <p style={{ fontSize: "25px", marginTop:"-30px"}}>
          We Bring
        </p>
        <h3 style={{ fontSize: "40px", marginTop:"-20px" }}>
          <b>dream</b>
        </h3>
        <p style={{ fontSize: "25px", marginTop:"-30px"}}>
          to life!
        </p>
</section>
<section className="section2"
  style={{
    width: '78%',
    height: '350px',
    marginLeft: '140px',
    marginTop: '10px',
    display: 'flex',
    fontFamily:'sans-serif',
    marginBottom:'40px'
  }}
>
  <div style={{ padding: '20px', display: 'flex' }}>
    <div className="platform">
      <h1>About us</h1>
      <p
      style={{ marginTop: '20px' }}
      >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br/>eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut<br/>enim ad minim veniam, quis nostrud exercitation ullamco<br/>laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure<br/>dolor in reprehenderit in voluptate velit esse cillum dolore eu
      <br/>fugiat nulla pariatur. Excepteur sint occaecat cupidatat non<br/>proident, sunt in culpa qui officia deserunt mollit anim id est<br/> laborum.<br/>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br/>eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut<br/>enim ad minim veniam, quis nostrud exercitation ullamco<br/>laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    <Image src="/images/About.jpg" alt="My Image" width={450} height={290} style={{ marginLeft: '200px', marginTop:"20px" }}/>
  </div>
    </section>
    <section
        className="section1"
        style={{
          backgroundColor: "#DEDEDE",
          padding: "10px",
          textAlign: "center",
          marginTop: "20px",
          display: 'flex',
          height:"80px",
        }}
      >
        <div className="Overview"style={{ marginLeft:"350px", marginTop:"-30px"}}>
        <h1 style={{fontSize:"40px"}}>10,000</h1>
        <p style={{fontSize:"20px", marginTop:"-30px"}}>Events</p>
        </div>
        <div className="Overview"style={{ marginLeft:"200px", marginTop:"-30px"}}>
        <h1 style={{fontSize:"40px"}}>100,000</h1>
        <p style={{fontSize:"20px", marginTop:"-30px"}}>Annual attendees</p>
        </div>
        <div className="Overview"style={{ marginLeft:"220px", marginTop:"-30px"}}>
        <h1 style={{fontSize:"40px"}}>1.5 M</h1>
        <p style={{fontSize:"20px", marginTop:"-30px"}}>Monthly Followers</p>
        </div>
      </section>
      <section className="What-we-offer"
  style={{
    width: '78%',
    height: '350px',
    marginLeft: '140px',
    marginTop: '10px',
    display: 'flex',
    fontFamily:'sans-serif',
    marginBottom:'40px'
  }}
>
  <div style={{ padding: '20px', display: 'flex' }}>
  <Image src="/images/Whatweoffer.jpg" alt="My Image" width={450} height={300} style={{ marginLeft: '20px', marginTop:"20px", marginRight:"200px" }}/>
    <div className="platform">
      <h1>What We Offer?</h1>
      <p
      style={{ marginTop: '20px' }}
      >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br/>eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut<br/>enim ad minim veniam, quis nostrud exercitation ullamco<br/>laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure<br/>dolor in reprehenderit in voluptate velit esse cillum dolore eu
      <br/>fugiat nulla pariatur. Excepteur sint occaecat cupidatat non<br/>proident, sunt in culpa qui officia deserunt mollit anim id est<br/> laborum.<br/>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br/>eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut<br/>enim ad minim veniam, quis nostrud exercitation ullamco<br/>laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
  </div>
    </section>
    <section className="Who-we-are"
  style={{
    width: '78%',
    height: '350px',
    marginLeft: '140px',
    marginTop: '10px',
    display: 'flex',
    fontFamily:'sans-serif',
    marginBottom:'40px'
  }}
>
  <div style={{ padding: '20px', display: 'flex' }}>
    <div className="platform">
      <h1>Who we are?</h1>
      <p
      style={{ marginTop: '20px' }}
      >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br/>eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut<br/>enim ad minim veniam, quis nostrud exercitation ullamco<br/>laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure<br/>dolor in reprehenderit in voluptate velit esse cillum dolore eu
      <br/>fugiat nulla pariatur. Excepteur sint occaecat cupidatat non<br/>proident, sunt in culpa qui officia deserunt mollit anim id est<br/> laborum.<br/>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br/>eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut<br/>enim ad minim veniam, quis nostrud exercitation ullamco<br/>laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    <Image src="/images/Whoweare.jpg" alt="My Image" width={450} height={300} style={{ marginLeft: '200px', marginTop:"20px" }}/>
  </div>
    </section>
    <section className="Downloadapp"
  style={{
    width: '78%',
    height: '350px',
    backgroundColor: '#ff3b3f',
    marginLeft: '140px',
    marginTop: '30px',
    display: 'flex',
    fontFamily:'sans-serif',
  }}
>
  <div style={{ padding: '60px', display: 'flex' }}>
    <Image src="/images/Download.jpg" alt="My Image" width={300} height={250} style={{ marginRight: '180px' }}/>
    <div className="DownloadApp">
      <h1>Notice App</h1>
      <p style={{fontSize:"25px"}}>The service charges a fee to event organizers in<br/>exchange for online ticketing services, unless<br/> the event is free.</p>
      <button style={{backgroundColor:"black",color:"white", width:"150px", height:"30px", marginLeft:"65%"}}>Download</button>
    </div>
  </div>
    </section>
        <Footer />
    </div>


);
};
export default about;
