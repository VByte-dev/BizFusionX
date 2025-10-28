import React, { useState, useEffect, useCallback } from "react";

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
      rating: 4.0,
      image: "https://randomuser.me/api/portraits/women/48.jpg",
    },
    {
      name: "Ryan Wilson",
      role: "CTO, NovaTech",
      text: "Professional, detail-oriented, and truly passionate about helping clients succeed. Highly recommended.",
      rating: 5.0,
      image: "https://randomuser.me/api/portraits/men/49.jpg",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [fade, setFade] = useState(false);

  // ✅ Use useCallback to ensure stable reference
  const handleNext = useCallback(() => {
    setFade(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
      setFade(false);
    }, 300);
  }, [testimonials.length]);

  const handlePrev = () => {
    setFade(true);
    setTimeout(() => {
      setActiveIndex((prev) =>
        prev === 0 ? testimonials.length - 1 : prev - 1
      );
      setFade(false);
    }, 300);
  };

  // ✅ Fixed Interval Logic
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <section
      id="testimonials"
      className="py-16 px-6 sm:py-20 sm:px-10 md:py-28 md:px-16 lg:px-32 bg-white overflow-hidden bg-gradient-to-t via-[white] from-white to-[#FFF9F4]
"
    >
      {/* === Headings === */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h2 className="font-[bricolage] text-[#FD6900] text-sm sm:text-base md:text-lg tracking-wide">
            Client Testimonials
          </h2>
          <h1 className="font-[bricolage] text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 font-semibold text-zinc-900 leading-tight max-w-xl">
            What Our Clients Say About Working With Us
          </h1>
        </div>
        <div className="text-zinc-500 font-[space] md:max-w-md text-sm sm:text-base leading-relaxed">
          Real experiences from businesses we've helped grow through strategic
          insight and tailored consulting solutions.
        </div>
      </div>

      {/* === Testimonial Card === */}
      <div className="relative mt-16 flex flex-col items-center justify-center text-center">
        <div
          key={activeIndex}
          className={`bg-white border-2 border-zinc-200 rounded-2xl p-6 sm:p-8 max-w-lg sm:max-w-xl md:max-w-2xl mx-auto hover:shadow-xl transition-all duration-500 ease-in-out 
          ${fade ? "opacity-0" : "opacity-100"}
           flex flex-col justify-between`}
        >
          {/* --- Top --- */}
          <div>
            <div className="flex items-center gap-3 justify-center">
              <img
                src={testimonials[activeIndex].image}
                alt={testimonials[activeIndex].name}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover"
              />
              <div>
                <h1 className="font-[bricolage] text-base sm:text-lg font-semibold text-zinc-900">
                  {testimonials[activeIndex].name}
                </h1>
                <h2 className="font-[space] text-sm text-zinc-500">
                  {testimonials[activeIndex].role}
                </h2>
              </div>
              <i className="ri-double-quotes-r text-[#FD6900] text-xl sm:text-2xl ml-auto"></i>
            </div>

            {/* --- Text --- */}
            <p className="font-[space] text-sm sm:text-base text-zinc-600 mt-4 leading-relaxed border-b border-zinc-200 pb-4">
              {testimonials[activeIndex].text}
            </p>
          </div>

          {/* --- Rating --- */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex text-[#FD6900] text-lg">
              {[...Array(5)].map((_, i) => (
                <i key={i} className="ri-star-fill"></i>
              ))}
            </div>
            <p className="font-[bricolage] font-semibold text-zinc-800">
              {testimonials[activeIndex].rating}
            </p>
          </div>
        </div>

        {/* --- Navigation Arrows (Below on mobile) --- */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mt-8 sm:mt-10">
          <button
            onClick={handlePrev}
            className="bg-[#FD6900] text-white p-3 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full hover:bg-[#e65e00] transition"
          >
            <i className="ri-arrow-left-s-line text-lg sm:text-xl"></i>
          </button>

          <button
            onClick={handleNext}
            className="bg-[#FD6900] text-white p-3 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full hover:bg-[#e65e00] transition"
          >
            <i className="ri-arrow-right-s-line text-lg sm:text-xl"></i>
          </button>
        </div>
      </div>

      {/* --- Dots --- */}
      <div className="flex items-center justify-center mt-8 gap-2">
        {testimonials.map((_, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`cursor-pointer transition-all duration-300 ${
              index === activeIndex
                ? "w-6 h-2 bg-[#FD6900] rounded-full"
                : "w-2 h-2 bg-orange-200 rounded-full"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default ClientTestimonial;
