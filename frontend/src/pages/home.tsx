"use client";
import React, { useState, useEffect } from "react";
import em2 from "../components/em2.jpg";
import em3 from "../components/emp3.jpg";
import em1 from "../components/safiyaWeb.jpg";
import logo from "../components/LOGO.jpg";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import HoverEffect from "@/components/ui/card-hover-effect";
import Carousel from "@/components/ui/carousel";
import { Menu, MenuItem, ProductItem, HoveredLink } from "../components/ui/navbar-menu";
import { HeroParallax } from "../components/ui/hero-parallax";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/button";
import { FlipWords } from "@/components/ui/flip-words";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { FeaturesSectionDemo } from "@/components/ui/bento-grid";
import { Instagram , Youtube , Linkedin , X , Facebook } from "lucide-react";
import wedding from "../components/wedding.jpg"
import anniversary from "../components/anniversary.jpg"
import openMicNight from "../components/OpenMicNight.jpg"
import holidayParty from "../components/HolidayParty.jpg"
import welcome from "../components/welcome.jpg"
import birthday from "../components/birthday.jpg"
import calender from "../components/calender.jpg"

interface Items {
  id: number;
  name: string;
  designation: string;
  image: string;
}

interface SlideData {
  title: string;
  // button: string;
  src: string;
}

const items: Items[] = [
  { id: 1, name: "Safiya", designation: "Frontend Designer", image: em1 },
  { id: 2, name: "Yashas", designation: "Backend Developer", image: em2 },
  { id: 3, name: "Sohail", designation: "Documentation Executive", image: em3 }
];

const slides: SlideData[] = [
  { title: "Welcome",  src: welcome },
  { title: "Anniversary", src:anniversary},
  { title: "Open mic night", src: openMicNight },
  { title: "Holiday Party", src: holidayParty },
  { title: "Wedding",  src: wedding },
  { title: "Birthday Party",  src: birthday }
];


const products = [
  {
    title: "",
    link: "/product-1",
    thumbnail: wedding,
  },
  {
    title: "",
    link: "/product-2",
    thumbnail: anniversary,
  },
  {
    title: "",
    link: "/product-3",
    thumbnail: openMicNight,
  },
  {
    title: "",
    link: "/product-4",
    thumbnail: holidayParty,
  },
  {
    title: "",
    link: "/product-5",
    thumbnail: birthday,
  },
  {
    title: "",
    link: "/product-6",
    thumbnail: wedding,
  },
  {
    title: "",
    link: "/product-7",
    thumbnail: anniversary,
  },
  {
    title: "",
    link: "/product-8",
    thumbnail: openMicNight,
  },
  {
    title: "",
    link: "/product-9",
    thumbnail: holidayParty,
  },
  {
    title: "",
    link: "/product-10",
    thumbnail: birthday,
  },
  {
    title: "",
    link: "/product-11",
    thumbnail: wedding,
  },
  {
    title: "",
    link: "/product-12",
    thumbnail: anniversary,
  },
  {
    title: "",
    link: "/product-13",
    thumbnail: openMicNight,
  },
  {
    title: "",
    link: "/product-14",
    thumbnail: holidayParty,
  },
  {
    title: "",
    link: "/product-15",
    thumbnail: birthday,
  },
];

