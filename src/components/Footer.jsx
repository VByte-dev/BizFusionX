import React from "react";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-[#1E2D51] text-gray-300 py-16 px-6 sm:px-10 md:px-16 lg:px-32"
    >
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-600 pb-10">
        {/* Left Section */}
        <div>
          <h1 className="text-2xl font-[bricolage] font-semibold text-white">
            BizFusion<span className="text-[#FD6900]">X</span>
          </h1>
          <p className="mt-3 text-sm font-[space] leading-relaxed text-gray-400">
            BizFusionX helps businesses navigate growth through insightful
            consulting and digital strategies.
          </p>
        </div>

        {/* Newsletter */}
        <div className="md:col-span-2 md:flex md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-white font-[bricolage] font-medium text-lg">
              Subscribe to our newsletter
            </h2>
            <p className="text-gray-400 text-sm font-[space] mt-1">
              Stay informed with our latest insights and strategies. No spam,
              ever.
            </p>
          </div>

          <div className="flex mt-4 md:mt-0 border-2 p-1 rounded border-zinc-400">
            <div className="flex items-center text-gray-400 px-3 rounded-l-lg">
              <i className="ri-mail-fill text-zinc-100 text-xl"></i>
            </div>
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 text-sm font-[space] w-full sm:w-64 outline-none text-zinc-100 bg-transparent"
            />
            <button className="bg-[#FD6900] text-white px-5 py-2 rounded font-[bricolage] font-medium hover:bg-[#e65e00] transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 pt-10 border-b border-gray-600 pb-10">
        {/* Quick Links */}
        <div>
          <h3 className="text-white font-[bricolage] font-semibold mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm font-[space]">
            {[
              { name: "Home", href: "#home" },
              { name: "About", href: "#about" },
              { name: "Services", href: "#services" },
              { name: "WorkProcess", href: "#workprocess" },
              { name: "OurTeam", href: "#ourteam" },
              { name: "Testimonials", href: "#testimonials" },
              { name: "Contact", href: "#contact" },
            ].map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="hover:text-[#FD6900] transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-white font-[bricolage] font-semibold mb-4">
            Resources
          </h3>
          <ul className="space-y-2 text-sm font-[space]">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Careers</li>
            <li>Help Center</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="md:col-span-2">
          <ul className="space-y-5 text-sm font-[space]">
            <li className="flex items-start gap-3">
              <div className="bg-[#243660] p-3 rounded-lg">
                <i className="ri-phone-line text-[#FD6900]"></i>
              </div>
              <div>
                <h4 className="text-white font-[bricolage] font-medium">
                  Phone
                </h4>
                <p className="text-gray-400">+1 (415) 555-0198</p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <div className="bg-[#243660] p-3 rounded-lg">
                <i className="ri-mail-line text-[#FD6900]"></i>
              </div>
              <div>
                <h4 className="text-white font-[bricolage] font-medium">
                  Email
                </h4>
                <p className="text-gray-400">contact@bizfusionx.com</p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <div className="bg-[#243660] p-3 rounded-lg">
                <i className="ri-map-pin-line text-[#FD6900]"></i>
              </div>
              <div>
                <h4 className="text-white font-[bricolage] font-medium">
                  BizFusionX Headquarters
                </h4>
                <p className="text-gray-400 leading-relaxed">
                  No.0000, MMDA Mathur Chennai-600068
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-10 text-sm font-[space] text-gray-400">
        <p>Copyright © 2025 BizFusionX. All Rights Reserved.</p>

        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-[#FD6900] transition">
            <i className="ri-linkedin-fill text-lg"></i>
          </a>
          <a href="#" className="hover:text-[#FD6900] transition">
            <i className="ri-facebook-fill text-lg"></i>
          </a>
          <a href="#" className="hover:text-[#FD6900] transition">
            <i className="ri-pinterest-fill text-lg"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
