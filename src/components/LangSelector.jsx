import { useEffect, useRef, useState } from "react";
import { AngleRightIcon } from "../constants/Icons";
import CustomBtn from "./CustomBtn";
import { languages } from "../constants/Data";

const LangSelector = () => {
    // State to control the visibility of the dropdown
    const [showDropdown, setShowDropdown] = useState(false);
    // State to track the selected language
    const [selectedLanguage, setSelectedLanguage] = useState('English');

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

    // Function to handle language selection
    const handleLanguageSelect = (lang) => {
        setSelectedLanguage(lang.value);
        setShowDropdown(false);
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
            <CustomBtn
                btnType='button'
                classProps={" md:w-32 px-[12px] "}
                label={selectedLanguage}
                backgroundStyle={"bg-transparent hover:bg-skin-fill-tertiary"}
                textStyle={"font-medium text-skin-muted text-left"}
                borderStyle={'border-0 sm:border'}
                focusStyle={'focus:ring-0 md:focus:ring-4 focus:ring-skin-focus'}
                disabled={false}
                onBtnClick={toggleDropdown}
            >
                <AngleRightIcon
                    className={`ml-2 transition-transform duration-700 ease-in-out ${showDropdown ? 'rotate-90' : 'rotate-0'}`}
                />
            </CustomBtn>

            <div className={`md:absolute md:left-0 md:right-0 md:mt-2 ${showDropdown ? 'block' : 'hidden'}`}>
                <ul className="z-20 md:mt-6 p-2 w-full md:w-fit md:bg-skin-fill-secondary md:border md:border-skin-border md:rounded-md md:shadow-md">
                    {languages.map((lang, index) => (
                        <li key={index}
                            className="py-2 pl-3 pr-4 font-medium text-skin-muted hover:text-skin-inverted2 dark:hover:text-skin-inverted 
                            rounded-md hover:bg-skin-fill-tertiary"
                        >
                            <button onClick={() => handleLanguageSelect(lang)} className="flex items-center w-full space-x-2">
                                <div>({lang.flag})</div>
                                <div>{lang.value}</div>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default LangSelector;
