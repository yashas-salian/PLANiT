import Marquee from "react-fast-marquee";
import { SessionNavBar } from "../components/ui/sidebar";
import { FeedbackSection } from "@/components/feedbackSection";
import {useEvents} from "../hooks/index"
import weddingimg from "../components/images/wedding.jpg"
import birthdayimg from "../components/images/birthday.jpg"
import openMicimg from "../components/images/OpenMicNight.jpg"
import anniversary from "../components/images/anniversary.jpg"
import holidayimg from "../components/images/HolidayParty.jpg"
import venue1 from "../components/images/wedding-venue.jpg"
import venue2 from "../components/images/anniversary-venue.jpg"
import venue3 from "../components/images/birthday-venue.jpg"
import venue4 from "../components/images/openMic-venue.jpg"
import venue5 from "../components/images/party-venue.jpg"
import em2 from "../components/images/em2.jpg";
import em3 from "../components/images/emp3.jpg";
import em1 from "../components/images/safiyaWeb.jpg";
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
// import toast, { Toaster } from "react-hot-toast"
import {ToastContainer , toast} from "react-fox-toast"
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
import { BlocksIcon, Calendar1Icon, Dribbble, Facebook, Github, IndianRupee, Instagram, Landmark, Linkedin, MapPinHouse, Phone, Pin, Shapes, SunMedium, Theater, Users, Users2, X, Youtube } from "lucide-react";
import { CarouselFocus } from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { DashboardButton } from "@/components/dashboardButton";
import axios from "axios";
import { Loader } from "@/components/loader";
import { BACKEND_URL } from "@/config";
import { IconMoneybag } from "@tabler/icons-react";
import { BackgroundLines } from "@/components/ui/background-lines";

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

