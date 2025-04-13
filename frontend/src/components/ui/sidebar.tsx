"use client";

import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import planit_logo_black from "../images/planit_logo_black.png";
import planit_logo_black_thin from "../images/planit_logo_black.png";
import {
  ChevronsUpDown,
  LogOut,
  MessageSquareText,
  Settings,
  UserCircle,
  ContactRound,
  House,
  Theater,
  CircleCheckBigIcon,
  BrainCircuit,
  CalendarHeart,
  AtSign,
  PanelRight
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {Link, useNavigate} from "react-router-dom";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { useEvents } from "@/hooks";


const sidebarVariants = {
  open: {
    width: "15rem",
  },
  closed: {
    width: "4.05rem",
  },
};

const contentVariants = {
  open: { display: "block", opacity: 1 },
  closed: { display: "block", opacity: 1 },
};

const variants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      x: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    x: -20,
    opacity: 0,
    transition: {
      x: { stiffness: 100 },
    },
  },
};

const transitionProps = {
  type: "tween",
  ease: "easeOut",
  duration: 0.2,
  staggerChildren: 0.1,
};

const staggerVariants = {
  open: {
    transition: { staggerChildren: 0.03, delayChildren: 0.02 },
  },
};


export function SessionNavBar() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const {userDetails} = useEvents();
  const pathname = usePathname();
  const Navigate = useNavigate();
  const name= userDetails?.name || ""; 
  const n = name.split(" ") 
  .map(word => word[0])
  .join("") 
  .toUpperCase();
  return (
    <motion.div
      className={cn(
        "sidebar fixed left-0 z-40 h-full border-r fixed ",
      )}
      initial={isCollapsed ? "closed" : "open"}
      animate={isCollapsed ? "closed" : "open"}
      variants={sidebarVariants}
      transition={transitionProps}
      onMouseEnter={() => setIsCollapsed(false)}
      onMouseLeave={() => setIsCollapsed(true)}
    >
      <motion.div
        className={`relative z-40 flex text-muted-foreground  h-full shrink-0 flex-col bg-[#9C85C7] transition-all`}
        variants={contentVariants}
      >
        <motion.ul variants={staggerVariants} className="flex h-full flex-col">
          <div className="flex grow flex-col items-center ">
            <div className="flex h-[54px] w-full shrink-0  border-b p-2">
              <div className="ml-2 mt-[7px] flex w-full">
                {isCollapsed && ( 
                  <>
                    <PanelRight/>
                  </>
                )}
                <motion.li
                        variants={variants}
                        className="flex w-fit items-center gap-2"
                      >
                        {!isCollapsed && (
                          <>
                          <div>
                            <img src={planit_logo_black} alt="PLANiT logo" className="w-full h-12 mb-2"/>
                          </div>   
                          </>
                        )} 
                </motion.li>
              </div>
            </div>

            <div className=" flex h-full w-full flex-col">
              <div className="flex grow flex-col gap-4">
                <ScrollArea className="h-16 grow p-2">
                  <div className={cn("flex w-full flex-col gap-1")}>
                    <Link
                      to="/"
                      className={cn(
                        "flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5   transition hover:bg-purple-300 hover:text-primary",
                        // pathname?.includes("") &&
                        //   "bg-muted text-blue-600",
                      )}
                    >
                      <House className="h-6 w-6" />{" "}
                      <motion.li variants={variants}>
                        {!isCollapsed && (
                          <p className="ml-2 text-lg font-medium">Home</p>
                        )}
                      </motion.li>
                    </Link>
                    <Separator className="w-full" />
                    <Link
                      to="/dashboard#our-work"   //Our Work
                      className={cn(
                        "flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5 transition hover:bg-purple-300 hover:text-primary",

                        pathname?.includes("reports") &&
                          "bg-muted text-blue-600",
                      )}
                    >
                      <CircleCheckBigIcon className="h-6 w-6" />{" "}
                      <motion.li variants={variants}>
                        {!isCollapsed && (
                          <div className="flex items-center gap-2">
                            <p className="ml-2 text-lg font-medium">Our Work</p>
                          </div>
                        )}
                      </motion.li>
                    </Link>
                    <Separator className="w-full" />
                    <Link
                      to="/dashboard#venues"    //venue
                      className={cn(
                        "flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5  hover:bg-purple-300 transition  hover:text-primary",

                        pathname?.includes("deals") && "bg-muted text-blue-600",
                      )}
                    >
                      <Theater className="h-6 w-6" />{" "}
                      <motion.li variants={variants}>
                        {!isCollapsed && (
                          <p className="ml-2 text-lg font-medium">Venue</p>
                        )}
                      </motion.li>
                    </Link>
                    <Separator className="w-full" />
                    <Link
                      to="/about"
                      className={cn(
                        "flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5 hover:bg-purple-300  transition  hover:text-primary ",

                        pathname?.includes("accounts") &&
                          "bg-muted text-blue-600",
                      )}
                    >
                      <CalendarHeart className="h-6 w-6" />{" "}
                      <motion.li variants={variants}>
                        {!isCollapsed && (
                          <p className="ml-2 text-lg font-medium">About Us</p>
                        )}
                      </motion.li>
                    </Link>
                    <Separator className="w-full" />
                    <Link
                      to="/team"
                      className={cn(
                        "flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5 hover:bg-purple-300  transition hover:text-primary",

                        pathname?.includes("competitors") &&
                          "bg-muted text-blue-600",
                      )}
                    >
                      <BrainCircuit className="h-6 w-6" />
                      <motion.li variants={variants}>
                        {!isCollapsed && (
                          <p className="ml-2 text-lg font-medium">
                            Our Team
                          </p>
                        )}
                      </motion.li>
                    </Link>
                    <Separator className="w-full" />
                    <Link
                      to="/contact"
                      className={cn(
                        "flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5  hover:bg-purple-300 transition  hover:text-primary",

                        pathname?.includes("Contact Us") &&
                          "bg-muted text-blue-600",
                      )}
                    >
                      <ContactRound className="h-6 w-6" />{" "}
                      <motion.li variants={variants}>
                        {!isCollapsed && (
                          <p className="ml-2 text-lg font-medium">
                            Contact Us
                          </p>
                        )}
                      </motion.li>
                    </Link>
                    <Separator className="w-full" />
                    <Link
                      to="/dashboard#feedback"
                      className={cn(
                        "flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5  hover:bg-purple-300 transition  hover:text-primary",
                        pathname?.includes("feedback") &&
                          "bg-muted text-blue-600",
                      )}
                    >
                      <MessageSquareText className="h-6 w-6" />{" "}
                      <motion.li variants={variants}>
                        {!isCollapsed && (
                          <p className="ml-2 text-lg font-medium">Feedback</p>
                        )}
                      </motion.li>
                    </Link>
                    
                  </div>
                </ScrollArea>
              </div>
              <div className="flex flex-col p-2">
                <div>
                <DropdownMenu modal={false}>
                    <DropdownMenuTrigger className="w-full">
                      <div className="flex h-8 w-full flex-row items-center gap-2 rounded-md px-2 py-1.5  transition hover:text-primary hover:bg-purple-300 hover:cursor-pointer">
                        <Avatar className="size-6">
                          <AtSign/>
                        </Avatar>
                        <motion.li
                          variants={variants}
                          className="flex w-full items-center gap-2 "
                        >
                          {!isCollapsed && (
                            <>
                              <p className="text-lg font-medium ">Account</p>
                              <ChevronsUpDown className="ml-auto h-6 w-6 text-muted-foreground/50" />
                            </>
                          )}
                        </motion.li>
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent sideOffset={5} className="absolute bottom-0 left-32 bg-[#8B78B6]">
                      <div className="flex flex-row items-center gap-2 p-2">
                        <Avatar className="size-6">
                          <AvatarFallback className="text-xl border border-full  ">
                            {n}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col text-left">
                          <span className="text-lg font-medium">
                            {userDetails.name}
                          </span>
                          <span className="line-clamp-1 text-xs text-muted-foreground">
                            {userDetails.email }
                          </span>
                        </div>
                      </div>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        asChild
                        className="flex items-center gap-2"
                      >
                        <Link to="/profile">
                          <UserCircle className="h-6 w-6" /> Profile
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="flex items-center gap-2"
                      >
                       <LogOut/> <button onClick={()=>{
                        localStorage.removeItem("token")
                        Navigate('/')
                       }}>Sign Out</button>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <Separator className="w-full"/>
                <Link
                  href="/settings/integrations"
                  className="mt-auto flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5  hover:bg-purple-300 transition hover:text-primary"
                >
                  <Settings className="h-6 w-6 shrink-0" />{" "}
                  <motion.li variants={variants}>
                    {!isCollapsed && (
                      <p className="ml-2 text-lg font-medium"> Settings</p>
                    )}
                  </motion.li>
                </Link>
              </div>
            </div>
          </div>
        </motion.ul>
      </motion.div>
    </motion.div>
  );
}
