import React from 'react';
import { Disc } from 'lucide-react';

const Ointments: React.FC = () => {
  const products = [
    {
      name: 'Ayurvedic Pain Relief Ointment',
      description: 'Natural relief for joint and muscle pain',
      image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Healing Herbal Balm',
      description: 'Promotes wound healing and skin repair',
      image: 'https://images.pexels.com/photos/4210311/pexels-photo-4210311.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Anti-fungal Ointment',
      description: 'Natural treatment for skin infections',
      image: 'https://images.pexels.com/photos/6621339/pexels-photo-6621339.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Disc className="w-16 h-16 text-secondary-500" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Therapeutic Ointments</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Topical Ayurvedic preparations for external application, providing targeted relief and healing for various skin conditions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <button className="bg-secondary-500 text-white px-6 py-2 rounded-lg hover:bg-secondary-600 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ointments;