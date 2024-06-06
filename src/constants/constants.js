import { Link } from 'react-router-dom';
import serviceImgUrl_1 from '../assets/10NAMNHINLAI.jpeg'
import serviceImgUrl_2 from '../assets/10NAMNHINLAI.jpeg'
import serviceImgUrl_3 from '../assets/10NAMNHINLAI.jpeg'
import aboutImgUrl from '../assets/10NAMNHINLAI.jpeg'
import footerImgUrl from '../assets/Copy of WALL.png'
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube, FaEnvelope } from "react-icons/fa6";

export const navigation = [
    {
        id: '0',
        title: 'HOME',
        url: '/home'
    },
    {
        id: '1',
        title: 'ABOUT',
        url: '/about'
    },
    {
        id: '2',
        title: 'SERVICE',
        url: '/service'
    },
    {
        id: '3',
        title: 'CONTACT',
        url: '/contact'
    }
];

export const footer = {
    socials: [{
        id: '0',
        link: '',
        icon: <FaFacebookF />
    },
    {
        id: '1',
        link: '',
        icon: <FaInstagram />
    },
    {
        id: '2',
        link: '',
        icon: <FaTiktok />
    },
    {
        id: '3',
        link: '',
        icon: <FaYoutube />
    },
    {
        id: '4',
        link: '',
        icon: <FaEnvelope />
    }],
    logoUrl: footerImgUrl,
    navItems: [{
        id: '1',
        title: 'About us',
        link: '/'
    },
    {
        id: '2',
        title: 'About us',
        link: '/'
    },
    {
        id: '3',
        title: 'About us',
        link: '/'
    },
    {
        id: '4',
        title: 'About us',
        link: '/'
    },
    {
        id: '5',
        title: 'About us',
        link: '/'
    }]
}

export const home_Service = [
    {
        btnText: 'Buy',
        link: '/home',
        id: '0',
        imgUrl: serviceImgUrl_1,
        alt: 'home'
    },
    {
        btnText: 'Hire',
        link: '/home',
        id: '1',
        imgUrl: serviceImgUrl_2,
        alt: 'home'
    },
    {
        btnText: 'Buy and Sell Used',
        link: '/home',
        id: '2',
        imgUrl: serviceImgUrl_3,
        alt: 'home'
    },
]

export const home_About = {
    title: 'About',
    btnText: 'Contact Us',
    link: '/home',
    imgUrl: aboutImgUrl,
    aboutItems: [{
        id: '0',
        title: 'What we do',
        content: 'We provided audio production to the live production industry in Vietnam.'
    },
    {
        id: '1',
        title: 'Who we are',
        content: '96K Live is a collective of many sound engineers from different companies with the aim of bringing a realistic live show experience to the audience.'
    },
    {
        id: '2',
        title: 'Our People',
        content: '96K Live is founded on the backbone of a collective experience of 6 key individuals with a broad range of experience from across the professional audio industry.'
    }]
}

export const home_Sliders =[
    {
        id: '0',
        text: '"96K Live is established on the premise that the management are passionate about what we do and where we have come from. We want to enjoy working in what we believe to be a special industry and protect that which makes it different to other working environments."'
    },
    {
        id: '1',
        text: '"We want to look after our clients to the best of our ability, encourage a respectful and fun working environment, and we hope this will mean we can offer service and support to many of the next generation of touring productions"'
    },
    {
        id: '2',
        text: '"We are very excited by what the future holds. We believe that actions speak louder than words and so look forward to demonstrating to the market our capability as we take on the exciting opportunities that 2024 has to offer."'
    }
]