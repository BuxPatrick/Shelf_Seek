import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
    return (
      <div className='holder'>
          <header className='header'>
              <Navbar />
              <div className='header-content flex flex-c text-center text-white'>
                  <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
                  <p className='header-text fs-18 fw-3'>Welcome to ShelfSeek! Looking for your next 
                    great read? Just search for any topic, title, or author, and we’ll show you a 
                    list of books tailored to your interests. Whether you’re exploring new genres 
                    or searching for a specific book, ShelfSeek makes it easy to discover the 
                    perfect match for your reading journey.</p><SearchForm />
              </div>
          </header>
      </div>
    )
  }
  
  export default Header