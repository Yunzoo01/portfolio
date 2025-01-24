import React from "react";
import "./Home.css";
import portraitImage from "../../assets/portrait.jpg";

const Home: React.FC = () => {
  return (
    <section id="home" className="hero-section">
      <div className="section-content">
        <p className="greeting">👋 Hi, I am Yunju Jo (Yun)!</p>
        <h2 className="role">Web Developer</h2>
        <p className="description">
          I am a passionate developer who solves problems creatively.
        </p>
        <button className="hire-me-button">Hire Me</button>
      </div>

      {/* 이미지 섹션 */}
      <div className="image-container">
        <img
          src={portraitImage}
          alt="Profile"
          className="profile-image"
        />
      </div>
      
    </section>
  );
};

export default Home;