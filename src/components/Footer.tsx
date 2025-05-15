'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  IconBrandDiscord,
  IconBrandTelegram,
  IconBrandYoutube,
  IconBrandLinkedin,
  IconBrandInstagram,
} from '@tabler/icons-react';

export default function Footer() {
  const pathname = usePathname();
  const isContactPage = pathname === '/contact';

  if (isContactPage) return null;

  return (
    <footer className="bg-white text-gray-800">
      {/* Newsletter + logos */}
      <div className="container mx-auto px-6 py-12 flex flex-col lg:flex-row items-center lg:items-start gap-12">
        {/* Logo & CTA */}
        <div className="flex-shrink-0 text-center lg:text-left lg:w-1/4 space-y-4">
          <Link href="/" className="inline-block">
            <img src="/quranium-logo.svg" alt="Quranium" className="h-10" />
          </Link>
          <p className="text-sm">
            Sign up to our e-newsletter, <strong>Quranium Pulse</strong>.
          </p>
          <Link
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-red-600 text-red-600 rounded-lg hover:bg-red-50 transition"
          >
            SUBSCRIBE NOW&nbsp;<span className="text-xl">→</span>
          </Link>

          <div className="flex flex-wrap items-center gap-6 mt-6 justify-center lg:justify-start">
            <img src="/quantum-minds-logo.svg" alt="Quantum Minds" className="h-8" />
            <img src="/nextgen-program-logo.svg" alt="NextGen Innovators" className="h-8" />
          </div>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 flex-1">
          <FooterColumn title="About" links={[
            { label: 'Our Mission', href: '/about#mission' },
            { label: 'Team', href: '/about#team' },
          ]} />

          <FooterColumn title="Technical" links={[
            { label: 'Overview', href: '/technical#overview' },
            { label: 'Architecture', href: '/technical#architecture' },
            { label: 'Security', href: '/technical#security' },
          ]} />

          <FooterColumn title="Resources" links={[
            { label: 'Blogs', href: '/blogs' },
            { label: 'Press', href: '/press' },
            { label: 'Partners', href: '/partners' },
            { label: 'Media Kit', href: '/media-kit' },
            { label: 'Global Roadshow', href: '/roadshow' },
            { label: 'Quantum Minds Podcast', href: '/podcast' },
            { label: 'Quantum Security Awareness Day', href: '/qsad' },
          ]} />

          <FooterColumn title="DeQUIP" links={[
            { label: 'Digital Infrastructure', href: '/dequip#infrastructure' },
            { label: 'Finance and Payments', href: '/dequip#finance' },
            { label: 'Data Privacy and Security', href: '/dequip#privacy' },
            { label: 'Supply Chain and Logistics', href: '/dequip#supply-chain' },
            { label: 'Real World Assets (RWAs)', href: '/dequip#rwas' },
            { label: 'Government and Public Services', href: '/dequip#gov' },
            { label: 'Media and Entertainment', href: '/dequip#media' },
          ]} />

          <div className="space-y-4">
            <FooterColumn title="Ecosystem" links={[
              { label: 'Partners', href: '/partners' },
              { label: 'Developers', href: '/developers' },
            ]} />
            <FooterColumn title="Documentation" links={[
              { label: 'Quranium Blockchain', href: '/docs/blockchain' },
              { label: 'QSafe Wallet', href: '/docs/wallet' },
              { label: 'QRNScan', href: '/docs/scan' },
            ]} />
            <FooterColumn title="Quranium Core" links={[
              { label: 'QSafe Wallet', href: '/core/wallet' },
              { label: 'QRN Faucet', href: '/core/faucet' },
              { label: 'QRN Scan', href: '/core/scan' },
            ]} />
            <FooterColumn title="Contact" links={[
              { label: 'Contact Details', href: '/contact' },
            ]} />
            <FooterColumn title="Career" links={[
              { label: 'Join Our Team', href: '/careers' },
            ]} />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200" />

      {/* Bottom bar */}
      <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
        <span>© Quranium Global 2025. All Rights Reserved.</span>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <Link href="#" className="hover:text-gray-900">
            <IconBrandDiscord size={20} />
          </Link>
          <Link href="#" className="hover:text-gray-900">
            <IconBrandTelegram size={20} />
          </Link>
          <Link href="#" className="hover:text-gray-900">
            <IconBrandYoutube size={20} />
          </Link>
          <Link href="#" className="hover:text-gray-900">
            <IconBrandLinkedin size={20} />
          </Link>
          <Link href="#" className="hover:text-gray-900">
            <IconBrandInstagram size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h5 className="text-red-600 font-semibold mb-2">{title}</h5>
      <ul className="space-y-1">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-gray-800 hover:text-gray-900 transition"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
