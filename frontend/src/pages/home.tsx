import em2 from "../components/em2.jpg"
import em3 from "../components/emp3.jpg"
import em1 from "../components/safiyaWeb.jpg"
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import HoverEffect from "@/components/ui/card-hover-effect";
import Carousel from "@/components/ui/carousel";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuViewport
} from "@/components/ui/navigation-menu"

interface Items {
  id: number,
  name: string,
  designation: string,
  image: string
}

interface SlideData {
  title: string;
  button: string;
  src: string;
}

const items: Items[] = [
  { id: 1, name: "Safiya", designation: "Frontend Designer", image: em1 },
  { id: 2, name: "Yashumon", designation: "Backend Developer", image: em2 },
  { id: 3, name: "Sohail", designation: "Documentation Executive", image: em3 }
];

const slides: SlideData[] = [
  { title: "Welcome", button: "Click Me", src: "https://static.vecteezy.com/system/resources/previews/024/316/125/original/event-management-wedding-planner-manager-planning-event-conference-or-party-professional-organizer-schedule-modern-flat-cartoon-style-illustration-on-white-background-vector.jpg" },
  { title: "Anniversary", button: "Learn More", src: "https://scopeims.com/wp-content/uploads/2019/03/PHOTOFINE-51-compressor.jpg" },
  { title: "Open mic night", button: "Learn More", src: "https://uploads.sarvgyan.com/2014/08/event-management.jpg" },
  { title: "Holiday Party", button: "Learn More", src: "https://i.pinimg.com/originals/8a/7a/2e/8a7a2e889618b8a6c50f3bd7f56105c0.jpg" },
  { title: "Wedding ", button: "Learn More", src: "https://wallpapercave.com/wp/wp10715834.jpg" },
  { title: "Birthday Party", button: "Learn More", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJwOhvPfc8gxnJ2epznAqYP_qFE8_XwdQNbw&s " }
];

export const HomePage = () => {
  const ListItem = ({ href, children }: any) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            href={href}
            className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 hover:text-gray-900"
          >
            {children}
          </a>
        </NavigationMenuLink>
      </li>
    );
  };

  return (
    <div className="flex flex-col relative w-full min-h-screen overflow-x-hidden">
      <div className="w-full bg-gradient-to-r from-lime-200 to-lime-300 px-4 py-2">
        <NavigationMenu>
          <NavigationMenuList className="flex flex-wrap">
            <NavigationMenuItem>
              <NavigationMenuTrigger>Home</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-48 gap-1 p-2">
                  <ListItem href="/dashboard">Dashboard</ListItem>
                  <ListItem href="/overview">Overview</ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-48 gap-1 p-2">
                  <ListItem href="/about/story">Our Story</ListItem>
                  <ListItem href="/about/team">Team</ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Features</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-48 gap-1 p-2">
                  <ListItem href="/features/products">Products</ListItem>
                  <ListItem href="/features/services">Services</ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Contact Us</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-48 gap-1 p-2">
                  <ListItem href="/contact/support">Support</ListItem>
                  <ListItem href="/contact/get-in-touch">Get in Touch</ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>

          <NavigationMenuViewport className="origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-lg border bg-white shadow-lg animate-in data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]" />
        </NavigationMenu>
      </div>
      
      <div className="w-full max-w-full pt-2">
        <Carousel slides={slides} />
      </div>
      <div className="pt-12 pl-6">
        <div className="pl-12 pr-12 pt-4 text-xl">
          <div className="text-4xl font-extrabold">Welcome to <b className="text-lime-500">PLANiT</b> – Your Ultimate Event Management Solution!<br/></div>

<br></br>Planning an event can be overwhelming, but with <b className="text-lime-500">PLANiT</b>, it's effortless and stress-free! Whether you're organizing a birthday party, wedding, corporate event, anniversary celebration, or any special occasion, our platform ensures a smooth and hassle-free experience from start to finish.</div>
        <div className="font-extrabold text-4xl pl-12 pr-12 pt-6">What we do?</div>
  <HoverEffect
    items={[
      { title: "Wedding Planning", description: "We handle everything from venue selection to décor, catering, and entertainment, ensuring a seamless and magical wedding experience" },
      { title: "Birthday Parties", description: "From themed decorations to cake, music, and activities, we create unforgettable birthday celebrations tailored to all ages." },
      { title: "Corporate Events", description: "We plan professional gatherings, including conferences, seminars, and team-building events, with seamless logistics and top-notch coordination." },
      { title: "Anniversary celebration", description: "Celebrate love with intimate or grand anniversary parties featuring elegant décor, fine dining, and personalized touches." },
      { title: "Open mic nights", description: "We set up engaging open mic nights with stage design, sound setup, and a welcoming atmosphere for performers and audiences" },
      { title: "Holiday Party's", description: "From festive decorations to curated menus and entertainment, we create vibrant holiday parties that capture the season's spirit." }
    ]}
  />
</div>
<hr className="ml-6 mr-6"></hr>
    <div className="pl-6 pt-4">
      <b className="text-xl">Our team</b>
    </div>
      <div className="pl-4 pt-3 pb-6">
        <AnimatedTooltip items={items} />
      </div>
    </div>
  );
};