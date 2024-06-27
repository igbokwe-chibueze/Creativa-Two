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
                classProps={"w-32"}
                label={selectedLanguage}
                backgroundStyle={"bg-transparent hover:bg-skin-fill-tertiary"}
                textStyle={"text-sm font-medium text-skin-muted"}
                borderStyle={''}
                focusStyle={''}
                disabled={false}
                onBtnClick={toggleDropdown}
            >
                <AngleRightIcon
                    className={`ml-2 transition-transform duration-700 ease-in-out ${showDropdown ? 'rotate-90' : 'rotate-0'}`}
                />
            </CustomBtn>

            <div className={`absolute left-0 right-0 mt-2 ${showDropdown ? 'block' : 'hidden'}`}>
                <div className="z-20 mt-6 p-2 w-fit bg-skin-fill-secondary border border-skin-border rounded-lg shadow-md">
                    <ul>
                        {languages.map((lang, index) => (
                            <li key={index}
                                className="py-2 pl-3 pr-4 font-medium text-skin-muted hover:text-skin-inverted2 dark:hover:text-skin-inverted 
                                rounded-md hover:bg-skin-fill-tertiary"
                            >
                                <button onClick={() => handleLanguageSelect(lang)} className="flex items-center space-x-2">
                                    <div>({lang.flag})</div>
                                    <div>{lang.value}</div>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default LangSelector;
