// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// const HeroSection: React.FC = () => {
//   const slides = [
//     {
//       image: 'https://images.unsplash.com/photo-1559298947-270ce106ac00?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       title: 'Innovative Pharmaceutical Solutions',
//       description: 'Discover our advanced medications developed through rigorous clinical research and scientific innovation.'
//     },
//     {
//       image: 'https://ehealth.eletsonline.com/wp-content/uploads/2015/12/pharma-net.jpg',
//       title: 'Precision Medicine Manufacturing',
//       description: 'GMP-certified production of high-quality pharmaceuticals with strict quality control standards.'
//     },
//     {
//       image: 'https://thumbs.dreamstime.com/b/automated-production-line-pharmaceutical-vials-modern-factory-showcasing-precision-manufacturing-quality-control-323154002.jpg',
//       title: 'Advanced Therapeutics',
//       description: 'Specialized medications targeting complex conditions with improved efficacy and safety profiles.'
//     },
//     {
//       image: 'https://ehealth.eletsonline.com/wp-content/uploads/2015/12/pharma-net.jpg',
//       title: 'Global Healthcare Partner',
//       description: 'Trusted by medical professionals worldwide for reliable, evidence-based pharmaceutical solutions.'
//     }
//   ];

//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [animationKey, setAnimationKey] = useState(0); // Key to force re-render animations

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % slides.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     // Reset animation key to force re-render of animated elements
//     setAnimationKey(prevKey => prevKey + 1);
//   }, [currentImageIndex]);

//   const goToSlide = (index: number) => {
//     setCurrentImageIndex(index);
//   };

//   const previousSlide = () => {
//     setCurrentImageIndex((prevIndex) => 
//       prevIndex === 0 ? slides.length - 1 : prevIndex - 1
//     );
//   };

//   const nextSlide = () => {
//     setCurrentImageIndex((prevIndex) => 
//       (prevIndex + 1) % slides.length
//     );
//   };

//   return (
//     <section className="relative">
//       {/* Hero background image carousel */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/40 z-10"></div>
//       {slides.map((slide, index) => (
//         <div
//           key={index}
//           className={`absolute inset-0 h-[500px] bg-cover bg-center transition-opacity duration-1000 ${
//             index === currentImageIndex ? 'opacity-100' : 'opacity-0'
//           }`}
//           style={{
//             backgroundImage: `url('${slide.image}')`
//           }}
//         ></div>
//       ))}
      
//       {/* Navigation arrows */}
//       <button 
//         onClick={previousSlide}
//         className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-all duration-300 transform hover:scale-110"
//         aria-label="Previous slide"
//       >
//         <ChevronLeft className="w-6 h-6" />
//       </button>
//       <button 
//         onClick={nextSlide}
//         className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-all duration-300 transform hover:scale-110"
//         aria-label="Next slide"
//       >
//         <ChevronRight className="w-6 h-6" />
//       </button>
      
//       {/* Hero content with animation keys */}
//       <div className="relative h-[500px] z-20 flex items-center justify-center overflow-hidden">
//         <div className="container mx-auto px-4 text-center">
//           <h1 
//             key={`title-${animationKey}`} // Unique key for each slide change
//             className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg animate-fade-in-down"
//           >
//             {slides[currentImageIndex].title}
//           </h1>
//           <p 
//             key={`desc-${animationKey}`} // Unique key for each slide change
//             className="text-md md:text-lg lg:text-xl text-white max-w-3xl mx-auto mb-8 drop-shadow-md animate-fade-in-down animation-delay-100"
//           >
//             {slides[currentImageIndex].description}
//           </p>
//           <button 
//             key={`btn-${animationKey}`} // Unique key for each slide change
//             className="bg-primary-500 text-white px-8 py-3 rounded-lg hover:bg-primary-600 transition-all duration-300 shadow-md transform hover:scale-105 animate-fade-in-down animation-delay-200"
//           >
//             Explore Products
//           </button>
//         </div>
//       </div>

//       {/* Carousel indicators */}
//       <div className="absolute bottom-4 left-0 right-0 z-30 flex justify-center space-x-2">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goToSlide(index)}
//             className={`w-3 h-3 rounded-full transition-all duration-300 transform
//               ${index === currentImageIndex 
//                 ? 'bg-white scale-110' 
//                 : 'bg-white/50 hover:bg-white/70 hover:scale-105'
//               }`}
//             aria-label={`Go to slide ${index + 1}`}
//           ></button>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default HeroSection;