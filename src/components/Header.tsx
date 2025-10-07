import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';
import Navbar from './Navbar';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="w-full">
      {/* Top Contact Bar */}
      <div className="bg-gray-50 py-2 px-4 md:px-8">
        <div className="container mx-auto">
          <a 
            href="mailto:maxtonlifescience@gmail.com" 
            className="text-gray-600 text-sm hidden md:block hover:text-red-600 transition-colors"
          >
            info@maxtonlifescience.com
          </a>
        </div>
      </div>

      {/* Main Header with Logo and Contact Info */}
      <div className={`bg-white ${isScrolled ? 'shadow-md' : ''} transition-shadow duration-300`}>
        <div className="container mx-auto px-2 py-3">
          <div className="flex justify-between items-center">
            {/* Logo and Company Name */}
            <div className="flex items-center space-x-4">
              <Logo />
              <h1 className="text-2xl md:text-3xl font-semibold text-green-600 ml-2">
                MaxtonLifescience
              </h1>
            </div>

            {/* Desktop Contact Information */}
            <div className="hidden lg:flex items-center space-x-8">
              <div className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-gray-700 mt-1" />
                <div className="text-sm">
                  <p className="text-gray-800 font-medium">MaxtonLifescience Pvt.Ltd.</p>
                  <p className="text-gray-600">SCO 01, GROUND FLOOR, NEAR SHIVALIK ACADEMY</p>
                  <p className="text-gray-600">RAJA ROAD, SELAQUI, DEHRADUN, UTTARAKHAND-248197, INDIA</p> 
                </div>
              </div>
              
              <div className="flex flex-col">
                <div className="flex items-center space-x-2 mb-2">
                  <Phone className="w-5 h-5 text-gray-700" />
                  <span className="text-lg font-medium text-gray-800">+91-7380725675</span>
                </div> 
                      
                <div className="flex items-center space-x-2">
                  <Mail className="w-5 h-5 text-gray-700" />
                  <a 
                    href="mailto:MaxtonLifescience@gmail.com" 
                    className="text-gray-600 text-sm hover:text-red-600 transition-colors"
                  >
                    MaxtonLifescience@gmail.com
                    <br /> ajeypandey1515@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Mobile Navbar Toggle */}
            <div className="md:hidden ml-2">
              <Navbar />
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Navbar */}
      <div className={`hidden md:block ${isScrolled ? 'py-1' : 'py-2'} transition-all duration-300`}>
        <div className="  px-0">
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;