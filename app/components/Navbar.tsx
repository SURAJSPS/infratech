'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ServiceToggle from './ServiceToggle';

interface NavbarProps {
  activeService: 'IT' | 'Civil';
  onServiceChange: (service: 'IT' | 'Civil') => void;
}

export default function Navbar({  onServiceChange }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Company Name */}
          <div className="flex flex-col">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">
                RK INFRATECH
              </span>
            </Link>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              IT & Civil Engineering
            </span>
          </div>

          {/* Center Service Toggle */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
            <ServiceToggle onServiceChange={onServiceChange} />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
              Home
            </Link>
            <Link href="#services" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
              Services
            </Link>
            <Link href="#team" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
              Team
            </Link>
            <Link href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="px-4 py-2">
              <ServiceToggle onServiceChange={onServiceChange} />
            </div>
            <Link
              href="/"
              className="block px-4 py-2.5 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#services"
              className="block px-4 py-2.5 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#team"
              className="block px-4 py-2.5 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Team
            </Link>
            <Link
              href="#contact"
              className="block px-4 py-2.5 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 