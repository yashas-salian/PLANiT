"use client";
import React, { useState, useEffect, useRef } from "react";
import em2 from "../components/images/em2.jpg";
import em3 from "../components/images/emp3.jpg";
import em1 from "../components/images/safiyaWeb.jpg";
import planit_logo from "../components/images/planit_logo.png";
import birthdayimg from "../components/images/birthday.jpg"
import openMic_3 from "../components/images/openMic_3.jpg"
import corporate_3 from "../components/images/corporate_3.png"
import babyShower_3 from "../components/images/babyShower_3.png"
import weddingimg from "../components/images/wedding.jpg"
import anniversary_3 from "../components/images/anniversary_3.png"
import openMicNight from "../components/images/OpenMicNight.jpg"
import holidayParty from "../components/images/HolidayParty.jpg"
import wedding_4 from "../components/images/wedding_4.jpg"
import birthday from "../components/images/birthday.jpg"
import people from "../components/images/peoples.png"
import venue1 from "../components/images/wedding-venue.jpg"
import venue2 from "../components/images/anniversary-venue.jpg"
import venue3 from "../components/images/birthday-venue.jpg"
import venue4 from "../components/images/openMic-venue.jpg"
import venue5 from "../components/images/party-venue.jpg"
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import HoverEffect from "@/components/ui/card-hover-effect";
import { Menu, MenuItem, ProductItem, HoveredLink } from "../components/ui/navbar-menu";
import { HeroParallax } from "../components/ui/hero-parallax";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FlipWords } from "@/components/ui/flip-words";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { FeaturesSectionDemo } from "@/components/ui/bento-grid";
import { Instagram , Youtube , Linkedin , X , Facebook } from "lucide-react";
import AOS from 'aos';
import "aos/dist/aos.css";
import { DashboardButton } from "@/components/dashboardButton";

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

// const slides: SlideData[] = [
//   { title: "Welcome",  src: welcome },
//   { title: "Anniversary", src:anniversary},
//   { title: "Open mic night", src: openMicNight },
//   { title: "Holiday Party", src: holidayParty },
//   { title: "Wedding",  src: weddingimg },
//   { title: "Birthday Party",  src: birthday }
// ];


