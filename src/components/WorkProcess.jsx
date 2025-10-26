import React from "react";

const WorkProcess = () => {
  return (
    <>
      <section className="py-12 px-4 sm:py-16 sm:px-8 md:py-24 md:px-16 lg:px-28">
        {/* Heading */}
        <div className="text-center md:px-50">
          <h2 className="font-[bricolage] text-[#FD6900] text-xs sm:text-sm md:text-base lg:text-lg">
            Working Process
          </h2>
          <h1 className="font-[bricolage] mt-2 md:mt-3 text-lg sm:text-xl md:text-2xl lg:text-3xl">
            Our Strategic Work Process: A Step-by-Step Path to Business Growth &
            Success
          </h1>
          <p className="mt-3 md:mt-5 font-[space] text-xs sm:text-sm md:text-base lg:text-lg">
            From discovery to delivery, every phase is designed to align your
            brand vision with measurable growth. Here’s how we turn your
            business goals into real, scalable success.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-14 space-y-10">
          {/* Step 01 */}
          <div className="flex flex-col md:flex-row justify-around items-center">
            <h1 className="font-[bricolage] text-[#FD6900] text-xl sm:text-2xl md:text-2xl lg:text-3xl mb-3 md:mb-0 order-0">
              Step 01
            </h1>
            <div className="w-full md:w-1/2 md:mt-6 max-w-md text-center bg-orange-50 p-3 md:p-4 rounded-lg">
              <img
                src="https://images.pexels.com/photos/3184649/pexels-photo-3184649.jpeg"
                alt="Discovery & Strategy"
                className="rounded-lg w-full h-48 md:h-56 object-cover"
              />
              <h1 className="font-[bricolage] mt-3 text-base  sm:text-lg md:text-xl lg:text-2xl">
                Discovery & Research
              </h1>
              <h2 className="font-[space] mt-2 text-xs sm:text-sm md:text-base lg:text-lg">
                We dive deep to understand your goals, audience, and market, so
                every decision we make is backed by real insights.
              </h2>
            </div>
          </div>

          {/* Step 02 */}
          <div className="flex flex-col md:flex-row justify-around items-center">
            <h1 className="font-[bricolage] text-[#FD6900] text-xl sm:text-2xl md:text-2xl lg:text-3xl mb-3 md:mb-0 order-0 md:order-1">
              Step 02
            </h1>
            <div className="w-full md:mt-6 max-w-md text-center bg-orange-50 p-3 md:p-4 rounded-lg">
              <img
                src="https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg"
                alt="Design & Planning"
                className="rounded-lg w-full h-48 md:h-56 object-cover"
              />
              <h1 className="font-[bricolage] mt-3 text-base sm:text-lg md:text-xl lg:text-2xl">
                Design & Planning
              </h1>
              <h2 className="font-[space] mt-2 text-xs sm:text-sm md:text-base lg:text-lg">
                We turn insights into creative, user-friendly designs that
                communicate your brand clearly and effectively.
              </h2>
            </div>
          </div>

          {/* Step 03 */}
          <div className="flex flex-col md:flex-row justify-around items-center">
            <h1 className="font-[bricolage] text-[#FD6900] text-xl sm:text-2xl md:text-2xl lg:text-3xl mb-3 md:mb-0 order-0">
              Step 03
            </h1>
            <div className="w-full md:mt-6 max-w-md text-center bg-orange-50 p-3 md:p-4 rounded-lg">
              <img
                src="https://images.pexels.com/photos/6146695/pexels-photo-6146695.jpeg"
                alt="Development & Execution"
                className="rounded-lg w-full h-48 md:h-56 object-cover"
              />
              <h1 className="font-[bricolage] mt-3 text-base sm:text-lg md:text-xl lg:text-2xl">
                Development & Integration
              </h1>
              <h2 className="font-[space] mt-2 text-xs sm:text-sm md:text-base lg:text-lg">
                Using the latest technologies, we bring your project to life
                integrating fast, scalable, and secure systems for seamless
                performance.
              </h2>
            </div>
          </div>

          {/* Step 04 */}
          <div className="flex flex-col md:flex-row justify-around items-center">
            <h1 className="font-[bricolage] text-[#FD6900] text-xl sm:text-2xl md:text-2xl lg:text-3xl mb-3 md:mb-0 order-0 md:order-1">
              Step 04
            </h1>
            <div className="w-full md:mt-6 max-w-md text-center bg-orange-50 p-3 md:p-4 rounded-lg">
              <img
                src="https://images.pexels.com/photos/5946225/pexels-photo-5946225.jpeg"
                alt="Launch & Growth"
                className="rounded-lg w-full h-48 md:h-56 object-cover"
              />
              <h1 className="font-[bricolage] mt-3 text-base sm:text-lg md:text-xl lg:text-2xl">
                Launch & Optimization
              </h1>
              <h2 className="font-[space] mt-2 text-xs sm:text-sm md:text-base lg:text-lg">
                We launch your product with precision, track its performance,
                and refine every detail for maximum impact and long-term
                success.
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkProcess;
