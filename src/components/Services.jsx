// 🔸 Services Section
import React from "react";

const Services = () => {
  const services = [
    {
      icon: "ri-bar-chart-2-fill",
      title: "Strategic Business Planning",
      desc: "Develop winning strategies with expert guidance to achieve long-term business success.",
    },
    {
      icon: "ri-search-eye-fill",
      title: "Market Research & Insights",
      desc: "Gain actionable insights with in-depth research to understand your audience and industry trends.",
    },
    {
      icon: "ri-hand-coin-fill",
      title: "Financial Advisory Services",
      desc: "Optimize your finances with strategic planning, budgeting, and investment solutions.",
    },
    {
      icon: "ri-shield-check-fill",
      title: "Risk & Compliance Solutions",
      desc: "Identify, assess, and mitigate potential risks to secure sustainable business growth.",
    },
    {
      icon: "ri-rocket-2-fill",
      title: "Business Growth Strategies",
      desc: "Scale your business with data-driven strategies and expert consulting support.",
    },
    {
      icon: "ri-user-star-fill",
      title: "Corporate Advisory Services",
      desc: "Receive expert guidance on corporate governance, restructuring, and compliance.",
    },
  ];

  return (
    <section
      id="services"
      className="bg-[#1E2D51] text-white text-center px-6 sm:px-10 md:px-16 lg:px-24 py-16 sm:py-20 md:py-28 pattern"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      {/* Section Heading */}
      <h2
        className="font-[bricolage] text-[#FD6900] text-sm sm:text-base md:text-lg"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Our Services
      </h2>
      <h1
        className="font-[bricolage] text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Unlock Business Growth with Expert Services
      </h1>

      {/* Services Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 md:mt-16 text-left"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="group rounded-xl p-8 bg-white text-black hover:bg-[#FD6900] transition-all duration-200"
            data-aos="zoom-in"
            data-aos-delay={200 + index * 100}
            data-aos-duration="800"
          >
            {/* Icon */}
            <div className="rounded-lg w-12 h-12 flex justify-center items-center bg-orange-100 group-hover:bg-white/20">
              <i
                className={`${service.icon} text-2xl text-[#FD6900] group-hover:text-white`}
              ></i>
            </div>

            {/* Title */}
            <h1 className="font-[bricolage] text-base sm:text-lg md:text-xl mt-6 font-semibold text-[#0B0C0E] group-hover:text-white">
              {service.title}
            </h1>

            {/* Description */}
            <p className="font-[space] text-xs sm:text-sm md:text-base mt-3 leading-relaxed text-gray-600 group-hover:text-white/90">
              {service.desc}
            </p>

            {/* CTA */}
            <div className="flex items-center gap-2 mt-6 font-[bricolage] text-xs sm:text-sm md:text-base">
              <a
                href="#"
                className="transition-colors duration-100 text-[#0B0C0E] group-hover:text-white"
              >
                Discover More
              </a>
              <i className="ri-arrow-right-line text-[#FD6900] group-hover:text-white"></i>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
