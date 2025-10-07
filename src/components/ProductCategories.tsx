import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tablets, Pill, Droplet, Disc, Syringe, ChevronLeft, ChevronRight } from 'lucide-react';

const ProductCategories: React.FC = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselImages = [
    'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/4993093/pexels-photo-4993093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/6128974/pexels-photo-6128974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/4993239/pexels-photo-4993239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  ];

  const categories = [
    {
      name: 'Tablets',
      icon: <Tablets className="w-12 h-12 md:w-16 md:h-16 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />,
      route: '/tablets'
    },
    {
      name: 'Capsules',
      icon: <Pill className="w-12 h-12 md:w-16 md:h-16 text-green-600 group-hover:text-green-700 transition-colors duration-300" />,
      route: '/capsules'
    },
    {
      name: 'Ointments',
      icon: <Disc className="w-12 h-12 md:w-16 md:h-16 text-yellow-600 group-hover:text-yellow-700 transition-colors duration-300" />,
      route: '/ointments'
    },
    {
      name: 'Injections',
      icon: <Syringe className="w-12 h-12 md:w-16 md:h-16 text-red-600 group-hover:text-red-700 transition-colors duration-300" />,
      route: '/injections'
    },
    {
      name: 'Syrups',
      icon: <Droplet className="w-12 h-12 md:w-16 md:h-16 text-purple-600 group-hover:text-purple-700 transition-colors duration-300" />,
      route: '/syrups'
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const handleCategoryClick = (route: string) => {
    navigate(route);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <section className="py-16 relative bg-gray-50 overflow-hidden min-h-screen flex items-center">
      {/* Carousel Background */}
      <div className="absolute inset-0">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-20' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
        
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-black opacity-10"></div>
        
        {/* Carousel Controls */}
        <button 
          onClick={goToPrevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full hover:bg-opacity-90 transition-all z-20 shadow-md"
          aria-label="Previous background"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
        <button 
          onClick={goToNextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full hover:bg-opacity-90 transition-all z-20 shadow-md"
          aria-label="Next background"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>
        
        {/* Carousel Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-800">Our Product Categories</h2>
        <p className="text-gray-700 text-center max-w-2xl mx-auto mb-12 text-lg">
          Discover our range of authentic pharmaceutical products, carefully crafted using advanced methods and premium ingredients.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {categories.map((category, index) => (
            <div 
              key={index} 
              onClick={() => handleCategoryClick(category.route)}
              className="bg-white bg-opacity-90 p-6 rounded-xl shadow-lg text-center group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-gray-100"
            >
              <div className="flex justify-center mb-4">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-gray-900">
                {category.name}
              </h3>
              <p className="text-sm text-gray-600 mt-3">
                Explore our {category.name.toLowerCase()} collection
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button 
            onClick={() => navigate('/products')}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md font-medium text-lg"
          >
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;