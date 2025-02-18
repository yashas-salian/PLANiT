import React from 'react';
import { Home, Settings, Users, HelpCircle, Menu } from 'lucide-react';
import { Sidebar, SidebarBody, SidebarLink, useSidebar } from '../components/ui/sidebar';
import { motion } from 'framer-motion';

const SidebarHeader = () => {
  const { open, animate } = useSidebar();
  
  return (
    <div className="mb-8 flex items-center justify-start">
      {!open ? (
        <Menu className="w-6 h-6 text-purple-600" />
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
      label: "Dashboard",
      href: "/",
      icon: <Home className="w-5 h-5 text-white" />
    },
    {
      label: "Users",
      href: "/users",
      icon: <Users className="w-5 h-5 text-white" />
    },
    {
      label: "Settings",
      href: "/settings",
      icon: <Settings className="w-5 h-5 text-white" />
    },
    {
      label: "Help",
      href: "/help",
      icon: <HelpCircle className="w-5 h-5 text-white" />
    }
  ];

  return (
    <div className="flex h-screen">
      <Sidebar>
        <SidebarBody className="bg-[#755EA5]">
          <SidebarHeader />

          <div className="flex flex-col gap-2">
            {navigationLinks.map((link) => (
              <SidebarLink
                key={link.href}
                link={link}
                className="hover:bg-purple-100 rounded-lg px-2"
              />
            ))}
          </div>

          <div className="mt-auto pt-8">
            <SidebarLink
              link={{
                label: "Support",
                href: "/support",
                icon: <HelpCircle className="w-5 h-5 text-purple-600" />
              }}
              className="hover:bg-purple-100 rounded-lg px-2"
            />
          </div>
        </SidebarBody>
      </Sidebar>

      <main className="flex-1 p-8 bg-purple-200">
        <h2 className="text-2xl font-bold text-purple-600">
          Main Content
        </h2>
        <p className="text-purple-600 mt-4">
          Your page content goes here
        </p>
      </main>
    </div>
  );
};
;