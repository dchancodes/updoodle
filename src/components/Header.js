import React from 'react';
// import components
import Socials from './Socials';
import Logo from '../img/updoodle/updoodle_logo_yellow.png';
import MobileNav from './MobileNav';

// import link
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='fixed w-full
    px-[30px] lg:px-[100px] z-30 h-[100px]
    lg:h-[140px] flex item-center'>
      <div className='flex flex-col lg:flex-row
      lg:items-center w-full justify-between'>
        {/* Logo */}
        <Link to={'/'} className='max-w-[100px] mt-5'>
          <img src={Logo} alt=''/>
        </Link>
        {/* Nav that is hidden but shown on desktop */}
        <nav className='hidden xl:flex gap-x-12 
        font-semibold'>
          <Link to={'/'} 
          className='text-[#696c6d] hover:text-primary transition'>Home</Link>
          <Link to={'/about'} 
          className='text-[#696c6d] hover:text-primary transition'>About</Link>
          <Link to={'/portfolio'} 
          className='text-[#696c6d] hover:text-primary transition'>Portfolio</Link>
          <Link to={'/contact'} 
          className='text-[#696c6d] hover:text-primary transition'>Contact</Link>
        </nav>
      </div>
      {/* Socials */}
      <Socials />
      {/* Mobile Nav */}
      <MobileNav />
    </header>
  );
};

export default Header;
