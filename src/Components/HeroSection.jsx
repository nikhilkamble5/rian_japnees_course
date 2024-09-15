// HeroSection.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="d-flex align-items-center justify-content-center text-center text-light bg-primary py-5 vh-100">
      <div className="container">
        <h1 className="display-4 fw-bold mb-4">
          Dubbing & Localization <br /> AI Powered with Human Touch
        </h1>
        <p className="lead mb-4">
          At Rian, we believe exceptional content deserves a global audience. Our AI-driven solutions, combined with human expertise, ensure your videos are localized with accuracy and cultural sensitivity.
        </p>
        <button className="btn btn-light btn-lg" onClick={() => navigate('/service')}>
          Book A Demo
        </button>
        
      </div>
    </section>
  );
};

export default HeroSection;
