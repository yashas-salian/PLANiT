import { Calendar } from "@/components/ui/calendar"
import React from "react"
import Marquee from "react-fast-marquee"
import { useNavigate } from "react-router-dom"
import { Input } from "./ui/input"
import { CalendarRangeIcon, Search } from "lucide-react"
import planit_logo from "./images/planit_logo.png"
import { CalendarButton } from "./calender-button"

export const AppBar=({profileInitials} : {profileInitials :string})=>{
    const navigate = useNavigate()
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    return <div className="grid grid-cols-3 gap-x-4 w-full ">
                <div className="cols-span-1  ml-20 mt-4">
                    <div className="grid grid-cols-2">
                        <img src={planit_logo} className="w-[150px] mb-10 object-contain z-0"/>
                        <div className="grid grid-cols-2 ">
                        <CalendarButton className="mt-2 pr-12"/>
                        </div>
                    </div>
                </div>
    <div className="ml-15 cols-span-1 w-128">
        <div className="pt-6 pb-4 ">
            {/* <Marquee pauseOnHover={true} >
                <div className="pr-4 pl-4  text-black text-lg p-1 rounded-2xl ml-4 mr-4 hover:bg-[#755EA5] hover:text-white">
                A dream becomes a goal when action is taken toward its achievement.
                </div>
                <div className="pr-4 pl-4  text-black text-lg p-1 rounded-2xl ml-4 mr-4 hover:bg-[#755EA5] hover:text-white">
                To execute an event successfully, you need three things: the right people, the right mindset, and just enough madness to make it unforgettable.
                </div>
                <div className="pr-4 pl-4  text-black text-lg p-1 rounded-2xl ml-4 mr-4 hover:bg-[#755EA5] hover:text-white">
                A successful event is when people leave feeling better than when they arrived.
                </div>
                <div className="pr-4 pl-4  text-black text-lg p-1 rounded-2xl ml-4 mr-4 hover:bg-[#755EA5] hover:text-white">
                An event is not over until everyone stops talking about it.
                </div>
            </Marquee> */}
             <div className="relative w-full">
              <Search className="absolute left-2.5 top-3.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search ..." className="w-full pl-8" />
            </div>
        </div>
    </div>
    <div className="absolute top-0 left-300 cols-span-1 mt-4">
        {/* <div className="col-span-2 mt-2"> */}
          <button className="rounded-full  p-2 mr-5 text-black font-semibold transition-all duration-200 hover:scale-105 hover:bg-[#5D4884] hover:cursor-pointer active:scale-95" onClick={()=>{
            localStorage.removeItem("token")
            navigate('/')
          }}>Log out</button>
        {/* </div> */}
        <button className="rounded-full bg-[#755EA5] w-10 h-10 mt-2 text-center mr-6 font-semibold text-white transition-all duration-200 hover:scale-105 hover:bg-[#5D4884] hover:cursor-pointer active:scale-95" onClick={()=>{
            navigate("/profile")
        }}>
            {profileInitials}
        </button>
    </div>
  </div>
}