import { phoneMockup } from "../assets/pngs"
import { CustomBtn } from "../components"
import { ArrowRightIcon } from "../constants/Icons"

const Hero = () => {
  return (
    <section id="hero" className=" min-h-screen ">
        <div className=" max-w-screen-xl mx-auto items-center px-4 lg:px-6 py-8 lg:py-16 lg:grid lg:grid-cols-12 ">

            {/* Column One */}
            <div className=" lg:col-span-7 ">

                {/* Header */}
                <h1 className=" header-one ">
                    Payments tool for software companies
                </h1>

                {/* SubHearder */}
                <p className=" paragraph-one ">
                    From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.
                </p>

                {/* Buttons */}
                <div className="flex flex-col min-[425px]:flex-row space-y-4 min-[425px]:space-y-0 min-[425px]:space-x-4">

                    <CustomBtn
                        btnType='button'
                        classProps={`group `}
                        label={'Get Started'}
                        textStyle={''}
                        borderStyle={"border-0"}
                        focusStyle={"focus:ring-4 focus:ring-skin-focus2"}
                        disabled={false}
                    >
                        <ArrowRightIcon className = " ml-2 group-hover:translate-x-2 transition-transform duration-700 ease-in-out"/>
                    </CustomBtn>

                    <CustomBtn
                        btnType='button'
                        classProps={`group `}
                        label={'Speak to Sales'}
                        backgroundStyle={"bg-transparent hover:bg-skin-fill-tertiary"}
                        focusStyle={"focus:ring-2 focus:ring-skin-focus"}
                        textStyle={'text-skin-main'}
                        disabled={false}
                    >
                    </CustomBtn>
                </div>
            </div>

            {/* Column One */}
            <div className=" hidden lg:flex lg:col-span-5">
                <img src={phoneMockup} alt="phoneMockup" />
            </div>
            
        </div>
    </section>
  )
}

export default Hero