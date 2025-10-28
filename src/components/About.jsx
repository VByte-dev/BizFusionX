// 🔸 About Section
import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="block md:grid grid-cols-2 place-items-center justify-between py-16 px-6 sm:py-20 sm:px-10 md:py-32 md:px-16 lg:px-32 gap-10"
    >
      {/* 🟠 Left Side - Title & Image */}
      <div className="text-center md:text-left">
        <h2 className="font-[bricolage] text-[#FD6900] text-sm sm:text-base md:text-lg">
          About BizFusionX
        </h2>

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[bricolage] my-2 leading-snug">
          Empowering Business with Proven Strategies
        </h1>

        <div className="mt-6">
          <img
            src="/images/about.jpeg"
            alt="Business Strategy"
            className="rounded-xl w-full max-w-[500px] mx-auto md:mx-0"
          />
        </div>
      </div>

      {/* 🟠 Right Side - Description, Stats, Points, CTA */}
      <div className="mt-10 md:mt-0">
        <p className="font-[space] text-xs sm:text-sm md:text-base leading-relaxed text-center md:text-left mb-10 text-gray-700">
          At <span className="font-semibold text-[#FD6900]">BizFusionX</span>,
          we help businesses bridge the gap between strategy and execution. Our
          team of experts empowers brands to grow faster through innovative
          marketing, data-driven decisions, and scalable digital solutions
          tailored to your goals. We believe in building partnerships that last
          transforming ideas into measurable success.
        </p>

        <div className="grid min-grid-cols-2 sm:grid-cols-2 gap-4 my-4">
          {[
            {
              icon: "ri-flower-fill",
              title: "10+",
              text: "Years of Expertise",
            },
            {
              icon: "ri-line-chart-line",
              title: "120+",
              text: "Projects Delivered",
            },
            { icon: "ri-group-fill", title: "50+", text: "Trusted Clients" },
            {
              icon: "ri-briefcase-4-fill",
              title: "15+",
              text: "Industry Partners",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-orange-50 border border-orange-100 p-2 rounded m-1 lg:m-2"
            >
              <div className="bg-orange-100 rounded w-12 h-12 flex justify-center items-center">
                <i className={`${item.icon} text-2xl sm:text-3xl`}></i>
              </div>
              <div>
                <h1 className="font-[bricolage] text-base sm:text-lg md:text-xl">
                  {item.title}
                </h1>
                <h2 className="font-[space] text-xs sm:text-sm">{item.text}</h2>
              </div>
            </div>
          ))}
        </div>

        <div className="grid font-[space] grid-cols-1 sm:grid-cols-2 gap-2 my-4 text-xs sm:text-sm md:text-base text-center md:text-left">
          {[
            "Data-Driven Decision Making",
            "Innovative Growth Tactics",
            "Personalized Client Strategies",
            "Sustainable Business Models",
          ].map((point, index) => (
            <h1
              key={index}
              className="m-2 flex items-center justify-center md:justify-start gap-2"
            >
              <i className="ri-checkbox-circle-fill text-[#FD6900] text-lg"></i>
              {point}
            </h1>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 mt-10 font-[space] items-center justify-center md:justify-start text-xs sm:text-sm md:text-base">
          {/* 🔗 Converted button into a link */}
          <a
            href="#"
            className="flex gap-3 items-center border-2  lg:text-[#1A2B4E] font-semibold border-[#1A2B4E] px-4 py-2 rounded-md bg-[#1A2B4E] text-white lg:bg-white hover:bg-[#1A2B4E] transition-colors duration-100 hover:text-white"
          >
            More About Us
            <i className="ri-arrow-right-s-line text-l"></i>
          </a>

          <div className="flex items-center gap-3 text-center sm:text-left">
            <i className="ri-phone-fill text-[#FD6900] text-2xl"></i>
            <div className="text-left">
              <h1>Let's Talk</h1>
              <h2 className="font-[bricolage] text-sm sm:text-base">
                +91 000000000
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
