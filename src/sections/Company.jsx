import { Counter } from "../components"

const Company = () => {
  return (
    <section id="company" className=" min-h-screen ">
        <div className=" max-w-screen-xl mx-auto text-center px-4 lg:px-12 py-8 lg:py-16 ">

            {/* Header */}
            <h1 className=" header-one ">
              Home to the software teams
            </h1>

            {/* SubHearder */}
            <p className=" paragraph-one-padded ">
              Meet your developers where they already are. GitHub is home to over 40 million developers and the world’s largest open source community.
            </p>

            <div className=" sm:px-16 xl:px-48 grid grid-cols-2 md:grid-cols-3">
              <div>
                <h2 className=" header-one ">
                  <Counter initialValue={0} endValue={73} duration={800}/><span>M+</span>
                </h2>
                <p className=" paragraph-one ">developers</p>
              </div>

              <div>
                <h2 className=" header-one ">
                  <Counter initialValue={0} endValue={2} duration={1000}/><span>B</span>
                </h2>
                <p className=" paragraph-one ">contributors</p>
              </div>

              <div>
                <h2 className=" header-one ">
                  <Counter initialValue={0} endValue={4} duration={1000}/><span>M+</span>
                </h2>
                <p className=" paragraph-one ">organizations</p>
              </div>

            </div>
        </div>
    </section>
  )
}

export default Company