import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, MapPin, Phone, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<number | null>(null);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setMobileSubmenuOpen(null);
  }, [location]);

  const navigationItems = [
   
    { name: 'Home', path: '/', hasDropdown: false },
    { 
      name: 'About Us', 
      path: '/about-us',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Company Profile', path: '/about-us' },
        { name: 'Our Team', path: '/our-team' },
        { name: 'Mission & Vision', path: '/mission-vision' }
      ]
    },
    { name: 'Products', path: '/products', hasDropdown: false },
    { name: 'Our Customers', path: '/our-customers', hasDropdown: false },
    { name: "FAQ's", path: '/faqs', hasDropdown: false },
    { name: 'Our Presence', path: '/our-presence', hasDropdown: false },
    { name: 'Product Gallery', path: '/product-gallery', hasDropdown: false },
    { name: 'Contact us', path: '/contact', hasDropdown: false }
  ];

  const isActivePage = (path: string) => {
    return location.pathname === path;
  };

  const toggleMobileSubmenu = (index: number) => {
    setMobileSubmenuOpen(mobileSubmenuOpen === index ? null : index);
  };

  return (
    <>
      {/* Enhanced Overlay with Glassmorphism Effect */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-blue-900/30 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <nav className="bg-white border-t border-b border-gray-200 relative z-50">
        <div className="w-full">
          {/* Desktop Navigation - Corrected and Preserved */}
          <ul className="hidden lg:flex">
            {navigationItems.map((item, index) => (
              <li key={index} className={`relative group flex-1 ${index !== navigationItems.length - 1 ? 'border-r border-gray-200' : ''}`}>
                {item.hasDropdown ? (
                  <div className="relative">
                    <button
                      className={`flex items-center justify-center w-full px-4 py-6 transition-colors hover:text-blue-500 ${
                        isActivePage(item.path) ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-700'
                      }`}
                      style={{
                        fontFamily: '"Montserrat", Helvetica, Arial, Verdana, sans-serif',
                        fontWeight: 700,
                        fontSize: '16px',
                        lineHeight: '24px',
                        fontStyle: 'normal'
                      }}
                      onMouseEnter={() => setIsAboutDropdownOpen(true)}
                      onMouseLeave={() => setIsAboutDropdownOpen(false)}
                    >
                      {item.name}
                      <ChevronDown className="w-4 h-4 ml-1" />
                    </button>
                    {isAboutDropdownOpen && (
                      <div 
                        className="absolute top-full left-0 bg-white shadow-lg border border-gray-200 rounded-md py-2 w-48 z-50"
                        onMouseEnter={() => setIsAboutDropdownOpen(true)}
                        onMouseLeave={() => setIsAboutDropdownOpen(false)}
                      >
                        {item.dropdownItems?.map((dropdownItem, dropdownIndex) => (
                          <Link
                            key={dropdownIndex}
                            to={dropdownItem.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-500"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link 
                    to={item.path}
                    className={`flex items-center justify-center w-full px-4 py-6 transition-colors hover:text-blue-500 ${
                      isActivePage(item.path) ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-700'
                    }`}
                    style={{
                      fontFamily: '"Montserrat", Helvetica, Arial, Verdana, sans-serif',
                      fontWeight: 700,
                      fontSize: '16px',
                      lineHeight: '24px',
                      fontStyle: 'normal'
                    }}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Header with Hamburger */}
          <div className="lg:hidden flex justify-end p-4">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-800" />
              ) : (
                <Menu className=" text-gray-800 border-none"></Menu>
              )}
            </button>
          </div>

          {/* Glassmorphism Mobile Menu with Slower Transitions */}
          <div className={`lg:hidden fixed top-0 right-0 h-full w-80 bg-blue-500/20 backdrop-blur-lg z-50 transform transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            borderLeft: '1px solid rgba(255, 255, 255, 0.18)'
          }}>
            <div className="h-full flex flex-col">
              {/* Menu Header */}
              <div className="p-5 border-b border-blue-400/30 flex justify-end">
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1 rounded-full hover:bg-blue-400/20 transition-colors duration-300"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* Menu Items */}
              <div className="flex-1 overflow-y-auto py-2">
                {navigationItems.map((item, index) => (
                  <div key={index}>
                    {item.hasDropdown ? (
                      <div className="border-b border-blue-400/20 last:border-b-0">
                        <button
                          onClick={() => toggleMobileSubmenu(index)}
                          className={`w-full flex items-center justify-between px-6 py-2 text-left transition-colors duration-300 ${
                            isActivePage(item.path) ? 'text-white bg-blue-600/30' : 'text-white hover:bg-blue-500/20'
                          }`}
                        >
                          <span className="font-medium">{item.name}</span>
                          <ChevronDown 
                            className={`w-5 h-5 transition-all duration-500 ${
                              mobileSubmenuOpen === index ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        <div 
                          className={`overflow-hidden transition-all duration-500 ease-in-out ${
                            mobileSubmenuOpen === index ? 'max-h-96' : 'max-h-0'
                          }`}
                        >
                          {item.dropdownItems?.map((dropdownItem, dropdownIndex) => (
                            <Link
                              key={dropdownIndex}
                              to={dropdownItem.path}
                              className={`block pl-10 pr-6 py-3 text-blue-100 hover:text-white hover:bg-blue-600/30 transition-colors duration-300 ${
                                isActivePage(dropdownItem.path) ? 'bg-blue-600/40 text-white' : ''
                              }`}
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        className={`block px-6 py-4 border-b border-blue-400/20 transition-colors duration-300 ${
                          isActivePage(item.path) ? 'bg-blue-600/30 text-white' : 'text-white hover:bg-blue-500/20'
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span className="font-medium">{item.name}</span>
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Contact Information Footer */}
              <div className="p-6 bg-blue-600/20 border-t border-blue-400/30 backdrop-blur-sm">
                <div className="flex items-start space-x-3 mb-4">
                  <MapPin className="w-5 h-5 text-blue-100 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-white">Khasra No. 266/267,</p>
                    <p className="text-sm text-blue-100">Central Hopetown Selaqui, Dehradun – 248011</p>
                    <p className="text-sm text-blue-100">Uttarakhand, India</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 mb-4">
                  <Phone className="w-5 h-5 text-blue-100" />
                  <a href="tel:+919650936611" className="text-sm font-medium text-white hover:text-blue-100 transition-colors duration-300">
                    +91-9650936611
                  </a>
                </div>
                <a 
                  href="#appointment" 
                  className="inline-flex items-center text-sm font-medium text-white hover:text-blue-100 hover:underline transition-colors duration-300"
                >
                  Request an appointment
                  <ChevronDown className="w-4 h-4 ml-1 transform rotate-90" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;