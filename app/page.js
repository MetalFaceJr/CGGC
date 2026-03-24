"use client"; // This tells Next.js this page uses interactive elements

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  // React State to handle opening and closing the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleTrialClick = () => {
    alert("Thanks for your interest! Call us at (555) 123-4567 or visit us in Calhoun to start your free week of training.");
  };

  return (
    <>
      {/* Navigation */}
      <header>
        <div className="logo">Calhoun Grappling</div>
        <nav>
          {/* We dynamically apply a style if the menu is open on mobile */}
          <ul className="nav-links" style={{ display: isMenuOpen ? 'flex' : '' }}>
            <li><Link href="#about">About Us</Link></li>
            <li><Link href="#programs">Programs</Link></li>
            <li><Link href="#schedule">Schedule</Link></li>
            <li><Link href="#contact" className="btn-outline">Join Now</Link></li>
          </ul>
        </nav>
        
        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero">
        <div className="hero-content">
          <h1>Build Strength. Learn Technique. Earn Respect.</h1>
          <p>Premier Submission Grappling and Brazilian Jiu-Jitsu right here in Calhoun, Georgia. All experience levels are welcome.</p>
          <button className="btn-primary" onClick={handleTrialClick}>
            Start Your Free Trial
          </button>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs">
        <h2>Our Programs</h2>
        <div className="card-container">
          <div className="card">
            <h3>Fundamentals (Gi)</h3>
            <p>Learn the foundational positions, escapes, and submissions of Brazilian Jiu-Jitsu in a safe, controlled environment.</p>
          </div>
          <div className="card">
            <h3>Submission Grappling (No-Gi)</h3>
            <p>Fast-paced wrestling and submission hunting without the traditional uniform. Perfect for MMA enthusiasts.</p>
          </div>
          <div className="card">
            <h3>Youth Grappling</h3>
            <p>Build confidence, discipline, and physical fitness in our specialized kids and teens martial arts classes.</p>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact">
        <div className="footer-info">
          <h2>Calhoun GA Grappling Club</h2>
          <p>📍 Calhoun, GA 30701</p>
          <p>📧 info@calhoungagrapplingclub.com</p>
        </div>
        <p className="copyright">&copy; 2026 Calhoun GA Grappling Club. All rights reserved.</p>
      </footer>
    </>
  );
}
