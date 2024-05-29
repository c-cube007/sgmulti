import logo1 from "../assets/4.png";
import logo2 from "../assets/1.png";
import logo3 from "../assets/2.png";
import logo4 from "../assets/3.png";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "About", href: "#" },
  { label: "Services", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const features = [
  {
    logo: <img src={logo2} alt="Transportation Logo" className="h-10 w-10" />,
    title: "S.G. Transportation & Logistics",
    description:
      "Providing comprehensive transportation solutions, including logistics management and nationwide deliveries.",
    link: "https://www.sgmultinational.com/sgtransport",
  },
  {
    logo: <img src={logo1} alt="Foundation Logo" className="h-10 w-10" />,
    title: "S.G. Foundation",
    description:
      "Empowering communities through education, healthcare, and sustainable development projects.",
    link: "https://www.sgmultinational.com",
  },
  {
    logo: <img src={logo3} alt="Oil & Gas Logo" className="h-10 w-10" />,
    title: "S.G. Oil & Gas",
    description:
      "Leading in energy solutions with exploration, production, and distribution of oil and gas resources.",
    link: "https://www.sgmultinational.com/sgoilandgas",
  },
  {
    logo: <img src={logo4} alt="Entertainment Logo" className="h-10 w-10" />,
    title: "S.G. Entertainment and Production",
    description:
      "Creating and distributing high-quality entertainment content across various platforms.",
    link: "https://www.sgmultinational.com/sgentertainment",
  },
];

export const resourcesLinks = [
  { href: "https://www.sgmultinational.com/", text: "S.G Oseni Foundation" },
  {
    href: "https://www.sgmultinational.com/sgtransport",
    text: "S.G. Transportation and Logistics",
  },
  {
    href: "https://www.sgmultinational.com/sgentertainment",
    text: "S.G. Entertainment Promotion and Instrument Services",
  },
  {
    href: "https://www.sgmultinational.com/sgoilandgas",
    text: "S.G. National Oil and Gas",
  },
];