const products = [
  {
    title: "",
    link: "/product-1",
    thumbnail: weddingimg,
  },
  {
    title: "",
    link: "/product-2",
    thumbnail: anniversary_3,
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
    thumbnail: anniversary_3,
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
    thumbnail: anniversary_3,
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
  const welcomeRef = useRef(null)
  const featuresRef = useRef(null)
  const servicesRef = useRef(null)
  const location =  useLocation()
  // const missionRef = useRef(null)
  // const welcomeRef = useRef(null)

  useEffect(()=>{
    if (location.hash==='#welcome' && welcomeRef.current){
      welcomeRef?.current.scrollIntoView({behavior : "smooth"})
    }
  },[location])

  useEffect(()=>{
    if (location.hash==='#features' && featuresRef.current){
      featuresRef?.current.scrollIntoView({behavior : "smooth"})
    }
  },[location])

  useEffect(()=>{
    if (location.hash==='#our-services' && servicesRef.current){
      servicesRef?.current.scrollIntoView({behavior : "smooth"})
    }
  },[location])

  useEffect(()=>{
    if (location.hash==='#mission' && missionRef.current){
      missionRef?.current.scrollIntoView({behavior : "smooth"})
    }
  },[location])



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
      <div className="grid grid-cols-2 gap-8 px-6 md:grid grid-cols-3 gap-8 px-6">
        <div className="flex justify-start md:flex justify-start">
            <div className="w-auto flex items-center justify-center bg-purple-200 overflow-hidden">
              <img src={planit_logo} className="w-[150px] h-auto mb-10 object-contain z-0" />
            </div>
        </div>
        <div className="invisible md:visible relative z-10 flex justify-center pt-4 pr-4 pl-4 mb-10 w-lg max-h-24">
        <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
          <div className="flex flex-col space-y-4 w-full">
            <HoveredLink to="/#welcome">Welcome</HoveredLink>
            <HoveredLink to="/#features">Features</HoveredLink>
            <HoveredLink to="/#our-services">our Services</HoveredLink>
          </div>
        </MenuItem>
        
        <MenuItem setActive={setActive} active={active} item="Features">
          {/* <div className="flex flex-col space-y-4 w-64 p-2"> */}
            <div className="grid grid-cols-2">
            <ProductItem
              title="Core Features"
              description="Discover our product's main capabilities"
              to="/features/core"
              src={weddingimg}
            />
            <ProductItem
              title="Premium Features"
              description="Explore advanced options and tools"
              to="/features/premium"
              src={anniversary_3}
            /> 
              </div>
            <div className="grid grid-cols-2 pt-4">

            <ProductItem
              title="Core Features"
              description="Discover our product's main capabilities"
              to="/features/core"
              src={holidayParty}
            />
            <ProductItem
              title="Premium Features"
              description="Explore advanced options and tools"
              to="/features/premium"
              src={birthday}
            />
              </div>
          {/* </div> */}
        </MenuItem>
        
        <MenuItem setActive={setActive} active={active} item="Our Team">
          <div className="flex flex-col space-y-4 w-full">
            <HoveredLink to="/team">Safiya Khan</HoveredLink>
            <HoveredLink to="/team">Yashas Salian</HoveredLink>
            <HoveredLink to="/team">Sohail Sayyad</HoveredLink>
          </div>
        </MenuItem>
        
        <MenuItem setActive={setActive} active={active} item="About Us">
          <div className="flex flex-col space-y-4 w-full">
            <HoveredLink to="/about#mission">Our Mission</HoveredLink>
            <HoveredLink to="/about#mission">Our Values</HoveredLink>
            <HoveredLink to="/about#mission">Our Approach</HoveredLink>
          </div>
        </MenuItem>
            <HoveredLink to="/contact/support">Contact Us</HoveredLink>
      </Menu>
        </div>
        <div className="col-span-1 flex justify-end mr-10 md:ml-50 w-xs h-15 mt-4 md:flex justify-end pr-20">
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
      <div 
  ref={welcomeRef} 
  id="welcome" 
  className="grid-cols-1 md:w-screen grid grid-cols-2 gap-4 bg-[#755EA5] bg-no-repeat pb-10">
  <div data-aos="fade-up" className="w-200 pl-12 pr-12 pt-4 text-xl font-serif z-10 relative">
    <div className="text-4xl font-extrabold pt-6 text-white">
      Welcome to <b className="text-white">PLANiT</b> – Your Ultimate Event Management Solution!
    </div>
    <div className="text-white mt-10 text-justify">
      At <b className="text-white">PLANiT</b>, we turn your special moments into unforgettable 
      experiences! Whether it's a birthday party, engagement, wedding celebration, anniversary, 
      baby shower, corporate event, farewell, fresher's party, holiday gathering, or an exciting 
      open mic night, we take care of every detail so you can enjoy the occasion stress-free. 
      From venue selection to décor, entertainment, catering, and seamless coordination,
      our expert team ensures a smooth, hassle-free, and personalized event experience. 
      No matter the size or theme, we bring your vision to life with creativity, precision, 
      and passion.<br/> Let <b className="text-white">PLANiT</b> handle the planning 
      while you create memories that last a lifetime. Your perfect event starts here!
    </div>
    <br />
  </div>
  <div data-aos="fade-up" className="w-full z-10 relative bg-no-repeat"
   style={{ 
    backgroundImage: `url(${people})`,
    backgroundSize: '500px 500px',
    backgroundPosition: 'center bottom',
    backgroundBlendMode: 'soft-light',
    backgroundOpacity: '0.1',
  }}>
    {/* <DirectionAwareHover imageUrl={welcome_1} className="w-200"/> */}
  </div>
</div>
        <div ref={featuresRef} id="features" className="font-extrabold text-center text-[#755EA5] font-serif text-4xl pl-12 pr-12 pt-20">Effortless Event Planning with <FlipWords words={words} className="text-5xl"/></div>
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
      <section ref={servicesRef} id="our-services" className="py-16 bg-purple-200">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#755EA5]">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Wedding Planning",
                description:
                  "From intimate ceremonies to grand celebrations, we handle every detail of your special day.",
                icon: "heart",
                image: wedding_4,
              },
              {
                title: "Corporate Events",
                description: "Professional planning for conferences, team building, and company celebrations.",
                icon: "briefcase",
                image: corporate_3,
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
                image: anniversary_3,
              },
              {
                title: "Baby Shower",
                description: "Showcase traditions and heritage with authentic cultural event planning.",
                icon: "globe",
                image: babyShower_3,
              },
              {
                title: "Open Mic Nights",
                description: "Unique events tailored to your specific vision and requirements.",
                icon: "settings",
                image: openMic_3,
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
                  {/* <button className="mt-4 px-4 py-2 bg-[#755EA5] text-white rounded-lg hover:bg-purple-700 transition-colors">
                    Learn More
                  </button> */}
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
              <a to="mailto:PLANiT@gmail.com">Email: PLANiT@gmail.com</a> <br />
            </div>
            <div className="font-semibold transition-all duration-100 hover:scale-105">
           <a to="tel:7385875052">Phone: 9999999999</a> <br />
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
