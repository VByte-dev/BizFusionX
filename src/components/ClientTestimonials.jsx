import React from "react";

const ClientTestimonial = () => {
  const testimonials = [
    {
      name: "Natalie Chen",
      role: "COO, Horizon Logistics",
      text: "Their team brought a fresh perspective to our growth challenges. We saw a 35% increase in operational efficiency within the first quarter.",
      rating: 4.9,
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Marcus Reed",
      role: "Director, Finora Capital",
      text: "From strategy to execution, they delivered. The UI revamp not only elevated our brand presence but improved our lead conversion.",
      rating: 4.7,
      image: "https://randomuser.me/api/portraits/men/46.jpg",
    },
    {
      name: "Alicia Gomez",
      role: "Founder, Visionary Edge",
      text: "They understood our business inside out and crafted solutions that aligned perfectly with our goals.",
      rating: 4.8,
      image: "https://randomuser.me/api/portraits/women/48.jpg",
    },
  ];

  return (
    <section id="testimonials" className="py-16 px-6 sm:py-20 sm:px-10 md:py-32 md:px-16 lg:px-32 bg-white">
      {/* Headings */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="font-[bricolage] text-[#FD6900] text-sm sm:text-base md:text-lg">
            Client Testimonials
          </h2>
          <h1 className="font-[bricolage] text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 font-semibold text-black max-w-xl">
            What Our Clients Say About Working With Us
          </h1>
        </div>
        <p className="text-zinc-500 font-[bricolage] mt-6 md:mt-0 md:max-w-md text-sm sm:text-base leading-relaxed">
          Real experiences from businesses we've helped grow through strategic
          insight and tailored consulting solutions.
        </p>
      </div>

      {/* Testimonials */}
      <div className="mt-16 flex flex-col lg:flex-row items-center justify-center gap-8">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="h-70 relative bg-white border-2 border-zinc-200 rounded-2xl w-full max-w-md p-6 hover:shadow-lg transition duration-300"
          >
            {/* Top */}
            <div className="flex items-center gap-3">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h1 className="font-[bricolage] text-base font-semibold">
                  {item.name}
                </h1>
                <h2 className="font-[bricolage] text-sm text-zinc-500">
                  {item.role}
                </h2>
              </div>
              <i className="ri-double-quotes-r text-[#FD6900] text-xl ml-auto"></i>
            </div>

            {/* Review */}
            <p className="overflow-hidden  h-2/4 font-[bricolage] text-sm sm:text-base text-zinc-600 mt-4 leading-relaxed border-b border-zinc-200 pb-4">
              {item.text}
            </p>

            {/* Rating */}
            <div className="flex items-center justify-between mt-4">
              <div className="flex text-[#FD6900] text-lg">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="ri-star-fill"></i>
                ))}
              </div>
              <p className="font-[bricolage] font-semibold text-zinc-800">
                {item.rating}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center mt-10 gap-4">
        <button className="bg-[#FD6900] text-white p-2 sm:p-3 w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full hover:bg-[#e65e00] transition">
          <i className="ri-arrow-left-s-line text-base sm:text-lg"></i>
        </button>
        <div className="flex items-center gap-2">
          <div className="w-6 h-2 rounded-full bg-[#FD6900]"></div>
          <div className="w-2 h-2 rounded-full bg-orange-200"></div>
          <div className="w-2 h-2 rounded-full bg-orange-200"></div>
        </div>
        <button className="bg-[#FD6900] text-white p-2 sm:p-3 w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full hover:bg-[#e65e00] transition">
          <i className="ri-arrow-right-s-line text-base sm:text-lg"></i>
        </button>
      </div>
    </section>
  );
};

export default ClientTestimonial;
