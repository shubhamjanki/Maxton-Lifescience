// src/components/LoadingScreen.tsx
import React, { useState, useEffect } from 'react';
import Logo from './Logo';
const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => Math.min(prev + Math.floor(Math.random() * 5) + 1, 100));
    }, 100);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Glass morphism container */}
      <div className="relative w-full max-w-md h-[70vh] flex flex-col items-center justify-center backdrop-blur-3xl bg-white/30 rounded-3xl border border-white/50 shadow-2xl overflow-hidden">
        
        {/* Animated floating elements */}
        <div className="absolute top-10 left-10 w-24 h-24 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full backdrop-blur-sm animate-float1"></div>
        <div className="absolute bottom-20 right-16 w-16 h-16 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 rounded-full backdrop-blur-sm animate-float2"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-gradient-to-r from-indigo-400/20 to-violet-400/20 rounded-full backdrop-blur-sm animate-float3"></div>
        
        {/* Logo with glass effect */}
        <div className="relative z-10 mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-3 rounded-2xl backdrop-blur-md shadow-xl">
            <div className="bg-white/90 backdrop-blur-sm w-24 h-24 rounded-xl flex items-center justify-center shadow-inner">
                  <div className="flex items-center justify-center w-full h-full">
              <Logo style={{ width: '65px', height: '65px', objectFit: 'contain' }} />
              </div>
            </div>  
          </div>
        </div>
        
        {/* Loading text and animation */}
        <div className="relative z-10 text-center mb-10">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700 mb-2">
            Maxton Lifescience
          </h1>
          <p className="text-gray-600 font-light">Maxton Lifescience  </p>
        </div>
        
        {/* Progress bar with glass effect */}
        <div className="relative z-10 w-3/4 max-w-xs mb-6">
          <div className="text-center text-gray-600 mb-2 text-sm">
            Loading {progress}%
          </div>
          <div className="h-4 bg-white/40 backdrop-blur-sm rounded-full border border-white/50 shadow-inner overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        
        {/* Animated dots */}
        <div className="flex space-x-2 relative z-10">
          {[...Array(3)].map((_, i) => (
            <div 
              key={i}
              className="w-3 h-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full"
              style={{ 
                animation: `pulse 1.5s infinite`,
                animationDelay: `${i * 0.2}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* Subtle footer */}
        <div className="absolute bottom-4 text-gray-500 text-sm">
          Transforming healthcare experiences
        </div>
      </div>
      
      {/* CSS for animations */}
      <style jsx>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(10px, -15px) rotate(5deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-12px, 10px) rotate(-3deg); }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(5px, 8px) rotate(2deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.5; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        .animate-float1 {
          animation: float1 8s ease-in-out infinite;
        }
        .animate-float2 {
          animation: float2 10s ease-in-out infinite;
        }
        .animate-float3 {
          animation: float3 12s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;