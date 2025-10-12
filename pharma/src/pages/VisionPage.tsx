import React from 'react';

const VisionPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-emerald-700 mb-6 border-b-4 border-emerald-500 inline-block pb-1">
          Our Vision
        </h1>
        <p className="text-lg text-gray-800 leading-8">
          We envision a healthier world where quality healthcare is accessible to all. Our mission is to innovate, produce, and deliver affordable pharmaceutical solutions that improve quality of life globally.
        </p>

        <div className="mt-10 space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-emerald-600">Global Reach, Local Impact</h2>
            <p className="text-gray-800">
              We aim to reach underserved communities and emerging markets while creating meaningful health outcomes.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-emerald-600">Innovation Through Research</h2>
            <p className="text-gray-800">
              By investing in R&D, we strive to lead advancements in pharmaceutical science and treatment efficacy.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-emerald-600">Empowering Health Systems</h2>
            <p className="text-gray-800">
              Our goal is to collaborate with healthcare providers, governments, and NGOs to strengthen healthcare systems worldwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionPage;
