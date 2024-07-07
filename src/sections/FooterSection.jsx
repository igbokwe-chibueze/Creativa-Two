import { creativaLogo } from "../assets/pngs"
import { address, socialMediaLinks } from "../constants/Data"
import { MailIcon, PhoneIcon } from "../constants/Icons"


const FooterSection = () => {
  return (
    <section id="footer" className=" min-h-screen bg-skin-fill-secondary">
      <div className=" max-w-screen-xl mx-auto px-4 lg:px-12 py-8 lg:py-16 ">

        {/* Address */}
        <div className=" space-y-11 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-16">
          {address.map((location, index) => (
            <div key={index}>
              <h4 className="header-four">{location.city}</h4>

              <div className="paragraph-two-no-margin space-y-2 mb-4">
                <p>{location.address1}</p>
                <p>{location.address2}</p>
              </div>

              <div className="flex justify-start items-center md:space-x-2 mb-2">
                <PhoneIcon className={" hidden md:flex text-skin-icon"}/>
                <p className="paragraph-two-no-margin">Office: {location.tel}</p>
              </div>

              <div className="flex justify-start items-center md:space-x-2">
                <MailIcon className={" hidden md:flex text-skin-icon"}/>
                <p className="paragraph-two-no-margin">Support: {location.email}</p>
              </div>
            </div>
          ))}  
        </div>

        {/* Form */}  
        <div 
          className=" mt-12 md:mt-16 max-w-3xl mx-auto lg:flex items-center bg-skin-fill-tertiary rounded-lg px-1 md:px-4 py-4 "
        >

          <p className="text-sm font-normal text-center md:text-start text-skin-muted mr-2 mb-4 lg:mb-0">Sign up to our newsletter</p>

          <form action="" method="post" className="w-full">
            <label htmlFor="email" className="sr-only"> Username </label>

            <div className=" relative ">
              <div className="absolute inset-y-0 start-0 flex items-center pl-3.5 pointer-events-none">
                <MailIcon className="w-4 h-4 text-skin-icon"/>
              </div>
              <input type="email" name="email" id="email" 
                placeholder="name@creativa.com"
                className=" form-input "
              />

              <div>
                <button type="submit" className=" form-btn md:hidden  ">
                  Subscribe
                </button>

                <button type="submit" className=" hidden md:block form-btn2  ">
                  Subscribe
                </button>
              </div>
            </div>
          </form>          
        </div>

        {/* Bottom half */}
        <hr className=" my-6 lg:my-8 sm:mx-auto border-skin-border " />

        <div className=" flex flex-col md:flex-row items-center md:items-center md:justify-between space-y-2 md:space-y-0 ">

          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src={creativaLogo} className="h-12 sm:h-16 mr-3" alt="Creativa Logo" />
            <span className="text-xl font-semibold text-skin-main self-center whitespace-nowrap">Creativa-2</span>
          </a>

          <span className=" text-sm sm:text-center text-skin-muted ">
            © 2024 <a href="https://github.com/igbokwe-chibueze" className=" hover:underline ">Creativa™</a>. All Rights Reserved.
          </span>

          {/* Social Media Icons */}
          <div className=" flex sm:justify-center mt-4 sm:mt-0 space-x-6 ">
            {socialMediaLinks.map((link, index) => (
              <a key={index} href={link.url} className=" text-skin-icon hover:text-skin-icon-hover ">
                {link.icon}
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default FooterSection