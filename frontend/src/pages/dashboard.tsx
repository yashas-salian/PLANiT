import { Marquee } from "@/components/marquee";
import { SessionNavBar } from "../components/ui/sidebar";
import { FeedbackSection } from "@/components/feedbackSection";
import weddingimg from "../components/wedding.jpg"
import birthdayimg from "../components/birthday.jpg"
import openMicimg from "../components/OpenMicNight.jpg"
import anniversary from "../components/anniversary.jpg"
import holidayimg from "../components/HolidayParty.jpg"
import haldiimg from "../components/haldiimg.jpg"
import venue1 from "../components/wedding-venue.jpg"
import venue2 from "../components/anniversary-venue.jpg"
import venue3 from "../components/birthday-venue.jpg"
import venue4 from "../components/openMic-venue.jpg"
import venue5 from "../components/party-venue.jpg"
import em2 from "../components/em2.jpg";
import em3 from "../components/emp3.jpg";
import em1 from "../components/safiyaWeb.jpg";
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import SignupFormDemo from "@/components/signup-form-demo";
import { Dribbble, Facebook, Github, IndianRupee, Instagram, Linkedin, MapPinHouse, SunMedium, Users, X, Youtube } from "lucide-react";
import { CarouselFocus } from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { DashboardButton } from "@/components/dashboardButton";

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

export const Dashboard=()=> {
    useEffect(() => {
      AOS.init({
        duration: 1000,
        offset: 0
      });
    }, []);

    const [activeTeamMember, setActiveTeamMember] = useState(null);
    const [hoverMember, setHoverMember] = useState(null);
    const [animateCards, setAnimateCards] = useState(false);
    const [viewMode, setViewMode] = useState('upcoming'); 
    const [filterSkill, setFilterSkill] = useState('');
    const [isExpanded, setIsExpanded] = useState(false);
  
    const venueDetails = [
      {
        id: 1,
        location: "Pune",
        address: "Near PMC metro station, Pune, 2361011",
        rent: "250000",
        capacity:"250-500",
        image: venue1,
        color: "bg-[#755EA5]",
      },
      {
        id: 2,
        location: "Lucknow",
        address: "Near PMC metro station, Pune, 2361011",
        rent: "250000",
        capacity:"500-1000",
        image: venue2,
        color: "bg-[#755EA5]",
      },
      {
        id: 3,
        location: "Bangalore",
        address: "Near PMC metro station, Pune, 2361011",
        rent: "250000",
        capacity:"1000-1500",
        image: venue3,
        color: "bg-[#755EA5]",
      },
      {
        id: 4,
        location: "Mumbai",
        address: "Near PMC metro station, Pune, 2361011",
        rent: "250000",
        capacity:"1000-1500",
        image: venue4,
        color: "bg-[#755EA5]",
      },
      {
        id: 5,
        location: "Delhi",
        address: "Near PMC metro station, Pune, 2361011",
        rent: "250000",
        capacity:"500-750",
        image: venue5,
        color: "bg-[#755EA5]",
      },
      {
        id: 6,
        location: "Nagpur",
        address: "Near PMC metro station, Pune, 2361011",
        rent: "250000",
        capacity:"500-600",
        image: venue1,
        color: "bg-[#755EA5]",
      }
    ];
    const filteredMembers = filterSkill 
    ? venueDetails.filter(member => member.skills.includes(filterSkill))
    : venueDetails;

    useEffect(() => {
      // Animate cards when component mounts
      setTimeout(() => {
        setAnimateCards(true);
      }, 300);
    }, []);
  
    const handleCardClick = (id) => {
      if (activeTeamMember === id) {
        setActiveTeamMember(null);
      } else {
        setActiveTeamMember(id);
        // Scroll to details section when card is clicked
        setTimeout(() => {
          const detailsSection = document.getElementById('member-details');
          if (detailsSection) {
            detailsSection.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    };
    
    // Social media icon mapping
    const getSocialIcon = (platform) => {
      switch(platform) {
        case 'linkedin': return <Linkedin />;
        case 'twitter': return <X />;
        case 'github': return <Github />;
        case 'instagram': return <Instagram />;
        case 'dribbble': return <Dribbble />;
        case 'medium': return <SunMedium />;
        default: return null;
      }
    };
    
    interface SlideData {
      title: string;
      // button: string;
      src: string;
    }
    const slides: SlideData[] = [
      { title: "Welcome",  src: holidayimg },
      { title: "Anniversary", src:anniversary},
      { title: "Open mic night", src: openMicimg },
      { title: "Holiday Party", src: holidayimg },
      { title: "Wedding",  src: weddingimg },
      { title: "Birthday Party",  src: birthdayimg }
    ];
    
    const [hasEvents, setEvents]=useState(false)
    const [showStats, setShowStats] = useState(false);
    const [counts, setCounts] = useState({});
      
    const statsRef = useRef(null);
    const intervalRef = useRef(null);

    const stats = [
      { id: 'events', label: 'Events Managed', value: 5, suffix: '+' },
      { id: 'clients', label: 'Happy Attendees', value: 250, suffix: '+' },
      { id: 'team', label: 'Overall rating', value: "5.0", suffix: '' },
      { id: 'cities', label: 'Venues explored', value: 2, suffix: '' }
    ];
    useEffect(() => {
        if (!statsRef.current) return;
        
        const observer = new IntersectionObserver(
          (entries) => {
            if (entries[0].isIntersecting) {
              setShowStats(true);
            }
          },
          { threshold: 0.3 }
        );
        
        observer.observe(statsRef.current);
        
        return () => {
          if (statsRef.current) {
            observer.unobserve(statsRef.current);
          }
        };
      }, []);
    
      // Handle stats animation safely
      useEffect(() => {
        if (!showStats) {
          setCounts({});
          return;
        }
        
        // Initialize counts
        const initialCounts = {};
        stats.forEach(stat => {
          initialCounts[stat.id] = 0;
        });
        setCounts(initialCounts);
        
        const duration = 2000; // 2 seconds
        const frameRate = 30; // frames per second
        const totalFrames = (duration / 1000) * frameRate;
        let frame = 0;
        
        intervalRef.current = setInterval(() => {
          frame++;
          
          if (frame <= totalFrames) {
            const progress = frame / totalFrames;
            const newCounts = {};
            
            stats.forEach(stat => {
              newCounts[stat.id] = Math.floor(progress * stat.value);
            });
            
            setCounts(newCounts);
          } else {
            // Ensure final values are set correctly
            const finalCounts = {};
            stats.forEach(stat => {
              finalCounts[stat.id] = stat.value;
            });
            setCounts(finalCounts);
            
            // Clear the interval once we're done
            clearInterval(intervalRef.current);
          }
        }, 1000 / frameRate);
        
        return () => {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
          }
        };
      }, [showStats]);
  return (
    
    <div className="overflow-x-hidden bg-purple-200">
      <div>
      <SessionNavBar />
      </div>
      <div className="pt-4 pb-6 bg-purple-100">
        <Marquee text="“A dream becomes a goal when action is taken toward its achievement.” 
        |  “To execute an event successfully, you need three things: the right people, the right mindset, and just enough madness to make it unforgettable.” 
        |  “A successful event is when people leave feeling better than when they arrived.” "
        className="text-[#755EA5] font-bold text-xl italic"/>
      </div>
      <div className="flex flex-col mb-20 pt-10">
        <div className="flex justify-center text-5xl text-[#755EA5] font-bold mb-4">Our Work</div>
        <div className="text-center mb-10 text-xl text-gray-600 max-w-3xl mx-auto">At the heart of every extraordinary event lies a vision and we bring that vision to life with creativity, precision, and passion.</div>
        <div className="ml-20 mb-20">
          <CarouselFocus slides={slides}/>
        </div>
        <div className="flex justify-center ml-12 mt-4">
          <button className="ml-6 bg-[#755EA5] text-white w-64 p-4 rounded-xl transition-all duration-500 hover:scale-105 active:scale-95">Book your dream event now</button>
        </div>
      </div>
        <div className="bg-[#755EA5] pb-10 pt-6">
              {hasEvents ? (
                <div className="ml-100 bg-red-100">yesss</div>
                  ) : (
                    <div >
                    <div className="flex justify-center text-white text-4xl font-bold">
                      Event Timeline
                      </div>
                      <div className="flex flex-col md:flex-row justify-between items-center ml-20 mb-10 gap-4 ">
                        <div className="flex gap-2">
                          <button 
                            onClick={() => setViewMode('upcoming')}
                            className={`px-4 py-2 rounded-lg font-medium transition-colors ${viewMode === 'upcoming' 
                              ? 'bg-purple-300 text-black' 
                              : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                          >
                            Upcoming Events
                          </button>
                          <button 
                            onClick={() => setViewMode('completed')}
                            className={`px-4 py-2 rounded-lg font-medium transition-colors ${viewMode === 'completed' 
                              ? 'bg-purple-300 text-black' 
                              : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                          >
                            Completed events
                          </button>
                          <div>
                        <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <button className='px-4 py-2 rounded-lg font-medium transition-colors bg-white text-gray-700 hover:bg-gray-100 '>
                            Book new event
                          </button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle className="text-2xl">Fill details for your new event</AlertDialogTitle>
                            <AlertDialogDescription>
                                <SignupFormDemo/>
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel className="hover:bg-purple-400">Cancel</AlertDialogCancel>
                            <AlertDialogAction className="border border-black hover:bg-purple-400">Submit</AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                        </div>
                        </div>
                      </div>

                      {viewMode === 'upcoming' && (
                        <div className="ml-20 grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                          <img className="rounded-xl w-100" src={weddingimg}></img>
                          <img className="rounded-xl w-100" src={weddingimg}></img>
                          <img className="rounded-xl w-100" src={weddingimg}></img>
                          </div>
                      )}
                      

                      {/* Grid View */}
                      {viewMode === 'completed' && (
                      <div className="ml-20 grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                      <div className="flex flex-col">
                        <img className="rounded-xl w-100" src={weddingimg}></img>
                        <div className="ml-20 mt-10">on 12 march 2024</div>
                      </div>
                      <div className="flex flex-col">
                        <img className="rounded-xl w-100 h-70" src={haldiimg}></img>
                        <div className="ml-20 mt-10">on 12 march 2024</div>

                      </div>
                    </div>
                      )}
                    </div>
                  )}
          </div>
      <div className="min-h-screen bg-purple-200 py-16 px-4 sm:px-6 lg:px-8 mt-4">
      <div className="max-w-7xl mx-auto">
          <div className="text-4xl mb-12 ml-8 text-[#755EA5] font-bold">We are now present at top venues in your city... explore now !!!</div>
            <div className="grid grid-cols-1 md:grid-cols-6 gap-7 mb-16 w-full ml-8">
              {filteredMembers.map((member, index) => (
                <div
                  key={member.id}
                  className={`rounded-xl overflow-hidden shadow-lg transition-all duration-500 transform 
                    ${animateCards ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
                     ${hoverMember === member.id ? "scale-105 shadow-xl" : ""} ${
                    activeTeamMember === member.id ? "ring-4 ring-purple-400" : ""
                  }`}
                  style={{ 
                    transitionDelay: `${index * 150}ms`,
                    backgroundColor: 'white'
                  }}
                  onMouseEnter={() => setHoverMember(member.id)}
                  onMouseLeave={() => setHoverMember(null)}
                  onClick={() => handleCardClick(member.id)}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="object-cover w-full h-72 transition-all duration-500 transform hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                      <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                      <p className="text-white opacity-90"><MapPinHouse/>{member.location}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4 line-clamp-3"><b>Address :</b> {member.address}</p>
                    <div className="text-gray-700 mb-4 line-clamp-3 grid grid-cols-3 gap-x-1"><IndianRupee className="w-full col-span-1"/> <div className="w-full col-span-2">{member.rent}</div></div>
                    <div className="text-gray-700 mb-4 line-clamp-3 grid grid-cols-3 gap-x-1"><Users className="w-full col-span-1"/> <div className="w-full col-span-2">{member.capacity}</div></div>
                    <button 
                      className={`w-full mt-2 ${member.color} text-white px-4 py-2 rounded-lg font-medium transition-colors`}
                    >
                      Book now
                    </button>
                  </div>
                </div>
              ) )}
            </div>
  </div>
</div>
<section 
        id="stats-section" 
        ref={statsRef}
        className=" py-16 text-white"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#755EA5]">Sign of our togetherness</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-[#755EA5]">
            {stats.map((stat) => (
              <div key={stat.id} className="p-4">
                <div className="text-4xl font-bold mb-2">
                  {counts[stat.id] || 0}{stat.suffix}
                </div>
                <div className="text-[#755EA5]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <div>
        <FeedbackSection/>
      </div>
      
      <div className="bg-[#9583C0] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 ml-16 md:px-6 py-6 md:py-8 text-white">
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
  );
}
