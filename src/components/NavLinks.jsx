/* eslint-disable react/prop-types */

import { Link } from "react-scroll"

const NavLinks = ({ data, toggleNavLinks }) => {
  return (
    <ul 
        className=" flex flex-col lg:flex-row mt-2 lg:mt-0 lg:space-x-8 "
    >
        {data.map((link, index) => (
            <li key={index}
                className={`font-medium text-skin-icon dark:hover:text-skin-inverted lg:hover:text-skin-inverted2 rounded-lg
                hover:bg-skin-fill-tertiary
                ${index >= data.length - 2 ? 'lg:hidden xl:block' : ''}`}
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
                    onClick={toggleNavLinks}
                >
                    {link.text}
                </Link>
            </li>
        ))}
    </ul>
  )
}

export default NavLinks