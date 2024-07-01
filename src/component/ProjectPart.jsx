import React from "react";
import "../styles/Project.css";
import about1 from "../assets/about1.svg";

const ProjectView = () => {
  return (
    <div className="project-view-container">
      <h1>
        Our <span>Project</span>
      </h1>
      <p>Our organization strives to create a world where people with autism can thrive and reach their fullest potential.</p>
      <div className="project-view">
        <div className="project-card">
        <img src={about1} alt="project image" />
          <div className="project-content">
            <div className="date-donasi">
            <p>22 June 2024</p>
              <h5>Musanze, North</h5>
            </div>
            <div className="project-description">
              <h2>Kigali Autism Forum</h2>
              <p>
              We are dedicated to fostering a supportive and inclusive environment for individuals with autism. <a href="#">Read More</a>
              </p>
              <button>Donate Now</button>
            </div>
          </div>
        </div>
        <div className="project-card">
        <img src={about1} alt="project image" />
          <div className="project-content">
            <div className="date-donasi">
            <p>22 June 2024</p>
              <h5>Muhanga, South</h5>
            </div>
            <div className="project-description">
              <h2>Kigali Autism Forum</h2>
              <p>
              We are dedicated to fostering a supportive and inclusive environment for individuals with autism. <a href="#">Read More</a>
              </p>
              <button>Donate Now</button>
            </div>
          </div>
        </div>
        <div className="project-card">
        <img src={about1} alt="project image" />
          <div className="project-content">
            <div className="date-donasi">
            <p>22 June 2024</p>
              <h5>Kigali, Gasanze</h5>
            </div>
            <div className="project-description">
              <h2>Kigali Autism Forum</h2>
              <p>
              We are dedicated to fostering a supportive and inclusive environment for individuals with autism. <a href="#">Read More</a>
              </p>
              <button>Donate Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectView;