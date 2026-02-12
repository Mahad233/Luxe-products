
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-white">
        <div className="max-w-2xl">
          <span className="text-sm uppercase tracking-[0.3em] mb-4 block font-medium text-amber-400">Excellence Redefined</span>
          <h2 className="text-6xl md:text-8xl font-serif mb-8 leading-tight">Curated Luxury for the Discerning.</h2>
          <p className="text-lg md:text-xl text-neutral-200 mb-10 font-light leading-relaxed">
            Discover a hand-selected collection of the world's most exquisite timepieces, accessories, and bespoke living essentials.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="gold-gradient text-neutral-900 px-10 py-4 font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity">
              Explore Collection
            </button>
            <button className="backdrop-blur-md bg-white/10 border border-white/30 text-white px-10 py-4 font-semibold uppercase tracking-widest hover:bg-white/20 transition-all">
              Watch Film
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white animate-bounce opacity-50">
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-white/50"></div>
      </div>
    </section>
  );
};

export default Hero;
