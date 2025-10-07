import React from 'react';
import { useNavigate } from 'react-router-dom';

// Sample tablet data
const tablets = [
  {
    id: 1,
    name: 'Vitamin C',
    imageUrl: '/images/vitamin-c.jpg',
    cartonImage: '/images/vitamin-c-carton.jpg'
  },
  {
    id: 2,
    name: 'Multivitamin',
    imageUrl: '/images/multivitamin.jpg',
    cartonImage: '/images/multivitamin-carton.jpg'
  },
  {
    id: 3,
    name: 'Calcium + D3',
    imageUrl: '/images/calcium-d3.jpg',
    cartonImage: '/images/calcium-d3-carton.jpg'
  },
  // Add more tablets as needed
];

const TabletGallery = () => {
  const navigate = useNavigate();

  const handleTabletClick = (tablet) => {
    navigate(`/tablet/${tablet.id}`, { state: { tablet } });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Tablets</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {tablets.map((tablet) => (
            <div 
              key={tablet.id}
              className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              onClick={() => handleTabletClick(tablet)}
            >
              <div className="p-6 flex flex-col items-center">
                <img 
                  src={tablet.imageUrl} 
                  alt={tablet.name}
                  className="w-48 h-48 object-contain"
                />
                <h3 className="mt-4 text-xl font-semibold text-gray-800">{tablet.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabletGallery;