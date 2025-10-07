import React from 'react';
import Logo from '../components/Logo';
const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 opacity-80"></div>
      <div className="absolute top-40 left-20 w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-green-600 opacity-70"></div>
      <div className="absolute top-60 right-10 w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 opacity-80"></div>
      <div className="absolute top-80 right-20 w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-green-600 opacity-70"></div>
      
      {/* Large Circular Design Elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gradient-to-tr from-pink-500 to-red-500 opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gradient-to-tl from-yellow-400 to-orange-500 opacity-20 transform translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-15 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-gradient-to-l from-pink-500 to-purple-500 opacity-15 transform translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="flex justify-between items-start mb-12">
            <div className="flex-1">
              <h1 className="text-6xl font-bold text-gray-800 leading-tight">
                ABOUT<br />
                THE<br />
                COMPANY
              </h1>
            </div>
            <div className="flex-shrink-0 ml-8">
              <div className="relative">
                  <span className="text-white font-bold text-4xl transform -rotate-12"><Logo></Logo></span>
               
               
                <div className="absolute -bottom-1 -right-1 flex space-x-1">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-green-600">
                
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Card */}
          <div className="relative">
            {/* White Content Card with Shadow */}
            <div className="bg-white rounded-3xl shadow-2xl p-12 relative z-20">
              {/* Company Header */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-xl   "><Logo/></span>
                             <h2 className="text-2xl font-bold text-green-600">MaxtonLifescience Pvt. Ltd.</h2>
                </div>
                <div className="w-full h-1 bg-gradient-to-r from-green-500 via-red-500 to-green-500 rounded"></div>
              </div>

              {/* Main Description */}
              <div className="mb-8">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Quality Control and Quality Assurance has been at the core of our business operations. Our products adhere to highest quality standards manufactured using state of the art technology. All our products undergo stringent quality checks to ensure that every product delivers exactly what it was intended to. We offer an extensive range of products in Pharmaceutical, Nutraceuticals / Food Supplements, Ayurvedic & Personal Care segment. Company has always strived to achieve quality & affordable products to help people lead healthier lives.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  In pursuit of excellence, the group is forging ahead with its expertise and experience, constantly laying emphasis on customer satisfaction and confidence through quality control and assurance. A competent, dedicated and dynamic team of professionals are responsible for its aggressive growth.
                </p>
              </div>

              {/* Mission, Values, Vision Sections */}
              <div className="space-y-6">
                {/* Our Mission */}
                <div className="flex items-start">
                  <div className="w-8 h-1 bg-yellow-400 mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Our Mission:</h3>
                    <ul className="space-y-1">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">To discover, develop & deliver quality affordable healthcare & personal care products to create a healthier tomorrow.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Our Values */}
                <div className="flex items-start">
                  <div className="w-8 h-1 bg-yellow-400 mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Our Values:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">Develop innovative & quality healthcare solutions to improve lives</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">To conduct our business with integrity, honesty and transparency</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">To develop customer focused systems & practices</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Our Vision */}
                <div className="flex items-start">
                  <div className="w-8 h-1 bg-yellow-400 mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Our Vision:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">To become a global healthcare organization.</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">To be recognized as domestic and internationally integrated healthcare and pharmaceutical company.</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">To mark our presence in the society by creating a portfolio of low cost medicines available to all.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements Around Card */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full opacity-80 z-10"></div>
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full opacity-60 z-10"></div>
            <div className="absolute top-1/2 -left-6 w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full opacity-70 z-10"></div>
            <div className="absolute top-1/4 -right-6 w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full opacity-50 z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;