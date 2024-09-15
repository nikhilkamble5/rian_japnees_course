// import React from 'react'
// import { useNavigate } from 'react-router-dom'
// const About = () => {
  
//   const nav=useNavigate();
//   const GoHome=()=>{
//     nav('/')
//   }

//   return (
//     <>
//    <center>
//    <h1 className='my-3 tetx-center'>About Component</h1>
//       <button className='btn btn-danger px4 mx-4' onClick={()=>GoHome()}>Home page</button>
//       <button className='btn btn-primary px4 mx-4'v onClick={()=>nav('/contact')}>Contatc page</button>

//    </center>
//     </>
//   )
// }

// export default About

// src/Components/About.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import { useNavigate } from 'react-router-dom'

const About = () => {
  
 const nav=useNavigate();
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">About Us</h1>

      {/* Partnership Announcement Section */}
      <section className="mb-5">
        <h2 className="text-primary mb-4">Rian.io Partners with LipDub AI</h2>
        <p className="lead">
          Together, Rian and LipDub will swiftly dub content while preserving the emotional impact and subtle cultural cues of the original thanks to LipDub's cutting-edge lip-sync technology.
        </p>
      </section>

      {/* News Section */}
      <section className="mb-5">
        <h2 className="text-primary mb-4">Kartoon Studios News</h2>
        <div className="card border-primary mb-3">
          <div className="card-header bg-primary text-light">Rian.io Partners with LipDub AI</div>
          <div className="card-body">
            <h5 className="card-title">Enhancing AI-Driven Dubbing and Video Localization for Global Brands</h5>
            <p className="card-text">
              <strong>[Pune, Maharashtra] – [08-07-24] –</strong> Rian AI, a company offering cutting-edge AI-powered dubbing and content localization solutions, today, announced a strategic partnership with LipDub AI, a leader in AI-based lip-syncing technology. This collaboration will empower LipDub AI to leverage Rian’s advanced and meritorious AI technology to supply and cater to the growing demand for video localization, personalization, and transcreation services.
            </p>
            <p className="card-text">
              LipDub AI’s advanced lip-syncing capabilities, coupled with Rian’s expertise in human-assisted translation will produce and deliver unparalleled video localization experiences for corporations aiming to penetrate foreign and regional markets. The incorporation of this technology guarantees precise translations through AI dubbing, which provides voice tonality and style matching. Additionally, it also creates realistic lip movements, which enhances the connection with audiences on a global scale.
            </p>
          </div>
          <div className="card-footer text-muted">
            <blockquote className="blockquote mb-0">
              <p>"At Rian, we are constantly seeking ways to push the boundaries of localization technology."</p>
              <footer className="blockquote-footer">Anandsagar Shiralkar, CEO & Founder at Rian.io</footer>
            </blockquote>
            <blockquote className="blockquote mb-0">
              <p>"LipDub AI's technology is a perfect complement to our existing solutions of AI dubbing, allowing us to offer a truly seamless and immersive experience for global brands in almost all including the Media industry."</p>
              <footer className="blockquote-footer">Nishant Jadhav, Co-Founder and Chief Growth Officer</footer>
            </blockquote>
            <blockquote className="blockquote mb-0">
              <p>"We are thrilled to partner with Rian.io, a leader in the localization industry. By combining our solutions, we can empower businesses to connect with international audiences on a deeper level through high-quality, culturally relevant video content."</p>
              <footer className="blockquote-footer">Andrew More, VP of Sales at LipDub AI</footer>
            </blockquote>
          </div>
        </div>
        <p>This significant, strategic collaboration marks a major achievement in the field of video localization. Through the combined use of AI technology, Rian and LipDub AI are addressing the need for affordable and adaptable solutions, allowing international brands to access new regional and foreign markets, and enhance the reach of their content.</p>
      </section>

      {/* Call to Action Section */}
      <section className="text-center mb-5">
        <h2 className="mb-4">Book a Demo to Experience the Magic Firsthand</h2>
        <button className="btn btn-primary btn-lg" onClick={()=>nav('/service')}>Book A Demo</button>
      </section>

      {/* Footer Section */}
      <footer className="text-center mt-5">
        <p>Follow us on LinkedIn</p>
        <p>Email: <a href="mailto:sales@rian.io" className="text-decoration-none">sales@rian.io</a></p>
        <p>&copy; {new Date().getFullYear()} Rikaian Technology Pvt. Ltd.</p>
      </footer>
    </div>
  );
};

export default About;
