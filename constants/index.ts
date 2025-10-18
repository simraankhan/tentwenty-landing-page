import { v4 as uuidv4 } from 'uuid';

const navItems: NavLink[] = [
    { id: uuidv4(), title: "About", href: "/about" },
    { id: uuidv4(), title: "News", href: "/news" },
    { id: uuidv4(), title: "Services", href: "/service" },
    { id: uuidv4(), title: "Our Team", href: "/our-team" },
    { id: uuidv4(), title: "Make Enquiry", href: "/make-enquiry" },
]

const bannerSlider: Banner[] = [
    { id: uuidv4(), title: "Dubai Tourism 1", image: "/assets/images/banner-1.jpg", description: "This is some description about the place" },
    { id: uuidv4(), title: "Dubai Tourism 2", image: "/assets/images/banner-2.jpg", description: "This is some description about the place" },
    { id: uuidv4(), title: "Dubai Tourism 3", image: "/assets/images/banner-3.jpg", description: "This is some description about the place" },
    { id: uuidv4(), title: "Dubai Tourism 4", image: "/assets/images/banner-4.jpg", description: "This is some description about the place" },
]

const BANNER_SLIDER_DURATION = 4000;

export { navItems, bannerSlider, BANNER_SLIDER_DURATION };