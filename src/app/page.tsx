'use client';

// import { Metadata } from "next";
import Spline from "@splinetool/react-spline";
import Image from "next/image";
import { useState, useEffect, useRef, MouseEvent } from 'react';
import { motion } from 'framer-motion';
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BackgroundBeams } from "../components/ui/background-beams";
import { GlowingEffect } from "../components/ui/glowing-effect";
import { FeaturesSectionDemo } from "./FeatureSection"
import { Timeline } from "../components/ui/timeline"
// import { MouseEvent } from 'react';

// import { MouseEvent, useRef } from 'react';

const cards = [
  {
    title: "Dynamic Data Streams",
    subtitle: "Process real-time blockchain feeds with ease.",
    img: "/image.png",
  },
  {
    title: "Secure Key Management",
    subtitle: "Keep your private keys safe and decentralized.",
    img: "/demo2.jpg",
  },
  {
    title: "On-chain Analytics",
    subtitle: "Visualize transactions as they happen.",
    img: "/demo3.jpg",
  },
  {
    title: "Cross-Chain Bridge",
    subtitle: "Move assets seamlessly between networks.",
    img: "/demo4.jpg",
  },
  {
    title: "Smart-Contract Templates",
    subtitle: "Deploy audited contracts in seconds.",
    img: "/demo5.jpg",
  },
];


export function RippleButton({ children }: { children: React.ReactNode }) {
  const btnRef = useRef<HTMLButtonElement>(null);

  const createRipple = (event: MouseEvent<HTMLButtonElement>) => {
    const btn = btnRef.current;
    if (!btn) return;

    // remove any existing ripple
    const existing = btn.querySelector('.ripple-effect');
    if (existing) existing.remove();

    // calculate size & position
    const rect = btn.getBoundingClientRect();
    const diameter = Math.max(rect.width, rect.height);
    const radius = diameter / 2;
    const circle = document.createElement('span');
    circle.className = 'ripple-effect';
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - rect.left - radius}px`;
    circle.style.top = `${event.clientY - rect.top - radius}px`;

    btn.appendChild(circle);
  };

  return (
    <>
      <button
        ref={btnRef}
        onMouseDown={createRipple}
        className={`
          relative overflow-hidden
          mt-4 inline-block w-auto max-w-max flex-none
          px-6 py-3  text-red-600 border-2 border-blue-600
          rounded-lg transition-shadow duration-300
          hover:shadow-[0_0_8px_rgba(239,68,68,0.7)]
        `}
      >
        {children}
      </button>

      <style jsx>{`
        .ripple-effect {
          position: absolute;
          border-radius: 50%;
          transform: scale(0);
          animation: ripple 600ms ease-out;
          background-color: rgba(239, 68, 68, 0.4);
          pointer-events: none;
        }
        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}




const partners = [
  { src: '/image.png', alt: 'PwC' },
  { src: '/image.png', alt: 'PwC' },
  { src: '/image.png', alt: 'PwC' },
  { src: '/image.png', alt: 'PwC' },
  { src: '/image.png', alt: 'PwC' },
  { src: '/image.png', alt: 'PwC' },
  { src: '/image.png', alt: 'PwC' },
  { src: '/image.png', alt: 'PwC' },
  { src: '/image.png', alt: 'PwC' },
  { src: '/image.png', alt: 'PwC' },
  // { src: '/partners/q-net.png',      alt: 'Q-Net'      },
  // { src: '/partners/exequantum.png', alt: 'ExeQuantum' },
  // { src: '/partners/matter-id.png',  alt: 'Matter-ID'  },
  // { src: '/partners/metasig.png',    alt: 'Metasig'    },
  // { src: '/partners/partner6.png',   alt: 'Partner 6'  },
  // { src: '/partners/partner7.png',   alt: 'Partner 7'  },
  // { src: '/partners/partner8.png',   alt: 'Partner 8'  },
  // { src: '/partners/partner9.png',   alt: 'Partner 9'  },
  // { src: '/partners/partner10.png',  alt: 'Partner 10' },
];

interface AnimatedWordsProps {
  children: string;
  delay?: number;           // ms between words
  className?: string;
}



interface Step {
  title: string;
  date: string;
  points: string[];
}

// const steps: Step[] = [
//   {
//     title: 'Global Reach',
//     date: "January '25",
//     points: [
//       'Expanding Geographically',
//       "Hosting ‘Be Uncrackable’ events at Davos during WEF ’25",
//     ],
//   },
//   {
//     title: 'Quantum Leap',
//     date: "Late January '25",
//     points: ['Quranium Mainnet Launch (Layer 1)'],
//   },
//   {
//     title: 'Ecosystem Expansion',
//     date: "February '25 Onwards",
//     points: ['Growing partnerships and DApp ecosystem'],
//   },
//   {
//     title: 'Ecosystem Expansion',
//     date: "February '25 Onwards",
//     points: ['Growing partnerships and DApp ecosystem'],
//   },
//   {
//     title: 'Ecosystem Expansion',
//     date: "February '25 Onwards",
//     points: ['Growing partnerships and DApp ecosystem'],
//   },
//   {
//     title: 'Ecosystem Expansion',
//     date: "February '25 Onwards",
//     points: ['Growing partnerships and DApp ecosystem'],
//   },
//   // …add more steps here as needed
// ];

const data = [
  {
    title: "2024",
    content: (
      <div>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Built and launched Aceternity UI and Aceternity UI Pro from scratch
        </p>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://assets.aceternity.com/templates/startup-1.webp"
            alt="startup template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="https://assets.aceternity.com/templates/startup-2.webp"
            alt="startup template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="https://assets.aceternity.com/templates/startup-3.webp"
            alt="startup template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="https://assets.aceternity.com/templates/startup-4.webp"
            alt="startup template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Early 2023",
    content: (
      <div>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          I usually run out of copy, but when I see content this big, I try to
          integrate lorem ipsum.
        </p>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Lorem ipsum is for people who are too lazy to write copy. But we are
          not. Here are some more example of beautiful designs I built.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://assets.aceternity.com/pro/hero-sections.png"
            alt="hero template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="https://assets.aceternity.com/features-section.png"
            alt="feature template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="https://assets.aceternity.com/pro/bento-grids.png"
            alt="bento template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="https://assets.aceternity.com/cards.png"
            alt="cards template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Changelog",
    content: (
      <div>
        <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Deployed 5 new components on Aceternity today
        </p>
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            ✅ Card grid component
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            ✅ Startup template Aceternity
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            ✅ Random file upload lol
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            ✅ Himesh Reshammiya Music CD
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            ✅ Salman Bhai Fan Club registrations open
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://assets.aceternity.com/pro/hero-sections.png"
            alt="hero template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="https://assets.aceternity.com/features-section.png"
            alt="feature template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="https://assets.aceternity.com/pro/bento-grids.png"
            alt="bento template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="https://assets.aceternity.com/cards.png"
            alt="cards template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
];

function AnimatedWords({ children, delay = 100, className }: AnimatedWordsProps) {
  const words = children.split(' ');
  const [count, setCount] = useState(0);
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    if (count < words.length) {
      const timer = setTimeout(() => {
        setDisplayed(prev => prev + (prev ? ' ' : '') + words[count]);
        setCount(c => c + 1);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [count, words, delay]);

  return <p className={className}>{displayed}</p>;
}



export default function HomePage() {
  // const [index, setIndex] = useState(0);

  // const prev = () => setIndex((i) => Math.max(i - 1, 0));
  // const next = () => setIndex((i) => Math.min(i + 1, steps.length - 1));
  // const containerRef = useRef<HTMLDivElement>(null);

  /** width (px) of each card + gap between them */
  // const CARD_WIDTH = 288;      // 18rem
  // const GAP = 24;              // 1.5rem

  // const [index1, setIndex1] = useState(0);
  // const visibleCount = 3;
  // const maxIndex = Math.max(0, cards.length - visibleCount);

  // const prev1 = () => setIndex((i) => Math.max(0, i - 1));
  // const next1 = () => setIndex((i) => Math.min(maxIndex, i + 1));

  // const scrollLeft = () =>
  //   containerRef.current?.scrollBy({ left: -(CARD_WIDTH + GAP), behavior: 'smooth' });
  // const scrollRight = () =>
  //   containerRef.current?.scrollBy({ left: CARD_WIDTH + GAP, behavior: 'smooth' });

  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const width = carouselRef.current.clientWidth;
    carouselRef.current.scrollBy({
      left: direction === 'left' ? -width : width,
      behavior: 'smooth',
    });
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col md:flex-row">
        {/* Left side: Spline */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-auto relative">
          <div className="absolute inset-0">
            <Spline
              scene="https://prod.spline.design/jK4TUn1TM29VPjwI/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Right side: Content */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center bg-slate-200">
          <h1 className="text-4xl font-light mb-4">
            The Uncrackable Foundation for the Digital Era.
          </h1>
          <p className="text-2xl text-gray-800">
            Quranium is the future of digital security - Quantum-proof, Layer 1 DLT for the next generation.
          </p>
          <button
            className="
              mt-4
              inline-block
              w-auto
              max-w-max
              flex-none
              px-6 py-3
              bg-white
              text-red-600
              border-2 border-red-600
              rounded-lg
              transition-shadow duration-300
              hover:shadow-[0_0_8px_rgba(239,68,68,0.7)]
            "
          >
            KNOW MORE
          </button>
          {/* <RippleButton>KNOW MORE</RippleButton> */}

        </div>
      </section>
      {/* <hr /> */}



      {/* Technology Section */}
      <section id="technology" className="py-5 mt-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          {/* Illustration */}
          <div className="w-full md:w-1/2">
            <Image
              src="/image.png"
              alt="Uncrackable Infrastructure Illustration"
              width={800}
              height={500}
              className="rounded-3xl shadow-md"
            />
          </div>
          {/* Text & Button */}
          {/* …inside your Technology Section… */}
          <div className="w-full md:w-1/2">
            <AnimatedWords
              className="text-2xl text-gray-800 mb-6"
              delay={100}   // adjust speed here
            >
              In a world where no other blockchain infrastructure can truly stand against today’s and tomorrow’s threats, Quranium is changing this with its truly uncrackable decentralized infrastructure.
            </AnimatedWords>

            <button
              className="
      inline-flex
      items-center
      px-6 py-3
      border border-blue-600
      text-blue-600
      rounded-lg
      hover:bg-blue-50
      transition
    "
            >
              UNDERSTAND TECHNOLOGY
              <span className="ml-2 text-xl">→</span>
            </button>
          </div>

        </div>
        <BackgroundBeams />
      </section>

      <FeaturesSectionDemo />


      {/* // put this inside your HomePage component, below the Projects section */}
      <section id="progress" className="py-20 ">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-light mb-8">
            Our <span className="font-bold">Progress</span> so far
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: '120+', subtitle: 'Global team since our 2024 launch.' },
              { title: '3+', subtitle: 'Established regional hubs: Singapore, UAE, and Switzerland.' },
              { title: 'Bold Vision', subtitle: 'Driving a bold vision “Be Uncrackable” to create a secure, resilient digital world.' },
            ].map((item, i) => (
              <div key={i} className="relative glow-border rounded-lg p-1">
                <div className="bg-white rounded-md h-full p-6 flex flex-col">
                  <h3 className="text-4xl font-bold text-red-600 mb-4">{item.title}</h3>
                  <p className="text-lg text-gray-700">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* styled-jsx for the glowing border animation */}
        <style jsx>{`
    @keyframes glow {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }

    .glow-border {
      /* make the gradient border */
      background: linear-gradient(
        270deg,
        #ff4d4d,
        #4d94ff,
        #4d94ff,
        #ff4d4d
      );
      background-size: 600% 600%;
      animation: glow 4s ease infinite;
    }
  `}</style>
      </section>



      <section id="partners" className="py-20 ">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-light text-center mb-8">
            Our <span className="font-bold">Partners</span>
          </h2>

          <div className="overflow-hidden relative group">
            <div className="flex gap-6 animate-scroll whitespace-nowrap">
              {partners.concat(partners).map((p, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-60 h-40 bg-white rounded-lg border border-gray-200 flex items-center justify-center"
                >
                  <Image
                    src={p.src}
                    alt={p.alt}
                    width={160}
                    height={80}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
        @keyframes scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .group:hover .animate-scroll {
          animation-play-state: paused;
        }
      `}</style>
      </section>
      <Timeline data={data} />


      {/* <section className="py-20 bg-gray-50">
        <h2 className="text-5xl font-light text-center mb-12">
          Quranium’s <span className="font-bold">Uncrackable</span> Journey
        </h2>

        <div className="relative">
          <button
            onClick={scrollLeft}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow hover:bg-gray-100 transition"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div
            ref={containerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide px-8 py-4 snap-x snap-mandatory"
          >
            {steps.map((step, i) => (
              <div
                key={i}
                className="
                snap-start
                flex-shrink-0
                w-[18rem]
                bg-white
                rounded-2xl
                shadow-lg
                p-6
                hover:scale-105
                transition-transform
                duration-300
              "
              >
                <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
                <p className="text-sm italic text-gray-500 mb-3">{step.date}</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {step.points.map((pt, j) => (
                    <li key={j}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <button
            onClick={scrollRight}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow hover:bg-gray-100 transition"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section> */}



      <div className="flex flex-col md:flex-row items-center justify-center mt-12">
        {/* First 3D Card */}
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              3D Parallax Magic
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Dive into immersive depth with CSS perspective effects on hover.
            </CardItem>
            <CardItem
              translateZ="100"
              rotateX={20}
              rotateZ={-10}
              className="w-full mt-4"
            >
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
                height="600"
                width="800"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="3D effect demo"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                translateX={-40}
                as="button"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Learn More →
              </CardItem>
              <CardItem
                translateZ={20}
                translateX={40}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Get Started
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

        {/* Second 3D Card */}
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Floating UI Elements
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Make your interfaces come alive with subtle floating animations.
            </CardItem>
            <CardItem
              translateZ="100"
              rotateX={15}
              rotateZ={10}
              className="w-full mt-4"
            >
              <img
                src="https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=800&q=80"
                height="600"
                width="800"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="Floating UI demo"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                translateX={-40}
                as="button"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Explore →
              </CardItem>
              <CardItem
                translateZ={20}
                translateX={40}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Try It
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>

      <section
        id="features"
        className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-12 w-full"
      >
        {/* Arrow buttons (only on md+) */}
        <button
          onClick={() => scrollCarousel('left')}
          className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 p-2 z-10 bg-white dark:bg-gray-700 rounded-full shadow-md"
        >
          <ChevronLeft className="text-gray-800 dark:text-white" size={24} />
        </button>
        <button
          onClick={() => scrollCarousel('right')}
          className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 p-2 z-10 bg-white dark:bg-gray-700 rounded-full shadow-md"
        >
          <ChevronRight className="text-gray-800 dark:text-white" size={24} />
        </button>

        {/* Scroll-snap wrapper */}
        <div
          ref={carouselRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto scroll-pl-4 sm:scroll-pl-6 snap-x snap-mandatory scroll-smooth touch-pan-x scrollbar-hide pb-5 w-full pt-5"
        >
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className="snap-start flex-shrink-0 w-[85vw] sm:w-[45vw] md:w-[30vw] lg:w-[23vw] px-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.03, rotateY: 5 }}
            >
              {/* Wrap each card in a GlowingEffect container */}
              <CardContainer className="relative h-full">
                {/* Glowing overlay */}
                <GlowingEffect
                  blur={0}
                  borderWidth={3}
                  spread={80}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                />

                <CardBody className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                  <div className="p-4">
                    <CardItem translateZ={40} className="text-lg font-bold">
                      {card.title}
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ={60}
                      className="mt-2 text-sm text-gray-600 dark:text-gray-300"
                    >
                      {card.subtitle}
                    </CardItem>
                  </div>

                  <CardItem
                    translateZ={100}
                    rotateX={10}
                    className="rounded-b-xl overflow-hidden"
                  >
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-auto object-cover max-h-[180px] sm:max-h-[200px]"
                    />
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
