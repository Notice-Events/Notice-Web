import React, { useState } from "react";
import styles from "../styles/index.module.css";
import Reviews from "../Components/reviews";
import Footer from "../Components/footer";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/router';


const eventsData = [
  {
    id:1,
    image: {
      src: "/images/Music.jpg",
      width:300,
      height:200,
  },
    event: "Music",
    page: '../music',
  },
  {
    id:2,
    image: { 
      src:"/images/Family.jpg",
      width:300,
      height:200,
    },
    event: "Family",
    page: '../Family',
  },
  {
    id:3,
    image: { 
      src:"/images/sports.jpg",
      width:300,
      height:200,
    },
    event: "Sports",
    page: '../sports',
  },
  {
    id:4,
    image: { 
      src:"/images/Arts.jpg",
      width:300,
      height:200,
    },
    event: "Arts & Theater",
    page: '../Arts',
  },
];
const LocationData = [
  {
    image: { 
      src:"/images/food.jpg",
      width:300,
      height:300,
    },
    Venue: "LUSAKA FOOD MARKET",
    Time:"SATURDAY,AUGUST 29 2023 AT 10AM-4PM",
    Location:"ZULI BAR & Grill, Zambia",
  },
  {
    image: { 
      src:"/images/food.jpg",
      width:300,
      height:300,
    },
    Venue: "LUSAKA FOOD MARKET",
    Time:"SATURDAY,AUGUST 29 2023 AT 10AM-4PM",
    Location:"ZULI BAR & Grill, Zambia",
  },
  {
    image: { 
      src:"/images/food.jpg",
      width:300,
      height:300,
    },
    Venue: "LUSAKA FOOD MARKET",
    Time:"SATURDAY,AUGUST 29 2023 AT 10AM-4PM",
    Location:"ZULI BAR & Grill, Zambia",
  },
  {
    image: { 
      src:"/images/food.jpg",
      width:300,
      height:300,
    },
    Venue: "LUSAKA FOOD MARKET",
    Time:"SATURDAY,AUGUST 29 2023 AT 10AM-4PM",
    Location:"ZULI BAR & Grill, Zambia",
  },
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 4;
  const totalPages = Math.ceil(eventsData.length / eventsPerPage);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const handleSearch = () => {
    console.log("Searching...");
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const startIndex = (currentPage - 1) * eventsPerPage;
  const endIndex = startIndex + eventsPerPage;
  const currentEvents = eventsData.slice(startIndex, endIndex);

  const router = useRouter();

  return (
    <div style={{ fontFamily:"sans-serif,poppins"}}>
      <section
        className="section1"
        style={{
          background: 'linear-gradient(to right, #05002A  , transparent), radial-gradient(circle at center right, #4E0505 , transparent)',
          backgroundBlendMode: 'normal, multiply',
          textAlign: "center",
          height:"400px",
          color:"white",
          
        }}
      >
        <div style={{  height:"400px", width:"400px"}}>
          <Image
          src="/images/dj.jpg"
          width={400}
          height={400}
          priority
          alt="Dj-image"
          />
        </div>
        <div style={{ position: "relative", top: "-400px", textAlign: "justify", marginLeft:"500px" }}>
        <h3 style={{ fontSize: "40px" }}>
    Create Unforgettable<br />Events with Our Ticketing<br />Platform
  </h3>
  <h5 style={{ fontSize: "15px" }}>
    We provide everything you need to organize and promote your events
  </h5>
</div>
        <div
          className="search-container"
          style={{ marginTop: "-400px" }}
        >
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            style={{
              color: "grey",
              padding: "15px",
              width: "300px",
              borderRadius: "10px",
            }}
          >
            <option value="">Select Category</option>
            <option value="music">Music</option>
            <option value="sports">Sports</option>
            <option value="art">Art</option>
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
              backgroundColor: "#ff3b3f",
              marginLeft: "7px",
            }}
          ><b>
            Search
          </b>
          </button>
        </div>
      </section>
      <section className="section2" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <h3 style={{ marginLeft: "20px" }}>Browse By Category</h3>
        <h5 style={{ marginRight: "20px" }}>View all</h5>
      </section>

      <div className={styles.pictureGroupContainer} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
        {currentEvents.map((event, index) => (
          <div key={index} className={styles.pictureContainer} style={{ marginBottom: "20px" }}>
             <Link href={`/event/${event.page}`}>
              <Image
              src={event.image}
              alt={event.event}
              onClick={() => {
                console.log(`Clicked on ${event.event}`);
                router.push(event.page);
              }}
              style={{ width: "300px", height: "200px", marginRight: "20px", borderRadius: "5px" }}
            />
            </Link>
            <div className={styles.eventDetails}>
              <h4>{event.event}</h4>
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
        <div style={{ marginTop: "0px" }}>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              style={{
                backgroundColor: "#D8D8D8",
                border: "none",
                color: "black",
                padding: "10px 15px",
                fontSize: "14px",
                borderRadius: "5px",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
                marginRight: "5px",
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

      <section className="section3" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <h3 style={{ marginLeft: "20px" }}>Popular Venue</h3>
        <h5 style={{ marginRight: "20px" }}>View all</h5>
      </section>

      <div className={styles.pictureGroupContainer} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
        {LocationData.map((location, index) => (
          <div key={index} className={styles.pictureContainer} style={{ marginBottom: "20px" }}>
            <Image
              src={location.image}
              alt={location.Location}
              onClick={() => {
                console.log(`Clicked on ${location.Location}`);
              }}
              style={{ marginRight: "20px", borderRadius: "5px" }}
            />
            <div className={styles.eventDetails}> 
              <h4>{location.Venue}</h4>
              <h6>{location.Time}</h6>
              <h4>{location.Location}</h4>
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
        <div style={{ marginTop: "0px" }}>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              style={{
                backgroundColor: "#D8D8D8",
                border: "none",
                color: "black",
                padding: "10px 15px",
                fontSize: "14px",
                borderRadius: "5px",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
                marginRight: "5px",
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
    <section className="section4"
   style={{
    width: "78%",
    height: "350px",
    backgroundColor: "#ff3b3f",
    marginLeft: "140px",
    marginTop: "30px",
    display: "flex",
    fontFamily:"sans-serif"
  }}
>
  <div style={{ padding: "60px", display: "flex" }}>
    <Image src="/images/platform.png" alt="My Image" width={300} height={250} style={{ marginRight: "180px" }}/>
    <div className="platform">
      <h1>Our platform helps bring your vision to life.</h1>
      <p
      style={{ marginTop: "20px" }}
      >
      Our platform helps bring your vision to life.Weather its a workshop,<br/>
      concert, or conference, we will help you make it happen.choose from a<br/>
      variety of features like reserved seating, multi-level ticketing and more.<br/> 
      share your event details with us and we will help you build from the<br/>ground up.</p>
      <button style={{backgroundColor:"black",color:"white", width:"150px", height:"30px", marginLeft:"65%"}}>Contact Us</button>
    </div>
  </div>
    </section>
    <section className="section3" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <h3 style={{ marginLeft: "20px" }}>More Events</h3>
        <h5 style={{ marginRight: "20px" }}>View all</h5>
      </section>

      <div className={styles.pictureGroupContainer} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
        {LocationData.map((location, index) => (
          <div key={index} className={styles.pictureContainer} style={{ marginBottom: "20px" }}>
            <Image
              src={location.image}
              alt={location.Location}
              onClick={() => {
                console.log(`Clicked on ${location.Location}`);
                // Add code to navigate to the event details page
              }}
              style={{ marginRight: "20px", borderRadius: "5px" }}
            />
            <div className={styles.eventDetails}>
              <h4>{location.Venue}</h4>
              <h6>{location.Time}</h6>
              <h4>{location.Location}</h4>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.pictureGroupContainer} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
        {LocationData.map((location, index) => (
          <div key={index} className={styles.pictureContainer} style={{ marginBottom: "20px" }}>
            <Image
              src={location.image}
              alt={location.Location}
              onClick={() => {
                console.log(`Clicked on ${location.Location}`);
                // Add code to navigate to the event details page
              }}
              style={{ marginRight: "20px", borderRadius: "5px" }}
            />
            <div className={styles.eventDetails}>
              <h4>{location.Venue}</h4>
              <h6>{location.Time}</h6>
              <h4>{location.Location}</h4>
            </div>
          </div>  
        ))} 
      </div> 
      <section className="section4" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <h3 style={{ marginLeft: "20px"}}>Reviews</h3>
          <Reviews />
      </section>
  <section className="section4" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <h3 style={{ marginLeft: "20px" }}>Upcoming Events</h3>
        <h5 style={{ marginRight: "20px" }}>View all</h5>
      </section>
      <div className={styles.pictureGroupContainer} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center",}}>
        {LocationData.map((location, index) => (
          <div key={index} className={styles.pictureContainer} style={{ marginBottom: "20px"}}>
            <Image
              src={location.image}
              alt={location.Location}
              onClick={() => {
                console.log(`Clicked on ${location.Location}`);
              }}
              style={{ marginRight: "20px", borderRadius: "5px"}}
            />
            <div className={styles.eventDetails}>
              <h4>{location.Venue}</h4>
              <h6>{location.Time}</h6>
              <h4>{location.Location}</h4>
              <button style={{backgroundColor:"white", border:"none", marginLeft:"60%", fontSize:"large"}}><b>Read more</b></button>
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
        <div style={{ marginTop: "0px" }}>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              style={{
                backgroundColor: "#D8D8D8",
                border: "none",
                color: "black",
                padding: "10px 15px",
                fontSize: "14px",
                borderRadius: "5px",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
                marginRight: "5px",
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
      <div style={{ marginTop:"20px"}}>
        <Footer />
      </div>
</div>
);
};
export default Index;