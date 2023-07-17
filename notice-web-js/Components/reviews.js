import React, { useState } from 'react';

const reviewsData = [
  {
    title: 'Review 1',
    content: 'This is the first review.',
  },
  {
    title: 'Review 2',
    content: 'This is the second review.',
  },
  {
    title: 'Review 3',
    content: 'This is the third review.',
  },
];

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const review = reviewsData[currentReview];

  const handleNextReview = () => {
    setCurrentReview((prevReview) => (prevReview + 1) % reviewsData.length);
  };

  return (
    <div className='reviews' style={{ width: "400px", alignItems: "center", marginLeft:"-900px", marginTop:"50px",marginBottom:"50px"}}>
      {reviewsData.map((item, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            opacity: index === currentReview ? 1 : 0.3,
            transform: `translateX(${(index - currentReview) * 30}px)`,
            transition: "transform 0.3s, opacity 0.3s",
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
          }}
        >
          <h2 style={{ marginBottom: "10px" }}>{item.title}</h2>
          <p style={{ lineHeight: "1.4" }}>{item.content}</p>
        </div>
      ))}
      <button
        onClick={handleNextReview}
        style={{
          marginTop: "20px",
          padding: "8px 16px",
          fontSize: "14px",
          backgroundColor: "#4caf50",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          transition: "background-color 0.3s",
        }}
      >
        Next Review
      </button>
    </div>
  );
};

export default Reviews;
