// import React from 'react';

// const ReviewCard = ({ name, review, rating }) => {
//   return (
//     <div className="card" style={{ width: '100%' }}>
//       <div className="card-body">
//         <h5 className="card-title">{name}</h5>
//         <p className="card-text">{review}</p>
//         <p className="card-text"><strong>Rating: {rating}</strong></p>
//       </div>
//     </div>
//   );
// };

// export default ReviewCard;



// src/Components/ReviewCard.jsx
import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Ensure this path is correct

const ReviewCard = ({ name, review, rating }) => {
  return (
    <div className="card" style={{ width: '18rem', margin: '10px', padding: '10px', overflow: 'hidden' }}>
      <div className="card-body">
        <h5 className="card-title d-flex align-items-center">
          <i className="bi bi-person-circle" style={{ marginRight: '10px' }}></i>
          {name}
        </h5>
        <p className="card-text" style={{ overflowWrap: 'break-word', marginBottom: '0.5rem' }}>{review}</p>
        <p className="card-text">
          <strong>Rating: {rating}</strong>
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
