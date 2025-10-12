import React from 'react';
import HeroSlider from '../components/HeroSlider';
import WelcomeSection from '../components/WelcomeSection';
import ProductCategories from '../components/ProductCategories';
import ServicesSection from '../components/ServicesSection';
import ContactForm from '../components/ContactForm';

const Home: React.FC = () => {
  return (
    <div>
      <HeroSlider />
      <WelcomeSection />
      <ProductCategories />
      <ServicesSection />
      <ContactForm />
    </div>
  );
};

export default Home;