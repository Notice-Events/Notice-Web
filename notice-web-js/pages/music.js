import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/footer";
import styles from "../styles/index.module.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Image from "next/image";

const ExploreData = [
    {
      image: {
        src: "/images/Music.jpg",
        width:300,
        height:300,
    },
      Venue: "A NIGHT KU CHALO",
      Rating:5.0,
      Time:"SATURDAY AT 6PM",
      Location:"The Music Club",
    },
    {
      image: {
        src: "/images/Music1.jpg",
        width:300,
        height:300,
    },
      Venue: "A NIGHT KU CHALO",
      Rating:4.5,
      Time:"SATURDAY AT 6PM",
      Location:"The Music Club",
    },
    {
      image: {
      src: "/images/Music2.jpg",
      width:300,
      height:300,
  },
      Venue: "A NIGHT KU CHALO",
      Rating:4.5,
      Time:"SATURDAY AT 6PM",
      Location:"The Music Club",
    },
  ];
const Music = () => {
    const [selectedTime, setSelectedTime] = useState("");
    const [selectedLocation, setSelectedLocation] = useState("");
    const [selectedGuests, setSelectedGuests] = useState('');
    const [selectedVenueType, setSelectedVenueType] = useState('');
    const [selectedSpacePreference, setSelectedSpacePreference] = useState('');
    const [selectedRating, setSelectedRating] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const eventsPerPage = 4;
    const totalPages = Math.ceil(ExploreData.length / eventsPerPage);

    const handleTimeChange = (e) => {
        setSelectedTime(e.target.value);
      };
    const handleLocationChange = (e) => {
        setSelectedLocation(e.target.value);
      };
    const handleGuestsChange = (e) => {
        setSelectedGuests(e.target.value);
    };
    
    const handleVenueTypeChange = (e) => {
        setSelectedVenueType(e.target.value);
    };
    
    const handleSpacePreferenceChange = (e) => {
        setSelectedSpacePreference(e.target.value);
    };
    
    const handleRatingChange = (e) => {
        setSelectedRating(e.target.value);
    };
    
    const handleSearch = () => {
        // Perform search based on selected category and location
    console.log("Searching...");
    };
    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };
    
    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };
    const MAX_RATING = 5;
