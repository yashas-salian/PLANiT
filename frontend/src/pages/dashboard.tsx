import { Marquee } from "@/components/marquee";
import { SessionNavBar } from "../components/ui/sidebar";
import { Card, Carousel } from "@/components/ui/apple-cards-carousel";
import weddingimg from "../components/wedding.jpg"
import birthdayimg from "../components/birthday.jpg"
import openMicimg from "../components/OpenMicNight.jpg"
import anniversary from "../components/anniversary.jpg"
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from "react";


export const Dashboard=()=> {
    useEffect(() => {
      AOS.init({
        duration: 1000, // animation duration in ms
        offset: 0
      });
    }, []);

    const cardData = [
      {
        src: weddingimg, // Path to your image
        title: "Elegant Wedding Planning",
        category: "Weddings",
      },
      {
        src: openMicimg, // Path to your image
        title: "Memorable Birthday Celebrations",
        category: "Birthdays",
      },
      {
        src: birthdayimg, // Path to your image
        title: "Professional Corporate Events",
        category: "Corporate",
        },
      {
        src: anniversary, // Path to your image
        title: "Dynamic Concert Productions",
        category: "Entertainment",
        },
      {
        src: birthdayimg, // Path to your image
        title: "Professional Corporate Events",
        category: "Corporate",
        },
      {
        src: anniversary, // Path to your image
        title: "Dynamic Concert Productions",
        category: "Entertainment",
        },
      {
        src: birthdayimg, // Path to your image
        title: "Professional Corporate Events",
        category: "Corporate",
        },
        {
          src: anniversary, // Path to your image
          title: "Dynamic Concert Productions",
          category: "Entertainment",
          },
        {
          src: birthdayimg, // Path to your image
          title: "Professional Corporate Events",
          category: "Corporate",
          },
    ];

    
    const cardElements = cardData.map((card, index) => (
      <Card key={index} card={card} index={index} layout={true} />
    ));
    

  return (
    <div className="overflow-x-hidden bg-purple-200">
      <div>
      <SessionNavBar />
      </div>
      <div className="pt-4 pb-10">
        <Marquee text="“A dream becomes a goal when action is taken toward its achievement.” 
        |  “To execute an event successfully, you need three things: the right people, the right mindset, and just enough madness to make it unforgettable.” 
        |  “A successful event is when people leave feeling better than when they arrived.” "
        className="text-[#755EA5] font-bold text-xl italic"/>
      </div>
      <div   className="content flex w-full pl-40 pt-15 text-xl grid grid-cols-2 gap-4 pr-80">
      <div data-aos="fade-up" >
      <img 
        src={weddingimg} className="absolute top-0 left-0 w-64 h-64 object-cover rounded-lg shadow-lg transform transition-all duration-500 hover:z-10 hover:scale-105"
      />
      <img 
        src={birthdayimg} className="absolute top-20 left-48 w-64 h-64 object-cover rounded-lg shadow-lg transform transition-all duration-500 hover:z-10 hover:scale-105"
      />
      <img 
        src={openMicimg}   className="absolute top-40 left-24 w-64 h-64 object-cover rounded-lg shadow-lg transform transition-all duration-500 hover:z-10 hover:scale-105"
      />
    </div>

        <div data-aos="fade-up" className="pr-4 w-164 items-center text-justify text-xl relative overflow-hidden">
         <div className="text-3xl mb-6"> Welcome to <b className="text-[#755EA5]">Planit</b> – 
         Your Ultimate Event Management Solution!</div> At <b className="text-[#755EA5]">Planit</b>,
          we believe that planning an event should be exciting, not overwhelming. We 
          specialize in transforming your ideas into unforgettable experiences, whether 
          it's a corporate conference, a dreamy wedding, or a lively birthday party. Our 
          comprehensive services cover every aspect of event planning, including venue 
          selection, vendor coordination, customized event designs, and on-site management,
            ensuring a seamless and stress-free experience. With a dedicated team of experienced
            planners, we prioritize personalized service and attention to detail, crafting 
            unique events that reflect your vision. From the initial concept to flawless 
            execution, we handle everything while you focus on enjoying your special day.
            ensuring a seamless and stress-free.ensuring a seamless and stress-free experience. With a dedicated team of experienced
            planners, we prioritize personalized service and attention to detail, crafting 
            unique events that reflect your vision. From the initial concept to flawless 
            execution, we handle everything while you focus on enjoying your special day.
        </div>
      </div>
      {/* <div data-aos="fade-up" className="relative overflow-hidden text-xl text-justify pl-40 pr-4 "> */}
      {/* ensuring a seamless and stress-free experience. With a dedicated team of experienced
            planners, we prioritize personalized service and attention to detail, crafting 
            unique events that reflect your vision. From the initial concept to flawless 
            execution, we handle everything while you focus on enjoying your special day. */}
      {/* </div> */}
      <div data-aos="fade-up relative overflow-hidden " className="w-full mt-20">
        <h2 className=" text-4xl font-bold text-center text-[#755EA5]">Our work</h2>
        <Carousel items={cardElements} />
      </div>

    </div>
  );
}
