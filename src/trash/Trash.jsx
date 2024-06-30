import { useState } from "react";
import { features } from "../constants/Data"
import { AndroidIcon, AngleRightIcon, CheckMarkIcon, IOSIcon } from "../constants/Icons"


const CTASection = () => {

  const [visibleInfo, setVisibleInfo] = useState('iOS'); // Initial state set to 'iOS'

  const handleIOSClick = () => {
    setVisibleInfo('iOS');
  };

  const handleAndroidClick = () => {
    setVisibleInfo('Android');
  };

  return (
    <section id="cta" className=" min-h-screen ">
      <div className=" max-w-screen-xl mx-auto items-center px-4 lg:px-12 py-8 lg:py-16 lg:grid lg:grid-cols-2 ">

        {/* Column One */}
        <div>
      <div className="flex justify-start items-center w-fit mb-2 space-x-8">
        {/* iOS Button */}
        <div className="flex flex-col items-center">
          <button className="btn-toggle" onClick={handleIOSClick}>
            <IOSIcon />
          </button>
          <p className="paragraph-two">iOS</p>
        </div>  

        {/* Android Button */}
        <div className="flex flex-col items-center">
          <button className="btn-toggle" onClick={handleAndroidClick}>
            <AndroidIcon />
          </button>
          <p className="paragraph-two">Android</p>
        </div>  
      </div>

      {/* iOS Information */}
      {visibleInfo === 'iOS' && (
        <div>
          <div className="mb-4 border-b border-skin-border">
            <h2 className="header-two">Creativa in iOS: Take control of your finances with us</h2>
            <p className="paragraph-two">Our app helps users easily track their expenses and create a budget. With a user-friendly interface, the app allows users to quickly input their income and expenses, and then automatically categorizes them for easy tracking.</p>
          </div>

          {features.length > 0 && (
            <div key={0}>
              <ul className="mt-4 md:mt-6 paragraph-two space-y-4">
                {features[0].items.map((item, idx) => (
                  <li key={idx} className="flex justify-start items-center space-x-3">
                    <CheckMarkIcon className={features[0].itemIconClass} />
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <p className="paragraph-two">Flow Budget takes the hassle out of budgeting and empowers users to take control of their finances.</p>

          <div className="flex justify-start items-center space-x-2 w-fit">
            <a href="https://github.com/igbokwe-chibueze" className="flex justify-start items-center space-x-2 link">
              <p>Check out the iOS app features</p>
              <AngleRightIcon />
            </a>
          </div>
        </div>
      )}

      {/* Android Information */}
      {visibleInfo === 'Android' && (
        <div>
          <div className="mb-4 border-b border-skin-border">
            <h2 className="header-two">Creativa in Android: Take control of your finances with us</h2>
            <p className="paragraph-two">Our app helps users easily track their expenses and create a budget. With a user-friendly interface, the app allows users to quickly input their income and expenses, and then automatically categorizes them for easy tracking.</p>
          </div>

          {features.length > 0 && (
            <div key={1}>
              <ul className="mt-4 md:mt-6 paragraph-two space-y-4">
                {features[1].items.map((item, idx) => (
                  <li key={idx} className="flex justify-start items-center space-x-3">
                    <CheckMarkIcon className={features[1].itemIconClass} />
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <p className="paragraph-two">Creativa takes the hassle out of budgeting and empowers users to take control of their finances.</p>

          <div className="flex justify-start items-center space-x-2 w-fit">
            <a href="https://github.com/igbokwe-chibueze" className="flex justify-start items-center space-x-2 link">
              <p>Check out the Android app features</p>
              <AngleRightIcon />
            </a>
          </div>
        </div>
      )}
    </div>

      </div>
    </section>
  )
}

export default CTASection