// Custom Input component that matches the design
const CustomInput = ({ 
  id, 
  label, 
  placeholder, 
  type = "text", 
  value, 
  onChange,
  options = null
}) => {
  return (
    <div className="flex flex-col space-y-2 w-full">
      <Label htmlFor={id}>{label}</Label>
      {options ? (
        <select 
          id={id}
          className="shadow-input flex h-10 w-full rounded-md border-none bg-gray-50 px-3 py-2 text-sm text-black transition duration-400 group-hover/input:shadow-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 focus-visible:ring-[2px] focus-visible:ring-neutral-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-800 dark:text-white"
          value={value}
          onChange={onChange}
        >
          {options.map((option, index) => (
            <option key={index} value={option} className="text-black">
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input 
          id={id}
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={onChange}
          className="group/input rounded-lg p-2 mt-1 transition duration-30 bg-white"
        />
      )}
    </div>
  );
};

export const Dashboard = () => {
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
    const[loading , setLoading]=useState(false)
    const[redirecting , setRedirecting]=useState(false)
  
    // Form state
    const [formData, setFormData] = useState({
      clientName: "",
      phoneNumber: "",
      eventName: "",
      category: "Wedding",
      eventDate: "",
      eventVenue: "Pune",
      attendees: "",
      budget: ""
    });

    // Handle form input changes
    const handleChange = (e) => {
      const { id, value } = e.target;
      setFormData(prevData => ({
        ...prevData,
        [id]: value
      }));
    };

    const handleSelectChange = (id, value) => {
      setFormData(prevData => ({
        ...prevData,
        [id]: value
      }));
    };

    const handleSubmit = async () => {
      const formattedDate = new Date(formData.eventDate)
      try {
        setLoading(true)
        const response = await axios.post(`${BACKEND_URL}/api/v1/app/event/book-event`, {
          clientName: formData.clientName,
          PhoneNumber: parseInt(formData.phoneNumber) ,
          EventName: formData.eventName,
          Category: formData.category,
          EventDate: formattedDate,
          EventVenue: formData.eventVenue,
          Attendees: parseInt(formData.attendees),
          Budget: parseInt(formData.budget)
        },{
          headers: {
            Authorization: localStorage.getItem("token")
          }
        }
      );
        
        if (response.data.message === "Booking successfull") {
          toast.success("Event registered successfully",{
            position: "top-center"
          })
          setTimeout(() => {
            window.location.reload()
          }, 1000);
        }
        else if (response.data.message === "Booking failed"){
          toast.error("Booking failed ... Please fill all fields",{
            position: "top-center"
          })
        }
        else if (response.data.message === "venue aleady booked for this date"){
          toast.warning("Venue already booked for this date",{
            position: "top-center"
          })
        }
      } catch (e) {
        console.error("Error booking event:", e);
        toast.error("Some error occured")
      }
      finally{
        setLoading(false)
      }
    };

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
    
    // Fix: Add skills property to venueDetails objects for filtering to work
    const venueDetailsWithSkills = venueDetails.map(venue => ({
      ...venue,
      skills: [venue.location, venue.capacity.split('-')[0] + '+']
    }));

    const filteredMembers = filterSkill 
      ? venueDetailsWithSkills.filter(member => member.skills.includes(filterSkill))
      : venueDetailsWithSkills;

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
    
    const [hasEvents, setEvents]=useState(false);
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
              // Handle string values like "5.0" correctly
              if (typeof stat.value === 'string') {
                const numValue = parseFloat(stat.value);
                newCounts[stat.id] = (progress * numValue).toFixed(1);
              } else {
                newCounts[stat.id] = Math.floor(progress * stat.value);
              }
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

    // Function for scrolling to top (was undefined in original code)
    const scrollToTop = (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };

    const BottomGradient = () => {
      return (
        <>
          <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
          <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
        </>
      );
    };
        
    const LabelInputContainer = ({
      children,
      className,
    }: {
      children: React.ReactNode;
      className?: string;
    }) => {
      return (
        <div className={cn("flex w-full flex-col space-y-2", className)}>
          {children}
        </div>
      );
    };

    const {upcomingEvents ,  completedEvents } = useEvents()
  return (
    <> 
    {loading ? <div className="mt-70 "><Loader/></div>: 
    <div className="overflow-x-hidden bg-purple-200">
      <div><ToastContainer/></div>
      <div>
        <SessionNavBar />
      </div>
      {/* <div className="pt-4 pb-6 bg-purple-100"> niche wala iska alternative hai */}
      <div className="pt-6 pb-4 ">
        {/* <MarqueeONE text="A dream becomes a goal when action is taken toward its achievement.
        |  To execute an event successfully, you need three things: the right people, the right mindset, and just enough madness to make it unforgettable.`
        |  A successful event is when people leave feeling better than when they arrived." 
        className="text-[#755EA5] font-bold text-xl italic"/> */}
        <Marquee pauseOnHover={true}>
            <div className="pr-2 pl-2 bg-[#755EA5] text-white text-lg border border-[#755EA5] p-1 rounded-2xl ml-1 mr-1">
              A dream becomes a goal when action is taken toward its achievement.
            </div>
            <div className="pr-2 pl-2 bg-[#755EA5] text-white text-lg border border-[#755EA5] p-1 rounded-2xl ml-1 mr-1">
            To execute an event successfully, you need three things: the right people, the right mindset, and just enough madness to make it unforgettable.
            </div>
            <div className="pr-2 pl-2 bg-[#755EA5] text-white text-lg border border-[#755EA5] p-1 rounded-2xl ml-1 mr-1">
            A successful event is when people leave feeling better than when they arrived.
            </div>
            <div className="pr-2 pl-2 bg-[#755EA5] text-white text-lg border border-[#755EA5] p-1 rounded-2xl ml-1 mr-1">
            An event is not over until everyone stops talking about it.
            </div>
        </Marquee>
      </div>
      <div className="flex flex-col mb-20 pt-10">
        <div className="ml-8">
          <div className="flex justify-center text-5xl text-[#755EA5] font-bold mb-4">Our Work</div>
          <div className="text-center mb-10 text-xl text-gray-600 max-w-3xl mx-auto">At the heart of every extraordinary event lies a vision and we bring that vision to life with creativity, precision, and passion.</div>
        </div>
        <div className="ml-20 mb-20">
          <CarouselFocus slides={slides}/>
        </div>
        <div className="flex justify-center ml-12 mt-4">
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <button className='w-64 ml-8 px-4 py-4 rounded-xl font-medium transition-all duration-200 bg-[#755EA5] text-white text-lg hover:rounded-3xl '>
                        Book Event Now
                      </button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle className="text-2xl">Fill details for your new event</AlertDialogTitle>
                        <AlertDialogDescription>
                          <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-purple-300 p-4 md:rounded-2xl md:p-8 ">
                            <div className="my-8">
                              <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                                <CustomInput 
                                  id="clientName"
                                  label="Client name"
                                  placeholder="Ex:-Tyler"
                                  value={formData.clientName}
                                  onChange={handleChange}
                                />
                                <CustomInput 
                                  id="phoneNumber"
                                  label="Phone number"
                                  placeholder="Ex:-9999999999"
                                  type="text"
                                  value={formData.phoneNumber}
                                  onChange={handleChange}
                                />
                              </div>
                              <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                                <CustomInput 
                                  id="eventName"
                                  label="Event name"
                                  placeholder="Ex:-Ayush's birthday"
                                  value={formData.eventName}
                                  onChange={handleChange}
                                />
                                <CustomInput 
                                  id="category"
                                  label="Category"
                                  options={["Wedding", "Birthday", "Anniversary", "Corporate events", "Babyshower", "Open mic night", "Engagement"]}
                                  value={formData.category}
                                  onChange={(e) => handleSelectChange("category", e.target.value)}
                                />
                              </div>
                              <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                                <LabelInputContainer>
                                  <Label htmlFor="eventDate">Event date</Label>
                                  <Input 
                                    id="eventDate" 
                                    type="date" 
                                    value={formData.eventDate}
                                    onChange={handleChange}
                                  />
                                </LabelInputContainer>
                                <CustomInput 
                                  id="eventVenue"
                                  label="Event Venue"
                                  options={["Pune", "Bangalore", "Lucknow", "Shambhajinagar events", "Delhi", "Nagpur"]}
                                  value={formData.eventVenue}
                                  onChange={(e) => handleSelectChange("eventVenue", e.target.value)}
                                />
                              </div>
                              <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                                <CustomInput 
                                  id="attendees"
                                  label="Attendees count"
                                  placeholder="Ex:-500"
                                  type="number"
                                  value={formData.attendees}
                                  onChange={handleChange}
                                />
                                <CustomInput 
                                  id="budget"
                                  label="Budget"
                                  placeholder="Ex:-50000"
                                  type="number"
                                  value={formData.budget}
                                  onChange={handleChange}
                                />
                              </div>
                              <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />          
                            </div>
                          </div>
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel className="hover:bg-purple-400">Cancel</AlertDialogCancel>
                        <button 
                          className="border border-black rounded-lg pl-4 pr-4 font-normal text-black hover:bg-purple-400" 
                          onClick={handleSubmit}
                        >
                          Submit
                        </button>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
        </div>
      </div>
      <div className="bg-[#755EA5] pb-10 pt-6 relative">
      {/* <BackgroundLines> */}
          <div>
            <div className="flex justify-center text-white text-4xl font-bold">
              Event Timeline
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center ml-20 mb-10 gap-4 mt-6">
              <div className="flex gap-2">
                <button 
                  onClick={() => setViewMode('upcoming')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors z-10 ${viewMode === 'upcoming' 
                    ? 'bg-purple-300 text-black' 
                    : 'bg-white text-gray-700 transition-all duration-200 hover:bg-gray-100 '}`}
                >
                  Upcoming Events
                </button>
                <button 
                  onClick={() => setViewMode('completed')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors z-10 ${viewMode === 'completed' 
                    ? 'bg-purple-300 text-black' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                >
                  Completed events
                </button>
                <div className="z-10  ">
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
                          <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-purple-300 p-4 md:rounded-2xl md:p-8 ">
                            <div className="my-8">
                              <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                                <CustomInput 
                                  id="clientName"
                                  label="Client name"
                                  placeholder="Ex:-Tyler"
                                  value={formData.clientName}
                                  onChange={handleChange}
                                />
                                <CustomInput 
                                  id="phoneNumber"
                                  label="Phone number"
                                  placeholder="Ex:-9999999999"
                                  type="text"
                                  value={formData.phoneNumber}
                                  onChange={handleChange}
                                />
                              </div>
                              <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                                <CustomInput 
                                  id="eventName"
                                  label="Event name"
                                  placeholder="Ex:-Ayush's birthday"
                                  value={formData.eventName}
                                  onChange={handleChange}
                                />
                                <CustomInput 
                                  id="category"
                                  label="Category"
                                  options={["Wedding", "Birthday", "Anniversary", "Corporate events", "Babyshower", "Open mic night", "Engagement"]}
                                  value={formData.category}
                                  onChange={(e) => handleSelectChange("category", e.target.value)}
                                />
                              </div>
                              <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                                <LabelInputContainer>
                                  <Label htmlFor="eventDate">Event date</Label>
                                  <Input 
                                    id="eventDate" 
                                    type="date" 
                                    value={formData.eventDate}
                                    onChange={handleChange}
                                  />
                                </LabelInputContainer>
                                <CustomInput 
                                  id="eventVenue"
                                  label="Event Venue"
                                  options={["Pune", "Bangalore", "Lucknow", "Shambhajinagar events", "Delhi", "Nagpur"]}
                                  value={formData.eventVenue}
                                  onChange={(e) => handleSelectChange("eventVenue", e.target.value)}
                                />
                              </div>
                              <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                                <CustomInput 
                                  id="attendees"
                                  label="Attendees count"
                                  placeholder="Ex:-500"
                                  type="number"
                                  value={formData.attendees}
                                  onChange={handleChange}
                                />
                                <CustomInput 
                                  id="budget"
                                  label="Budget"
                                  placeholder="Ex:-50000"
                                  type="number"
                                  value={formData.budget}
                                  onChange={handleChange}
                                />
                              </div>
                              <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />          
                            </div>
                          </div>
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel className="hover:bg-purple-400">Cancel</AlertDialogCancel>
                        <button 
                          className="border border-black rounded-lg pl-4 pr-4 font-normal text-black hover:bg-purple-400" 
                          onClick={handleSubmit}
                        >
                          Submit
                        </button>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
            </div>
            

            {viewMode === 'upcoming' && (
              <div className="ml-20 grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 mr-4">
                {upcomingEvents.length===0 ? <BackgroundLines><div className="text-white text-2xl font-semibold w-full ml-145 mt-6"> No Upcoming Events</div></BackgroundLines>: 
                upcomingEvents.map((event, index) => (
                  <div key={index} className="bg-white border border-purple-300 rounded-lg p-4 shadow-md">
                    {event.Category==='Wedding'? <img src={weddingimg} className=""></img>: <div></div>}
                    {event.Category==='Birthday'? <img src={birthdayimg}></img>: <div></div>}
                    {event.Category==='Anniversary'? <img src={anniversary}></img>: <div></div>}
                    {event.Category==='Corporate events'? <img src={weddingimg}></img>: <div></div>}
                    {event.Category==='Babyshower'? <img src={birthdayimg}></img>: <div></div>}
                    {event.Category==='Open mic night'? <img src={openMicimg}></img>: <div></div>}
                    {event.Category==='Engagement'? <img src={weddingimg}></img>: <div></div>}
                    <div className="">
                      <h2 className="text-2xl font-bold text-black pt-4 pb-4">{event.EventName}</h2>
                      <div className="text-black font-semibold text-lg pb-4">Client name: {event.clientName}</div>
                      <div className="grid grid-cols-2 gap-x-10">
                        <div>
                          <div className="flex flex-rows gap-x-2 font-semibold text-black pb-4 ">
                          <Phone/>:<p className="text-black"> {event.PhoneNumber}</p>
                          </div>
                          <div className="flex flex-rows gap-x-2 font-semibold text-black pb-4">
                          <Shapes/>:<p className="text-black">{event.Category}</p>
                          </div>
                          <div className="flex flex-rows gap-x-2 font-semibold text-black pb-4">
                          <Calendar1Icon className="text-black"/>:<div className="text-black"> {new Date(event.EventDate).toDateString()}</div>
                          </div>
                        </div>
                        <div>
                          <div className="flex flex-rows gap-x-2 font-semibold text-black pb-4">
                          <Landmark/>:<p className="text-black">{event.EventVenue}</p>
                          </div>
                          <div className="flex flex-rows gap-x-2 font-semibold text-black pb-4">
                          <Users/>:<p className="text-black">{event.Attendees}</p>
                          </div>
                          <div className="flex flex-rows gap-x-2 font-semibold text-black pb-4">
                          <IndianRupee/>:<p className="text-black">{event.Budget}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
      ))}
              </div>
            )}
            
            {viewMode === 'completed' && (
              <div className="ml-20 grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 mr-4">
                {completedEvents.length===0 ? <BackgroundLines><div className="text-white text-2xl font-semibold w-full ml-145 mt-6"> No Completed Events</div></BackgroundLines> : 
              completedEvents.map((event, index) => (
                <div key={index} className="bg-white border border-purple-300 rounded-lg p-4 shadow-md">
                  {event.Category==='Wedding'? <img src={weddingimg} className=""></img>: <div></div>}
                  {event.Category==='Birthday'? <img src={birthdayimg}></img>: <div></div>}
                  {event.Category==='Anniversary'? <img src={anniversary}></img>: <div></div>}
                  {event.Category==='Corporate events'? <img src={weddingimg}></img>: <div></div>}
                  {event.Category==='Babyshower'? <img src={birthdayimg}></img>: <div></div>}
                  {event.Category==='Open mic night'? <img src={openMicimg}></img>: <div></div>}
                  {event.Category==='Engagement'? <img src={weddingimg}></img>: <div></div>}
                  <div className="">
                    <h2 className="text-xl font-bold text-black pt-4 pb-4">{event.EventName}</h2>
                    <div className="text-black text-lg pb-4">Client name: {event.clientName}</div>
                    <div className="grid grid-cols-2 gap-x-10">
                      <div>
                        <div className="flex flex-rows gap-x-2 text-black pb-4">
                        <Phone/>:<p className="text-black"> {event.PhoneNumber}</p>
                        </div>
                        <div className="flex flex-rows gap-x-2 text-black pb-4">
                        <Shapes/>:<p className="text-black">{event.Category}</p>
                        </div>
                        <div className="flex flex-rows gap-x-2 text-black pb-4">
                        <Calendar1Icon className="text-black"/>:<div className="text-black"> {new Date(event.EventDate).toDateString()}</div>
                        </div>
                      </div>
                      <div>
                        <div className="flex flex-rows gap-x-2 text-black pb-4">
                        <Landmark/>:<p className="text-black">{event.EventVenue}</p>
                        </div>
                        <div className="flex flex-rows gap-x-2 text-black pb-4">
                        <Users/>:<p className="text-black">{event.Attendees}</p>
                        </div>
                        <div className="flex flex-rows gap-x-2 text-black pb-4 ">
                        <IndianRupee/>:<p className="text-black">{event.Budget}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
    ))}
            </div>
            )}
          </div>
        
      {/* </BackgroundLines> */}
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
                  backgroundColor: 'white'
                }}
                onMouseEnter={() => setHoverMember(member.id)}
                onMouseLeave={() => setHoverMember(null)}
                onClick={() => handleCardClick(member.id)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.location}
                    className="object-cover w-full h-72 transition-all duration-500 transform hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <h3 className="text-2xl font-bold text-white">{member.location}</h3>
                    <p className="text-white opacity-90 flex items-center">
                      <MapPinHouse className="mr-1" />{member.location}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4 line-clamp-3"><b>Address :</b> {member.address}</p>
                  <div className="text-gray-700 mb-4 line-clamp-3 flex items-center">
                    <IndianRupee className="mr-2" /> {member.rent}
                  </div>
                  <div className="text-gray-700 mb-4 line-clamp-3 flex items-center">
                    <Users className="mr-2" /> {member.capacity}
                  </div>
                  <button 
                    className={`w-full mt-2 ${member.color} text-white px-4 py-2 rounded-lg font-medium transition-colors`}
                  >
                    Book now
                  </button>
                </div>
              </div>
            ))}
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
      </div>>
      
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
}
    </>
  );
}
