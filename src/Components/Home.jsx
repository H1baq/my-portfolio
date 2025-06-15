import React from 'react'
import './Home.css'
import heroImg from '../assets/hero2.jpg';

const Home = () => {
  return (
    <section className="home" id='home' style={{ backgroundImage: `url(${heroImg})` }}>
      <div className="overlay">
         <div className="hero">
        <h1>Hi, I'm HIBAQ</h1>
        <p>I craft aesthetic digital designs for dreamers, brands, and small businesses.</p>
        <a href='#projects' className="hero-btn">View My Work</a>
      </div>
      </div>
    </section>
  );
}

export default Home
