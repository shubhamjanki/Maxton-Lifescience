// src/components/ProductCategoryPage.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Tablets, Pill, Syringe, Disc, FlaskRound as Flask } from 'lucide-react';

const ProductCategoryPage = () => {
  const { categorySlug } = useParams();
  
  // Hardcoded data for each category
  const categoryData = {
    tablets: {
      name: 'Tablets',
      icon: <Tablets className="w-20 h-20 text-primary-500" />,
      description: 'Pharmaceutical tablets are solid dosage forms containing active pharmaceutical ingredients along with excipients. They are manufactured through compression and are designed for oral administration.',
      benefits: [
        'Precise dosage control',
        'Long shelf life',
        'Easy to administer',
        'Portable and convenient',
        'Cost-effective manufacturing'
      ],
      products: [
        { id: 1, name: 'PainRelief 500mg', dosage: '500mg', use: 'Pain and fever relief' },
        { id: 2, name: 'CardioGuard 75mg', dosage: '75mg', use: 'Cardiovascular protection' },
        { id: 3, name: 'NeuroCalm 10mg', dosage: '10mg', use: 'Anxiety and stress management' },
        { id: 4, name: 'DiaBalance 850mg', dosage: '850mg', use: 'Diabetes management' }
      ],
      precautions: 'Take with a full glass of water. Do not crush or chew extended-release tablets. Consult your physician before use if pregnant or breastfeeding.'
    },
    capsules: {
      name: 'Capsules',
      icon: <Pill className="w-20 h-20 text-accent-500" />,
      description: 'Capsules are solid dosage forms in which the drug is enclosed within a gelatin shell. They come in hard or soft forms and are ideal for drugs with unpleasant taste or odor.',
      benefits: [
        'Mask unpleasant taste and odor',
        'Easier to swallow than tablets',
        'Flexible dosing options',
        'Can contain liquids or powders',
        'Faster dissolution than some tablets'
      ],
      products: [
        { id: 1, name: 'OmegaHealth 1000mg', dosage: '1000mg', use: 'Essential fatty acids supplement' },
        { id: 2, name: 'ProbioMax 10B CFU', dosage: '10B CFU', use: 'Digestive health and microbiome support' },
        { id: 3, name: 'VitaminD3 5000IU', dosage: '5000IU', use: 'Vitamin D supplementation' },
        { id: 4, name: 'JointFlex 400mg', dosage: '400mg', use: 'Joint pain relief and mobility support' }
      ],
      precautions: 'Swallow whole with water. Do not open or chew capsules unless directed. Store in a cool, dry place away from direct sunlight.'
    },
    injectables: {
      name: 'Injectables',
      icon: <Syringe className="w-20 h-20 text-secondary-500" />,
      description: 'Injectable medications are sterile solutions or suspensions administered through various routes including intravenous, intramuscular, or subcutaneous injection.',
      benefits: [
        'Rapid onset of action',
        '100% bioavailability',
        'Ideal for patients who cannot take oral medications',
        'Precise dosing control',
        'Suitable for emergency situations'
      ],
      products: [
        { id: 1, name: 'InsulinFast 100U/mL', dosage: '100U/mL', use: 'Diabetes management' },
        { id: 2, name: 'AntibioMax 1g', dosage: '1g', use: 'Broad-spectrum antibiotic' },
        { id: 3, name: 'PainAway 30mg/mL', dosage: '30mg/mL', use: 'Severe pain management' },
        { id: 4, name: 'IronBoost 50mg/mL', dosage: '50mg/mL', use: 'Iron deficiency treatment' }
      ],
      precautions: 'For professional administration only. Check for solution clarity before use. Dispose of needles in proper sharps containers. Rotate injection sites.'
    },
    'creams-ointments': {
      name: 'Creams & Ointments',
      icon: <Disc className="w-20 h-20 text-primary-500" />,
      description: 'Topical formulations designed for application to the skin or mucous membranes. Creams are oil-in-water emulsions while ointments are greasier preparations.',
      benefits: [
        'Localized treatment with minimal systemic effects',
        'Easy application to affected areas',
        'Moisturizing and protective properties',
        'Reduced risk of gastrointestinal side effects',
        'Suitable for all age groups'
      ],
      products: [
        { id: 1, name: 'DermaHeal 1%', dosage: '1%', use: 'Anti-inflammatory for skin conditions' },
        { id: 2, name: 'FungalClear 2%', dosage: '2%', use: 'Antifungal treatment' },
        { id: 3, name: 'BurnRelief Gel', dosage: '2.5%', use: 'Burn treatment and pain relief' },
        { id: 4, name: 'PsoriaClear 0.05%', dosage: '0.05%', use: 'Psoriasis management' }
      ],
      precautions: 'Apply only to clean, dry skin. Wash hands before and after application. Avoid contact with eyes. Do not cover with airtight dressings unless directed.'
    },
    'syrups-suspensions': {
      name: 'Syrups & Suspensions',
      icon: <Flask className="w-20 h-20 text-accent-500" />,
      description: 'Liquid formulations designed for oral administration. Syrups are concentrated sugar solutions while suspensions contain undissolved particles that require shaking before use.',
      benefits: [
        'Easier administration for children and elderly',
        'Flexible dosing with measuring devices',
        'Faster absorption than solid forms',
        'Can mask unpleasant tastes effectively',
        'Suitable for patients with swallowing difficulties'
      ],
      products: [
        { id: 1, name: 'CoughEase Syrup', dosage: '10mg/5mL', use: 'Cough suppressant' },
        { id: 2, name: 'AntacidPlus Suspension', dosage: '400mg/5mL', use: 'Acid neutralization' },
        { id: 3, name: 'PediatricParacetamol', dosage: '120mg/5mL', use: 'Fever and pain relief for children' },
        { id: 4, name: 'AllerRelief Syrup', dosage: '5mg/5mL', use: 'Antihistamine for allergy symptoms' }
      ],
      precautions: 'Shake suspensions well before use. Use provided measuring device for accurate dosing. Store according to package instructions. Discard after expiration date.'
    }
  };

  const category = categoryData[categorySlug];

  if (!category) {
    return (
      <div className="container mx-auto py-16 px-4 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Category Not Found</h1>
        <p className="text-gray-600 mb-8">The requested product category does not exist.</p>
        <Link to="/" className="bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="mr-6 mb-4 md:mb-0">{category.icon}</div>
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">{category.name}</h1>
            <p className="text-xl text-gray-600">{category.description}</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">Key Benefits</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {category.benefits.map((benefit, index) => (
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
            {category.products.map((product) => (
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
              <p className="text-gray-700">{category.precautions}</p>
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
};

export default ProductCategoryPage;