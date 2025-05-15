import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
// import Image from 'next/image';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const testimonials = [
  {
    quote:
      "Kapil is the Co-Founder & CEO at Quranium. A seasoned leader with 12 years of global, diversified experience dealing with enterprises, startups, and funds. He was the former Web 3.0 leader at PwC India and an award-winning CEO who crafted the Metaverse Startup of the Year 2023 from scratch. Kapil has also helped over 20 startups in the Web3 ecosystem with their GTM and Product strategies. He is a distinguished global speaker and author.",
    name: "Kapil Dhiman",
    designation: "CEO & CO-FOUNDER",
    src: "/kapil.svg",
  },
  {
    quote:
      "Yaduvendra is the Co-Founder & CTO at Quranium. Eminent in the crypto realm since 2010, he merges his computer science genius with pioneering strides in quantum computing. His initial forays into identifying Bitcoin's blockchain vulnerabilities have propelled Quranium to the vanguard of blockchain innovation. Yaduvendra plays a pivotal role in shaping the trajectory of blockchain security and the seamless incorporation of quantum computing.",
    name: "Yaduvendra Yadav",
    designation: "CTO & CO-FOUNDER",
    src: "/yadu.svg",
  },
  {
    quote:
      "Zeeshan is the Co-Founder & COO at Quranium. With over 11 years of experience in business operations and strategy, he ventured into the crypto space in 2017, broadening his expertise and network. His significant contribution to a billion-dollar unicorn layer 1 blockchain company underscores his considerable influence. Zeeshan shines in transforming vision into strategic implementation and building vital worldwide partnerships, utilizing his sharp business acumen.",
    name: "Zeeshan Khan",
    designation: "COO & CO-FOUNDER",
    src: "/zeeshan.svg",
  },
];
// export const products = [
//   {
//     title: "Moonbeam",
//     link: "https://gomoonbeam.com",
//     thumbnail:
//       "https://www.quranium.org/_next/static/media/blockchaininfra.a4415bb1.svg",
//   },
//   {
//     title: "Cursor",
//     link: "https://cursor.so",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/cursor.png",
//   },
//   {
//     title: "Rogue",
//     link: "https://userogue.com",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/rogue.png",
//   },

//   {
//     title: "Editorially",
//     link: "https://editorially.org",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/editorially.png",
//   },
//   {
//     title: "Editrix AI",
//     link: "https://editrix.ai",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/editrix.png",
//   },
//   {
//     title: "Pixel Perfect",
//     link: "https://app.pixelperfect.quest",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
//   },

//   {
//     title: "Algochurn",
//     link: "https://algochurn.com",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
//   },
//   {
//     title: "Aceternity UI",
//     link: "https://ui.aceternity.com",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
//   },
//   {
//     title: "Tailwind Master Kit",
//     link: "https://tailwindmasterkit.com",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
//   },
//   {
//     title: "SmartBridge",
//     link: "https://smartbridgetech.com",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
//   },
//   {
//     title: "Renderwork Studio",
//     link: "https://renderwork.studio",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
//   },

//   {
//     title: "Creme Digital",
//     link: "https://cremedigital.com",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
//   },
//   {
//     title: "Golden Bells Academy",
//     link: "https://goldenbellsacademy.com",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
//   },
//   {
//     title: "Invoker Labs",
//     link: "https://invoker.lol",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/invoker.png",
//   },
//   {
//     title: "E Free Invoice",
//     link: "https://efreeinvoice.com",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
//   },
// ];
export const products = [
  {
    title: "Quantum Infrastructure",
    link: "#",
    thumbnail:
      "https://cf-assets.www.cloudflare.com/zkvhlag99gkb/2hf3qqJJpxyJXlzymfKi9Y/5131867168fc9c607b435eb5d5dc0eb3/image1-31.png",
  },
  {
    title: "Post-Quantum Signatures",
    link: "#",
    thumbnail:
      "https://cf-assets.www.cloudflare.com/zkvhlag99gkb/53i0wuhcRS505f4z3SjkIb/2011353668abbddf60ccad7a5af2ebc8/post-quantum-signatures-kyqWWM.png",
  },
  {
    title: "Quantum Key Exchange",
    link: "#",
    thumbnail:
      "https://cf-assets.www.cloudflare.com/zkvhlag99gkb/1ewsKSumB2t0mCKIp9i1yo/6d79a6e2ec066820b1c17bdb06fb96fe/image6-5.png",
  },
  {
    title: "AI-Driven Security",
    link: "#",
    thumbnail:
      "https://i.ytimg.com/vi/f5tQLVtNbBo/maxresdefault.jpg",
  },
  // repeat cycle
  {
    title: "Decentralized Quantum Mesh",
    link: "#",
    thumbnail:
      "https://cf-assets.www.cloudflare.com/zkvhlag99gkb/2hf3qqJJpxyJXlzymfKi9Y/5131867168fc9c607b435eb5d5dc0eb3/image1-31.png",
  },
  {
    title: "Advanced Signature Schemes",
    link: "#",
    thumbnail:
      "https://cf-assets.www.cloudflare.com/zkvhlag99gkb/53i0wuhcRS505f4z3SjkIb/2011353668abbddf60ccad7a5af2ebc8/post-quantum-signatures-kyqWWM.png",
  },
  {
    title: "Quantum-Resistant Protocols",
    link: "#",
    thumbnail:
      "https://cf-assets.www.cloudflare.com/zkvhlag99gkb/1ewsKSumB2t0mCKIp9i1yo/6d79a6e2ec066820b1c17bdb06fb96fe/image6-5.png",
  },
  {
    title: "Next-Gen AI Models",
    link: "#",
    thumbnail:
      "https://i.ytimg.com/vi/f5tQLVtNbBo/maxresdefault.jpg",
  },
];