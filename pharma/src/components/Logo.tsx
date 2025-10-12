import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center p-2 md:p-3 m-2 md:m-3">
      <img 
        src="/maxton.png" 
        alt="Aayuvardan Logo" 
        className="w-24 h-24 md:w-32 md:h-32 object-contain transform hover:scale-105 transition-transform duration-300"
      />
    </div>
  );
};

export default Logo;