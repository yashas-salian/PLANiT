import React, { useState, useEffect, useRef } from 'react';
import wedding from "../components/wedding.jpg"
import anniversary from "../components/anniversary.jpg"
import openMicNight from "../components/OpenMicNight.jpg"
import holidayParty from "../components/HolidayParty.jpg"
import welcome from "../components/welcome.jpg"
import birthday from "../components/birthday.jpg"
import calender from "../components/calender.jpg"
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube, Linkedin, X ,MessageSquare, Smartphone, MapPin} from 'lucide-react'; // Import social media icons
import { AnimatedTooltip } from '@/components/ui/animated-tooltip';
import em2 from "../components/em2.jpg";
import em3 from "../components/emp3.jpg";
import em1 from "../components/safiyaWeb.jpg";


const AboutUsPage = () => {
  const [activeTab, setActiveTab] = useState('mission');
  const [teamMemberExpanded, setTeamMemberExpanded] = useState(null);
  const [showStats, setShowStats] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [counts, setCounts] = useState({});
  
  const statsRef = useRef(null);
  const intervalRef = useRef(null);
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
  // Stats data
  const stats = [
    { id: 'events', label: 'Events Managed', value: 100, suffix: '+' },
    { id: 'clients', label: 'Happy Clients', value: 100, suffix: '+' },
    { id: 'team', label: 'Team Members', value: 3, suffix: '' },
    { id: 'cities', label: 'Cities', value: 28, suffix: '' }
  ];

  // Team members data
  const teamMembers = [
    {
      name: 'Safiya Khan',
      role: 'CEO & Founder',
      bio: 'Alex founded PLANiT in 2018 with a vision to simplify event planning. With over 15 years of experience in the event industry, Alex has transformed how businesses approach events.',
      image: wedding    },
    {
      name: 'Yashas Salian',
      role: 'Creative Director',
      bio: 'Sam brings creative vision to every event. Specializing in experience design, Sam has a background in interior design and brand strategy that helps create unforgettable events.',
      image: wedding
    },
    {
      name: 'Sohail Sayyad',
      role: 'Technical Lead',
      bio: 'Jordan oversees all technical aspects of our platform. With a background in software engineering and UX design, Jordan ensures our app delivers a seamless experience.',
      image: wedding
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      name: 'Emma Wilson',
      company: 'TechCorp Inc.',
      text: 'PLANiT transformed our annual conference. The platform made management effortless, and their teams support was exceptional from planning to execution.',
      image: wedding
    },
    {
      name: 'Marcus Lee',
      company: 'Global Summit Group',
      text: 'Weve used PLANiT for our last five international summits. The analytics and real-time adjustments saved us countless hours and significantly improved attendee satisfaction.',
      image: wedding
    },
    {
      name: 'Priya Sharma',
      company: 'Innovation Labs',
      text: 'PLANiTs platform is intuitive yet powerful. Our team adopted it immediately, and weve seen a 40% reduction in planning time for our workshops and seminars.',
      image: wedding
    }
  ];

  // Handle intersection observer for stats section
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

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-purple-200">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-[#755EA5] opacity-70"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/api/placeholder/1920/1080')" }}
        ></div>
        <div className="relative h-full bg-[#755EA5] flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-5xl font-bold text-white mb-6">About PLANiT</h1>
          <p className="text-xl text-white max-w-2xl">
            Transforming how the world plans, manages, and experiences events.
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('mission');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="mt-8 px-6 py-3 bg-white text-blue-900 rounded-full font-medium hover:bg-purple-50 transition-colors duration-300"
          >
            Our Story
          </button>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="max-w-6xl mx-auto py-8 px-4">
        <div className="flex flex-wrap justify-center space-x-2 mb-8">
          {['mission', 'values', 'approach'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab 
                  ? 'bg-[#755EA5] text-white shadow-lg' 
                  : 'bg-white text-black hover:bg-purple-400'
              }`}
            >
              {tab === 'mission' ? 'Our Mission' : tab === 'values' ? 'Our Values' : 'Our Approach'}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div id="mission" className="transition-all duration-500">
          {activeTab === 'mission' && (
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-purple-900 mb-4">Our Mission</h2>
                <p className="text-gray-700 mb-4">
                  At <b className="text-[#755EA5]">PLANiT</b>, we're on a mission to make event management accessible, efficient, and stress-free for businesses of all sizes.
                </p>
                <p className="text-gray-700 mb-4">
                  We believe that great events should be remembered for their impact, not for the logistical challenges behind them. That's why we've built a platform that handles the complexities, so you can focus on creating memorable experiences.
                </p>
                <p className="text-gray-700">
                  Founded in 2018, we've grown from a small startup to an industry leader, helping thousands of businesses worldwide transform their events.
                </p>
              </div>
              <div className="md:w-1/2 rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                <img 
                  src={birthday} 
                  alt="Team collaboration" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          )}

          {activeTab === 'values' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: 'User-Centered Design', description: 'We build everything with our users needs at the forefront, ensuring intuitive experiences.' },
                { title: 'Continuous Innovation', description: 'Were constantly evolving, embracing new technologies and approaches to better serve our clients.' },
                { title: 'Reliability', description: 'Events are time-sensitive — our platform is built for 99.99% uptime, ensuring your event runs smoothly.' },
                { title: 'Transparency', description: 'We believe in clear communication and honest relationships with our clients and partners.' }
              ].map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-semibold text-purple-800 mb-3">{value.title}</h3>
                  <p className="text-black">{value.description}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'approach' && (
            <div className="flex flex-col items-center">
              <h2 className="text-3xl font-bold text-[#755EA5] mb-6 text-center">Our Approach to Event Management</h2>
              <div className="space-y-12 w-full max-w-4xl">
                {[
                  { 
                    step: 1, 
                    title: 'Understand Your Vision', 
                    description: 'We begin by deeply understanding your goals and vision for the event, ensuring alignment from the start.' 
                  },
                  { 
                    step: 2, 
                    title: 'Streamlined Planning', 
                    description: 'Our platform breaks down complex planning into manageable steps, with intelligent automation to save you time.' 
                  },
                  { 
                    step: 3, 
                    title: 'Real-time Adaptation', 
                    description: 'Events rarely go exactly as planned. Our tools provide real-time data and flexibility to adapt on the fly.' 
                  },
                  { 
                    step: 4, 
                    title: 'Continuous Improvement', 
                    description: 'Post-event analytics help you understand what worked and what could be improved for future events.' 
                  }
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#755EA5] rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-purple-800 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section 
        id="stats-section" 
        ref={statsRef}
        className="bg-[#755EA5] py-16 text-white"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact by the Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.id} className="p-4">
                <div className="text-4xl font-bold mb-2">
                  {counts[stat.id] || 0}{stat.suffix}
                </div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-[#755EA5] text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-purple-800">{member.name}</h3>
                <p className="text-purple-600 mb-3">{member.role}</p>
                <div className={`overflow-hidden transition-all duration-300 ${
                  teamMemberExpanded === index ? 'max-h-96' : 'max-h-0'
                }`}>
                  <p className="text-black mb-4">{member.bio}</p>
                </div>
                <button 
                  onClick={() => setTeamMemberExpanded(teamMemberExpanded === index ? null : index)}
                  className="text-purple-500 hover:text-purple-700 font-medium"
                >
                  {teamMemberExpanded === index ? 'Show Less' : 'Read Bio'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-purple-900 text-center mb-12">What Our Clients Say</h2>
          
          <div className="relative bg-white rounded-2xl shadow-lg p-8 overflow-hidden">
            {/* Testimonial Carousel */}
            <div className="relative h-64">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-500 flex flex-col items-center text-center ${
                    index === testimonialIndex 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 translate-x-full'
                  }`}
                >
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full object-cover mb-4"
                  />
                  <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
                  <h4 className="font-semibold text-purple-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              ))}
            </div>
            
            {/* Carousel Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setTestimonialIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === testimonialIndex ? 'bg-purple-600 w-6' : 'bg-gray-300'
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#755EA5] py-16 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Events?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of organizations that have revolutionized their event management with PLANiT.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-white text-purple-800 rounded-lg font-bold hover:bg-blue-50 transition-colors duration-300">
              Start Free Trial
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white rounded-lg font-bold hover:bg-purple-700 transition-colors duration-300">
              Request Demo
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-purple-900 mb-6">Get in Touch</h2>
            <p className="text-gray-700 mb-8">
              Have questions about <b className="text-[#755EA5]">PLANiT</b> or want to learn more about how we can help with your specific event needs? Our team is here to help.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-blue-600 mr-4">
                  <MessageSquare className='text-purple-600'/>
                </div>
                <span className="text-gray-700">PLANiT@gmail.com</span>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-blue-600 mr-4">
                  <Smartphone className='text-purple-600'/>
                </div>
                <span className="text-gray-700">+91 9897969594</span>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-blue-600 mr-4">
                  <MapPin className='text-purple-600'/>
                </div>
                <span className="text-gray-700">123 Event Street, San Francisco, CA 94103</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="bg-[#9583C0] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4 md:px-6 py-6 md:py-8 text-white">


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
};

export default AboutUsPage;