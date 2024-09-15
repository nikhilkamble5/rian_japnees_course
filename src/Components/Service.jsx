// import React from 'react'
// import HeroSection from './HeroSection'

// const Service = () => {
//   return (
//     <>
//             <HeroSection/>

            

//     </>
//   )
// }

// export default Service


// src/Components/Service.js
import React from 'react';
import HeroSection from './HeroSection';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const Service = () => {
  return (
    <>
      <HeroSection />

      {/* YouTube Video Section */}
      <section className="container my-5">
        <h2 className="text-center mb-4">AI Dubbing video</h2>
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <div className="ratio ratio-16x9">
            <iframe width="864" height="486" src="https://www.youtube.com/embed/pt4V9_hLw_A" title="Live Action Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default Service;
