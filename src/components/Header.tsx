// 'use client';

// import Link from 'next/link';
// import { usePathname, useRouter } from 'next/navigation';

// export default function Header() {
//   const router = useRouter();
//   const pathname = usePathname();

//   const scrollToSection = async (sectionId: string) => {
//     if (pathname !== '/') {
//       // If we're not on the home page, navigate home first
//       router.push('/');
//       // After navigation, wait a bit for the page to load then scroll
//       setTimeout(() => {
//         if (sectionId === 'top') {
//           window.scrollTo({ top: 0, behavior: 'smooth' });
//         } else {
//           const element = document.getElementById(sectionId);
//           if (element) {
//             element.scrollIntoView({ behavior: 'smooth' });
//           }
//         }
//       }, 100);
//     } else {
//       // If we're already on the home page, just scroll
//       if (sectionId === 'top') {
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//       } else {
//         const element = document.getElementById(sectionId);
//         if (element) {
//           element.scrollIntoView({ behavior: 'smooth' });
//         }
//       }
//     }
//   };

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-[#E6E6E6]/80 backdrop-blur-sm">
//       <nav className="container mx-auto px-4 py-4">
//         <ul className="flex justify-center space-x-8 text-lg">
//           <li>
//             <button
//               onClick={() => scrollToSection('top')}
//               className="hover:text-gray-600 transition-colors"
//             >
//               Home
//             </button>
//           </li>
//           {/* <li>
//             <button 
//               onClick={() => scrollToSection('experience')} 
//               className="hover:text-gray-600 transition-colors"
//             >
//               Experience
//             </button>
//           </li>
//           <li>
//             <button 
//               onClick={() => scrollToSection('projects')} 
//               className="hover:text-gray-600 transition-colors"
//             >
//               Projects
//             </button>
//           </li> */}
//           <li>
//             <Link href="/about" className="hover:text-gray-600 transition-colors">
//               About
//             </Link>
//           </li>
//           {/* <li>
//             <Link href="/contact" className="hover:text-gray-600 transition-colors">
//               Contact
//             </Link>
//           </li> */}
//         </ul>
//       </nav>
//     </header>
//   );
// } 



// 'use client';

// import Link from 'next/link';
// import Image from 'next/image';
// import { usePathname, useRouter } from 'next/navigation';

// export default function Header() {
//   const router = useRouter();
//   const pathname = usePathname();

//   const scrollToSection = async (sectionId: string) => {
//     if (pathname !== '/') {
//       router.push('/');
//       setTimeout(() => {
//         if (sectionId === 'top') {
//           window.scrollTo({ top: 0, behavior: 'smooth' });
//         } else {
//           document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
//         }
//       }, 100);
//     } else {
//       if (sectionId === 'top') {
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//       } else {
//         document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
//       }
//     }
//   };

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-[#E6E6E6]/80 backdrop-blur-sm">
//       <nav className="container mx-auto px-4 py-4">
//         <div className="flex items-center justify-between">
//           {/* Logo on the left */}
//           <div className="flex-shrink-0">
//             <Link href="/" className="block">
//               <Image
//                 src="/quranium.svg"
//                 alt="My Logo"
//                 width={200}    // adjust as needed
//                 height={200}   // adjust as needed
//               />
//             </Link>
//           </div>

//           {/* Nav links in the center/right */}
//           <ul className="flex space-x-8 text-lg">
//             <li>
//               <button
//                 onClick={() => scrollToSection('top')}
//                 className="hover:text-gray-600 transition-colors"
//               >
//                 Home
//               </button>
//             </li>
//             <li>
//               <Link
//                 href="/about"
//                 className="hover:text-gray-600 transition-colors"
//               >
//                 About
//               </Link>
//             </li>
//             {/* add more items here */}
//           </ul>
//         </div>
//       </nav>
//     </header>
//   );
// }




'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { IconMenu2, IconX } from '@tabler/icons-react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const scrollToSection = async (sectionId: string) => {
    if (pathname !== '/') {
      router.push('/');
      setTimeout(() => {
        if (sectionId === 'top') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      if (sectionId === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navItems = [
    { label: 'Home', action: () => scrollToSection('top') },
    { label: 'About', href: '/about' },
    // add more items here
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#E6E6E6]/80 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/quranium.svg"
            alt="Logo"
            width={48}
            height={48}
            className="w-auto h-12"
          />
        </Link>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-8 text-lg">
          {navItems.map((item, idx) => (
            <li key={idx}>
              {item.href ? (
                <Link
                  href={item.href}
                  className="hover:text-gray-600 transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  onClick={item.action}
                  className="hover:text-gray-600 transition-colors"
                >
                  {item.label}
                </button>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <IconX size={24} />
          ) : (
            <IconMenu2 size={24} />
          )}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-[#E6E6E6]/90 backdrop-blur-sm">
          <ul className="flex flex-col space-y-2 px-4 pb-4">
            {navItems.map((item, idx) => (
              <li key={idx}>
                {item.href ? (
                  <Link
                    href={item.href}
                    className="block py-2 hover:text-gray-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    onClick={item.action}
                    className="w-full text-left py-2 hover:text-gray-600 transition-colors"
                  >
                    {item.label}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
