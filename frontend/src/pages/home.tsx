"use client";
import React, { useState } from "react";
import em2 from "../components/em2.jpg";
import em3 from "../components/emp3.jpg";
import em1 from "../components/safiyaWeb.jpg";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import HoverEffect from "@/components/ui/card-hover-effect";
import Carousel from "@/components/ui/carousel";
import { Menu, MenuItem, ProductItem, HoveredLink } from "../components/ui/navbar-menu";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface Items {
  id: number;
  name: string;
  designation: string;
  image: string;
}

interface SlideData {
  title: string;
  button: string;
  src: string;
}

const items: Items[] = [
  { id: 1, name: "Safiya", designation: "Frontend Designer", image: em1 },
  { id: 2, name: "Yashas", designation: "Backend Developer", image: em2 },
  { id: 3, name: "Sohail", designation: "Documentation Executive", image: em3 }
];

const slides: SlideData[] = [
  { title: "Welcome", button: "Click Me", src: "https://static.vecteezy.com/system/resources/previews/024/316/125/original/event-management-wedding-planner-manager-planning-event-conference-or-party-professional-organizer-schedule-modern-flat-cartoon-style-illustration-on-white-background-vector.jpg" },
  { title: "Anniversary", button: "Learn More", src: "https://scopeims.com/wp-content/uploads/2019/03/PHOTOFINE-51-compressor.jpg" },
  { title: "Open mic night", button: "Learn More", src: "https://uploads.sarvgyan.com/2014/08/event-management.jpg" },
  { title: "Holiday Party", button: "Learn More", src: "https://i.pinimg.com/originals/8a/7a/2e/8a7a2e889618b8a6c50f3bd7f56105c0.jpg" },
  { title: "Wedding", button: "Learn More", src: "https://wallpapercave.com/wp/wp10715834.jpg" },
  { title: "Birthday Party", button: "Learn More", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJwOhvPfc8gxnJ2epznAqYP_qFE8_XwdQNbw&s" }
];

export const HomePage: React.FC = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="bg-purple-200 flex flex-col relative w-full min-h-screen overflow-x-hidden">
      <div className="pt-2 pb-30 pr-4 pl-4 ml-124 w-lg">
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
          <HoveredLink to="/" className="bg-purple-600">Home</HoveredLink>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Features">
          <HoveredLink to="/features">Features</HoveredLink>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="About Us">
          <HoveredLink to="/about">About Us</HoveredLink>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact">
          <div className="flex flex-col space-y-2">
            <div>Email: PLANiT@gmail.com</div>
            <div>Phone: 9999999999</div>
          </div>
        </MenuItem>
      </Menu>
      </div>
      <Carousel slides={slides} />

      <div className="pt-12 pl-6">
        <div className="pl-12 pr-12 pt-4 text-xl font-serif">
          <div className="text-4xl font-extrabold pt-6">
            Welcome to <b className="text-purple-600">PLANiT</b> – Your Ultimate Event Management Solution!
          </div>
          <br />
          Planning an event can be overwhelming, but with <b className="text-purple-600">PLANiT</b>, it's effortless and stress-free! Whether you're organizing a birthday party, wedding, corporate event, anniversary celebration, or any special occasion, our platform ensures a smooth and hassle-free experience from start to finish.
        </div>

        <div className="font-extrabold font-serif text-4xl pl-12 pr-12 pt-6">What we do?</div>
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
      
      <hr className="mx-6 mt-8" />

      <div className="grid grid-cols-5 gap-8 px-6 py-4">
        <div className="flex flex-col">
          <b className="text-xl mb-4">Our Team</b>
          <AnimatedTooltip items={items} />
        </div>
        
        <div className="flex flex-col">
          <b className="text-xl mb-4">Home</b>
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
            Email: PLANiT@gmail.com<br/>
            Phone: 9999999999
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};