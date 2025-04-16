import { Calendar } from "@/components/ui/calendar"
import React from "react"
import Marquee from "react-fast-marquee"
import { useNavigate } from "react-router-dom"
import { Input } from "./ui/input"
import { CalendarRangeIcon, LogOut, PanelRight, Search } from "lucide-react"
import planit_logo from "./images/planit_logo.png"
import planit_logo_new from "./images/planit_logo_new.png"
import { CalendarButton } from "./calender-button"

export const AppBar=({profileInitials} : {profileInitials :string})=>{
    const navigate = useNavigate()
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    return <div className="grid grid-cols-3 gap-x-4 w-full ">
                <div className="cols-span-1 ml-20">
                    <div className="grid grid-cols-2">
                        <img src={planit_logo_new} className="w-[90px] h-20 ml-12 mb-10 object-contain z-0"/>
                        <div className="mt-3">
                        <CalendarButton className="mt-2 pr-12 transition-all duration-200 hover:scale-105 hover:bg-[#5D4884]  hover:cursor-pointer active:scale-95"/>
                        </div>
                    </div>
                </div>
    <div className="ml-10 cols-span-1 w-128">
        <div className="pt-6 pb-4 ">
             <div className="relative w-full">
              <Search className="absolute left-2.5 top-3.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search ..." className="w-full pl-8" />
            </div>
        </div>
    </div>
    <div className="pl-50 cols-span-1 mt-4">
  <div className="grid grid-cols-2 gap-x-4">
    <button
      className="w-full rounded-full p-2 mt-2 mr-5 text-black font-semibold transition-all duration-200 hover:scale-105 hover:bg-[#5D4884] hover:cursor-pointer active:scale-95 flex items-center justify-center gap-2"
      onClick={() => {
        localStorage.removeItem("token");
        navigate("/");
      }}
    >
      <LogOut className="w-5 h-5" />
      Log out
    </button>
    <button
      className="rounded-full bg-[#755EA5] w-10 h-10 mt-2 text-center mr-6 font-semibold text-white transition-all duration-200 hover:scale-105 hover:bg-[#5D4884] hover:cursor-pointer active:scale-95"
      onClick={() => {
        navigate("/profile");
      }}
    >
      {profileInitials}
    </button>
  </div>
</div>

  </div>
}