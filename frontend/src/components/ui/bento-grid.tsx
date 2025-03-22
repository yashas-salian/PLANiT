"use client"
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { World } from "./globe";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";
import {Link} from "react-router-dom";
import venue1 from "../wedding-venue.jpg"
import venue2 from "../anniversary-venue.jpg"
import venue3 from "../birthday-venue.jpg"
import venue4 from "../openMic-venue.jpg"
import venue5 from "../holiday-venue.jpg"
import team from "../team-planning.jpg"

const globeData = [
  // North America to Europe
  {
    order: 0,
    startLat: 40.7128,
    startLng: -74.0060,  // New York
    endLat: 51.5074,
    endLng: -0.1278,    // London
    arcAlt: 0.3,
    color: "#4CC3FF"
  },
  // Europe to Asia
  {
    order: 1,
    startLat: 48.8566,
    startLng: 2.3522,    // Paris
    endLat: 35.6762,
    endLng: 139.6503,   // Tokyo
    arcAlt: 0.5,
    color: "#FF6B6B"
  },
  // North America to South America
  {
    order: 2,
    startLat: 34.0522,
    startLng: -118.2437, // Los Angeles
    endLat: -23.5505,
    endLng: -46.6333,   // São Paulo
    arcAlt: 0.4,
    color: "#FFD166"
  },
  // Asia to Australia
  {
    order: 3,
    startLat: 22.3193,
    startLng: 114.1694,  // Hong Kong
    endLat: -33.8688,
    endLng: 151.2093,   // Sydney
    arcAlt: 0.45,
    color: "#06D6A0"
  },
  // Europe to Africa
  {
    order: 4,
    startLat: 41.9028,
    startLng: 12.4964,   // Rome
    endLat: -1.2921,
    endLng: 36.8219,    // Nairobi
    arcAlt: 0.35,
    color: "#9D4EDD"
  },
  // Additional connections
  {
    order: 5,
    startLat: 19.4326,
    startLng: -99.1332,  // Mexico City
    endLat: 55.7558,
    endLng: 37.6173,    // Moscow
    arcAlt: 0.6,
    color: "#FC8DEA"
  },
  {
    order: 6,
    startLat: 31.2304,
    startLng: 121.4737,  // Shanghai
    endLat: -33.4489,
    endLng: -70.6693,   // Santiago
    arcAlt: 0.7,
    color: "#118AB2"
  },
  {
    order: 7,
    startLat: 1.3521,
    startLng: 103.8198,  // Singapore
    endLat: 25.2048,
    endLng: 55.2708,    // Dubai
    arcAlt: 0.25,
    color: "#FFA07A"
  },
  {
    order: 8,
    startLat: 37.7749,
    startLng: -122.4194, // San Francisco
    endLat: 28.6139,
    endLng: 77.2090,    // Delhi
    arcAlt: 0.55,
    color: "#7FFF00"
  },
  {
    order: 9,
    startLat: -34.6037,
    startLng: -58.3816,  // Buenos Aires
    endLat: 30.0444,
    endLng: 31.2357,    // Cairo
    arcAlt: 0.65,
    color: "#00A6FB"
  }
];

