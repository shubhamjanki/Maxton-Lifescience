import React from 'react';
import { MapPin, CheckCircle, Award, Shield, Globe, Phone, Mail } from 'lucide-react';

const OurPresence: React.FC = () => {
  const credentials = [
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-500" />,
      title: "Government recognized Exporter",
      description: ""
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-500" />,
      title: "Registered with the Director General of Foreign Trade, under the Ministry of Commerce and Industry of India",
      description: ""
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-500" />,
      title: "Member of Pharmaceutical Export Promotion Council of India (Pharmexcil)",
      description: ""
    }
  ];

  const certifications = [
    {
      icon: <Award className="w-8 h-8 text-blue-500" />,
      title: "WHO GMP Certified",
      description: "World Health Organization Good Manufacturing Practice certified facilities"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: "ISO Certified",
      description: "International Organization for Standardization quality management systems"
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      title: "Export License",
      description: "Government authorized pharmaceutical export license"
    }
  ];

  const qualityAssurance = [
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "WHO GMP",
      description: "World Health Organization Good Manufacturing Practice",
      bgColor: "bg-blue-100"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "ISO Certified",
      description: "International quality management standards",
      bgColor: "bg-green-100"
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-600" />,
      title: "Export License",
      description: "Government authorized pharmaceutical exports",
      bgColor: "bg-purple-100"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-orange-600" />,
      title: "Pharmexcil Member",
      description: "Pharmaceutical Export Promotion Council",
      bgColor: "bg-orange-100"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 md:mb-0">Our Presence </h1>
            <div className="text-sm opacity-90 bg-blue-600 px-3 py-1 rounded-full">
              <span className="hidden md:inline">Home</span>
              <span className="mx-2 hidden md:inline">/</span>
              <span>Our Presence</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Credentials Content */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8 relative pb-4">
                OUR PRESENCE
                <span className="absolute bottom-0 left-0 w-16 h-1 bg-blue-500 rounded-full"></span>
              </h2>
              
              <div className="space-y-6 mb-8">
                {credentials.map((credential, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
                    {credential.icon}
                    <div>
                      <p className="text-gray-800 font-medium leading-relaxed">{credential.title}</p>
                      {credential.description && (
                        <p className="text-gray-600 text-sm mt-1">{credential.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-8">
                <p className="text-gray-700 leading-relaxed">
                  We believe that quality is not a virtue but a pre-requisite that we need to guard consciously at all 
                  levels and through all operations. Products are manufactured in <strong>WHO GMP approved</strong> plant under 
                  strict supervision for quality.
                </p>
              </div>

              {/* Certifications Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                  <div 
                    key={index} 
                    className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow hover:translate-y-[-4px]"
                  >
                    <div className="flex justify-center mb-4">
                      {cert.icon}
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">{cert.title}</h3>
                    <p className="text-gray-600 text-sm">{cert.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Section */}
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-96 bg-gray-200 relative">
                  {/* Map Placeholder - You can integrate Google Maps or other map service */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.175!2d77.9378!3d30.3165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDE4JzU5LjQiTiA3N8KwNTYnMTYuMSJF!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Company Location"
                  ></iframe>
                  
                  {/* Map Overlay Info */}
                  <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg max-w-xs">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800 text-sm">Maxton Lifescience</h4>
                           <p className="text-gray-800 text-xs">Maxton Lifescience Pvt. Ltd.</p>
                  {/* <p className="text-gray-600">C/o- </p> */}
                 <p className="text-gray-600 text-xs">SCO 01, GROUND FLOOR, NEAR SHIVALIK ACADEMY</p>

            <p className="text-gray-600  text-xs">RAJA ROAD, SELAQUI, DEHRADUN, UTTARAKHAND-248011, INDIA</p> 
             
                        <div className="flex items-center mt-2">
                          <div className="flex text-yellow-400 text-xs">
                            ★★★★★
                          </div>
                          <span className="text-gray-500 text-xs ml-1">1 review</span>
                        </div>
                        <button className="text-blue-500 hover:text-blue-600 text-xs mt-1 hover:underline transition-colors">
                          View larger map
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">Contact Information</h3>
                <div className="space-y-4">

                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Khasra No. 266/267, Central Hopetown Selaqui, Dehradun – 248011, Uttarakhand, India
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-700">+91-7380725675</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-gray-500" />
                    <a href="mailto:maxtonlifescience5@gmail.com" className="text-gray-700 hover:text-blue-600 transition-colors">
                      maxtonlifescience5@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Additional Credentials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 relative">
            Quality Assurance & Certifications
            <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-500 rounded-full"></span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityAssurance.map((item, index) => (
              <div key={index} className="text-center group">
                <div className={`${item.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 
                  group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurPresence;