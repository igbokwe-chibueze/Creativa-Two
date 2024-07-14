import { useEffect, useRef, useState } from "react";
import { creativaLogo } from "../assets/pngs";
import ThemeSwitcher from "./ThemeSwitcher";
import { MenuIcon } from "../constants/Icons";
import { navLinks } from "../constants/Data";
import NavLinks from "./NavLinks";
import LangSelector from "./LangSelector";
import MoreLinks from "./MoreLinks";


const Navbar = () => {

  // State to control the visibility of the navigation links
  const [showNavLinks, setShowNavLinks] = useState(false);

  // Ref to the nav element to handle clicks outside the navigation bar
  const navRef = useRef(null);

  // Function to toggle the visibility of the navigation links
  const toggleNavLinks = () => {
    setShowNavLinks(prevShowNavLinks => !prevShowNavLinks);
  };

  // Function to handle clicks outside the navigation bar or pressing the Escape key
  const handleClickOutsideOrEscape = (event) => {
    // Check if the click is outside the nav element or if the Escape key is pressed
    if ((navRef.current && !navRef.current.contains(event.target)) || event.key === 'Escape') {
    setShowNavLinks(false); // Hide the navigation links
    }
  };

  // Use effect hook to add and clean up event listeners
  useEffect(() => {
    // Add event listeners for clicks and keydown events
    document.addEventListener('click', handleClickOutsideOrEscape, true);
    document.addEventListener('keydown', handleClickOutsideOrEscape, true);
    return () => {
      // Remove event listeners when the component is unmounted
      document.removeEventListener('click', handleClickOutsideOrEscape, true);
      document.removeEventListener('keydown', handleClickOutsideOrEscape, true);
    };
  }, []);
    
  return (
    <nav ref={navRef} className=" fixed top-0 right-0 left-0 z-30 px-4 lg:px-6 py-2.5 bg-skin-fill-secondary border-b border-skin-border ">
      <div className="flex flex-wrap justify-between items-center max-w-screen-xl mx-auto">

        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src={creativaLogo} className="h-12 sm:h-16 mr-3" alt="Creativa Logo" />
          <span className="text-xl font-semibold text-skin-main self-center whitespace-nowrap">Creativa-2</span>
        </a>

        {/* ThemeSwitcher and Menu Btn */}
        <div className="flex justify-center items-center space-x-3 lg:order-2 ">

          <div className="hidden md:flex space-x-3">
            <LangSelector/>
          </div>

          <ThemeSwitcher/>

          <button type="button" 
            onClick={toggleNavLinks} 
            className="inline-flex lg:hidden items-center justify-center p-2 w-10 h-10 btn-menu "
          >
            <MenuIcon/>
          </button>
        </div>

        {/* Links */}
        <div className={`lg:flex justify-between items-center w-full mt-4 lg:mt-0 lg:w-auto lg:order-1 ${showNavLinks ? 'block' : 'hidden'}`}>
          
          <NavLinks data={navLinks} toggleNavLinks={toggleNavLinks}/>

          <div className="hidden lg:block ml-3">
            <MoreLinks data={navLinks}/>
          </div>

          <div className=" md:hidden space-x-3">
            <LangSelector/>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar