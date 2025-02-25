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
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/button";
import { FlipWords } from "@/components/ui/flip-words";

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
  { title: "Welcome",  src: "https://static.vecteezy.com/system/resources/previews/024/316/125/original/event-management-wedding-planner-manager-planning-event-conference-or-party-professional-organizer-schedule-modern-flat-cartoon-style-illustration-on-white-background-vector.jpg" },
  { title: "Anniversary", src: "https://scopeims.com/wp-content/uploads/2019/03/PHOTOFINE-51-compressor.jpg" },
  { title: "Open mic night", src: "https://uploads.sarvgyan.com/2014/08/event-management.jpg" },
  { title: "Holiday Party", src: "https://i.pinimg.com/originals/8a/7a/2e/8a7a2e889618b8a6c50f3bd7f56105c0.jpg" },
  { title: "Wedding",  src: "https://wallpapercave.com/wp/wp10715834.jpg" },
  { title: "Birthday Party",  src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJwOhvPfc8gxnJ2epznAqYP_qFE8_XwdQNbw&s" }
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
              <img src={logo} className="w-12 h-12 object-contain" />
            </div>
            <Link to="/" className="pt-4">
            <b className="text-2xl text-[#755EA5] mb-4 mt-4">PLANiT</b>
            </Link>
          </div>
        </div>

        <div className="invisible md:visible relative z-10 flex justify-center pt-2 pb-10 pr-4 pl-4 w-lg">
          <Menu setActive={setActive}>
            <MenuItem setActive={setActive} active={active} item="Home">
              <HoveredLink to="/" className="bg-purple-600">Home</HoveredLink>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Features">
              <HoveredLink to="/features"><ul className="text-white space-y-2">
              <li>• Real-time Event Planning</li>
              <li>• Custom Theme Designer</li>
              <li>• Budget Management</li>
              <li>• Guest List Management</li>
              <li>• Mobile Responsive Design</li>
              <li>• Event Timeline Creator</li>
            </ul>.... know more</HoveredLink>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="About Us">
              <HoveredLink to="/about">PLANiT simplifies event planning <br/>with innovative technology and <br/>user-friendly features. Since <br/>2024, we've helped clients <br/>turn ideas into memorable <br/>experiences effortlessly.<br/>.... know more</HoveredLink>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Contact">
            <div className="text-white">
            GVJ8+567, IIEDC, Aissms ioit,<br/> AISSMS COE Parking Rd,<br/> near RTO, Railway Officers Colony,<br/> Sangamvadi, Pune, Maharashtra 411001<br/><br/>
              Email: PLANiT@gmail.com<br />
              Phone: +91 9897969594
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
        <Carousel slides={slides} />
      <div className="pt-12 pl-6">
        <div className="pl-12 pr-12 pt-4 text-xl font-serif">
          <div className="text-4xl font-extrabold pt-6">
            Welcome to <b className="text-[#755EA5]">PLANiT</b> – Your Ultimate Event Management Solution!
          </div>
          <br />
          At <b className="text-[#755EA5]">PLANiT</b>, we turn your special moments into unforgettable experiences! Whether it's a birthday party, engagement, wedding celebration, anniversary, baby shower, corporate event, farewell, fresher’s party, holiday gathering, or an exciting open mic night, we take care of every detail so you can enjoy the occasion stress-free. From venue selection to décor, entertainment, catering, and seamless coordination, our expert team ensures a smooth, hassle-free, and personalized event experience. No matter the size or theme, we bring your vision to life with creativity, precision, and passion. Let <b className="text-[#755EA5]">PLANiT</b> handle the planning while you create memories that last a lifetime. Your perfect event starts here!
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

      <div className="bg-purple-200 flex flex-col relative w-full">

        {/* <hr className="mt-8" /> */}

        <div className="bg-[#9583C0] grid grid-cols-5 gap-8 px-6 py-4">
          <div className="flex flex-col">
            <b className="text-xl mb-4">Our Team</b>
            <Link to="/team">
            <AnimatedTooltip items={items}/>
            </Link>
          </div>

          <div className="flex flex-col">
            <Link
              to="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop(e);
              }}
              className="text-xl mb-4 font-bold"
            >
              <span>Home</span>
            </Link>
          </div>

          <div className="flex flex-col">
            <b className="text-xl mb-4">Features</b>
            <ul className="text-black space-y-2">
              <li>• Real-time Event Planning</li>
              <li>• Custom Theme Designer</li>
              <li>• Budget Management</li>
              <li>• Guest List Management</li>
              <li>• Mobile Responsive Design</li>
              <li>• Event Timeline Creator</li>
            </ul>
          </div>

          <div className="flex flex-col">
            <b className="text-xl mb-4">About Us</b>
            <p className="text-black">
              PLANiT simplifies event planning with innovative technology and user-friendly features. Since 2024, we've helped clients turn ideas into memorable experiences effortlessly.
            </p>
          </div>

          <div className="flex flex-col">
            <b className="text-xl mb-4">Contact Us</b>
            <div className="text-black">
            GVJ8+567, IIEDC, Aissms ioit, AISSMS COE Parking Rd, near RTO, Railway Officers Colony, Sangamvadi, Pune, Maharashtra 411001<br/><br/>
              Email: PLANiT@gmail.com<br />
              Phone: 9999999999
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
