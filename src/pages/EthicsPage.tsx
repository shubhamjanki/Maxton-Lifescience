import React from 'react';

const EthicsPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-green-700 mb-6 border-b-4 border-green-500 inline-block pb-1">
          Our Ethics
        </h1>
        <p className="text-lg text-gray-700 leading-8">
          At Aayuvardan, we believe in building trust through unwavering ethical standards. Our commitment is deeply rooted in transparency, integrity, and responsibility toward patients, partners, and the planet.
        </p>

        <div className="mt-10 space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-green-600">Patient-Centric Approach</h2>
            <p className="text-gray-700">
              Every product we deliver is aimed at improving lives while ensuring safety and efficacy as the core focus.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-green-600">Integrity in Practice</h2>
            <p className="text-gray-700">
              We adhere to the highest standards of compliance and honesty in all our business dealings and scientific research.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-green-600">Environmental Responsibility</h2>
            <p className="text-gray-700">
              We practice sustainability and aim to reduce our environmental footprint through green manufacturing practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EthicsPage;
