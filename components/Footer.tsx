
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-serif mb-6 italic">Luxe Products</h2>
            <p className="text-neutral-400 max-w-sm mb-8 font-light leading-relaxed">
              Redefining the digital luxury experience through curated selections and intelligent personalization.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-neutral-400 hover:text-amber-500 transition-colors">Instagram</a>
              <a href="#" className="text-neutral-400 hover:text-amber-500 transition-colors">Editorial</a>
              <a href="#" className="text-neutral-400 hover:text-amber-500 transition-colors">Press</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold mb-6 text-amber-500">Maison</h4>
            <ul className="space-y-4 text-sm text-neutral-400 font-light">
              <li><a href="#" className="hover:text-white transition-colors">About Luxe</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Concierge Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Affiliate Program</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold mb-6 text-amber-500">Discover</h4>
            <ul className="space-y-4 text-sm text-neutral-400 font-light">
              <li><a href="#" className="hover:text-white transition-colors">Timepieces</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Haute Couture</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Modern Living</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Collector's Editions</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-neutral-500 uppercase tracking-widest">
            © 2024 LUXE PRODUCTS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-10 text-[10px] uppercase tracking-widest text-neutral-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
