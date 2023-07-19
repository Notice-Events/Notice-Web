import React, { useState } from 'react';

const reviewsData = [
  {
    title: 'LOREM IPSUM',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
  },
  {
    title: 'LOREM IPSUM',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
  },
  {
    title: 'LOREM IPSUM',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
  },
];

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const review = reviewsData[currentReview];

  const handleNextReview = () => {
    setCurrentReview((prevReview) => (prevReview + 1) % reviewsData.length);
  };

  const handlePrevReview = () => {
    setCurrentReview((prevReview) => (prevReview - 1 + reviewsData.length) % reviewsData.length);
  };

  return (
    <div className='reviews-container' style={{ width: "600px", margin: "50px auto", display: "flex", justifyContent: "center", alignItems: "center",marginTop:"80px" }}>
      <button
        onClick={handlePrevReview}
        style={{
          padding: "8px 10px",
          fontSize: "12px",
          backgroundColor: "black",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          transition: "background-color 0.3s",
          position: "absolute",
          left: "20px", 
        }}
      >
        Prev
      </button>
      {reviewsData.map((item, index) => {
        const distance = Math.abs(index - currentReview);
        const opacity = distance === 0 ? 1 : 0.5; 

        return (
          <div
            key={index}
            style={{
              width: "1000px", 
              margin: "0 10px", 
              opacity: opacity,
              transform: `rotateY(${(360 / reviewsData.length) * (index - currentReview)}deg) translateZ(150px)`,
              transformOrigin: "center",
              transition: "transform 0.3s, opacity 0.3s",
              backgroundColor: "grey",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
              zIndex: distance === 0 ? 1 : 0, 
              position: index === currentReview ? "relative" : "absolute", 
              height:"190px",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-30px", 
                left: "50%",
                transform: "translateX(-50%)",
                width: "60px",
                height: "60px",
                backgroundColor: "rgba(0, 0, 0, 0.5)", 
                borderRadius: "50%",
                alignItems:"center"
              }}
            ></div>
            <div style={{ padding:"20px"}}>
                <h2 style={{ marginBottom: "10px",marginLeft:"36%"}}>{item.title}</h2>
              <p style={{ lineHeight: "1.4" }}>{item.content}</p>
            </div>
          </div>
        );
      })}
      <button
        onClick={handleNextReview}
        style={{
          padding: "8px 10px", 
          fontSize: "12px", 
          backgroundColor: "black",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          transition: "background-color 0.3s",
          position: "absolute", 
          right: "20px", 
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Reviews;
