import Marquee from "react-fast-marquee"
import { useNavigate } from "react-router-dom"

export const AppBar=({profileInitials} : {profileInitials :string})=>{
    const navigate = useNavigate()
    return <div className="grid grid-cols-3 gap-x-4">
        <div className="flex justify-start">
            sdklhkj
        </div>
    <div className="flex justify-center w-full max-w-[500px] pr-22">
        <div className="pt-6 pb-4 ">
            <Marquee pauseOnHover={true} >
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
            </Marquee>
        </div>
    </div>
    <div className="flex justify-end w-full mt-4 ">
        <div className="col-span-2 mt-2">
          <button className="rounded-full bg-[#755EA5] p-2 mr-5 text-white transition-all duration-200 hover:scale-105 hover:bg-[#5D4884] hover:cursor-pointer active:scale-95" onClick={()=>{
            localStorage.removeItem("token")
            navigate('/')
          }}>Log out</button>
        </div>
        <button className="rounded-full w-10 h-10 mt-2 text-center mr-6 bg-[#755EA5] text-white transition-all duration-200 hover:scale-105 hover:bg-[#5D4884] hover:cursor-pointer active:scale-95" onClick={()=>{
            navigate("/profile")
        }}>
            {profileInitials}
        </button>
    </div>
  </div>
}