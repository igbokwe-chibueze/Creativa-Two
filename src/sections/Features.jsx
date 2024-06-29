import { features } from "../constants/Data"
import { CheckMarkIcon } from "../constants/Icons"


const Features = () => {
  return (
    <section id="features" className=" min-h-screen ">
        <div className=" max-w-screen-xl mx-auto items-center px-4 lg:px-12 py-8 lg:py-16 ">
          <div className="max-w-screen-md mb-8 lg:mb-16">
              {/* Header */}
              <h2 className=" header-two ">
                Secure platform, secure data
              </h2>

              {/* SubHearder */}
              <p className=" paragraph-one ">
                Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
              </p>
          </div>

          <div className=" mt-6 grid grid-cols-3 gap-8">

            {features.map((section, index) => (
              <div key={index}>
                <div
                  className={`flex justify-center items-center w-10 lg:w-16 h-10 lg:h-16 mb-8 rounded ${section.iconBgClass} ${section.iconTextClass}`}
                >
                  {section.icon}
                </div>
                <h4 className="header-four">{section.title}</h4>
                <ul className="mt-6 paragraph-two space-y-4">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex justify-start items-center space-x-3">
                      <CheckMarkIcon className={section.itemIconClass} />
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            
            {/* <div>
              <div className="flex justify-center items-center w-10 lg:w-16 h-10 lg:h-16 mb-8 rounded 
                bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 "
              >
                <PresentationIcon/>
              </div>

              <h4 className=" header-four ">Project Management</h4>

              <ul className=" mt-6 paragraph-two space-y-4">
                <li className="flex justify-start items-center space-x-3">
                  <CheckMarkIcon className={"fill-blue-300 dark:fill-blue-900"}/>
                  <p >Unified Contribution Graph</p>
                </li>
                <li className="flex justify-start items-center space-x-3">
                  <CheckMarkIcon className={"fill-blue-300 dark:fill-blue-900"}/>
                  <p >Org activity graph</p>
                </li>
                <li className="flex justify-start items-center space-x-3">
                  <CheckMarkIcon className={"fill-blue-300 dark:fill-blue-900"}/>
                  <p >Org dependency insights</p>
                </li>
                <li className="flex justify-start items-center space-x-3">
                  <CheckMarkIcon className={"fill-blue-300 dark:fill-blue-900"}/>
                  <p >Milestones</p>
                </li>
                <li className="flex justify-start items-center space-x-3">
                  <CheckMarkIcon className={"fill-blue-300 dark:fill-blue-900"}/>
                  <p >Repo insights</p>
                </li>
              </ul>
            </div> */}

            {/* <div>
              <div className="flex justify-center items-center w-10 lg:w-16 h-10 lg:h-16 mb-8 rounded 
                bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 "
              >
                <ScaleIcon/>
              </div>

              <h4 className=" header-four ">Collaborative Coding</h4>

              <ul className=" mt-6 paragraph-two space-y-4">
                <li className="flex justify-start items-center space-x-3">
                  <CheckMarkIcon className={"fill-purple-300 dark:fill-purple-900"}/>
                  <p >Dynamic reports and dashboards</p>
                </li>
                <li className="flex justify-start items-center space-x-3">
                  <CheckMarkIcon className={"fill-purple-300 dark:fill-purple-900"}/>
                  <p >Code review assignments</p>
                </li>
                <li className="flex justify-start items-center space-x-3">
                  <CheckMarkIcon className={"fill-purple-300 dark:fill-purple-900"}/>
                  <p >Team discussions</p>
                </li>
                <li className="flex justify-start items-center space-x-3">
                  <CheckMarkIcon className={"fill-purple-300 dark:fill-purple-900"}/>
                  <p >Protected branches</p>
                </li>
                <li className="flex justify-start items-center space-x-3">
                  <CheckMarkIcon className={"fill-purple-300 dark:fill-purple-900"}/>
                  <p >Draft pull requests</p>
                </li>
              </ul>
            </div> */}
            
          </div>


        </div>
    </section>
  )
}

export default Features