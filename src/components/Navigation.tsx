import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navigation: React.FC = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src="/images/logos/Logo_Light_Mode.webp" 
                alt="S&M Painting Logo" 
                width={150} 
                height={50} 
                className="h-12 w-auto"
                priority
              />
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <Link 
              href="/" 
              className="border-transparent text-gray-500 hover:border-brand-primary hover:text-brand-primary inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              href="/gallery" 
              className="border-transparent text-gray-500 hover:border-brand-primary hover:text-brand-primary inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200"
            >
              Gallery
            </Link>
            <Link 
              href="/services" 
              className="border-transparent text-gray-500 hover:border-brand-primary hover:text-brand-primary inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200"
            >
              Services
            </Link>
          </div>
          <div className="sm:hidden">
            {/* Mobile menu button could go here */}
            <button type="button" className="text-gray-500 hover:text-brand-primary" aria-label="Open menu">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <title>Menu</title>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