const globeConfig = {
  pointSize: 1.5,
  globeColor: "#1d072e",
  showAtmosphere: true,
  atmosphereColor: "#ffffff",
  atmosphereAltitude: 0.15,
  emissive: "#220038",
  emissiveIntensity: 0.1,
  shininess: 0.9,
  polygonColor: "rgba(255,255,255,0.7)",
  ambientLight: "#ffffff",
  directionalLeftLight: "#ffffff",
  directionalTopLight: "#9f95a5",
  pointLight: "#ffffff",
  arcTime: 2000,
  arcLength: 0.9,
  rings: 1,
  maxRings: 3,
  autoRotate: true,
  autoRotateSpeed: 1
};
export function FeaturesSectionDemo() {
const features = [
        {
          title: "Track and Manage Events",
          description:
            "Effortlessly organize, monitor, and manage all your events in one place with our intuitive dashboard.",
          skeleton: <SkeletonOne />,
          className: "col-span-1 lg:col-span-4 border-b lg:border-r border-[#755EA5] pb-4",
        },
        {
          title: "Get wide range of stunning venues to choose",
          description:
            "Capture and collect stunning images of your events seamlessly using our AI-powered tools.",
          skeleton: <SkeletonTwo />,
          className: "border-b col-span-1 lg:col-span-2 border-[#755EA5]",
        },
      ];
      
  return (
    <div className="relative z-20 py-10 lg:py-20 max-w-7xl mx-auto">
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-bold text-[#755EA5]">
        Effortless Event Management, All in One Place
        </h4>

        <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-center font-semibold text-black">
        Packed with powerful features, our event management app simplifies planning from start to finish. From 
        seamless scheduling and guest management to automated reminders and real-time updates, everything you 
        need is just a tap away. Focus on creating memorable events—we’ll handle the rest!
        </p>
      </div>

      <div className="relative ">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md border-purple-600">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className=" h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="font-bold max-w-5xl mx-auto text-left tracking-tight text-[#755EA5] text-2xl md:text-3xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base  max-w-4xl text-left mx-auto",
        "text-black text-center font-semibold ",
        "text-left max-w-sm mx-0 md:text-base my-2"
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full ">
      <div className="w-full  p-5  mx-auto h-full ">
        <div className="flex flex-1 w-full h-full flex-col space-y-2 shadow-xl shadow-purple-400">
          {/* TODO */}
          <img
            src={team}
            alt="header"
            width={800}
            height={800}
            className="pt-4 h-full w-full aspect-square object-cover transtition-all duration-300 hover:scale-107"
          />
        </div>
      </div>

      <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-purple-200 w-full pointer-events-none" />
      <div className="absolute top-0 z-40 inset-x-0 h-60 w-full pointer-events-none" />
    </div>
  );
};

export const SkeletonThree = () => {
  return (
    <Link
      href="https://www.youtube.com/watch?v=RPa3_AD1_Vs"
      target="__blank"
      className="relative flex gap-10  h-full group/image"
    >
      <div className="w-full  mx-auto bg-transparent dark:bg-transparent group h-full">
        <div className="flex flex-1 w-full h-180 flex-col space-y-2  relative">
          {/* TODO */}
          <IconBrandYoutubeFilled className="h-20 w-20 absolute z-10 inset-0 text-red-500 m-auto " />
          <img
            src="https://assets.aceternity.com/fireship.jpg"
            alt="header"
            width={800}
            height={800}
            className="h-full w-full pt-6 aspect-square object-cover object-center rounded-lg blur-none group-hover/image:blur-md transition-all duration-200"
          />
        </div>
      </div>
    </Link>
  );
};

export const SkeletonTwo = () => {
  const imageSets = [
    [venue1, venue3, venue5],
    [venue2, venue4, venue1],
    [venue3, venue5, venue2],
  ];

  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  };
  
  return (
    <div className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden">
      <>
        {imageSets.map((images, rowIdx) => (
          <div key={rowIdx} className="flex flex-row -ml-20">
            {images.map((image, idx) => (
              <motion.div
                variants={imageVariants}
                key={`images-${rowIdx}-${idx}`}
                style={{ rotate: Math.random() * 20 - 10 }}
                whileHover="whileHover"
                whileTap="whileTap"
                className="rounded-xl -mr-4 mt-4 p-1 bg-black border border-neutral-900 flex-shrink-0 overflow-hidden"
              >
                <img
                  src={image}
                  alt="venue images"
                  width="500"
                  height="500"
                  className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                />
              </motion.div>
            ))}
          </div>
        ))}

        <>
          <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-bg-purple-200 h-full pointer-events-none" />
          <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-bg-purple-200 to-transparent h-full pointer-events-none" />
        </>
      </>
    </div>
  );
};

export const SkeletonFour = () => {
  return (
    <div className="h-[600px] items-center relative bg-transparent mt-10">
       <World globeConfig={globeConfig} data={globeData} className="w-full"/>
    </div>
  );
};

