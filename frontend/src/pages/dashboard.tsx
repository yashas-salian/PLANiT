import React from 'react';
import { Home, Contact, Users, HelpCircle, BadgeSwissFranc, Menu } from 'lucide-react';
import { Sidebar, SidebarBody, SidebarLink, useSidebar } from '../components/ui/sidebar';
import { motion } from 'framer-motion';
import Carousel from '@/components/ui/carousel';
import logo from "../components/LOGO.jpg"
import { Link } from 'react-router-dom';

interface SlideData {
  title: string;
  button: string;
  src: string;
}

const slides: SlideData[] = [
  { title: "Welcome", button: "Click Me", src: "https://static.vecteezy.com/system/resources/previews/024/316/125/original/event-management-wedding-planner-manager-planning-event-conference-or-party-professional-organizer-schedule-modern-flat-cartoon-style-illustration-on-white-background-vector.jpg" },
  { title: "Anniversary", button: "Learn More", src: "https://scopeims.com/wp-content/uploads/2019/03/PHOTOFINE-51-compressor.jpg" },
  { title: "Open mic night", button: "Learn More", src: "https://uploads.sarvgyan.com/2014/08/event-management.jpg" },
  { title: "Holiday Party", button: "Learn More", src: "https://i.pinimg.com/originals/8a/7a/2e/8a7a2e889618b8a6c50f3bd7f56105c0.jpg" },
  { title: "Wedding", button: "Learn More", src: "https://wallpapercave.com/wp/wp10715834.jpg" },
  { title: "Birthday Party", button: "Learn More", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJwOhvPfc8gxnJ2epznAqYP_qFE8_XwdQNbw&s" }
];

const SidebarHeader = () => {
  const { open, animate } = useSidebar();
  
  return (
    <div className="mb-8 flex items-center justify-start">
      {!open ? (
        <Menu className="w-6 h-6 text-white ml-1.5" />
      ) : (
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl font-bold text-white"
        >
          PLANiT
        </motion.h1>
      )}
    </div>
  );
};

export const Dashboard = () => {
  const navigationLinks = [
    {
      label: "Home",
      href: "/",
      icon: <Home className="w-5 h-5 text-white" />
    },
    {
      label: "Features",
      href: "/features",
      icon: <BadgeSwissFranc className="w-5 h-5 text-white" />
    },
    {
      label: "Our team",
      href: "/team",
      icon: <Users className="w-5 h-5 text-white" />
    },
    {
      label: "Contact us",
      href: "/contact",
      icon: <Contact className="w-5 h-5 text-white" />
    }
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-purple-100">
      <div className="fixed top-0 left-0 h-full w-64 z-50">
        <Sidebar>
          <SidebarBody className="bg-[#755EA5]">
            <SidebarHeader />
            <div className="flex flex-col gap-2">
              {navigationLinks.map((link) => (
                <SidebarLink
                  key={link.href}
                  link={link}
                  className="hover:bg-purple-400 rounded-lg px-2"
                />
              ))}
            </div>
            <div className="mt-auto pt-8">
              <SidebarLink
                link={{
                  label: "Support",
                  href: "/support",
                  icon: <HelpCircle className="w-5 h-5 text-white" />
                }}
                className="hover:bg-purple-400 rounded-lg px-2"
              />
            </div>
          </SidebarBody>
        </Sidebar>
      </div>

      <main className="flex-1 p-8 bg-purple-200">
            <div className="ml-12 w-16 h-16 bg-purple-200 overflow-hidden">
              <img src={logo} className="w-12 h-12 object-contain" />
            </div>
            <Link to="/" className="pt-4">
              <b className=" absolute top-7 left-35 text-2xl text-[#755EA5] mb-4 mt-1">PLANiT</b>
            </Link>
        <div className="text-purple-600 mt-4 pl-16">
        <Carousel slides={slides}/>
        </div>
      </main>
    </div>
  );
};