return (
    <div className="MUSIC" style={{fontFamily:"sans-serif"}}>
        <Navbar />
        <section
        className="section1"
        style={{
          backgroundColor: "#DEDEDE",
          padding: "20px",
          textAlign: "center",
          marginTop: "20px",
        }}
      >
        <h3 style={{ fontSize: "40px", marginTop:"80px" }}>
          <b>MUSIC EVENTS</b>
        </h3>

        <div
          className="search-container"
          style={{ marginTop: "20px" }}
        >
          <select
            value={selectedTime}
            onChange={handleTimeChange}
            style={{
              color: "grey",
              padding: "15px",
              width: "300px",
              borderRadius: "10px",
            }}
          >
            <option value="">Time options</option>
            <option value="morning">Morning</option>
            <option value="afternoon">Afternoon</option>
            <option value="evening">Evening</option>
            <option value="night">Night</option>
          </select>

          <select
            value={selectedLocation}
            onChange={handleLocationChange}
            style={{
              color: "grey",
              padding: "15px",
              width: "300px",
              borderRadius: "10px",
              marginLeft: "7px",
            }}
          >
            <option value="">Select Location</option>
            <option value="newyork">New York</option>
            <option value="losangeles">Los Angeles</option>
            <option value="london">London</option>
          </select>

          <button
            onClick={handleSearch}
            style={{
              color: "white",
              padding: "15px",
              width: "300px",
              borderRadius: "10px",
              backgroundColor: "grey",
              marginLeft: "7px",
              marginBottom:"50px"
            }}
          >
            Search
          </button>
        </div>
        </section>
        <section className="second-search" style={{marginTop:"50px", marginLeft:"220px"}}>
        <select
        value={selectedGuests}
        onChange={handleGuestsChange}
        style={{
          color: 'grey',
          padding: '15px',
          width: '200px',
          borderRadius: '10px',
          marginLeft: '7px',
        }}
      >
        <option value="">No.of Guests</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>

      <select
        value={selectedVenueType}
        onChange={handleVenueTypeChange}
        style={{
          color: 'grey',
          padding: '15px',
          width: '200px',
          borderRadius: '10px',
          marginLeft: '7px',
        }}
      >
        <option value="">Venue Type</option>
        <option value="indoor">Indoor</option>
        <option value="outdoor">Outdoor</option>
      </select>

      <select
        value={selectedSpacePreference}
        onChange={handleSpacePreferenceChange}
        style={{
          color: 'grey',
          padding: '15px',
          width: '200px',
          borderRadius: '10px',
          marginLeft: '7px',
        }}
      >
        <option value="">Space Preference</option>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>

      <select
        value={selectedRating}
        onChange={handleRatingChange}
        style={{
          color: 'grey',
          padding: '15px',
          width: '200px',
          borderRadius: '10px',
          marginLeft: '7px',
        }}
      >
        <option value="">Rating</option>
        <option value="1">1 star</option>
        <option value="2">2 stars</option>
        <option value="3">3 stars</option>
        <option value="4">4 stars</option>
        <option value="5">5 stars</option>
      </select>

      <button
        onClick={handleSearch}
        style={{
          color: 'white',
          padding: '15px',
          width: '200px',
          borderRadius: '10px',
          backgroundColor: 'grey',
          marginLeft: '7px',
        }}
      >
        Search
      </button>
        </section>
    <section className="section2" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <h3 style={{ marginLeft: "20px" }}>Explore</h3>
        <h5 style={{ marginRight: "20px" }}>View all</h5>
    </section>

    <section className="Explore" style={{ marginTop:"40px"}}>
    <div className={styles.pictureGroupContainer} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
        {ExploreData.map((Explore, Music) => (
          <div key={Music} className={styles.pictureContainer} style={{ marginLeft: "0px", marginBottom: "20px" }}>
            <Image
              src={Explore.image}
              alt={Explore.Location}
              onClick={() => {
                console.log(`Clicked on ${Explore.Location}`);
                
              }}
              style={{ width: "350px", height: "220px", marginRight: "60px", borderRadius: "5px",}}
            />
            <div className={styles.eventDetails}>
              <h1>{Explore.Venue}</h1>
              <div className={styles.starsContainer}>
                 {[...Array(MAX_RATING)].map((_, i) => (
                 <i
                    key={i}
                    className={`fas fa-star${Explore.Rating >= i + 1 ? "" : "-half-alt"}`}
                    style={{ color: "gold", marginRight: "5px" }}
                ></i>
                ))}{Explore.Rating}
            </div>
              <h4>{Explore.Time}</h4>
              <h1>{Explore.Location}</h1>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.pictureGroupContainer} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
        {ExploreData.map((Explore, Music) => (
          <div key={Music} className={styles.pictureContainer} style={{ marginLeft: "0px", marginBottom: "20px" }}>
            <Image
              src={Explore.image}
              alt={Explore.Location}
              onClick={() => {
                console.log(`Clicked on ${Explore.Location}`);
                
              }}
              style={{ width: "350px", height: "220px", marginRight: "60px", borderRadius: "5px",}}
            />
            <div className={styles.eventDetails}>
              <h1>{Explore.Venue}</h1>
              <div className={styles.starsContainer}>
                 {[...Array(MAX_RATING)].map((_, i) => (
                 <i
                    key={i}
                    className={`fas fa-star${Explore.Rating >= i + 1 ? "" : "-half-alt"}`}
                    style={{ color: "gold", marginRight: "5px" }}
                ></i>
                ))}{Explore.Rating}
            </div>
              <h4>{Explore.Time}</h4>
              <h1>{Explore.Location}</h1>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.pictureGroupContainer} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
        {ExploreData.map((Explore, Music) => (
          <div key={Music} className={styles.pictureContainer} style={{ marginLeft: "0px", marginBottom: "20px" }}>
            <Image
              src={Explore.image}
              alt={Explore.Location}
              onClick={() => {
                console.log(`Clicked on ${Explore.Location}`);
                
              }}
              style={{ width: "350px", height: "220px", marginRight: "60px", borderRadius: "5px",}}
            />
            <div className={styles.eventDetails}>
              <h1>{Explore.Venue}</h1>
              <div className={styles.starsContainer}>
                 {[...Array(MAX_RATING)].map((_, i) => (
                 <i
                    key={i}
                    className={`fas fa-star${Explore.Rating >= i + 1 ? "" : "-half-alt"}`}
                    style={{ color: "gold", marginRight: "5px" }}
                ></i>
                ))}{Explore.Rating}
            </div>
              <h4>{Explore.Time}</h4>
              <h1>{Explore.Location}</h1>
            </div>
          </div>
        ))}
      </div>
    </section>
    <section className="section3" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <h3 style={{ marginLeft: "20px" }}>Popular Venue</h3>
        <h5 style={{ marginRight: "20px" }}>View all</h5>
      </section>

      <div className={styles.pictureGroupContainer} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
        {ExploreData.map((Explore, Music) => (
          <div key={Music} className={styles.pictureContainer} style={{ marginLeft: "0px", marginBottom: "20px" }}>
            <Image
              src={Explore.image}
              alt={Explore.Location}
              onClick={() => {
                console.log(`Clicked on ${Explore.Location}`);
                
              }}
              style={{ width: "350px", height: "320px", marginRight: "60px", borderRadius: "5px",}}
            />
            <div className={styles.eventDetails}>
              <h2>{Explore.Venue}</h2>
              <div className={styles.starsContainer}>
                 {[...Array(MAX_RATING)].map((_, i) => (
                 <i
                    key={i}
                    className={`fas fa-star${Explore.Rating >= i + 1 ? "" : "-half-alt"}`}
                    style={{ color: "gold", marginRight: "5px" }}
                ></i>
                ))}{Explore.Rating}
            </div>
              <h4>{Explore.Time}</h4>
              <h2>{Explore.Location}</h2>
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          disabled={currentPage === 1}
          onClick={handlePreviousPage}
          style={{
            backgroundColor: "#A9A9A9",
            border: "none",
            color: currentPage === 1 ? "#fff" : "#333",
            padding: "10px 15px",
            fontSize: "14px",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
            marginRight: "10px",
          }}
        >
          &lt;&lt;
        </button>
        <div style={{ marginTop: '0px' }}>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              style={{
                backgroundColor: '#D8D8D8',
                border: 'none',
                color: 'black',
                padding: '10px 15px',
                fontSize: '14px',
                borderRadius: '5px',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
                marginRight: '5px',
              }}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <button
          disabled={currentPage === totalPages}
          onClick={handleNextPage}
          style={{
            backgroundColor: "#A9A9A9",
            border: "none",
            color: currentPage === 1 ? "#fff" : "#333",
            padding: "10px 15px",
            fontSize: "14px",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
        >
          &gt;&gt;
        </button>
      </div>
      <section className="platform-class"
  style={{
    width: '78%',
    height: '350px',
    backgroundColor: '#DEDEDE',
    marginLeft: '140px',
    marginTop: '30px',
    display: 'flex',
    fontFamily:'sans-serif',
    marginBottom:'40px'
  }}
>
  <div style={{ padding: '60px', display: 'flex' }}>
    <Image src="/images/platform.png" alt="My Image" width={300} height={250} style={{ marginRight: '180px' }}/>
    <div className="platform">
      <h1>Our platform helps bring your vision to life.</h1>
      <p
      style={{ marginTop: '20px' }}
      >
      Our platform helps bring your vision to life.Weather its a workshop,<br/>
      concert, or conference, we will help you make it happen.choose from a<br/>
      variety of features like reserved seating, multi-level ticketing and more.<br/> 
      share your event details with us and we will help you build from the<br/>ground up.</p>
      <button style={{backgroundColor:"#A6A4A4", width:"150px", height:"30px", marginLeft:"65%"}}>Contact Us</button>
    </div>
  </div>
    </section>
        <Footer />
    </div>
);
}
export default Music;