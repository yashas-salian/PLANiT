
import React, { useState, useEffect } from 'react';
import em1 from "../components/em1.jpg";
import em2 from "../components/em2.jpg";
import em3 from "../components/emp3.jpg";
import { Instagram  , Linkedin , X  , Github , Dribbble, SunMedium} from "lucide-react";

export const Team = () => {
  const [activeTeamMember, setActiveTeamMember] = useState(null);
  const [hoverMember, setHoverMember] = useState(null);
  const [animateCards, setAnimateCards] = useState(false);
  const [viewMode, setViewMode] = useState('cards'); // 'cards', 'list', or 'grid'
  const [filterSkill, setFilterSkill] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const teamMembers = [
    { 
      id: 1,
      name: "Safiya Khan",
      role: "Frontend Developer",
      bio: "Alex has over 15 years of experience in software development and architecture. Previously led engineering teams at major tech companies, specializing in scalable cloud solutions. Alex is passionate about implementing cutting-edge technologies and mentoring junior developers. When not coding, Alex enjoys hiking and playing chess.",
      skills: ["Cloud Architecture", "System Design", "Team Leadership", "Strategic Planning", "DevOps", "Microservices"],
      projects: ["Cloud Migration", "API Gateway Implementation", "Enterprise Architecture Redesign"],
      quote: "Technology is most powerful when it brings people together.",
      image: em1,
      color: "bg-indigo-500",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      id: 2,
      name: "Yashas Salian",
      role: "Backend Developer",
      bio: "Samantha brings 8 years of UX/UI expertise with a background in cognitive psychology. Her human-centered design approach has shaped award-winning products used by millions. She advocates for accessibility in design and has spoken at numerous international design conferences. Samantha leads our design thinking workshops and mentorship program.",
      skills: ["User Experience", "Interface Design", "Prototyping", "Design Systems", "User Research", "Accessibility"],
      projects: ["Mobile App Redesign", "Design System Implementation", "User Testing Framework"],
      quote: "Good design is obvious. Great design is transparent.",
      image: em2,
      color: "bg-emerald-500",
      socialLinks: {
        linkedin: "#",
        dribbble: "#",
        medium: "#"
      }
    },
    {
      id: 3,
      name: "Sohail Sayyad",
      role: "Documentation Executive",
      bio: "Marcus has driven growth marketing strategies for startups and Fortune 500 companies alike. His data-driven approach combines creativity with analytical precision. With an MBA from Stanford and a background in consumer psychology, Marcus has pioneered several innovative marketing approaches that have become industry standards. He leads our market research initiatives.",
      skills: ["Growth Strategy", "Brand Development", "Digital Campaigns", "Analytics", "Content Strategy", "Market Research"],
      projects: ["Brand Refresh Campaign", "Customer Journey Mapping", "Marketing Automation Setup"],
      quote: "Marketing is no longer about the stuff you make, but the stories you tell.",
      image: em3,
      color: "bg-amber-500",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    }
  ];

  // Get all unique skills
  const allSkills = [...new Set(teamMembers.flatMap(member => member.skills))];

  // Filter team members based on selected skill
  const filteredMembers = filterSkill 
    ? teamMembers.filter(member => member.skills.includes(filterSkill))
    : teamMembers;

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

  return (
    <div className="min-h-screen bg-purple-200 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 transition-all duration-700 transform translate-y-0" 
          style={{ 
            opacity: animateCards ? 1 : 0, 
            transform: animateCards ? 'translateY(0)' : 'translateY(20px)'
          }}>
          <h1 className="text-6xl font-bold mb-6 text-[#755EA5] relative inline-block">
            Meet Our Team
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-400 to-purple-500"></span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Passionate experts dedicated to bringing our vision to life through innovation, 
            creativity, and relentless pursuit of excellence.
          </p>
        </div>

        {/* View Controls */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
            <div className="flex gap-2">
              <button 
                onClick={() => setViewMode('cards')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${viewMode === 'cards' 
                  ? 'bg-[#755EA5] text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'}`}
              >
                Cards
              </button>
              <button 
                onClick={() => setViewMode('grid')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${viewMode === 'grid' 
                  ? 'bg-[#755EA5] text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'}`}
              >
                Grid
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${viewMode === 'list' 
                  ? 'bg-[#755EA5] text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'}`}
              >
                List
              </button>
            </div>
          
          <div className="w-full md:w-auto">
            <select 
              value={filterSkill}
              onChange={(e) => setFilterSkill(e.target.value)}
              className="px-4 py-2 rounded-lg bg-white text-gray-700 border border-gray-300 focuscoutline-none focus:ring-2 focus:ring-purple-400 w-full md:w-64"
            >
              <option value="">All Skills</option>
              {allSkills.map(skill => (
                <option key={skill} value={skill}>{skill}</option>
              ))}
            </select>
          </div>
        </div>

          {/* Cards View */}
          {viewMode === 'cards' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {filteredMembers.map((member, index) => (
                <div
                  key={member.id}
                  className={`rounded-xl overflow-hidden shadow-lg transition-all duration-500 transform ${
                    animateCards ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                  } ${hoverMember === member.id ? "scale-105 shadow-xl" : ""} ${
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
                      <p className="text-white opacity-90">{member.role}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4 line-clamp-3">{member.bio}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {member.skills.slice(0, 3).map((skill, idx) => (
                        <span key={idx} className={`${member.color} bg-opacity-20 text-gray-700 px-3 py-1 rounded-full text-sm`}>
                          {skill}
                        </span>
                      ))}
                      {member.skills.length > 3 && (
                        <span className="text-sm text-gray-500">+{member.skills.length - 3} more</span>
                      )}
                    </div>
                    <button 
                      className={`w-full mt-2 ${member.color} text-white px-4 py-2 rounded-lg font-medium transition-colors`}
                    >
                      View Profile
                    </button>
                  </div>
                </div>
              ) )}
            </div>
          )}

          {/* Grid View */}
          {viewMode === 'grid' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {filteredMembers.map((member) => (
                <div
                  key={member.id}
                  className="bg-white rounded-xl overflow-hidden shadow-md flex transition-all duration-300 hover:shadow-xl"
                  onClick={() => handleCardClick(member.id)}
                >
                  <div className="w-1/3">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="w-2/3 p-6">
                    <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                    <p className={`inline-block px-3 py-1 rounded-full text-white text-sm mb-2 ${member.color}`}>
                      {member.role}
                    </p>
                    <p className="text-gray-600 mb-3 line-clamp-2">{member.bio}</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {member.skills.slice(0, 2).map((skill, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {skill}
                        </span>
                      ))}
                      {member.skills.length > 2 && (
                        <span className="text-xs text-gray-500">+{member.skills.length - 2} more</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

        {/* List View */}
        {viewMode === 'list' && (
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-16">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Skills
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredMembers.map((member) => (
                  <tr key={member.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0">
                          <img 
                            src={member.image} 
                            alt={member.name}
                            className="h-10 w-10 rounded-full object-cover"
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{member.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`${member.color} px-2 py-1 rounded-full text-white text-xs`}>
                        {member.role}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1">
                        {member.skills.slice(0, 2).map((skill, idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                            {skill}
                          </span>
                        ))}
                        {member.skills.length > 2 && (
                          <span className="text-xs text-gray-500">+{member.skills.length - 2} more</span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button 
                        className="text-[#755EA5] hover:text-purple-800 transition-colors"
                        onClick={() => handleCardClick(member.id)}
                      >
                        View Profile
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Team Member Details */}
        {activeTeamMember && (
          <div 
            id="member-details"
            className="bg-white rounded-2xl p-8 shadow-2xl transition-all duration-500 max-w-5xl mx-auto mb-16"
            style={{ 
              opacity: activeTeamMember ? 1 : 0,
              transform: activeTeamMember ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            {teamMembers
              .filter(member => member.id === activeTeamMember)
              .map(member => (
                <div key={member.id}>
                  <div className="md:flex gap-10">
                    <div className="md:w-2/5 mb-6 md:mb-0">
                      <div className="bg-gradient-to-br from-purple-100 via-purple-50 to-white p-4 rounded-xl shadow-lg">
                        <div className="rounded-xl overflow-hidden shadow-lg">
                          <img 
                            src={member.image} 
                            alt={member.name} 
                            className="w-full h-auto object-cover"
                          />
                        </div>
                        <div className="py-6 px-2">
                          <blockquote className="italic text-gray-600 text-center">
                            "{member.quote}"
                          </blockquote>
                        </div>
                        <div className="flex justify-center gap-4 pt-2">
                          {Object.entries(member.socialLinks).map(([platform, link]) => (
                            <a 
                              key={platform}
                              href={link}
                              className={`text-gray-600 hover:text-${member.color.split('-')[1]}-600 transition-colors p-2 bg-white rounded-full shadow-sm hover:shadow`}
                            >
                              {getSocialIcon(platform)}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="md:w-3/5">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h2 className="text-4xl font-bold mb-2 text-gray-800">{member.name}</h2>
                          <div className={`${member.color} inline-block px-4 py-1 rounded-full text-white text-lg mb-6`}>
                            {member.role}
                          </div>
                        </div>
                        <button 
                          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                          onClick={() => setActiveTeamMember(null)}
                        >
                          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                      
                      <div className="overflow-hidden transition-all duration-500" style={{ maxHeight: isExpanded ? '1000px' : '200px' }}>
                        <p className="text-gray-700 text-lg mb-6 leading-relaxed">{member.bio}</p>
                        
                        <div className="mb-6">
                          <h4 className="text-lg font-medium mb-3 text-gray-800">Areas of Expertise</h4>
                          <div className="flex flex-wrap gap-2">
                            {member.skills.map((skill, index) => (
                              <span 
                                key={index} 
                                className={`${member.color} bg-opacity-20 text-gray-700 px-3 py-1 rounded-full text-sm`}
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="mb-6">
                          <h4 className="text-lg font-medium mb-3 text-gray-800">Notable Projects</h4>
                          <ul className="space-y-2">
                            {member.projects.map((project, index) => (
                              <li key={index} className="flex items-start">
                                <svg className={`w-5 h-5 mr-2 text-${member.color.split('-')[1]}-600 mt-0.5`} fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 10 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-700">{project}</span>
                                </li>
                                ))}
                                </ul>
                                </div>
                                </div>
                                {member.bio.length > 150 && (
                    <button 
                      className="text-purple-600 hover:text-purple-800 font-medium transition-colors mt-2 flex items-center"
                      onClick={() => setIsExpanded(!isExpanded)}
                    >
                      {isExpanded ? 'Show less' : 'Read more'}
                      <svg 
                        className={`w-5 h-5 ml-1 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  )}
                  
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h4 className="text-lg font-medium mb-4 text-gray-800">Contact {member.name}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                        <input 
                          type="email" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                        <textarea 
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                          rows="3"
                        ></textarea>
                      </div>
                      <div className="md:col-span-2">
                        <button 
                          className={`${member.color} text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors`}
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    )}

    {/* Team Overview Statistics */}
    <div className="bg-white rounded-xl p-8 shadow-lg mb-16">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Team Strengths</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gradient-to-br from-indigo-100 to-white p-6 rounded-lg text-center transition-transform duration-300 hover:scale-105">
          <div className="text-indigo-600 mb-4">
            <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2 text-gray-800">Technical Expertise</h3>
          <p className="text-gray-600">Our team combines deep technical knowledge with years of industry experience.</p>
        </div>
        
        <div className="bg-gradient-to-br from-emerald-100 to-white p-6 rounded-lg text-center transition-transform duration-300 hover:scale-105">
          <div className="text-emerald-600 mb-4">
            <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2 text-gray-800">Creative Vision</h3>
          <p className="text-gray-600">We approach challenges with creative solutions and innovative thinking.</p>
        </div>
        
        <div className="bg-gradient-to-br from-amber-100 to-white p-6 rounded-lg text-center transition-transform duration-300 hover:scale-105">
          <div className="text-amber-600 mb-4">
            <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2 text-gray-800">Results Driven</h3>
          <p className="text-gray-600">We focus on delivering measurable outcomes that align with business goals.</p>
        </div>
      </div>
    </div>
    
    {/* Interactive Team Quiz */}
    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-8 shadow-lg text-black mb-16">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Which Team Member Is Right For Your Project?</h2>
        <p className="text-lg text-center mb-8">Answer a few quick questions to find out which team member would be the best fit for your specific needs.</p>
        
        <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
          <div className="space-y-4">
            <div>
              <p className="font-medium mb-3">1. What is your primary project goal?</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <button className="p-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 bg-opacity-10 hover:bg-opacity-20 transition-colors">Technical Implementation</button>
                <button className="p-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 bg-opacity-10 hover:bg-opacity-20 transition-colors">Design & User Experience</button>
                <button className="p-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 bg-opacity-10 hover:bg-opacity-20 transition-colors">Marketing & Growth</button>
              </div>
            </div>
            
            <div>
              <p className="font-medium mb-3">2. What is your preferred working style?</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <button className="p-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 bg-opacity-10 hover:bg-opacity-20 transition-colors">Structured & Systematic</button>
                <button className="p-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 bg-opacity-10 hover:bg-opacity-20 transition-colors">Creative & Flexible</button>
                <button className="p-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 bg-opacity-10 hover:bg-opacity-20 transition-colors">Results & Metrics Focused</button>
              </div>
            </div>
            
            <div>
              <p className="font-medium mb-3">3. What's your project timeline?</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <button className="p-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 bg-opacity-10 hover:bg-opacity-20 transition-colors">Urgent / Short-term</button>
                <button className="p-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 bg-opacity-10 hover:bg-opacity-20 transition-colors">Mid-range (1-3 months)</button>
                <button className="p-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600  bg-opacity-10 hover:bg-opacity-20 transition-colors">Long-term project</button>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <button className="bg-white text-purple-700 px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-colors">
              Find My Match
            </button>
          </div>
        </div>
      </div>
    </div>
    
    {/* Call to Action */}
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Ready to Work With Our Team?</h2>
      <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
        Let's discuss how our experts can help bring your vision to life.
      </p>
      <button className="bg-[#755EA5] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-700 transition-colors shadow-lg">
        Schedule a Consultation
      </button>
    </div>
  </div>
</div>
);
};
export default Team;


//chatgpt
// import React from "react";
// import { motion } from "framer-motion";
// import em1 from "../components/em1.jpg"
// import em2 from "../components/em2.jpg"
// import em3 from "../components/emp3.jpg"

// const teamMembers = [
//   {
//     name: "Sophia Carter",
//     role: "Lead Designer",
//     image: em1,
//   },
//   {
//     name: "James Anderson",
//     role: "Software Engineer",
//     image: em2,
//   },
//   {
//     name: "Emma Roberts",
//     role: "Project Manager",
//     image: em3,
//   },
// ];

// export const Team = () => {
//   return (
//     <div className="team text-center my-40 p-10 bg-gradient-to-r from-blue-500 to-purple-600">
//       <motion.h1 
//         className="text-5xl text-white font-bold leading-[55px] lg:text-[42px]" 
//         initial={{ opacity: 0, y: -50 }} 
//         animate={{ opacity: 1, y: 0 }} 
//         transition={{ duration: 1 }}
//       >
//         Meet Our Team
//       </motion.h1>
//       <p className="my-8 text-white w-2/3 lg:w-1/3 mx-auto text-lg">
//         We are a passionate team dedicated to creating amazing experiences through design and technology.
//       </p>
//       <div className="cards flex justify-center gap-10 flex-wrap">
//         {teamMembers.map((member, index) => (
//           <motion.div
//             key={index}
//             className="card w-[300px] p-6 text-white text-center bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5, delay: index * 0.2 }}
//           >
//             <img className="mx-auto mb-4 w-32 h-32 rounded-full border-4 border-white" src={member.image} alt={member.name} />
//             <h2 className="text-2xl font-semibold">{member.name}</h2>
//             <p className="font-light uppercase text-sm">{member.role}</p>
//             <div className="icons flex mt-4 justify-center gap-3">
//               <img src={em1} alt="Social Icon 1" className="icon cursor-pointer w-6 h-6 transition hover:scale-110" />
//               <img src={em2} alt="Social Icon 2" className="icon cursor-pointer w-6 h-6 transition hover:scale-110" />
//               <img src={em3} alt="Social Icon 3" className="icon cursor-pointer w-6 h-6 transition hover:scale-110" />
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };



