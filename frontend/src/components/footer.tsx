import { AnimatedTooltip } from "./ui/animated-tooltip";
import em2 from "./images/em2.jpg";
import em3 from "./images/emp3.jpg";
import em1 from "./images/safiyaWeb.jpg";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, X, Youtube } from "lucide-react";


interface Items {
    id: number;
    name: string;
    designation: string;
    image: string;
}
const items: Items[] = [
    { id: 1, name: "Safiya", designation: "Frontend Designer", image: em1 },
    { id: 2, name: "Yashas", designation: "Backend Developer", image: em2 },
    { id: 3, name: "Sohail", designation: "Documentation Executive", image: em3 }
  ];

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
export const Footer =()=>{
    return <div className="bg-[#9583C0] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4 md:px-6 py-6 md:py-8 text-white">
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
                className=" mb-4 text-black  "
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
}