'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import NavLink from './NavLink';
import MobileNavLink from './MobileNavLink';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), []);

  return (
    <header className="bg-[#E8E8E8] text-gray-900 w-full h-[100px] flex items-center font-sans fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" className="block w-fit h-fit">
              <Image
                src="/logofiuza.svg"
                alt="Fiuza Metais Logo"
                width={160}
                height={60}
                className="object-contain w-40 md:w-48"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <NavLink href="/">HOME</NavLink>
            <NavLink href="#processo">SOBRE</NavLink>
            <NavLink href="https://form.respondi.app/mdzhPm65">MENTORIA</NavLink>
            <NavLink href="#contato">CONTATO</NavLink>

            {/* Ícones do Instagram e WhatsApp */}
            <div className="flex space-x-4 ml-4">
              <a
                href="https://instagram.com/fiuzametais"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-gray-600 transition-colors"
              >
                <FaInstagram className="w-8 h-8" />
              </a>
              <a
                href="https://wa.me/558591505505"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-gray-600 transition-colors"
              >
                <FaWhatsapp className="w-8 h-8" />
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={toggleMenu}
            aria-label="Abrir menu"
            aria-expanded={isMenuOpen}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-full left-0 right-0 bg-[#E8E8E8] transition-all`}>
          <div className="flex flex-col items-center py-4 space-y-4">
            <MobileNavLink href="/" onClick={toggleMenu}>HOME</MobileNavLink>
            <MobileNavLink href="#processo" onClick={toggleMenu}>SOBRE</MobileNavLink>
            <MobileNavLink href="https://form.respondi.app/mdzhPm65" onClick={toggleMenu}>MENTORIA</MobileNavLink>
            <MobileNavLink href="#contato" onClick={toggleMenu}>CONTATO</MobileNavLink>
            <div className="flex space-x-6 pt-4">
              <a
                href="https://instagram.com/fiuzametais"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-gray-600 transition-colors"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a
                href="https://wa.me/558591505505"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-gray-600 transition-colors"
              >
                <FaWhatsapp className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
    </header>
    
    
  );
}