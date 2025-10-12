// src/components/CategoryLayout.js
import React from 'react';
import { Link } from 'react-router-dom';

const CategoryLayout = ({ name, icon, description, benefits, products, precautions }) => (
  <div className="container mx-auto py-12 px-4">
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row items-center mb-12">
        <div className="mr-6 mb-4 md:mb-0">{icon}</div>
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">{name}</h1>
          <p className="text-xl text-gray-600">{description}</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">Key Benefits</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <svg className="h-6 w-6 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                  <p className="text-gray-600">Dosage: {product.dosage}</p>
                </div>
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {product.use}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg mb-12">
        <div className="flex items-start">
          <svg className="h-6 w-6 text-yellow-500 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Important Precautions</h3>
            <p className="text-gray-700">{precautions}</p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Link to="/" className="inline-block bg-primary-500 text-white px-8 py-3 rounded-lg hover:bg-primary-600 transition-colors duration-300 shadow-md">
          Back to Product Categories
        </Link>
      </div>
    </div>
  </div>
);

export default CategoryLayout;
