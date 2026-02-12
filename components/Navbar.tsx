
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <h1 className="text-2xl font-bold tracking-widest text-neutral-900">LUXE</h1>
          <div className="hidden md:flex space-x-6 text-sm font-medium tracking-wide uppercase text-neutral-600">
            <a href="#" className="hover:text-amber-600 transition-colors">Boutique</a>
            <a href="#" className="hover:text-amber-600 transition-colors">Editorial</a>
            <a href="#" className="hover:text-amber-600 transition-colors">The Concierge</a>
          </div>
        </div>
        
        <div className="flex items-center space-x-6">
          <button className="text-neutral-600 hover:text-neutral-900 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button className="bg-neutral-900 text-white px-6 py-2 text-sm uppercase tracking-widest hover:bg-neutral-800 transition-colors">
            Account
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
