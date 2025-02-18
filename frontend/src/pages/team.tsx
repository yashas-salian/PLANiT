import { FocusCards } from "@/components/ui/focus-cards"
import em1 from "../components/em1.jpg"
import em2 from "../components/em2.jpg"
import emp3 from "../components/emp3.jpg"
import safiyaWeb from "../components/safiyaWeb.jpg"
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { Link,useNavigate } from "react-router-dom"

interface Card {
    title: string;
    src: string;
};

const card: Card[]=[
    {title: "Safiya Khan" , src:em1},
    {title: "Yashas Salian" , src:em2},
    {title: "Sohail Sayyad" , src:emp3}
]

interface Testimonial {
    quote: string;
    name: string;
    designation: string;
    src: string;
};

const testimonials: Testimonial[] = [
    {
      quote: `"A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away."`,
      name: "Safiya Khan",
      designation: "Frontend Designer",
      src: safiyaWeb,
    },
    {
      quote:`"A well-designed backend is like a well-oiled machine, working seamlessly behind the scenes."`,
      name: "Yashas Salian",
      designation: "Backend Developer",
      src: em2,
    },
    {
      quote: `"In an age of infinite digital documentation, paper was the last safe place for secrets."`,
      name: "Sohail Sayyad",
      designation: "Documentation Executive",
      src: emp3,
    },
  ];
export const Team=()=>{
    return <div className="bg-purple-200 min-h-screen w-full">
        <b className="text-4xl pl-10 pt-6 block text-[#755EA5]">Our team</b>
            <div className="pt-10 ">
                <FocusCards cards={card}/>
            </div>
            <div>
                <AnimatedTestimonials testimonials={testimonials} autoplay={true}/>
            </div>
            <div className="bg-[#9583C0] grid grid-cols-5 gap-8 px-6 py-4">
          <div className="flex flex-col">
            <Link
              to="/"
              className="text-xl mb-4 font-bold"
            >
              <span>Home</span>
            </Link>
          </div>

          <div className="flex flex-col">
            <b className="text-xl mb-4">Features</b>
            <ul className="text-black space-y-2">
              <li>• Real-time Event Planning</li>
              <li>• Custom Theme Designer</li>
              <li>• Budget Management</li>
              <li>• Guest List Management</li>
              <li>• Mobile Responsive Design</li>
              <li>• Event Timeline Creator</li>
            </ul>
          </div>

          <div className="flex flex-col">
            <b className="text-xl mb-4">About Us</b>
            <p className="text-black">
              PLANiT simplifies event planning with innovative technology and user-friendly features. Since 2024, we've helped clients turn ideas into memorable experiences effortlessly.
            </p>
          </div>

          <div className="flex flex-col">
            <b className="text-xl mb-4">Contact Us</b>
            <div className="text-black">
            GVJ8+567, IIEDC, Aissms ioit, AISSMS COE Parking Rd, near RTO, Railway Officers Colony, Sangamvadi, Pune, Maharashtra 411001<br/><br/>
              Email: PLANiT@gmail.com<br />
              Phone: 9999999999
            </div>
          </div>
        </div>
        </div>
}