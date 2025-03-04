import { Home, Contact, Users, HelpCircle, BadgeSwissFranc, Menu , Pencil, Plus } from 'lucide-react';
import { Sidebar, SidebarBody, SidebarLink, useSidebar } from '../components/ui/sidebar';
import { motion } from 'framer-motion';
import Carousel from '@/components/ui/carousel';
import logo from "../components/LOGO.jpg"
import { Link } from 'react-router-dom';
import wedding from "../components/wedding.jpg"
import anniversary from "../components/anniversary.jpg"
import openMicNight from "../components/OpenMicNight.jpg"
import holidayParty from "../components/HolidayParty.jpg"
import welcome from "../components/welcome.jpg"
import birthday from "../components/birthday.jpg"
import { ModalProvider, Modal, ModalTrigger, ModalBody , ModalFooter, ModalContent  } from '@/components/ui/animated-modal';
import { Select } from '@react-three/drei';


interface SlideData {
  title: string;
  src: string;
}

const slides: SlideData[] = [
  { title: "Welcome",  src: welcome },
  { title: "Anniversary", src:anniversary },
  { title: "Open mic night", src: openMicNight },
  { title: "Holiday Party", src: holidayParty },
  { title: "Wedding", src: wedding },
  { title: "Birthday Party", src: birthday }
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
              <img src={logo} className="w-12 h-12 object-contain"/>
            </div>
            <Link to="/" className="pt-4">
              <b className=" absolute top-7 left-35 text-2xl text-[#755EA5] mb-4 mt-1">PLANiT</b>
            </Link>
        <div className="text-purple-600 mt-4 pl-16">
        <Carousel slides={slides}/>
        </div>
        <div>
          <Modal>
            <ModalTrigger className="flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg px-40 py-2 transition-colors"> 
              <Plus className='h-5 w-5'/>
              <span>Create event </span>
            </ModalTrigger>

            <ModalBody>
              <ModalContent>
                <div className="grid grid-cols-2">
                  <div className="grid grid-rows-2">
                    <div className="row-span-1">
                      <label>Event Name</label>
                    </div>
                    <div className="row-span-1">
                      <input placeholder="Ex:- wedding" className="border border-black"></input>
                    </div>
                  </div>
                  <div className="grid grid-rows-2">
                    <div className="row-span-1">
                      <label>Event Date</label>
                    </div>
                    <div className="row-span-1">
                      <input type="date" placeholder="Ex:- wedding" className="border border-black"></input>
                    </div>
                  </div>
                </div>

                <div className="pt-4 grid grid-cols-2">
                  <div className="grid grid-rows-2">
                    <div className="row-span-1">
                      <label>Event Type</label>
                    </div>
                    <div className="row-span-1 ">
                      <select name="Events" className="border border-black">
                        <option value="Wedding">Wedding</option>
                        <option value="Anniversary">Anniversary</option>
                        <option value="Birthday party">Birthday party</option>
                        <option value="Open mic night">Open mic night</option>
                        <option value="Holiday party">Holiday party</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-rows-2">
                    <div className="row-span-1">
                      <label>Event Name</label>
                    </div>
                    <div className="row-span-1">
                    <select name="Events" className="border border-black">
                        <option >Bibwewadi</option>
                        <option>Hadapsar</option>
                        <option >Kondhawa</option>
                        <option >PCMC</option>
                        <option>Shivajinagar</option>
                        <option>Wakad</option>
                      </select>
                    </div>
                  </div>
                </div>
              </ModalContent>

              <ModalFooter className='bg-white'>
                <div className="grid grid-cols-2">
                  <div className="">
                    <button className="bg-gray-50 border border-black rounded-full p-2 hover:bg-gray-300">Cancel</button>
                  </div>
                  <div className="pl-1">
                    <button className="bg-purple-600 border border-transparent rounded-full p-2 hover:bg-purple-500">Submit</button>
                  </div>
                </div>
                
                
              </ModalFooter>
            </ModalBody>
          </Modal>
        </div>
      </main>
    </div>
  );
};
