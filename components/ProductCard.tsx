
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden mb-4 aspect-[4/5] bg-neutral-100">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button className="bg-white text-neutral-900 px-6 py-3 text-sm uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            View Details
          </button>
        </div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 text-[10px] uppercase tracking-tighter">
          {product.category}
        </div>
      </div>
      
      <div className="flex justify-between items-start">
        <div>
          <p className="text-[10px] uppercase tracking-widest text-amber-600 mb-1 font-semibold">{product.brand}</p>
          <h3 className="text-xl font-serif mb-1 group-hover:text-amber-800 transition-colors">{product.name}</h3>
        </div>
        <p className="text-lg font-medium">${product.price.toLocaleString()}</p>
      </div>
      
      <button 
        onClick={() => window.open(product.affiliateUrl, '_blank')}
        className="mt-4 w-full border border-neutral-300 py-3 text-xs uppercase tracking-[0.2em] font-medium hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all"
      >
        Acquire Now
      </button>
    </div>
  );
};

export default ProductCard;
