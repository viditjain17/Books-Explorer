import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";
import aImg from "../../images/library-img.jpg";


const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>Discover Your Next Read !</h2><br />
                <p className='header-text fs-18 fw-3'>--------------------------------------------------</p>
                <img className='imga' src={aImg} alt="" />
                <br/>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header