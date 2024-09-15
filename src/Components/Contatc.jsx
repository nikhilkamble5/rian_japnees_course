// import React from 'react'
// import { useNavigate } from 'react-router-dom'

// const Contatc = () => {

//   const nav=useNavigate();

//   return (
//     <>
//     <center>

//     <h1 className='my-3 text-center'>Contatc</h1>
//       <button className='btn btn-danger' onClick={()=>nav('/about')}>About</button>
//     </center>
//     </>
//   )
// }

// export default Contatc


// src/Components/Contact.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
const Contatc = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Contact Us</h1>

      {/* Contact Form Section */}
      <section className="mb-5">
        <h2 className="text-primary mb-4">Get in Touch</h2>
        <form>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input type="text" className="form-control" id="name" placeholder="John Doe" required />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input type="email" className="form-control" id="email" placeholder="you@example.com" required />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="subject" className="form-label">Subject</label>
            <input type="text" className="form-control" id="subject" placeholder="Subject of your message" required />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" rows="5" placeholder="Your message" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </section>

      {/* Contact Information Section */}
      <section className="mb-5">
        <h2 className="text-primary mb-4">Our Contact Information</h2>
        <div className="row">
          <div className="col-md-6 mb-3">
            <h5 className="mb-2">Office Locations</h5>
            <p><strong>India Office:</strong><br />
              Rikaian Technology Pvt. Ltd.<br />
              Office No. 3, S. No. 846,<br />
              Near Marathwada College,<br />
              Shivajinagar, Pune 411004.
            </p>
            <p><strong>Japan Office:</strong><br />
              Rikaian Technology Pvt. Ltd.<br />
              Fabbit Kyobashi 2F,<br />
              1-1-5 Central Bldg Chuo-Ku,<br />
              Tokyo 104-0031
            </p>
          </div>
          <div className="col-md-6 mb-3">
            <h5 className="mb-2">Contact Details</h5>
            <p><strong>Email:</strong> <a href="mailto:sales@rian.io" className="text-decoration-none">sales@rian.io</a></p>
            <p><strong>Phone:</strong> +91 89561 26959</p>
            <p><strong>Follow Us:</strong></p>
            <a href="https://www.facebook.com/RianTranslations/" className="btn btn-outline-light me-2" aria-label="Facebook">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://twitter.com" className="btn btn-outline-light me-2" aria-label="Twitter">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="https://www.instagram.com/rikaian_technology/" className="btn btn-outline-light me-2" aria-label="Instagram">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/company/rian-io/" className="btn btn-outline-light" aria-label="LinkedIn">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contatc;
