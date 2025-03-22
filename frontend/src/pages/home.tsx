"use client";
import React, { useState, useEffect } from "react";
import em2 from "../components/em2.jpg";
import em3 from "../components/emp3.jpg";
import em1 from "../components/safiyaWeb.jpg";
import logo from "../components/LOGO.jpg";
import birthdayimg from "../components/birthday.jpg"
import openMicimg from "../components/OpenMicNight.jpg"
import holidayimg from "../components/HolidayParty.jpg"
import haldiimg from "../components/haldiimg.jpg"
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import HoverEffect from "@/components/ui/card-hover-effect";
import { Menu, MenuItem, ProductItem, HoveredLink } from "../components/ui/navbar-menu";
import { HeroParallax } from "../components/ui/hero-parallax";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/button";
import { FlipWords } from "@/components/ui/flip-words";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { FeaturesSectionDemo } from "@/components/ui/bento-grid";
import { Instagram , Youtube , Linkedin , X , Facebook } from "lucide-react";
import AOS from 'aos';
import "aos/dist/aos.css";
import weddingimg from "../components/wedding.jpg"
import anniversary from "../components/anniversary.jpg"
import openMicNight from "../components/OpenMicNight.jpg"
import holidayParty from "../components/HolidayParty.jpg"
import welcome from "../components/welcome.jpg"
import birthday from "../components/birthday.jpg"
import calender from "../components/calender.jpg"
import { DashboardButton } from "@/components/dashboardButton";
import { MaskContainer } from "@/components/ui/svg-mask-effect";
import { Card, Carousel } from "@/components/ui/apple-cards-carousel";
import venue1 from "../components/wedding-venue.jpg"
import venue2 from "../components/anniversary-venue.jpg"
import venue3 from "../components/birthday-venue.jpg"
import venue4 from "../components/openMic-venue.jpg"
import venue5 from "../components/party-venue.jpg"

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

const eventCards = [
  {
    src: venue1,
    title: "Pune",
    category: "",
    content: <p>Our wedding planning services create memorable experiences.</p>,
  },
  {
    src: venue2,
    title: "Bengaluru",
    category: "",
    content: <p>We make your birthday celebrations truly special.</p>,
  },
  {
    src: venue3,
    title: "Lucknow",
    category: "",
    content: <p>Elevate your corporate events with our professional services.</p>,
  },
  {
    src: venue4,
    title: "Sambhajinagar",
    category: "",
    content: <p>Creative entertainment solutions for all occasions.</p>,
  },
  {
    src: venue5,
    title: "Delhi",
    category: "",
    content: <p>Creative entertainment solutions for all occasions.</p>,
  }
]
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
  { title: "Wedding",  src: weddingimg },
  { title: "Birthday Party",  src: birthday }
];


const products = [
  {
    title: "",
    link: "/product-1",
    thumbnail: weddingimg,
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
    thumbnail: weddingimg,
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
    thumbnail: weddingimg,
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

  useEffect(() => {
        AOS.init({
          duration: 5000,
          offset: 0
        });
      }, []);

  const words = ["precision","creativity","control","simplicity","efficiency"];
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
              src={weddingimg}
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
        <div className="ml-50 w-xs h-15 mt-2 md:flex justify-end pr-20">
          <DashboardButton text="Get Started" onClick={() => {
            navigate("/auth")
          }} />
        </div>
      </div>
      <div className="bg-purple-200 text-white pb-6">
        <HeroParallax products={products}/>
      </div>
        {/* <Carousel slides={slides} /> */}
      <div className="">
        <div className="grid-cols-1 md:w-screen grid grid-cols-2 gap-4 bg-[#755EA5] pb-10">
          <div data-aos="fade-up" className="pl-12 pr-12 pt-4 text-xl font-serif">
            <div className="text-4xl font-extrabold pt-6 text-white">
              Welcome to <b className="text-white">PLANiT</b> – Your Ultimate Event Management Solution!
            </div>
            <div className="text-white mt-10 text-justify">
            At <b className="text-white">PLANiT</b>, we turn your special moments into unforgettable 
            experiences! Whether it's a birthday party, engagement, wedding celebration, anniversary, 
            baby shower, corporate event, farewell, fresher’s party, holiday gathering, or an exciting 
            open mic night, we take care of every detail so you can enjoy the occasion stress-free. 
            From venue selection to décor, entertainment, catering, and seamless coordination,
             our expert team ensures a smooth, hassle-free, and personalized event experience. 
             No matter the size or theme, we bring your vision to life with creativity, precision, 
             and passion.<br/> Let <b className="text-white">PLANiT</b> handle the planning 
             while you create memories that last a lifetime. Your perfect event starts here!
            </div>
            <br />
            
          </div>
          <div data-aos="fade-up" className="w-full pt-20 pl-20">
            <DirectionAwareHover imageUrl={calender} className="w-200"/>
          </div>
        </div>
        <div className="font-extrabold text-center text-[#755EA5] font-serif text-4xl pl-12 pr-12 pt-20">Effortless Event Planning with <FlipWords words={words} /></div>
        <div data-aos="fade-up pl-6">
        <HoverEffect
          items={[
            { title: "Real-time Event Planning", description: "Plan and manage your events in real-time with live updates, ensuring seamless coordination and smooth execution." },
            { title: "Custom Theme Designer", description: "Design personalized event themes with our intuitive theme builder, offering endless customization options for any occasion." },
            { title: "Budget Management", description: "Keep track of your event expenses effortlessly with our comprehensive budget management tool, ensuring you stay within limits." },
            { title: "Guest List Management", description: "Easily create, manage, and track RSVPs with our guest list management system, providing real-time attendance insights." },
            { title: "Mobile Responsive Design", description: "Access and manage your event plans on any device with our fully mobile-responsive platform for planning on the go." },
            { title: "Event Timeline Creator", description: "Organize and visualize your event schedule with our timeline creator, keeping every detail in place from start to finish." }
          ]}
          
        />
        </div>
      <section className="py-16 bg-purple-200">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#755EA5]">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Wedding Planning",
                description:
                  "From intimate ceremonies to grand celebrations, we handle every detail of your special day.",
                icon: "heart",
                image: weddingimg,
              },
              {
                title: "Corporate Events",
                description: "Professional planning for conferences, team building, and company celebrations.",
                icon: "briefcase",
                image: holidayimg,
              },
              {
                title: "Birthday Parties",
                description: "Create memorable birthday experiences with custom themes and entertainment.",
                icon: "cake",
                image: birthdayimg,
              },
              {
                title: "Anniversary Celebrations",
                description: "Commemorate your special milestones with thoughtfully planned celebrations.",
                icon: "gift",
                image: anniversary,
              },
              {
                title: "Cultural Events",
                description: "Showcase traditions and heritage with authentic cultural event planning.",
                icon: "globe",
                image: haldiimg,
              },
              {
                title: "Custom Event Solutions",
                description: "Unique events tailored to your specific vision and requirements.",
                icon: "settings",
                image: openMicimg,
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-purple-50 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-[#755EA5]">{service.title}</h3>
                  <p className="text-gray-700">{service.description}</p>
                  <button className="mt-4 px-4 py-2 bg-[#755EA5] text-white rounded-lg hover:bg-purple-700 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>
        {/* <div className=" relative overflow-hidden bg-[#755EA5] mb-20 pb-10">
          <div className="text-center text-5xl font-bold text-white pt-10">Venues</div>
          <div data-aos="zoom-in-up">
          <Carousel
            items={eventCards.map((card, index) => <Card key={index} card={card} index={index} layout={true} />)}
          />
          </div>
        </div> */}
      <div data-aos="fade-up">
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
