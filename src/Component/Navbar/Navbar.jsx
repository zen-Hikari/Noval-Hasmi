import { useState, useEffect } from 'react';
import './Navbar.css';
import Logo from './assets/logo.png'

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [isFixed, setIsFixed] = useState(false); 
  const [isMenuVisible, setIsMenuVisible] = useState(false); 

  const toggleHamburger = () => {
    setIsActive(!isActive);
    setIsMenuVisible(!isMenuVisible); 
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      const fixedNav = header.offsetTop;

      if (window.pageYOffset > fixedNav) {
        setIsFixed(true); 
      } else {
        setIsFixed(false); 
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`bg-transparent absolute top-0 left-0 w-full flex items-center z-10 ${isFixed ? 'navbar-fixed' : ''}`}
    >
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className=" px-4 flex">
            <img src={Logo} width="70px" alt="" className='mr-3' />
            <a href="#Home" className="font-bold text-ungu text-lg block py-6">
              Noval Hasmi
            </a>
          </div>
          <div className="flex items-center px-4">
            <button
              id="hamburger"
              name="hamburger"
              type="button"
              className={`absolute lg:hidden  right-4 ${isActive ? 'hamburger-active' : ''}`}
              onClick={toggleHamburger}
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>

            <nav id="nav-menu" className={`${isMenuVisible ? '' : 'hidden'} lg:static lg:bg-transparent lg:max-w-full lg:block absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:shadow-none lg:rounded-none`}>
              <ul className='block lg:flex'>
                <li className='group'>
                  <a href="#Home" className='text-base font-semibold text-dark py-2 mx-8
                  flex group-hover:text-ungu'>HOME</a>
                </li>
                <li className='group'>
                  <a href="#about" className='text-base font-semibold text-dark py-2 mx-8
                  flex group-hover:text-ungu'>ABOUT ME</a>
                </li>
                <li className='group'>
                  <a href="#Project" className='text-base font-semibold text-dark py-2 mx-8
                  flex group-hover:text-ungu'>PROJECT</a>
                </li>
                <li className='group'>
                  <a href="#Client" className='text-base font-semibold text-dark py-2  mx-8
                  flex group-hover:text-ungu '>CLIENTS</a>
                </li>
                <li className='group'>
                  <a href="#Blog" className='text-base font-semibold text-dark py-2 mx-8
                  flex group-hover:text-ungu'>BLOG</a>
                </li>
                <li className='group'>
                  <a href="#Contact" className='text-base font-semibold text-dark py-2 mx-8
                  flex group-hover:text-ungu'>CONTACT</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
