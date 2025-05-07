import { socialImgs } from "../constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="border-t border-[#1E293B] px-10 py-16 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Brand Section */}
          <div className="flex justify-center">
            <div className="flex flex-col space-y-6 items-center md:items-start">
              <div className="flex items-center space-x-4">
                <img 
                  src="/images/fav.png" 
                  alt="Logo" 
                  className="h-12 w-12 rounded-full border-2 border-[#1E293B]"
                />
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Vansh Agrawal
                </h3>
              </div>
              <p className="text-gray-400 text-center md:text-left text-sm max-w-xs">
                Transforming ideas into digital solutions with innovative design and code.
              </p>
              <div className="flex space-x-4">
                {socialImgs.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-all duration-300 group"
                  >
                    <img 
                      src={social.imgPath} 
                      alt={social.name}
                      className="h-7 w-7 group-hover:scale-110 group-hover:rotate-6 transition-transform"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact & Newsletter */}
          <div className="flex justify-center">
            <div className="flex flex-col space-y-6 items-center md:items-start">
              <h4 className="text-xl font-semibold text-white mb-4">Get in Touch</h4>
              <div className="space-y-3 w-full max-w-xs">
                <div className="flex items-center space-x-3 text-gray-400">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>agrawalvanshn@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>+91 7378882317</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#1E293B] my-8"></div>

        {/* Copyright and Additional Links */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-xl">
            © {currentYear} Vansh Agrawal. All rights reserved.
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-blue-600 text-white p-3.5 rounded-full shadow-xl hover:bg-blue-700 transition-all duration-300 group z-50"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6 group-hover:-translate-y-1 transition-transform" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M5 10l7-7m0 0l7 7m-7-7v18" 
          />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;