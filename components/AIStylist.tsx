
import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage, Product } from '../types';
import { getAIStylistResponse } from '../services/geminiService';

interface AIStylistProps {
  products: Product[];
}

const AIStylist: React.FC<AIStylistProps> = ({ products }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Good evening. I am your Luxe Concierge. How may I elevate your style today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = { role: 'user' as const, text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const response = await getAIStylistResponse(input, products);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 w-80 md:w-96">
      <div className="bg-white shadow-2xl overflow-hidden flex flex-col border border-neutral-200 h-[500px]">
        <div className="bg-neutral-900 text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full gold-gradient flex items-center justify-center">
              <span className="text-[10px] text-neutral-900 font-bold">L</span>
            </div>
            <h4 className="text-sm uppercase tracking-widest font-semibold">AI Stylist</h4>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-[10px] text-neutral-400 uppercase tracking-widest">Active</span>
          </div>
        </div>
        
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-neutral-50">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] p-3 text-xs leading-relaxed ${
                m.role === 'user' 
                  ? 'bg-neutral-900 text-white rounded-l-lg rounded-tr-lg' 
                  : 'bg-white text-neutral-800 rounded-r-lg rounded-tl-lg shadow-sm border border-neutral-100'
              }`}>
                {m.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white p-3 text-[10px] text-neutral-400 italic rounded-r-lg rounded-tl-lg shadow-sm border border-neutral-100">
                Pondering elegance...
              </div>
            </div>
          )}
        </div>
        
        <div className="p-4 border-t border-neutral-100 bg-white">
          <div className="flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Inquire here..."
              className="flex-1 text-xs outline-none bg-neutral-50 p-3 border border-neutral-100 focus:border-amber-200 transition-colors"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="bg-neutral-900 text-white px-4 hover:bg-neutral-800 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIStylist;
