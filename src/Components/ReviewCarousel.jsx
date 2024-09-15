// // src/Components/ReviewCarousel.jsx
// import React from 'react';
// import ReviewCard from './ReviewCard';

// // Sample review data
// const reviews = [
//   {
//     id: 1,
//     name: 'John Doe',
//     review: 'This course was fantastic! I learned so much and feel confident using Japanese in daily conversations.',
//     rating: 5,
//   },
//   {
//     id: 2,
//     name: 'Jane Smith',
//     review: 'Great course with clear explanations. The practice exercises were very helpful.',
//     rating: 4,
//   },
//   {
//     id: 3,
//     name: 'Alice Johnson',
//     review: 'The course content was good, but I found the pace a bit fast. Overall, a good experience.',
//     rating: 3,
//   },
//   // Add more reviews as needed
// ];

// const ReviewCarousel = () => {
//   return (
//     <div className="container my-4">
//       <h2 className="text-center mb-4">What Our Students Say</h2>
//       <div className="d-flex overflow-auto">
//         {reviews.map((review) => (
//           <ReviewCard
//             key={review.id}
//             name={review.name}
//             review={review.review}
//             rating={review.rating}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ReviewCarousel;

// src/Components/ReviewCarousel.jsx


//***** 
import React from 'react';
import ReviewCard from './ReviewCard';
import reviews from './reviewsData.json'; // Ensure this path is correct

const ReviewCarousel = () => {
  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">What Our Students Say</h2>
      <div className="d-flex flex-wrap justify-content-center">
        {reviews.map((review) => (
          <div key={review.id} className="d-inline-block" style={{ margin: '10px' }}>
            <ReviewCard
              name={review.name}
              review={review.review}
              rating={review.rating}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewCarousel;
//***** 


