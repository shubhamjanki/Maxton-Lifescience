import React, { useState, useMemo, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Search } from 'lucide-react';
import {ALL_INJECTION} from '../data/injectionList';
import Logo from '../components/Logo';

interface Product {
  genericName: string;
  composition: string;
  category: string;
}

const Injection: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const itemsPerPage = 20;

  // Flatten all products with category information
  const allProducts: Product[] = useMemo(() => {
    return ALL_INJECTION.flatMap(category => 
      category.products.map(product => ({
        ...product,
        category: category.name
      }))
    );
  }, []);

  // Filter products based on search term
  const filteredProducts = useMemo(() => {
    if (!searchTerm.trim()) return allProducts;
    
    const term = searchTerm.toLowerCase();
    return allProducts.filter(product =>
      product.genericName.toLowerCase().includes(term) ||
      product.composition.toLowerCase().includes(term) ||
      product.category.toLowerCase().includes(term)
    );
  }, [allProducts, searchTerm]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  // Reset to page 1 when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  // Handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchTerm(searchInput);
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      // Scroll to top when changing pages
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      const start = Math.max(1, currentPage - 2);
      const end = Math.min(totalPages, start + maxVisiblePages - 1);
      
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
    }
    
    return pages;
  };

  // Group products by category for display
  const groupedProducts = useMemo(() => {
    const groups: { [key: string]: Product[] } = {};
    currentProducts.forEach(product => {
      if (!groups[product.category]) {
        groups[product.category] = [];
      }
      groups[product.category].push(product);
    });
    return groups;
  }, [currentProducts]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Logo and Title */}
      <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-4 md:py-2">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-2 md:space-x-4">
                <span className="text-white font-bold text-sm md:text-lg"><Logo/></span>
             
                        <div>
              <h1 className="text-xs md:text-lg font-bold text-gray-800">Maxton Lifescience Pvt. Ltd.</h1>
               
            </div>
          </div>
          <div className="bg-black text-yellow-400 px-3 py-2 md:px-8 md:py-4 rounded-lg">
            <h2 className="text-xl md:text-4xl font-bold">INJECTIONS</h2>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="bg-gray-100 py-4 md:py-6">
        <div className="container mx-auto px-4">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search medicines, compositions, or categories..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium text-sm md:text-base"
            >
              Search
            </button>
          </form>
          
          {/* Search Results Info */}
          <div className="text-center mt-4 text-sm md:text-base text-gray-600">
            {searchTerm ? (
              <p>
                Found <span className="font-semibold text-blue-600">{filteredProducts.length}</span> results for "{searchTerm}"
                {filteredProducts.length > 0 && (
                  <span> - Showing {startIndex + 1}-{Math.min(endIndex, filteredProducts.length)} of {filteredProducts.length}</span>
                )}
              </p>
            ) : (
              <p>Showing {startIndex + 1}-{Math.min(endIndex, allProducts.length)} of {allProducts.length} total products</p>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No products found</h3>
            <p className="text-gray-500">Try adjusting your search terms or browse all products.</p>
            {searchTerm && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSearchInput('');
                }}
                className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Clear Search
              </button>
            )}
          </div>
        ) : (
          <>
            {/* Products Display */}
            {Object.entries(groupedProducts).map(([categoryName, products]) => (
              <div key={categoryName} className="mb-8">
                <div className="bg-gray-100 p-2 md:p-4 mb-4">
                  <h3 className="text-lg md:text-2xl font-bold text-center text-gray-800">{categoryName}</h3>
                </div>
                
                <div className="bg-yellow-100 p-2 mb-2 overflow-x-auto">
                  <div className="grid grid-cols-2 gap-2 md:gap-4 min-w-full">
                    <div className="font-bold text-gray-800 text-xs md:text-sm">GENERIC NAME</div>
                    <div className="font-bold text-gray-800 text-xs md:text-sm">COMPOSITION</div>
                  </div>
                </div>

                <div className="space-y-1 overflow-x-auto">
                  {products.map((product, index) => (
                    <div key={`${categoryName}-${index}`} className={`grid grid-cols-2 gap-2 md:gap-4 p-2 text-xs md:text-sm min-w-full ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50 transition-colors`}>
                      <div className="font-medium text-gray-800 break-words">{product.genericName}</div>
                      <div className="text-gray-700 break-words">{product.composition}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-12 py-8">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`flex items-center space-x-2 px-3 md:px-4 py-2 rounded-lg transition-colors text-sm md:text-base ${
                    currentPage === 1
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
                  <span>Previous</span>
                </button>

                <div className="flex space-x-1 md:space-x-2">
                  {getPageNumbers().map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`w-8 h-8 md:w-10 md:h-10 rounded-lg font-semibold transition-colors text-sm md:text-base ${
                        currentPage === page
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`flex items-center space-x-2 px-3 md:px-4 py-2 rounded-lg transition-colors text-sm md:text-base ${
                    currentPage === totalPages
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                  }`}
                >
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>
            )}

            {/* Page Info */}
            <div className="text-center text-gray-600 mt-4 text-sm md:text-base">
              Page {currentPage} of {totalPages}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Injection;