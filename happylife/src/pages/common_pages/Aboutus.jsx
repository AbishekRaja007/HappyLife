import React from 'react';
import a from "../../assets/images/a.jpg";

const AboutUsPage = () => {
  return (
    <div className="container mt-5 py-5 p-3">
        <div className="img1">
        <img src= {a} alt="Wedding Celebration" />
            </div>
      <h2 className="text-center text-uppercase fw-bold mb-4">About Us</h2>
      <div className="row">
        <div className="col-md-6">
          <img src="https://via.placeholder.com/500" alt="About Us" className="img-fluid rounded shadow-lg" />
        </div>
        <div className="col-md-6">
          <div className="card p-4 rounded shadow-lg">
            <h4 className="fw-bold mb-3">Who We Are</h4>
            <p>We are a dedicated team of professionals committed to delivering the best services and experiences. Our goal is to create impactful solutions that make a difference in people's lives.</p>
            <h4 className="fw-bold mb-3">Our Mission</h4>
            <p>Our mission is to provide high-quality products and services that exceed customer expectations. We believe in innovation, integrity, and customer satisfaction.</p>
            <h4 className="fw-bold mb-3">Our Vision</h4>
            <p>We envision a world where technology and creativity come together to solve real-world challenges, empowering individuals and businesses alike.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
