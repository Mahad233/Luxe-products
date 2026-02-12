
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import AIStylist from './components/AIStylist';
import Footer from './components/Footer';
import { LUXE_PRODUCTS } from './constants';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const categories = ['All', 'Timepieces', 'Leather', 'Tech', 'Home', 'Accessories'];

  const filteredProducts = activeCategory === 'All' 
    ? LUXE_PRODUCTS 
    : LUXE_PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <Hero />

      {/* Featured Collection Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-xl">
              <span className="text-xs uppercase tracking-[0.4em] text-amber-600 font-bold mb-4 block">Seasonal Edit</span>
              <h2 className="text-5xl font-serif">Curated Collections</h2>
              <p className="mt-6 text-neutral-500 font-light leading-relaxed">
                Hand-picked by our international team of connoisseurs. Every item in our gallery represents the pinnacle of craftsmanship and heritage.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-6 border-b border-neutral-100 pb-2">
              {categories.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-[10px] uppercase tracking-[0.3em] pb-2 transition-all relative ${
                    activeCategory === cat ? 'text-neutral-900 font-bold' : 'text-neutral-400 hover:text-neutral-700'
                  }`}
                >
                  {cat}
                  {activeCategory === cat && (
                    <div className="absolute bottom-0 left-0 w-full h-px bg-neutral-900"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Section */}
      <section className="py-24 bg-[#f8f7f4] border-y border-neutral-200">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative group overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1491336477066-31156b5e4f3c?auto=format&fit=crop&q=80&w=1200" 
                alt="Editorial cover"
                className="w-full aspect-[4/5] object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
            
            <div className="space-y-10">
              <span className="text-xs uppercase tracking-[0.4em] text-amber-600 font-bold">The Editorial</span>
              <h3 className="text-5xl font-serif italic">Beyond the Facade: The Art of Haute Horlogerie</h3>
              <p className="text-lg text-neutral-600 font-light leading-relaxed italic">
                "Luxury is not about the price tag, but the story behind the craft. It's the silent witness to the hours of dedication by a master artisan in a quiet workshop in Geneva or Milan."
              </p>
              <div className="pt-6">
                <button className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] font-bold group">
                  Read the Journal
                  <span className="w-12 h-px bg-neutral-900 transition-all group-hover:w-20"></span>
                </button>
              </div>
              
              <div className="grid grid-cols-2 gap-8 pt-10 border-t border-neutral-200">
                <div>
                  <h4 className="text-2xl font-serif mb-2">12,000+</h4>
                  <p className="text-[10px] uppercase tracking-widest text-neutral-500 font-semibold">Elite Members</p>
                </div>
                <div>
                  <h4 className="text-2xl font-serif mb-2">48</h4>
                  <p className="text-[10px] uppercase tracking-widest text-neutral-500 font-semibold">Heritage Brands</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <span className="text-xs uppercase tracking-[0.5em] text-neutral-400 mb-8 block">Private List</span>
          <h2 className="text-5xl font-serif mb-8 italic">Join The Circle</h2>
          <p className="text-neutral-500 font-light mb-12 text-lg">
            Receive exclusive early access to curated collections and private events. Elegance delivered to your inbox once a week.
          </p>
          <div className="flex flex-col sm:flex-row gap-0 group border border-neutral-200 overflow-hidden focus-within:border-amber-400 transition-colors">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-8 py-5 outline-none text-sm font-light tracking-widest"
            />
            <button className="bg-neutral-900 text-white px-10 py-5 uppercase text-xs tracking-[0.3em] font-bold hover:bg-neutral-800 transition-colors">
              Request Invitation
            </button>
          </div>
        </div>
      </section>

      <AIStylist products={LUXE_PRODUCTS} />
      
      <Footer />
    </div>
  );
};

export default App;
