import React from 'react';
import { Info, Package, Shield } from 'lucide-react';

const WelcomeSection: React.FC = () => {
  const features = [
    {
      icon: <Info className="w-12 h-12 text-blue-500" />,
      title: 'ABOUT US',
      description: 'Maxton Lifescience is well recognized, integrated pharmaceutical company with core competencies in Marketing and Exporting highly effective medicines that are used in the treatment of various ailments and diseases.',
      link: '/about-us'
    },
    {
      icon: <Package className="w-12 h-12 text-blue-500" />,
      title: 'PRODUCTS',
      description: 'We have successfully created various brand names in these countries both in private & institutional market. Our company is itself is a brand to reckon in West Africa and Asia.',
      link: '/products'
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-500" />,
      title: 'QUALITY POLICY',
      description: 'Our products are manufactured in WHO, GMP & ISO certified manufacturing units. We provide our customers with pre source supply of high quality products at the most competitive prices.',
      link: '/quality-policy'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Welcome to Maxton Lifescience</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          We are a well recognized and integrated pharmaceutical company with core competencies in Marketing and Exporting. The highly effective medicines that we export are used in treatment of various ailments and diseases.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <a
                href={feature.link}
                className="inline-block bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;