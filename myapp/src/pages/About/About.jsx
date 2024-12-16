import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About ShelfSeek</h2>
            <p className='fs-17'>Welcome to ShelfSeek, where discovering 
                books is as easy as a quick search. Looking for a 
                specific title, an inspiring author, or a topic that sparks
                 your curiosity? Just type it in, and we’ll show you a list
                  of books tailored to what you’re looking for. It’s your 
                  simple, stress-free way to explore the world of literature.</p>
            <p className='fs-17'>At ShelfSeek, we make it all about you and 
                your reading journey. While you can’t read books here, 
                we’re here to point you in the right direction—whether 
                you’re building your reading list or just browsing for ideas. 
                From timeless classics to fresh releases, ShelfSeek helps 
                you uncover books that fit your style.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
