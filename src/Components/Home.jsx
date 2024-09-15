import React from 'react'
import Header from './Header'
import courses from './coursesData';  // Correct import
import CourseCard from './CourseCard ';
import ReviewCarousel from './ReviewCarousel';
import HeroSection from './HeroSection';

const Home = () => {
  return (
    <>
    {/* <Header/> */}
    
    {/* <h1 className='my-3 text-center'>Home page</h1> */}
    {/* <div className="container my-4">
      <h1 className="text-center">Japanese Courses</h1>
      <div className="row">
        {courses.map(course => (
          <div className="col-md-3" key={course.id}>
            <CourseCard 
              title={course.title} 
              description={course.description} 
              price={course.price} 
              image={course.image} 
            />
          </div>
        ))}
      </div>
    </div> */}


<div className="container my-4">
      <h1 className="text-center">Japanese Courses</h1>
      <div className="row">
        {courses.map(course => (
          <div className="col-md-3" key={course.id}>
            <CourseCard 
              title={course.title} 
              description={course.description} 
              price={course.price} 
              image={`/images/${course.image}`} // Ensure this path is correct
            />
          </div>
        ))}
      </div>
    </div>
        {/* <HeroSection/> */}
    <ReviewCarousel />
    
    </>
  )
}

export default Home