import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/Header';
// import HeroSection from './components/HeroSection';
import ProductCategories from './components/ProductCategories';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import ProductCategoryPage from './components/ProductCategoryPage';
import AboutUs from './pages/AboutUs';
import Tablets from './pages/Tablets';
import Capsules from './pages/Capsules';
import Ointments from './pages/Ointments';
import Injections from './pages/Injections';
import Syrups from './pages/Syrups';
import ServicesSection from './components/ServicesSection';
import WelcomeSection from './components/WelcomeSection';
import ProductGallery from './pages/ProductGallery';
import ContactUs from './pages/ContactUs';
import EthicsPage from './pages/EthicsPage';
import VisionPage from './pages/VisionPage';
import OurPresence from './components/OurPresence';
// import TabletGallery from './pages/TabletGallery';

// Home component for the main page
const Home: React.FC = () => {
  return (
    <>
      {/* <HeroSection /> */}
         
      <ProductCategories />
      <WelcomeSection/> 
      <ServicesSection />
    </>
  );
};

// Main layout with header and footer
const MainLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet /> {/* This is where page content will render */}
      </main>
      <Footer />
    </div>
  );
};

// Product page layout without header/footer
const ProductPageLayout: React.FC = () => {
  return (
    <main className="flex-grow">
      <Outlet /> {/* This is where product pages will render */}
    </main>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }, 3000);

    return () => clearTimeout(loadingTimer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {isLoading && (
        <div className={`fixed inset-0 z-[9999] transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          <LoadingScreen />
        </div>
      )}

      <Router>
        <div className={`flex flex-col min-h-screen transition-opacity duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
          <Routes>
            {/* Routes using main layout */}
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/our-presence" element={<OurPresence />} />
              <Route path="/products" element={<ProductCategories/>} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/product-gallery" element={<ProductGallery/>} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/about-us/ethics" element={<EthicsPage />} />
              {/* <Route path="/about-us/vision" element={<VisionPage />} /> */}
              <Route path="/tablets" element={<Tablets />} />
              <Route path="/capsules" element={<Capsules />} />
              <Route path="/ointments" element={<Ointments />} />
              <Route path="/injections" element={<Injections />} />
              <Route path="/syrups" element={<Syrups />} />

              {/* <Route path="/tablets/:tabletId" element={<TabletDetailPage />} />  */}
            </Route>
            
            {/* Routes using product layout */}
            <Route element={<ProductPageLayout />}>
              <Route path="/products/:categorySlug" element={<ProductCategoryPage />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;