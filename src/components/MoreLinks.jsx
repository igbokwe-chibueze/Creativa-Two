/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { MoreIcon } from "../constants/Icons";
import { Link } from "react-scroll";

const MoreLinks = ({ data }) => {
    // State to control the visibility of the dropdown
    const [showDropdown, setShowDropdown] = useState(false);

    // Ref to the div element to handle clicks outside the dropdown
    const Ref = useRef(null);

    // Function to toggle the visibility of the dropdown
    const toggleDropdown = () => {
        setShowDropdown(prevShowDropdown => !prevShowDropdown);
    };

    // Function to handle clicks outside the dropdown
    const handleClickOutside = (event) => {
        if (Ref.current && !Ref.current.contains(event.target)) {
            setShowDropdown(false); // Hide the dropdown
        }
    };

    // Use effect hook to add and clean up event listeners
    useEffect(() => {
        // Add event listener for clicks
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            // Remove event listener when the component is unmounted
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);
  return (
    <div className="relative" ref={Ref}>
        <button
            className="btn-menu"
            onClick={toggleDropdown}
        >
            <MoreIcon className={`transition-transform duration-700 ease-in-out ${showDropdown ? 'rotate-90' : 'rotate-0'}`}/>       
        </button>

        {/* Dropdown */}
        <div className={`absolute -left-56 w-60 ${showDropdown ? 'block' : 'hidden'}`}>
            <ul className="z-20 mt-6 p-2 w-full bg-skin-fill-secondary border border-skin-border rounded-md shadow-md">
                {data.slice(-2).map((link, index) => (
                    <li key={index}
                        className=" font-medium text-skin-icon dark:hover:text-skin-inverted lg:hover:text-skin-inverted2 rounded-lg
                        hover:bg-skin-fill-tertiary "
                    >
                        <Link
                            to={link.href}
                            smooth={true}
                            hashSpy={true}
                            duration={500}
                            offset={-80}
                            spy={true} //Make Link selected when scroll is at its targets position
                            isDynamic={true}
                            activeClass="text-gray-100 lg:text-blue-700 dark:lg:text-gray-100 rounded-lg 
                            bg-skin-fill-accent lg:bg-transparent hover:bg-skin-fill-accent-hover lg:hover:bg-transparent"
        
                            className="cursor-pointer block py-2 pl-3 pr-4"
                            onClick={toggleDropdown}
                        >
                            {link.text}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>  
    </div>
  )
}

export default MoreLinks