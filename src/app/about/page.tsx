"use client";
import React from "react";
import { HeroParallax } from "../../components/ui/hero-parallax";
import { AnimatedTestimonials } from "../../components/ui/animated-testimonials";
import { PinContainer } from "../../components/ui/3d-pin";
import { products, testimonials } from "@/lib/utils";

export default function ProjectsPage() {
  return <>
    <div className="bg-black text-white">
      <HeroParallax products={products} />;
      <AnimatedTestimonials testimonials={testimonials} />
      {/* <div className="h-[15rem] w-full flex items-center justify-center bg-black">
        <PinContainer
          title="/ui.aceternity.com"
          href="https://twitter.com/mannupaaji"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[15rem] h-[15rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Aceternity UI
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                Customizable Tailwind CSS and Framer Motion Components.
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
          </div>
        </PinContainer>
        <PinContainer
          title="/ui.aceternity.com"
          href="https://twitter.com/mannupaaji"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[15rem] h-[15rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Aceternity UI
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                Customizable Tailwind CSS and Framer Motion Components.
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
          </div>
        </PinContainer>
        <PinContainer
          title="/ui.aceternity.com"
          href="https://twitter.com/mannupaaji"
          className="bg-black"
        >
          <div className="bg-black flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[15rem] h-[15rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Aceternity UI
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                Customizable Tailwind CSS and Framer Motion Components.
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
          </div>
        </PinContainer>
      </div>
      <div className="h-[29rem] w-full flex items-center justify-center bg-black">
        <PinContainer
          title="/ui.aceternity.com"
          href="https://twitter.com/mannupaaji"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[15rem] h-[15rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Aceternity UI
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                Customizable Tailwind CSS and Framer Motion Components.
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
          </div>
        </PinContainer>
        <PinContainer
          title="/ui.aceternity.com"
          href="https://twitter.com/mannupaaji"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[15rem] h-[15rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Aceternity UI
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                Customizable Tailwind CSS and Framer Motion Components.
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
          </div>
        </PinContainer>
        <PinContainer
          title="/ui.aceternity.com"
          href="https://twitter.com/mannupaaji"
          className="bg-black"
        >
          <div className="bg-black flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[15rem] h-[15rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Aceternity UI
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                Customizable Tailwind CSS and Framer Motion Components.
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
          </div>
        </PinContainer>
      </div> */}
      <div className="bg-black py-8">
        <div className="flex flex-wrap items-center justify-center gap-2 px-4">

          <PinContainer title="Linkedin" href="https://www.linkedin.com/in/muhammad-al-saiyari-%D9%85%D8%AD%D9%85%D8%AF-%D8%A7%D9%84%D8%B5%D9%8A%D8%B9%D8%B1%D9%8A-1082573/">
            <div className="flex flex-col p-4 text-slate-100 w-[15rem] h-[15rem]">
              <h3 className="font-bold text-base text-slate-100 mb-1">Muhammad Al Saiyari</h3>
              <p className="text-sm text-slate-500 flex-shrink-0">
                Chairman, Saudi Quantum Computing Association
              </p>
              <div className="mx-auto">
                <img
                  src="/muhammad.svg"
                  alt="Muhammad Al Saiyari"
                  className="w-32 h-32 rounded-full object-cover"
                />
              </div>
            </div>
          </PinContainer>

          <PinContainer title="Linkedin" href="https://www.linkedin.com/in/michaelterpin/">
            <div className="flex flex-col p-4 text-slate-100 w-[15rem] h-[15rem]">
              <h3 className="font-bold text-base text-slate-100 mb-1">Michael Terpin</h3>
              <p className="text-sm text-slate-500 flex-shrink-0">
                CEO, Transform Ventures
              </p>
              <div className="mx-auto">
                <img
                  src="/michael.svg"
                  alt="Michael Terpin"
                  className="w-32 h-32 rounded-full object-cover"
                />
              </div>            </div>
          </PinContainer>
          <PinContainer title="Linkedin" href="https://www.linkedin.com/in/jamesdbernard/">
            <div className="flex flex-col p-4 text-slate-100 w-[15rem] h-[15rem]">
              <h3 className="font-bold text-base text-slate-100 mb-1">James Bernad</h3>
              <p className="text-sm text-slate-500 flex-shrink-0">
                Chief Compliance/Government relations 5Tech Lab, Ex Director DMCC
              </p>
              <div className="mx-auto">
                <img
                  src="/james.svg"
                  alt="James Bernad"
                  className="w-32 h-32 rounded-full object-cover"
                />
              </div>            </div>
          </PinContainer>
          <PinContainer title="Linkedin" href="https://www.linkedin.com/in/francis-gurry-9bb75a/">
            <div className="flex flex-col p-4 text-slate-100 w-[15rem] h-[15rem]">
              <h3 className="font-bold text-base text-slate-100 mb-1">Francis Gurry</h3>
              <p className="text-sm text-slate-500 flex-shrink-0">
                Former Director General, World Intellectual Property Organization
              </p>
              <div className="mx-auto">
                <img
                  src="/francisgurry.svg"
                  alt="Francis Gurry"
                  className="w-32 h-32 rounded-full object-cover"
                />
              </div>            </div>
          </PinContainer>
          <PinContainer title="Linkedin" href="https://www.linkedin.com/in/francis-gurry-9bb75a/">
            <div className="flex flex-col p-4 text-slate-100 w-[15rem] h-[15rem]">
              <h3 className="font-bold text-base text-slate-100 mb-1">Robin Joffe</h3>
              <p className="text-sm text-slate-500 flex-shrink-0">
                Partner, Managing Director,Middle East, Africa and South Asia - Frost & Sullivan
              </p>
              <div className="mx-auto">
                <img
                  src="/robinj.svg"
                  alt="Robin Joffe"
                  className="w-32 h-32 rounded-full object-cover"
                />
              </div>            </div>
          </PinContainer>

          {/* add more cards as needed */}
        </div>
      </div>

    </div>
  </>
}


