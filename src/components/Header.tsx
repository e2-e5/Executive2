import React from 'react';
import { Hexagon } from 'lucide-react';

export function Header() {
  return (
    <header className="w-full border-b border-white/10 bg-[#0a1114]/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded border border-primary text-primary bg-primary/10">
              <Hexagon className="w-5 h-5" />
            </div>
            <span className="text-white font-display font-bold text-xl tracking-tight">EXECUTIVE</span>
          </div>
        </div>
      </div>
    </header>
  );
}
