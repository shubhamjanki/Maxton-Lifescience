import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Products', href: '/products' },
    { name: 'Our Customers', href: '/customers' },
    { name: "FAQ's", href: '/faq' },
    { name: 'Contact us', href: '/contact' },
  ];

  const productLinks = [
    { name: 'Tablets', href: '/tablets' },
    { name: 'Capsules', href: '/capsules' },
    { name: 'Dry Syrups', href: 'dry-syrups' },
    { name: 'Ointments', href: 'ointments' },
    { name: 'Powder & Liquid Orals', href: 'orals' },
   ,
  ];

  return (
    <footer className="bg-gray-100 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Logo />
              <h3 className="text-orange-600 text-lg font-bold">Maxton Lifescience</h3>
            </div>
            <p className="text-gray-600 mb-4">
              {/* Add a tagline or description here if desired */}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-red-600 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.href}
                    className="text-gray-600 hover:text-red-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Our Products</h3>
            <ul className="space-y-2">
              {productLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.href}
                    className="text-gray-600 hover:text-red-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-600 mt-0.5" />
                <div className="text-sm">
                  <p className="text-orange-600 text-lg font-bold">Maxton Lifescience Pvt. Ltd.</p>
                  <p className="text-gray-600">SCO 01, GROUND FLOOR, NEAR SHIVALIK ACADEMY</p>
                  <p className="text-gray-600">RAJA ROAD, SELAQUI, DEHRADUN, UTTARAKHAND-248011, INDIA</p>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-600" />
                <span className="text-gray-600">+91-7380725675</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-600" />
                <span className="text-gray-600">maxtonlifescience5@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-8 pt-6">
          <p className="text-center text-gray-600">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
