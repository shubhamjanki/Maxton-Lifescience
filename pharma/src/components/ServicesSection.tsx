import React from 'react';
import { CheckCircle } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: 'ONE STOP SOLUTION',
      description: 'We provide high quality products at economical price, thus eliminating the dependence of our clients on multiple suppliers.'
    },
    {
      title: 'QUALITY ASSURANCE',
      description: 'Follow our stringent quality guidance which involves taking care of selection of formulation Manufacturers, current standards.'
    },
    {
      title: 'PROMPT & QUALITY SERVICE',
      description: 'We have a trained team of professionals whose main objective is to provide prompt and quality service to the overseas customers.'
    },
    {
      title: 'MARKET INSIGHTS',
      description: 'Being closely connected with some of new & innovative companies in the market & upcoming trends in pharma industry.'
    },
    {
      title: 'OTHER VALUE ADDED BENEFITS',
      description: 'Better price negotiation, stability studies & after Sales follow up & Services, Development of dossiers for generic products.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">WHAT WE OFFER</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          {/* <img
            src="https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg"
            alt="GMP Certified"
            className="mx-auto h-32 object-contain"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;