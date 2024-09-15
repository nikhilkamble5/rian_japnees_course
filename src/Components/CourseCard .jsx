// import React from 'react';
// import './CourseCard.css';
// const CourseCard = ({ title, description, price, image }) => {
//   return (
//     <div className="course-card mx-2 my-3" style={{ width: '18rem' }}>
//     <img src={image} className="course-image" alt={title} />
//     <div className="course-info">
//       <h5 className="course-title">{title}</h5>
//       <p className="course-description">{description}</p>
//       <p className="course-price"><strong>{price}</strong></p>
//       <a href="#" className="btn btn-primary">Enroll Now</a>
//     </div>
//   </div>
  
//   );
// };

// export default CourseCard;


// const CourseCard = ({ title, description, price }) => {
//   return (
//     <div className="card mx-2 my-3" style={{ width: '18rem' }}>
//     {/* Image */}
//     <img src={image} className="card-img-top" alt={title} />
    
//     {/* Card body */}
//     <div className="card-body">
//       {/* Title */}
//       <h5 className="card-title">{title}</h5>
      
//       {/* Description */}
//       <p className="card-text">{description}</p>
      
//       {/* Price */}
//       <p className="card-text"><strong>{price}</strong></p>
      
//       {/* Button */}
//       <a href="#" className="btn btn-primary">Enroll Now</a>
//     </div>
//   </div>
//   );
// };

// export default CourseCard;

//************** */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import './CourseCard.css'; // Import custom CSS

const CourseCard = ({ title, description, price, image }) => {
  return (
    <div className="card mx-2 my-3" style={{ width: '18rem' }}>
    {/* Use Bootstrap's `img-fluid` class and custom class for fixed size */}
    <img src={image} className="card-img-top img-fluid course-image" alt={title} />
    
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
      <p className="card-text"><strong>{price}</strong></p>
      <a href="#" className="btn btn-primary">Enroll Now</a>
    </div>
  </div>
  );
};

export default CourseCard;
