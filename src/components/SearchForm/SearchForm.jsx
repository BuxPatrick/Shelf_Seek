import React, {useRef, useEffect, useState} from 'react';
import {FaSearch} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context.';
import "./SearchForm.css";

const SearchForm = () => {
  const {setSearchTerm, setResultTitle, loading} = useGlobalContext();
  const searchText = useRef('');
  const navigate = useNavigate();
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => searchText.current.focus(), []);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSearching(true);
    let tempSearchTerm = searchText.current.value.trim();
    if((tempSearchTerm.replace(/[^\w\s]/gi,"")).length === 0){
      setSearchTerm("the lost world");
      setResultTitle("Please Enter Something ...");
    } else {
      setSearchTerm(tempSearchTerm);
    }
    navigate("/book");
    setIsSearching(false);
  };

  return (
    <div className='search-form'>
      <div className='container'>
        <div className='search-form-content'>
          <form className='search-form' onSubmit={handleSubmit}>
            <div className='search-form-elem flex flex-sb bg-white'>
              <input 
                type="text" 
                className='form-control' 
                placeholder='Search by title, author, or subject...' 
                ref={searchText}
                disabled={loading || isSearching}
              />
              <button 
                type="submit" 
                className='flex flex-c' 
                disabled={loading || isSearching}
              >
                <FaSearch className={`text-purple ${loading || isSearching ? 'opacity-50' : ''}`} size={32} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SearchForm