export const HomePage: React.FC = () => {
  const [active, setActive] = useState<string | null>(null);

  const scrollToTop = (e) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const navigate = useNavigate()
  const words = ["Weddings", "Anniversaries", "Corporate Events", "and much more"];
  return (
    <div className="bg-purple-200 flex flex-col relative w-full min-h-screen overflow-x-hidden">
      <div className="grid grid-cols-2 gap-8 px-6 py-4 md:grid grid-cols-3 gap-8 px-6 py-4">
        <div className="flex justify-start">
          <div className="grid grid-cols-2">
            <div className="w-16 h-16 flex items-center justify-center bg-purple-200 overflow-hidden">
              <img src={logo} className="w-12 h-12 object-contain z-0" />
            </div>
            <Link to="/" className="pt-4">
            <b className="absolute top-3 text-2xl text-[#755EA5] mb-4 mt-4 z-10">PLANiT</b>
            </Link>
          </div>
        </div>
        <div className="invisible md:visible relative z-10 flex justify-center pt-2 pr-4 pl-4 w-lg">
        <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
          <div className="flex flex-col space-y-4 w-64">
            <HoveredLink href="/">Main Page</HoveredLink>
            <HoveredLink href="/welcome">Welcome</HoveredLink>
            <HoveredLink href="/latest">Latest Updates</HoveredLink>
          </div>
        </MenuItem>
        
        <MenuItem setActive={setActive} active={active} item="Features">
          {/* <div className="flex flex-col space-y-4 w-64 p-2"> */}
            <div className="grid grid-cols-2">
            <ProductItem
              title="Core Features"
              description="Discover our product's main capabilities"
              href="/features/core"
              src={wedding}
            />
            <ProductItem
              title="Premium Features"
              description="Explore advanced options and tools"
              href="/features/premium"
              src={anniversary}
            /> 
              </div>
            <div className="grid grid-cols-2 pt-4">

            <ProductItem
              title="Core Features"
              description="Discover our product's main capabilities"
              href="/features/core"
              src={holidayParty}
            />
            <ProductItem
              title="Premium Features"
              description="Explore advanced options and tools"
              href="/features/premium"
              src={birthday}
            />
              </div>
          {/* </div> */}
        </MenuItem>
        
        <MenuItem setActive={setActive} active={active} item="Our Team">
          <div className="flex flex-col space-y-4 w-64">
            <HoveredLink href="/team/leadership">Leadership</HoveredLink>
            <HoveredLink href="/team/developers">Developers</HoveredLink>
            <HoveredLink href="/team/designers">Designers</HoveredLink>
            <HoveredLink href="/team/support">Support Team</HoveredLink>
          </div>
        </MenuItem>
        
        <MenuItem setActive={setActive} active={active} item="About Us">
          <div className="flex flex-col space-y-4 w-64">
            <HoveredLink href="/about/story">Our Story</HoveredLink>
            <HoveredLink href="/about/mission">Mission & Vision</HoveredLink>
            <HoveredLink href="/about/values">Core Values</HoveredLink>
          </div>
        </MenuItem>
        
        <MenuItem setActive={setActive} active={active} item="Contact Us">
          <div className="flex flex-col space-y-4 w-64">
            <HoveredLink href="/contact/support">Support</HoveredLink>
            <HoveredLink href="/contact/sales">Sales</HoveredLink>
            <HoveredLink href="/contact/careers">Careers</HoveredLink>
            <HoveredLink href="/contact/press">Press Inquiries</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
        </div>
        <div className="w-md md:flex justify-end pr-20">
          <Button text="Get Started" onClick={() => {
            navigate("/auth")
          }} />
        </div>
      </div>
      <div className="bg-purple-200 text-white pb-6">
        <HeroParallax products={products}/>
      </div>
        {/* <Carousel slides={slides} /> */}
      <div className="pt-12 pl-6">
        <div className="grid-cols-1 md:grid grid-cols-2 gap-4">
          <div className="pl-12 pr-12 pt-4 text-xl font-serif">
            <div className="text-4xl font-extrabold pt-6">
              Welcome to <b className="text-[#755EA5]">PLANiT</b> – Your Ultimate Event Management Solution!
            </div>
            <br />
            At <b className="text-[#755EA5]">PLANiT</b>, we turn your special moments into unforgettable experiences! Whether it's a birthday party, engagement, wedding celebration, anniversary, baby shower, corporate event, farewell, fresher’s party, holiday gathering, or an exciting open mic night, we take care of every detail so you can enjoy the occasion stress-free. From venue selection to décor, entertainment, catering, and seamless coordination, our expert team ensures a smooth, hassle-free, and personalized event experience. No matter the size or theme, we bring your vision to life with creativity, precision, and passion.<br/> Let <b className="text-[#755EA5]">PLANiT</b> handle the planning while you create memories that last a lifetime. Your perfect event starts here!
          </div>
          <div className=" pt-20 pl-20">
            <DirectionAwareHover imageUrl={calender}/>
          </div>
        </div>
        <div className="font-extrabold font-serif text-4xl pl-12 pr-12 pt-6">What we do? We do <FlipWords words={words} /></div>
        <HoverEffect
          items={[
            { title: "Wedding Planning", description: "We handle everything from venue selection to décor, catering, and entertainment, ensuring a seamless and magical wedding experience." },
            { title: "Birthday Parties", description: "From themed decorations to cake, music, and activities, we create unforgettable birthday celebrations tailored to all ages." },
            { title: "Corporate Events", description: "We plan professional gatherings, including conferences, seminars, and team-building events, with seamless logistics and top-notch coordination." },
            { title: "Anniversary Celebrations", description: "Celebrate love with intimate or grand anniversary parties featuring elegant décor, fine dining, and personalized touches." },
            { title: "Open Mic Nights", description: "We set up engaging open mic nights with stage design, sound setup, and a welcoming atmosphere for performers and audiences." },
            { title: "Holiday Parties", description: "From festive decorations to curated menus and entertainment, we create vibrant holiday parties that capture the season's spirit." }
          ]}
        />
      </div>
        <div className="pb-16">
          <div className="font-extrabold font-serif text-4xl pl-18 pr-12 pt-6 pb-4">
            Some of our <b className="text-[#755EA5]">Works</b>
          </div>
      <Carousel slides={slides} />
      </div>
      <div>
        <FeaturesSectionDemo/>
      </div>
      <div className="bg-purple-200 flex flex-col relative w-full">

        {/* <hr className="mt-8" /> */}

      <div className="bg-[#9583C0] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4 md:px-6 py-6 md:py-8 text-white">


        {/* Home Section */}
        <div className="flex flex-col items-center md:items-start">
        <b className="text-2xl mb-4 text-black  ">Quick links</b>
          <ul className="text-black space-y-2">
            <li className="font-semibold transition-all duration-400 hover:scale-105"><Link
            to="/"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop(e);
            }}
            className=" mb-4text-black  "
          >
            <span>Home</span>
          </Link></li>
            <li className="font-semibold transition-all duration-100 hover:scale-105"><Link to="/features">Features</Link></li>
            <li className="font-semibold transition-all duration-100 hover:scale-105"><Link to="/team">Our team</Link></li>
            <li className="font-semibold transition-all duration-100 hover:scale-105"><Link to="/about">About us</Link></li>
            <li className="font-semibold transition-all duration-100 hover:scale-105"><Link to="/contact">Contact us</Link></li>
          </ul>
          
        </div>

        {/* Features Section */}
        <div className="flex flex-col items-center md:items-start">
          <b className="text-2xl mb-4 text-black ">Features</b>
            <Link to="/features">
              <ul className="text-black space-y-2">
                <li className="font-semibold transition-all duration-100 hover:scale-105"> Real-time Event Planning</li> 
                <li className="font-semibold transition-all duration-100 hover:scale-105">Custom Theme Designer</li>
                <li className="font-semibold transition-all duration-100 hover:scale-105"> Budget Management</li>
                <li className="font-semibold transition-all duration-100 hover:scale-105"> Guest List Management</li>
                <li className="font-semibold transition-all duration-100 hover:scale-105"> Mobile Responsive Design</li>
                <li className="font-semibold transition-all duration-100 hover:scale-105"> Event Timeline Creator</li>
                <li className="font-semibold transition-all duration-100 hover:scale-105"> All features</li>
              </ul>
            </Link>
        </div>

          {/* Our team section */}
        <div className="flex flex-col items-center md:items-start">
          <b className="text-2xl mb-4 text-black ">Our Team</b>
          <Link to="/team">
            <AnimatedTooltip items={items} />
          </Link>
          <b className="text-2xl mt-4 text-black mt-8 mb-4">Social media</b>
          <div className="text-black grid grid-cols-5 gap-x-4"> 
            <div className="transition-all duration-100 hover:scale-120"><Link to="https://www.instagram.com/yashassalian1/"><Instagram/></Link></div>
            <div className="transition-all duration-100 hover:scale-120"><Link to="https://www.instagram.com/yashassalian1/"><Facebook/></Link></div>
            <div className="transition-all duration-100 hover:scale-120"><Link to="https://www.youtube.com/@yashassalian191"><Youtube/></Link></div>
            <div className="transition-all duration-100 hover:scale-120"><Link to="https://www.linkedin.com/in/yashas-salian-69539228b/"><Linkedin/></Link></div>
            <div className="transition-all duration-100 hover:scale-120"><Link to="https://x.com/salian_yashas"><X/></Link></div>
          </div>
        </div>

        {/* About Us Section */}
        <div className="flex flex-col items-center md:items-start">
          <b className="text-2xl mb-4 text-black ">About Us</b>
          <p className="text-black text-center md:text-left font-semibold">
            PLANiT simplifies event planning with innovative technology and user-friendly features. Since 2024, we've helped clients turn ideas into memorable experiences effortlessly.
          </p>
        </div>

        {/* Contact Us Section */}
        <div className="flex flex-col items-center md:items-start">
          <b className="text-2xl mb-4 text-black ">Contact Us</b>
          <div className="text-black text-center md:text-left font-semibold">
            GVJ8+567, IIEDC, Aissms IOIT, AISSMS COE Parking Rd, near RTO, Railway Officers Colony, Sangamvadi, Pune, Maharashtra 411001
            <br /><br />
            <div className="font-semibold transition-all duration-100 hover:scale-105">
              <a href="mailto:PLANiT@gmail.com">Email: PLANiT@gmail.com</a> <br />
            </div>
            <div className="font-semibold transition-all duration-100 hover:scale-105">
           <a href="tel:7385875052">Phone: 9999999999</a> <br />
           </div>
           <div className="font-semibold transition-all duration-100 hover:scale-105">
           More contact info
           </div>
          </div>
        </div>
      </div>

      </div>
    </div>
  );
};
