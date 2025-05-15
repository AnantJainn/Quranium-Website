'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = async (sectionId: string) => {
    if (pathname !== '/') {
      // If we're not on the home page, navigate home first
      router.push('/');
      // After navigation, wait a bit for the page to load then scroll
      setTimeout(() => {
        if (sectionId === 'top') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 100);
    } else {
      // If we're already on the home page, just scroll
      if (sectionId === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#E6E6E6]/80 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex justify-center space-x-8 text-lg">
          <li>
            <button
              onClick={() => scrollToSection('top')}
              className="hover:text-gray-600 transition-colors"
            >
              Home
            </button>
          </li>
          {/* <li>
            <button 
              onClick={() => scrollToSection('experience')} 
              className="hover:text-gray-600 transition-colors"
            >
              Experience
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="hover:text-gray-600 transition-colors"
            >
              Projects
            </button>
          </li> */}
          <li>
            <Link href="/about" className="hover:text-gray-600 transition-colors">
              About
            </Link>
          </li>
          {/* <li>
            <Link href="/contact" className="hover:text-gray-600 transition-colors">
              Contact
            </Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
} 