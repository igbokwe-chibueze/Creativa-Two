import { features } from "../constants/Data"
import { CheckMarkIcon } from "../constants/Icons"


const Features = () => {
  return (
    <section id="features" className=" min-h-screen ">
        <div className=" max-w-screen-xl mx-auto px-4 lg:px-12 py-8 lg:py-16 ">
          <div className="max-w-screen-md mb-8 lg:mb-16">
              {/* Header */}
              <h2 className=" header-two ">
                Secure platform, secure data
              </h2>

              {/* SubHearder */}
              <p className=" paragraph-one ">
                Here at Creativa we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
              </p>
          </div>

          <div className=" mt-6 space-y-12 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8">

            {features.map((feature, index) => (
              <div key={index}>
                <div
                  className={`flex justify-center items-center w-10 lg:w-16 h-10 lg:h-16 mb-4 md:mb-8 rounded 
                    ${feature.iconBgClass} ${feature.iconTextClass}`}
                >
                  {feature.icon}
                </div>
                <h4 className="header-four">{feature.title}</h4>
                <ul className="mt-4 md:mt-6 paragraph-two space-y-4">
                  {feature.items.map((item, idx) => (
                    <li key={idx} className="flex justify-start items-center space-x-3">
                      <CheckMarkIcon className={feature.itemIconClass} />
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}            
          </div>
        </div>
    </section>
  )
}

export default Features