import { teamMembersData } from "../constants/Data"
import { PhoneIcon2 } from "../constants/Icons"

const Profile = () => {
  return (
    <section id="profile" className=" min-h-screen ">
        <div className=" max-w-screen-xl mx-auto text-center px-4 lg:px-12 py-8 lg:py-16 ">

            {/* Header */}
            <h1 className=" header-one ">
              Meet Our Team
            </h1>

            {/* SubHearder */}
            <p className=" paragraph-one-padded ">
                Meet the passionate and diverse group of professionals driving creativa&apos;s success, 
                delivering exceptional results and innovative solutions for our clients.
            </p>

            {/* Team */}
            <div className="space-y-4 divide-y divide-skin-border">
                {teamMembersData.map((member, index) => (
                    <div
                        key={index}
                        className={`max-w-xl mx-auto group/item first:border-r-2 last:border-l-2 border-skin-border
                            flex items-center p-2 sm:p-4 text-left rounded-lg
                            hover:bg-skin-fill-secondary transition-colors duration-700 ease-in-out 
                            ${ index % 2 === 0 ? "" : "flex-row-reverse text-right" }`
                        }
                    >
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-20 h-20 rounded-full mx-4"
                        />
                        <div className="space-y-2">
                            <h4 className="text-lg lg:text-xl font-extrabold tracking-tight leading-none text-skin-main">{member.name}</h4>
                            <p className="text-sm lg:text-base text-skin-muted">{member.position}</p>
                            <p className=" hidden sm:flex text-lg lg:text-xl font-normal text-skin-muted">{member.email}</p>
                        </div>
                        
                        {/* Call Button */}
                        <a 
                            href={`tel:${member.tel} `}
                            className={`group/edit lg:invisible lg:group-hover/item:visible 
                                bg-skin-fill-tertiary lg:bg-transparent hover:bg-skin-fill-tertiary
                                flex justify-center items-center rounded-full p-2 space-x-2
                                text-sm lg:text-base text-skin-muted2
                                ${index % 2 === 0 ? "ml-4" : "mr-4"}`}
                        >
                            <p className="group-hover/edit:text-skin-main">Call</p>
                            <PhoneIcon2 className="group-hover/edit:translate-x-0.5 group-hover/edit:text-skin-icon-hover"/>
                        </a>
                    </div>
                ))}
            </div>
        </div>

    </section>
  )
}

export default Profile