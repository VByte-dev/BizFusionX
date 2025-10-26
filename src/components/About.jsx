import React from "react";

let About = () => {
  return (
    <>
      <div className="block md:grid grid-cols-2 place-items-center justify-between py-16 px-6 sm:py-20 sm:px-10 md:py-32 md:px-16 lg:px-32 gap-10">
        {/* Part-1 */}
        <div className="text-center md:text-left">
          <h2 className="font-[bricolage] text-[#FD6900] text-sm sm:text-base md:text-lg">
            About BizFusionX
          </h2>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-[bricolage] my-2 leading-snug">
            Empowering Business with Proven Strategies
          </h1>
          <div className="mt-6">
            <img
              src="https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg"
              alt="Business Strategy"
              className="rounded-xl w-full max-w-[500px] mx-auto md:mx-0"
            />
          </div>
        </div>

        {/* Part-2 */}
        <div className="mt-10 md:mt-0">
          {/* 1 - Description */}
          <div className="mb-10">
            <p className="font-[space] text-sm sm:text-base leading-relaxed text-center md:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              repellat repudiandae quae numquam, sapiente quos et dignissimos
              exercitationem nemo nihil. Modi, veritatis. Alias saepe iste
              accusantium totam reprehenderit culpa deleniti!
            </p>
          </div>

          {/* 2 - Stat Boxes */}
          <div className="grid min-grid-cols-2 sm:grid-cols-2 gap-4 my-4">
            {/* Box 1 */}
            <div className="flex items-center gap-2 m-2 justify-left md:justify-start bg-orange-50 border border-orange-100 p-2 rounded">
              <div className="bg-orange-100 rounded w-12 h-12 flex justify-center items-center">
                <i className="ri-flower-fill text-2xl sm:text-3xl"></i>
              </div>
              <div>
                <h1 className="font-[bricolage] text-lg sm:text-xl">10+</h1>
                <h2 className="font-[space] text-xs sm:text-sm">
                  Years of Expertise
                </h2>
              </div>
            </div>

            {/* Box 2 */}
            <div className="flex items-center gap-2 m-2 justify-left md:justify-start bg-orange-50 border border-orange-100 p-2 rounded">
              <div className="bg-orange-100 rounded w-12 h-12 flex justify-center items-center">
                <i className="ri-line-chart-line text-2xl sm:text-3xl"></i>
              </div>
              <div>
                <h1 className="font-[bricolage] text-lg sm:text-xl">120+</h1>
                <h2 className="font-[space] text-xs sm:text-sm">
                  Projects Delivered
                </h2>
              </div>
            </div>

            {/* Box 3 */}
            <div className="flex items-center gap-2 m-2 justify-left md:justify-start bg-orange-50 border border-orange-100 p-2 rounded">
              <div className="bg-orange-100 rounded w-12 h-12 flex justify-center items-center">
                <i className="ri-group-fill text-2xl sm:text-3xl"></i>
              </div>
              <div>
                <h1 className="font-[bricolage] text-lg sm:text-xl">50+</h1>
                <h2 className="font-[space] text-xs sm:text-sm">
                  Trusted Clients
                </h2>
              </div>
            </div>

            {/* Box 4 */}
            <div className="flex items-center gap-2 m-2 justify-left md:justify-start bg-orange-50 border border-orange-100 p-2 rounded">
              <div className="bg-orange-100 rounded w-12 h-12 flex justify-center items-center">
                <i className="ri-briefcase-4-fill text-2xl sm:text-3xl"></i>
              </div>
              <div>
                <h1 className="font-[bricolage] text-lg sm:text-xl">15+</h1>
                <h2 className="font-[space] text-xs sm:text-sm">
                  Industry Partners
                </h2>
              </div>
            </div>
          </div>

          {/* 3 - Key Points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-4 text-sm sm:text-base text-center md:text-left">
            <h1 className="m-2 flex items-center justify-center md:justify-start gap-2">
              <i className="ri-checkbox-circle-fill text-[#FD6900] text-lg"></i>
              Data-Driven Decision Making
            </h1>
            <h1 className="m-2 flex items-center justify-center md:justify-start gap-2">
              <i className="ri-checkbox-circle-fill text-[#FD6900] text-lg"></i>
              Innovative Growth Tactics
            </h1>
            <h1 className="m-2 flex items-center justify-center md:justify-start gap-2">
              <i className="ri-checkbox-circle-fill text-[#FD6900] text-lg"></i>
              Personalized Client Strategies
            </h1>
            <h1 className="m-2 flex items-center justify-center md:justify-start gap-2">
              <i className="ri-checkbox-circle-fill text-[#FD6900] text-lg"></i>
              Sustainable Business Models
            </h1>
          </div>

          {/* 4 - CTA */}
          <div className="flex flex-col sm:flex-row gap-6 mt-10 font-[space] items-center justify-center md:justify-start">
            <button className="flex justify-between gap-3 items-center border-2 text-[#1A2B4E] font-semibold border-[#1A2B4E] px-4 py-2 rounded-md hover:bg-[#1A2B4E] transition-colors duration-100 hover:text-white text-sm sm:text-base">
              More About Us
              <i class="ri-arrow-right-s-line text-l"></i>
            </button>

            <div className="flex items-center gap-3 text-center sm:text-left">
              <div>
                <i className="ri-phone-fill text-[#FD6900] text-2xl"></i>
              </div>
              <div className="text-left">
                <h1 className="text-sm sm:text-base">Let's Talk</h1>
                <h2 className="text-xs sm:text-sm font-[bricolage]">+91 000000000</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
