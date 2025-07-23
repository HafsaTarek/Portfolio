import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = (_) => {
  return (
    <section className="hero-section d-flex align-items-center" id="hero">
      <div className="container">
        <div className="row align-items-center">
          {/* Title/header Col */}
          <div className="col-md-6">
            <h1 className="hero-title">
              Hi, I’m <span className="highlighted">Hafsa</span>
              <br />
              Front-End Developer
            </h1>
            <p className="hero-subtitle">
              I love crafting beautiful and functional websites with React,
              HTML, CSS & UI/UX magic.
            </p>
            <Link to="/projects" className="btn btn-primary mt-4 fw-bold ">
              View My Work
            </Link>
          </div>

          {/* Image Col */}
          <div className="col-md-6 text-center mt-4">
            <img
              src="/Images/WhatsApp Image 2025-07-18 at 23.55.50_15524148.jpg"
              alt="Hafsa Illustration"
              className="img-fluid hero-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
