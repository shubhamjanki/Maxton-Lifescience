import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const TabletDetailPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { tablet } = location.state || {};

  if (!tablet) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Tablet not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
    
      <div className="container mx-auto px-4">
        <button 
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center text-primary-600 hover:text-primary-800"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Gallery
        </button>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-3xl mx-auto">
          <div className="p-8">
            <h1 className="text-3xl font-bold text-center mb-8">{tablet.name} - Carton View</h1>
            
            <div className="flex justify-center mb-8">
              <img 
                src={tablet.cartonImage} 
                alt={`${tablet.name} carton`}
                className="max-h-96 object-contain border-2 border-gray-200 rounded-lg"
              />
            </div>
            
            <div className="mt-8 text-center">
              <button className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabletDetailPage;