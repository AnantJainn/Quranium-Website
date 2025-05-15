// 'use client';

// // import { Metadata } from "next";
// import Spline from "@splinetool/react-spline";
// import Image from "next/image";
// import { useState, useEffect, useRef } from 'react';
// import { motion } from 'framer-motion';
// import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// // import { BackgroundBeams } from "../components/ui/background-beams";
// import { GlowingEffect } from "../components/ui/glowing-effect";
// import { FeaturesSectionDemo } from "./FeatureSection"
// import { Timeline } from "../components/ui/timeline"
// // import { MouseEvent } from 'react';

// // import { MouseEvent, useRef } from 'react';

// const cards = [
//   {
//     title: "Dynamic Data Streams",
//     subtitle: "Process real-time blockchain feeds with ease.",
//     img: "/qrn3.png",
//   },
//   {
//     title: "Kapil Dhiman on CNBC Arabia’s Crypto Weekly Show",
//     subtitle: "Keep your private keys safe and decentralized.",
//     img: "/qrn4.png",
//   },
//   {
//     title: "On-chain Analytics",
//     subtitle: "Visualize transactions as they happen.",
//     img: "/qrn5.png",
//   },
//   {
//     title: "Cross-Chain Bridge",
//     subtitle: "Move assets seamlessly between networks.",
//     img: "/qrn6.png",
//   },
//   {
//     title: "Smart-Contract Templates",
//     subtitle: "Deploy audited contracts in seconds.",
//     img: "/qrn1.png",
//   },
// ];

// const partners = [
//   { src: '/qrn1.png', alt: 'PwC' },
//   { src: '/qrn2.png', alt: 'PwC' },
//   { src: '/qrn3.png', alt: 'PwC' },
//   { src: '/qrn4.png', alt: 'PwC' },
//   { src: '/qrn5.png', alt: 'PwC' },
//   { src: '/qrn6.png', alt: 'PwC' },
//   { src: '/qrn1.png', alt: 'PwC' },
//   { src: '/qrn2.png', alt: 'PwC' },
//   { src: '/qrn3.png', alt: 'PwC' },
//   { src: '/qrn4.png', alt: 'PwC' },
// ];

// interface AnimatedWordsProps {
//   children: string;
//   delay?: number;           // ms between words
//   className?: string;
// }

// const data = [
//   {
//     title: "Foundations Phase\n(January – February '24)",
//     content: (
//       <div>
//         <ul className="list-disc list-inside space-y-2">
//           <li>Finalized White Paper</li>
//           <li>Core Team Assembled</li>
//         </ul>
//         <div className="grid grid-cols-2 gap-2 mt-4">
//           <img
//             src="https://cf-assets.www.cloudflare.com/zkvhlag99gkb/2hf3qqJJpxyJXlzymfKi9Y/5131867168fc9c607b435eb5d5dc0eb3/image1-31.png"
//             alt="Quantum infrastructure"
//             className="h-16 w-full object-cover rounded"
//           />
//           <img
//             src="https://cf-assets.www.cloudflare.com/zkvhlag99gkb/53i0wuhcRS505f4z3SjkIb/2011353668abbddf60ccad7a5af2ebc8/post-quantum-signatures-kyqWWM.png"
//             alt="Post-quantum signatures"
//             className="h-16 w-full object-cover rounded"
//           />
//         </div>
//       </div>
//     ),
//   },
//   {
//     title: "Vision Unleashed\n(March – April '24)",
//     content: (
//       <div>
//         <ul className="list-disc list-inside space-y-2">
//           <li>Validated Product Vision</li>
//           <li>Reached out to early investors</li>
//         </ul>
//         <div className="grid grid-cols-2 gap-2 mt-4">
//           <img
//             src="https://cf-assets.www.cloudflare.com/zkvhlag99gkb/1ewsKSumB2t0mCKIp9i1yo/6d79a6e2ec066820b1c17bdb06fb96fe/image6-5.png"
//             alt="Quantum key exchange"
//             className="h-16 w-full object-cover rounded"
//           />
//           <img
//             src="https://i.ytimg.com/vi/f5tQLVtNbBo/maxresdefault.jpg"
//             alt="AI-driven security"
//             className="h-16 w-full object-cover rounded"
//           />
//         </div>
//       </div>
//     ),
//   },
//   {
//     title: "Building Blocks\n(June – July '24)",
//     content: (
//       <div>
//         <ul className="list-disc list-inside space-y-2">
//           <li>Launched Infrastructure Development</li>
//           <li>Secured Capital Raise</li>
//         </ul>
//         <div className="grid grid-cols-2 gap-2 mt-4">
//           <img
//             src="https://cf-assets.www.cloudflare.com/zkvhlag99gkb/2hf3qqJJpxyJXlzymfKi9Y/5131867168fc9c607b435eb5d5dc0eb3/image1-31.png"
//             alt="Quantum infrastructure"
//             className="h-16 w-full object-cover rounded"
//           />
//           <img
//             src="https://cf-assets.www.cloudflare.com/zkvhlag99gkb/53i0wuhcRS505f4z3SjkIb/2011353668abbddf60ccad7a5af2ebc8/post-quantum-signatures-kyqWWM.png"
//             alt="Post-quantum signatures"
//             className="h-16 w-full object-cover rounded"
//           />
//         </div>
//       </div>
//     ),
//   },
//   {
//     title: "Anchoring Resilience\n(October '24)",
//     content: (
//       <div>
//         <ul className="list-disc list-inside space-y-2">
//           <li>Established legal entity in Switzerland</li>
//           <li>Expanded in Southeast Asia</li>
//           <li>Coined DeQUP, a new market category</li>
//         </ul>
//         <div className="grid grid-cols-2 gap-2 mt-4">
//           <img
//             src="https://cf-assets.www.cloudflare.com/zkvhlag99gkb/1ewsKSumB2t0mCKIp9i1yo/6d79a6e2ec066820b1c17bdb06fb96fe/image6-5.png"
//             alt="Quantum key exchange"
//             className="h-16 w-full object-cover rounded"
//           />
//           <img
//             src="https://i.ytimg.com/vi/f5tQLVtNbBo/maxresdefault.jpg"
//             alt="AI-driven security"
//             className="h-16 w-full object-cover rounded"
//           />
//         </div>
//       </div>
//     ),
//   },
//   {
//     title: "Scaling Heights\n(Mid November '24)",
//     content: (
//       <div>
//         <ul className="list-disc list-inside space-y-2">
//           <li>Public Testnet Launch (Layer 1)</li>
//           <li>Kickoff of Quranium’s Node Sale</li>
//           <li>Launch of Q-Safe Wallet</li>
//           <li>Ongoing development of the “Q-Suite” of products</li>
//         </ul>
//         <div className="grid grid-cols-2 gap-2 mt-4">
//           <img
//             src="https://cf-assets.www.cloudflare.com/zkvhlag99gkb/2hf3qqJJpxyJXlzymfKi9Y/5131867168fc9c607b435eb5d5dc0eb3/image1-31.png"
//             alt="Quantum infrastructure"
//             className="h-16 w-full object-cover rounded"
//           />
//           <img
//             src="https://cf-assets.www.cloudflare.com/zkvhlag99gkb/53i0wuhcRS505f4z3SjkIb/2011353668abbddf60ccad7a5af2ebc8/post-quantum-signatures-kyqWWM.png"
//             alt="Post-quantum signatures"
//             className="h-16 w-full object-cover rounded"
//           />
//         </div>
//       </div>
//     ),
//   },
//   {
//     title: "Global Reach\n(January '25)",
//     content: (
//       <div>
//         <ul className="list-disc list-inside space-y-2">
//           <li>Expanding Geographically</li>
//           <li>Hosting “Be Uncrackable” events at Davos during WEF ’25</li>
//         </ul>
//         <div className="grid grid-cols-2 gap-2 mt-4">
//           <img
//             src="https://cf-assets.www.cloudflare.com/zkvhlag99gkb/1ewsKSumB2t0mCKIp9i1yo/6d79a6e2ec066820b1c17bdb06fb96fe/image6-5.png"
//             alt="Quantum key exchange"
//             className="h-16 w-full object-cover rounded"
//           />
//           <img
//             src="https://i.ytimg.com/vi/f5tQLVtNbBo/maxresdefault.jpg"
//             alt="AI-driven security"
//             className="h-16 w-full object-cover rounded"
//           />
//         </div>
//       </div>
//     ),
//   },
// ];


// function AnimatedWords({ children, delay = 100, className }: AnimatedWordsProps) {
//   const words = children.split(' ');
//   const [count, setCount] = useState(0);
//   const [displayed, setDisplayed] = useState('');

//   useEffect(() => {
//     if (count < words.length) {
//       const timer = setTimeout(() => {
//         setDisplayed(prev => prev + (prev ? ' ' : '') + words[count]);
//         setCount(c => c + 1);
//       }, delay);
//       return () => clearTimeout(timer);
//     }
//   }, [count, words, delay]);

//   return <p className={className}>{displayed}</p>;
// }



// export default function HomePage() {
//   const carouselRef = useRef<HTMLDivElement>(null);

//   const scrollCarousel = (direction: 'left' | 'right') => {
//     if (!carouselRef.current) return;
//     const width = carouselRef.current.clientWidth;
//     carouselRef.current.scrollBy({
//       left: direction === 'left' ? -width : width,
//       behavior: 'smooth',
//     });
//   };

//   return (
//     <div className="flex flex-col">
//       {/* Hero Section */}
//       <section className="min-h-screen flex flex-col md:flex-row">
//         {/* Left side: Spline */}
//         <div className="w-full md:w-1/2 h-[50vh] md:h-auto relative">
//           <div className="absolute inset-0">
//             <Spline
//               scene="https://prod.spline.design/jK4TUn1TM29VPjwI/scene.splinecode"
//               className="w-full h-full"
//             />
//           </div>
//         </div>

//         {/* Right side: Content */}
//         <div className="w-full md:w-1/2 p-8 flex flex-col justify-center bg-[#e6e6e6]">
//           <h1 className="text-4xl font-light mb-4">
//             The Uncrackable Foundation for the Digital Era.
//           </h1>
//           <p className="text-2xl text-gray-800">
//             Quranium is the future of digital security - Quantum-proof, Layer 1 DLT for the next generation.
//           </p>
//           <button
//             className="
//               mt-4
//               inline-block
//               w-auto
//               max-w-max
//               flex-none
//               px-6 py-3
//               bg-white
//               text-red-600
//               border-2 border-red-600
//               rounded-lg
//               transition-shadow duration-300
//               hover:shadow-[0_0_8px_rgba(239,68,68,0.7)]
//             "
//           >
//             KNOW MORE
//           </button>
//           {/* <RippleButton>KNOW MORE</RippleButton> */}

//         </div>
//       </section>
//       {/* <hr /> */}



//       {/* Technology Section */}
//       <section id="technology" className="py-5 mt-8">
//         <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
//           {/* Illustration */}
//           <div className="w-full md:w-1/2">
//             <Image
//               src="/qrn1.png"
//               alt="Uncrackable Infrastructure Illustration"
//               width={800}
//               height={500}
//               className="rounded-3xl shadow-md"
//             />
//           </div>
//           {/* Text & Button */}
//           {/* …inside your Technology Section… */}
//           <div className="w-full md:w-1/2">
//             <AnimatedWords
//               className="text-2xl text-gray-800 mb-6"
//               delay={100}   // adjust speed here
//             >
//               In a world where no other blockchain infrastructure can truly stand against today’s and tomorrow’s threats, Quranium is changing this with its truly uncrackable decentralized infrastructure.
//             </AnimatedWords>

//             <button
//               className="
//       inline-flex
//       items-center
//       px-6 py-3
//       border border-blue-600
//       text-blue-600
//       rounded-lg
//       hover:bg-blue-50
//       transition
//     "
//             >
//               UNDERSTAND TECHNOLOGY
//               <span className="ml-2 text-xl">→</span>
//             </button>
//           </div>

//         </div>
//       </section>

//       <FeaturesSectionDemo />


//       {/* // put this inside your HomePage component, below the Projects section */}
//       <section id="progress" className="py-20 ">
//         {/* <BackgroundBeams /> */}
//         <div className="container mx-auto px-4">
//           <h2 className="text-5xl font-light mb-8">
//             Our <span className="font-bold">Progress</span> so far
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {[
//               { title: '120+', subtitle: 'Global team since our 2024 launch.' },
//               { title: '3+', subtitle: 'Established regional hubs: Singapore, UAE, and Switzerland.' },
//               { title: 'Bold Vision', subtitle: 'Driving a bold vision “Be Uncrackable” to create a secure, resilient digital world.' },
//             ].map((item, i) => (
//               <div key={i} className="relative glow-border rounded-lg p-1">
//                 <div className="bg-white rounded-md h-full p-6 flex flex-col">
//                   <h3 className="text-4xl font-bold text-red-600 mb-4">{item.title}</h3>
//                   <p className="text-lg text-gray-700">{item.subtitle}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* styled-jsx for the glowing border animation */}
//         <style jsx>{`
//     @keyframes glow {
//       0% {
//         background-position: 0% 50%;
//       }
//       50% {
//         background-position: 100% 50%;
//       }
//       100% {
//         background-position: 0% 50%;
//       }
//     }

//     .glow-border {
//       /* make the gradient border */
//       background: linear-gradient(
//         270deg,
//         #ff4d4d,
//         #4d94ff,
//         #4d94ff,
//         #ff4d4d
//       );
//       background-size: 600% 600%;
//       animation: glow 4s ease infinite;
//     }
//   `}</style>
//       </section>



//       <section id="partners" className="py-20 ">
//         <div className="container mx-auto px-4">
//           <h2 className="text-5xl font-light text-center mb-8">
//             Our <span className="font-bold">Partners</span>
//           </h2>

//           <div className="overflow-hidden relative group">
//             <div className="flex gap-6 animate-scroll whitespace-nowrap">
//               {partners.concat(partners).map((p, idx) => (
//                 <div
//                   key={idx}
//                   className="flex-shrink-0 w-60 h-40 bg-white rounded-lg border border-gray-200 flex items-center justify-center"
//                 >
//                   <Image
//                     src={p.src}
//                     alt={p.alt}
//                     width={160}
//                     height={80}
//                     className="object-contain"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         <style jsx>{`
//         @keyframes scroll {
//           0%   { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//         .animate-scroll {
//           animation: scroll 30s linear infinite;
//         }
//         .group:hover .animate-scroll {
//           animation-play-state: paused;
//         }
//       `}</style>
//       </section>
//       <Timeline data={data} />

//       <div className="flex flex-col md:flex-row items-center justify-center mt-12">
//         {/* First 3D Card */}
//         <CardContainer className="inter-var">
//           <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
//             <CardItem
//               translateZ="50"
//               className="text-xl font-bold text-neutral-600 dark:text-white"
//             >
//               Quranium in Dubai During TOKEN2049
//             </CardItem>
//             <CardItem
//               as="p"
//               translateZ="60"
//               className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
//             >
//               27 April - 4 May, 2025
//             </CardItem>
//             <CardItem
//               translateZ="100"
//               rotateX={20}
//               rotateZ={-10}
//               className="w-full mt-4"
//             >
//               <img
//                 src="/qrn1.png"
//                 height="600"
//                 width="800"
//                 className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
//                 alt="3D effect demo"
//               />
//             </CardItem>
//             <div className="flex justify-between items-center mt-20">
//               <CardItem
//                 translateZ={20}
//                 translateX={-40}
//                 as="button"
//                 className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
//               >
//                 Learn More →
//               </CardItem>
//               <CardItem
//                 translateZ={20}
//                 translateX={40}
//                 as="button"
//                 className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
//               >
//                 Get Started
//               </CardItem>
//             </div>
//           </CardBody>
//         </CardContainer>

//         {/* Second 3D Card */}
//         <CardContainer className="inter-var">
//           <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
//             <CardItem
//               translateZ="50"
//               className="text-xl font-bold text-neutral-600 dark:text-white"
//             >
//               Join The Uncrackable Conversation, Episode #1 - Live on LinkedIn
//             </CardItem>
//             <CardItem
//               as="p"
//               translateZ="60"
//               className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
//             >
//               25 April, 2025
//             </CardItem>
//             <CardItem
//               translateZ="100"
//               rotateX={15}
//               rotateZ={10}
//               className="w-full mt-4"
//             >
//               <img
//                 src="/qrn2.png"
//                 height="600"
//                 width="800"
//                 className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
//                 alt="Floating UI demo"
//               />
//             </CardItem>
//             <div className="flex justify-between items-center mt-20">
//               <CardItem
//                 translateZ={20}
//                 translateX={-40}
//                 as="button"
//                 className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
//               >
//                 Explore →
//               </CardItem>
//               <CardItem
//                 translateZ={20}
//                 translateX={40}
//                 as="button"
//                 className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
//               >
//                 Try It
//               </CardItem>
//             </div>
//           </CardBody>
//         </CardContainer>
//       </div>

//       <section
//         id="features"
//         className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-12 w-full"
//       >
//         {/* Arrow buttons (only on md+) */}
//         <button
//           onClick={() => scrollCarousel('left')}
//           className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 p-2 z-10 bg-white dark:bg-gray-700 rounded-full shadow-md"
//         >
//           <ChevronLeft className="text-gray-800 dark:text-white" size={24} />
//         </button>
//         <button
//           onClick={() => scrollCarousel('right')}
//           className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 p-2 z-10 bg-white dark:bg-gray-700 rounded-full shadow-md"
//         >
//           <ChevronRight className="text-gray-800 dark:text-white" size={24} />
//         </button>

//         {/* Scroll-snap wrapper */}
//         <div
//           ref={carouselRef}
//           className="flex gap-4 sm:gap-6 overflow-x-auto scroll-pl-4 sm:scroll-pl-6 snap-x snap-mandatory scroll-smooth touch-pan-x scrollbar-hide pb-5 w-full pt-5"
//         >
//           {cards.map((card, i) => (
//             <motion.div
//               key={i}
//               className="snap-start flex-shrink-0 w-[85vw] sm:w-[45vw] md:w-[30vw] lg:w-[23vw] px-1"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.1, duration: 0.5 }}
//               whileHover={{ scale: 1.03, rotateY: 5 }}
//             >
//               {/* Wrap each card in a GlowingEffect container */}
//               <CardContainer className="relative h-full">
//                 {/* Glowing overlay */}
//                 <GlowingEffect
//                   blur={0}
//                   borderWidth={3}
//                   spread={80}
//                   glow={true}
//                   disabled={false}
//                   proximity={64}
//                   inactiveZone={0.01}
//                 />

//                 <CardBody className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
//                   <div className="p-4">
//                     <CardItem translateZ={40} className="text-lg font-bold">
//                       {card.title}
//                     </CardItem>
//                     <CardItem
//                       as="p"
//                       translateZ={60}
//                       className="mt-2 text-sm text-gray-600 dark:text-gray-300"
//                     >
//                       {card.subtitle}
//                     </CardItem>
//                   </div>

//                   <CardItem
//                     translateZ={100}
//                     rotateX={10}
//                     className="rounded-b-xl overflow-hidden"
//                   >
//                     <img
//                       src={card.img}
//                       alt={card.title}
//                       className="w-full h-auto object-cover max-h-[180px] sm:max-h-[200px]"
//                     />
//                   </CardItem>
//                 </CardBody>
//               </CardContainer>
//             </motion.div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }


'use client';

import Spline from "@splinetool/react-spline";
import Image from "next/image";
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { GlowingEffect } from "../components/ui/glowing-effect";
import { FeaturesSectionDemo } from "./FeatureSection"
import { Timeline } from "../components/ui/timeline"

const cards = [
  {
    title: "Dynamic Data Streams",
    subtitle: "Process real-time blockchain feeds with ease.",
    img: "/qrn3.png",
  },
  {
    title: "Kapil Dhiman on CNBC Arabia’s Crypto Weekly Show",
    subtitle: "Keep your private keys safe and decentralized.",
    img: "/qrn4.png",
  },
  {
    title: "On-chain Analytics",
    subtitle: "Visualize transactions as they happen.",
    img: "/qrn5.png",
  },
  {
    title: "Cross-Chain Bridge",
    subtitle: "Move assets seamlessly between networks.",
    img: "/qrn6.png",
  },
  {
    title: "Smart-Contract Templates",
    subtitle: "Deploy audited contracts in seconds.",
    img: "/qrn1.png",
  },
];

const partners = [
  { src: '/qrn1.png', alt: 'PwC' },
  { src: '/qrn2.png', alt: 'PwC' },
  { src: '/qrn3.png', alt: 'PwC' },
  { src: '/qrn4.png', alt: 'PwC' },
  { src: '/qrn5.png', alt: 'PwC' },
  { src: '/qrn6.png', alt: 'PwC' },
  { src: '/qrn1.png', alt: 'PwC' },
  { src: '/qrn2.png', alt: 'PwC' },
  { src: '/qrn3.png', alt: 'PwC' },
  { src: '/qrn4.png', alt: 'PwC' },
];

interface AnimatedWordsProps {
  children: string;
  delay?: number;
  className?: string;
}

const data = [
  {
    title: "Foundations Phase\n(January – February '24)",
    content: (
      <div>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>Finalized White Paper</li>
          <li>Core Team Assembled</li>
        </ul>
        <div className="grid grid-cols-2 gap-2 mt-4">
          <img
            src="https://cf-assets.www.cloudflare.com/zkvhlag99gkb/2hf3qqJJpxyJXlzymfKi9Y/5131867168fc9c607b435eb5d5dc0eb3/image1-31.png"
            alt="Quantum infrastructure"
            className="h-16 w-full object-cover rounded"
          />
          <img
            src="https://cf-assets.www.cloudflare.com/zkvhlag99gkb/53i0wuhcRS505f4z3SjkIb/2011353668abbddf60ccad7a5af2ebc8/post-quantum-signatures-kyqWWM.png"
            alt="Post-quantum signatures"
            className="h-16 w-full object-cover rounded"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Vision Unleashed\n(March – April '24)",
    content: (
      <div>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>Validated Product Vision</li>
          <li>Reached out to early investors</li>
        </ul>
        <div className="grid grid-cols-2 gap-2 mt-4">
          <img
            src="https://cf-assets.www.cloudflare.com/zkvhlag99gkb/1ewsKSumB2t0mCKIp9i1yo/6d79a6e2ec066820b1c17bdb06fb96fe/image6-5.png"
            alt="Quantum key exchange"
            className="h-16 w-full object-cover rounded"
          />
          <img
            src="https://i.ytimg.com/vi/f5tQLVtNbBo/maxresdefault.jpg"
            alt="AI-driven security"
            className="h-16 w-full object-cover rounded"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Building Blocks\n(June – July '24)",
    content: (
      <div>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>Launched Infrastructure Development</li>
          <li>Secured Capital Raise</li>
        </ul>
        <div className="grid grid-cols-2 gap-2 mt-4">
          <img
            src="https://cf-assets.www.cloudflare.com/zkvhlag99gkb/2hf3qqJJpxyJXlzymfKi9Y/5131867168fc9c607b435eb5d5dc0eb3/image1-31.png"
            alt="Quantum infrastructure"
            className="h-16 w-full object-cover rounded"
          />
          <img
            src="https://cf-assets.www.cloudflare.com/zkvhlag99gkb/53i0wuhcRS505f4z3SjkIb/2011353668abbddf60ccad7a5af2ebc8/post-quantum-signatures-kyqWWM.png"
            alt="Post-quantum signatures"
            className="h-16 w-full object-cover rounded"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Anchoring Resilience\n(October '24)",
    content: (
      <div>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>Established legal entity in Switzerland</li>
          <li>Expanded in Southeast Asia</li>
          <li>Coined DeQUP, a new market category</li>
        </ul>
        <div className="grid grid-cols-2 gap-2 mt-4">
          <img
            src="https://cf-assets.www.cloudflare.com/zkvhlag99gkb/1ewsKSumB2t0mCKIp9i1yo/6d79a6e2ec066820b1c17bdb06fb96fe/image6-5.png"
            alt="Quantum key exchange"
            className="h-16 w-full object-cover rounded"
          />
          <img
            src="https://i.ytimg.com/vi/f5tQLVtNbBo/maxresdefault.jpg"
            alt="AI-driven security"
            className="h-16 w-full object-cover rounded"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Scaling Heights\n(Mid November '24)",
    content: (
      <div>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>Public Testnet Launch (Layer 1)</li>
          <li>Kickoff of Quranium’s Node Sale</li>
          <li>Launch of Q-Safe Wallet</li>
          <li>Ongoing development of the “Q-Suite” of products</li>
        </ul>
        <div className="grid grid-cols-2 gap-2 mt-4">
          <img
            src="https://cf-assets.www.cloudflare.com/zkvhlag99gkb/2hf3qqJJpxyJXlzymfKi9Y/5131867168fc9c607b435eb5d5dc0eb3/image1-31.png"
            alt="Quantum infrastructure"
            className="h-16 w-full object-cover rounded"
          />
          <img
            src="https://cf-assets.www.cloudflare.com/zkvhlag99gkb/53i0wuhcRS505f4z3SjkIb/2011353668abbddf60ccad7a5af2ebc8/post-quantum-signatures-kyqWWM.png"
            alt="Post-quantum signatures"
            className="h-16 w-full object-cover rounded"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Global Reach\n(January '25)",
    content: (
      <div>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>Expanding Geographically</li>
          <li>Hosting “Be Uncrackable” events at Davos during WEF ’25</li>
        </ul>
        <div className="grid grid-cols-2 gap-2 mt-4">
          <img
            src="https://cf-assets.www.cloudflare.com/zkvhlag99gkb/1ewsKSumB2t0mCKIp9i1yo/6d79a6e2ec066820b1c17bdb06fb96fe/image6-5.png"
            alt="Quantum key exchange"
            className="h-16 w-full object-cover rounded"
          />
          <img
            src="https://i.ytimg.com/vi/f5tQLVtNbBo/maxresdefault.jpg"
            alt="AI-driven security"
            className="h-16 w-full object-cover rounded"
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
  const carouselRef = useRef<HTMLDivElement>(null);
  const scrollCarousel = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const width = carouselRef.current.clientWidth;
    carouselRef.current.scrollBy({ left: direction === 'left' ? -width : width, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col bg-black text-black">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 h-[50vh] md:h-auto relative">
          <Spline
            scene="https://prod.spline.design/jK4TUn1TM29VPjwI/scene.splinecode"
            className="absolute inset-0 w-full h-full"
          />
        </div>

        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center bg-[#E6E6E6]">
          <h1 className="text-4xl font-light mb-4">
            The Uncrackable Foundation for the Digital Era.
          </h1>
          <p className="text-2xl text-gray-700">
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
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-5 mt-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <Image
              src="/qrn1.png"
              alt="Uncrackable Infrastructure Illustration"
              width={800}
              height={500}
              className="rounded-3xl shadow-md"
            />
          </div>
          <div className="w-full md:w-1/2">
            <AnimatedWords
              className="text-2xl text-gray-300 mb-6"
              delay={100}
            >
              In a world where no other blockchain infrastructure can truly stand against today’s and tomorrow’s threats, Quranium is changing this with its truly uncrackable decentralized infrastructure.
            </AnimatedWords>
            <button
              className="
                inline-flex items-center px-6 py-3 border border-blue-400 text-blue-400
                rounded-lg hover:bg-blue-800 transition
              "
            >
              UNDERSTAND TECHNOLOGY
              <span className="ml-2 text-xl">→</span>
            </button>
          </div>
        </div>
      </section>

      <FeaturesSectionDemo />

      {/* Progress Section */}
      <section id="progress" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-light mb-8 text-white">
            Our <span className="font-bold text-white">Progress</span> so far
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: '120+', subtitle: 'Global team since our 2024 launch.' },
              { title: '3+', subtitle: 'Established regional hubs: Singapore, UAE, and Switzerland.' },
              { title: 'Bold Vision', subtitle: 'Driving a bold vision “Be Uncrackable” to create a secure, resilient digital world.' },
            ].map((item, i) => (
              <div key={i} className="relative glow-border rounded-lg p-1">
                <div className="bg-gray-900 rounded-md h-full p-6 flex flex-col">
                  <h3 className="text-4xl font-bold text-red-600 mb-4">{item.title}</h3>
                  <p className="text-lg text-gray-300">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style jsx>{`
          @keyframes glow {
            0%   { background-position: 0% 50%; }
            50%  { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .glow-border {
            background: linear-gradient(270deg, #ff4d4d, #4d94ff, #4d94ff, #ff4d4d);
            background-size: 600% 600%;
            animation: glow 4s ease infinite;
          }
        `}</style>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-light text-center mb-8">
            Our <span className="font-bold">Partners</span>
          </h2>
          <div className="overflow-hidden relative group">
            <div className="flex gap-6 animate-scroll whitespace-nowrap">
              {partners.concat(partners).map((p, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-60 h-40 bg-gray-800 rounded-lg border border-gray-700 flex items-center justify-center"
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
            0% { transform: translateX(0); }
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

      {/* 3D Cards Section */}
      <div className="flex flex-col md:flex-row items-center justify-center mt-12 gap-8 px-4">
        {[{
          title: "Quranium in Dubai During TOKEN2049",
          date: "27 April - 4 May, 2025",
          img: "/qrn1.png",
          primaryCta: "Learn More →",
          secondaryCta: "Get Started",
        },{
          title: "Join The Uncrackable Conversation, Episode #1 - Live on LinkedIn",
          date: "25 April, 2025",
          img: "/qrn2.png",
          primaryCta: "Explore →",
          secondaryCta: "Try It",
        }].map((cardData, idx) => (
          <CardContainer key={idx} className="relative group/inter-var">
            <CardBody className="bg-gray-900 relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] border border-gray-700 w-auto sm:w-[30rem] rounded-xl p-6">
              <CardItem translateZ="50" className="text-xl font-bold text-white">
                {cardData.title}
              </CardItem>
              <CardItem as="p" translateZ="60" className="text-gray-300 text-sm max-w-sm mt-2">
                {cardData.date}
              </CardItem>
              <CardItem translateZ="100" rotateX={idx === 0 ? 20 : 15} rotateZ={idx === 0 ? -10 : 10} className="w-full mt-4">
                <img
                  src={cardData.img}
                  alt={cardData.title}
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem translateZ={20} translateX={-40} as="button" className="px-4 py-2 rounded-xl text-xs font-normal text-white">
                  {cardData.primaryCta}
                </CardItem>
                <CardItem translateZ={20} translateX={40} as="button" className="px-4 py-2 rounded-xl bg-gray-800 text-white text-xs font-bold">
                  {cardData.secondaryCta}
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>

      {/* Features Carousel */}
      <section id="features" className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 w-full">
        <button
          onClick={() => scrollCarousel('left')}
          className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 p-2 z-10 bg-gray-800 rounded-full shadow-md"
        >
          <ChevronLeft className="text-white" size={24} />
        </button>
        <button
          onClick={() => scrollCarousel('right')}
          className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 p-2 z-10 bg-gray-800 rounded-full shadow-md"
        >
          <ChevronRight className="text-white" size={24} />
        </button>

        <div
          ref={carouselRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth touch-pan-x scrollbar-hide pb-5 w-full pt-5"
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
              <CardContainer className="relative h-full">
                <GlowingEffect
                  blur={0} borderWidth={3} spread={80}
                  glow={true} disabled={false}
                  proximity={64} inactiveZone={0.01}
                />
                <CardBody className="bg-gray-900 rounded-xl shadow-lg overflow-hidden">
                  <div className="p-4">
                    <CardItem translateZ={40} className="text-lg font-bold text-white">
                      {card.title}
                    </CardItem>
                    <CardItem as="p" translateZ={60} className="mt-2 text-sm text-gray-300">
                      {card.subtitle}
                    </CardItem>
                  </div>
                  <CardItem translateZ={100} rotateX={10} className="rounded-b-xl overflow-hidden">
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
