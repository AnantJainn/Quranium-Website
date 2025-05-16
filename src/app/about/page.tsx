// "use client";
// import React from "react";
// import { HeroParallax } from "../../components/ui/hero-parallax";
// import { AnimatedTestimonials } from "../../components/ui/animated-testimonials";
// import { PinContainer } from "../../components/ui/3d-pin";
// import { products, testimonials } from "@/lib/utils";

// export default function ProjectsPage() {
//   return <>
//     <div className="bg-black text-white">
//       <HeroParallax products={products} />;
//       <AnimatedTestimonials testimonials={testimonials} />
//       <div className="bg-black py-8">
//         <div className="flex flex-wrap items-center justify-center gap-2 px-4">

//           <PinContainer title="Linkedin" href="https://www.linkedin.com/in/muhammad-al-saiyari-%D9%85%D8%AD%D9%85%D8%AF-%D8%A7%D9%84%D8%B5%D9%8A%D8%B9%D8%B1%D9%8A-1082573/">
//             <div className="flex flex-col p-4 text-slate-100 w-[15rem] h-[15rem]">
//               <h3 className="font-bold text-base text-slate-100 mb-1">Muhammad Al Saiyari</h3>
//               <p className="text-sm text-slate-500 flex-shrink-0">
//                 Chairman, Saudi Quantum Computing Association
//               </p>
//               <div className="mx-auto">
//                 <img
//                   src="/muhammad.svg"
//                   alt="Muhammad Al Saiyari"
//                   className="w-32 h-32 rounded-full object-cover"
//                 />
//               </div>
//             </div>
//           </PinContainer>

//           <PinContainer title="Linkedin" href="https://www.linkedin.com/in/michaelterpin/">
//             <div className="flex flex-col p-4 text-slate-100 w-[15rem] h-[15rem]">
//               <h3 className="font-bold text-base text-slate-100 mb-1">Michael Terpin</h3>
//               <p className="text-sm text-slate-500 flex-shrink-0">
//                 CEO, Transform Ventures
//               </p>
//               <div className="mx-auto">
//                 <img
//                   src="/michael.svg"
//                   alt="Michael Terpin"
//                   className="w-32 h-32 rounded-full object-cover"
//                 />
//               </div>            </div>
//           </PinContainer>
//           <PinContainer title="Linkedin" href="https://www.linkedin.com/in/jamesdbernard/">
//             <div className="flex flex-col p-4 text-slate-100 w-[15rem] h-[15rem]">
//               <h3 className="font-bold text-base text-slate-100 mb-1">James Bernad</h3>
//               <p className="text-sm text-slate-500 flex-shrink-0">
//                 Chief Compliance/Government relations 5Tech Lab, Ex Director DMCC
//               </p>
//               <div className="mx-auto">
//                 <img
//                   src="/james.svg"
//                   alt="James Bernad"
//                   className="w-32 h-32 rounded-full object-cover"
//                 />
//               </div>            </div>
//           </PinContainer>
//           <PinContainer title="Linkedin" href="https://www.linkedin.com/in/francis-gurry-9bb75a/">
//             <div className="flex flex-col p-4 text-slate-100 w-[15rem] h-[15rem]">
//               <h3 className="font-bold text-base text-slate-100 mb-1">Francis Gurry</h3>
//               <p className="text-sm text-slate-500 flex-shrink-0">
//                 Former Director General, World Intellectual Property Organization
//               </p>
//               <div className="mx-auto">
//                 <img
//                   src="/francisgurry.svg"
//                   alt="Francis Gurry"
//                   className="w-32 h-32 rounded-full object-cover"
//                 />
//               </div>            </div>
//           </PinContainer>
//           <PinContainer title="Linkedin" href="https://www.linkedin.com/in/francis-gurry-9bb75a/">
//             <div className="flex flex-col p-4 text-slate-100 w-[15rem] h-[15rem]">
//               <h3 className="font-bold text-base text-slate-100 mb-1">Robin Joffe</h3>
//               <p className="text-sm text-slate-500 flex-shrink-0">
//                 Partner, Managing Director,Middle East, Africa and South Asia - Frost & Sullivan
//               </p>
//               <div className="mx-auto">
//                 <img
//                   src="/robinj.svg"
//                   alt="Robin Joffe"
//                   className="w-32 h-32 rounded-full object-cover"
//                 />
//               </div>            </div>
//           </PinContainer>

//           {/* add more cards as needed */}
//         </div>
//       </div>

//     </div>
//   </>
// }





"use client";

import React from "react";
import { HeroParallax } from "../../components/ui/hero-parallax";
import { AnimatedTestimonials } from "../../components/ui/animated-testimonials";
import { PinContainer } from "../../components/ui/3d-pin";
import { products, testimonials } from "@/lib/utils";

const advisors = [
  {
    name: "Muhammad Al Saiyari",
    role: "Chairman, Saudi Quantum Computing Association",
    image: "/muhammad.svg",
    link: "https://www.linkedin.com/in/muhammad-al-saiyari-%D9%85%D8%AD%D9%85%D8%AF-%D8%A7%D9%84%D8%B5%D9%8A%D8%B9%D8%B1%D9%8A-1082573/",
  },
  {
    name: "Michael Terpin",
    role: "CEO, Transform Ventures",
    image: "/michael.svg",
    link: "https://www.linkedin.com/in/michaelterpin/",
  },
  {
    name: "James Bernad",
    role: "Chief Compliance/Government Relations, 5Tech Lab; Ex-Director DMCC",
    image: "/james.svg",
    link: "https://www.linkedin.com/in/jamesdbernard/",
  },
  {
    name: "Francis Gurry",
    role: "Former Director General, World Intellectual Property Organization",
    image: "/francisgurry.svg",
    link: "https://www.linkedin.com/in/francis-gurry-9bb75a/",
  },
  {
    name: "Robin Joffe",
    role: "Partner, Managing Director, Middle East, Africa & South Asia – Frost & Sullivan",
    image: "/robinj.svg",
    link: "https://www.linkedin.com/in/robinjoffe/",
  },
];

export default function ProjectsPage() {
  return (
    // Make the root div span the full viewport and hide any horizontal overflow
    <div className="bg-black text-white w-screen overflow-x-hidden">
      {/* Hero + Parallax */}
      <HeroParallax products={products} />

      {/* Testimonials */}
      <AnimatedTestimonials testimonials={testimonials} />

      {/* Advisors Section */}
      <section className="py-12 bg-black">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Our Advisors
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {advisors.map((adv, idx) => (
              <PinContainer key={idx} title="LinkedIn" href={adv.link}>
                <div className="flex flex-col items-center p-6 bg-gray-900 rounded-xl h-full">
                  <div className="w-32 h-32 mb-4">
                    <img
                      src={adv.image}
                      alt={adv.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white text-center">
                    {adv.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-400 text-center">
                    {adv.role}
                  </p>
                </div>
              </PinContainer>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
