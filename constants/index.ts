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

const secondSlider: Banner[] = [
    { id: uuidv4(), title: "Client 1", image: "/assets/images/card-img-1.jpg", description: "This is some description about the client", startedYear: 2017 },
    { id: uuidv4(), title: "Client 2", image: "/assets/images/card-img-2.jpg", description: "This is some description about the client", startedYear: 2015 },
    { id: uuidv4(), title: "Client 3", image: "/assets/images/card-img-3.jpg", description: "This is some description about the client", startedYear: 2022 },
    { id: uuidv4(), title: "Client 4", image: "/assets/images/card-img-4.jpg", description: "This is some description about the client" },
    { id: uuidv4(), title: "Client 5", image: "/assets/images/card-img-1.jpg", description: "This is some description about the client", startedYear: 2017 },
    { id: uuidv4(), title: "Client 6", image: "/assets/images/card-img-2.jpg", description: "This is some description about the client", startedYear: 2015 },
    { id: uuidv4(), title: "Client 7", image: "/assets/images/card-img-3.jpg", description: "This is some description about the client", startedYear: 2022 },
    { id: uuidv4(), title: "Client 8", image: "/assets/images/card-img-4.jpg", description: "This is some description about the client" },
]

export { navItems, bannerSlider, BANNER_SLIDER_DURATION, secondSlider };