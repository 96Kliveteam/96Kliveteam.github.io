//Home
import serviceImgUrl_1 from '../assets/10NAMNHINLAI.jpeg'
import serviceImgUrl_2 from '../assets/10NAMNHINLAI.jpeg'
import serviceImgUrl_3 from '../assets/10NAMNHINLAI.jpeg'
import aboutImgUrl from '../assets/10NAMNHINLAI.jpeg'

//About
import whatWeDoImgUrl from '../assets/10NAMNHINLAI.jpeg'
import whatWeDo_2ImgUrl from '../assets/10NAMNHINLAI.jpeg'
import whatWeDo_3ImgUrl from '../assets/10NAMNHINLAI.jpeg'
import whoWeAre_ImgUrl from '../assets/10NAMNHINLAI.jpeg'
import ourPeople_ImgUrl from '../assets/10NAMNHINLAI.jpeg'
import ourPeople_2ImgUrl from '../assets/10NAMNHINLAI.jpeg'
import ourPeople_3ImgUrl from '../assets/10NAMNHINLAI.jpeg'

//Service
import hireService_ImgUrl from '../assets/10NAMNHINLAI.jpeg'
import hireService_3ImgUrl from '../assets/10NAMNHINLAI.jpeg'
import hireService_2ImgUrl from '../assets/10NAMNHINLAI.jpeg'

//Footer
import footerImgUrl from '../assets/Copy of WALL.png'


import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube, FaEnvelope } from "react-icons/fa6";

export const navigation = [
    {
        id: '0',
        title: 'HOME',
        url: '/'
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
        title: 'Our Services',
        link: '/'
    },
    {
        id: '3',
        title: 'Privacy Policy',
        link: '/'
    },
    {
        id: '4',
        title: 'Terms & Conditions',
        link: '/'
    },
    {
        id: '5',
        title: 'Career',
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

export const home_Sliders = [
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

export const about_WhatWeDo = {
    part_1: {
        imgUrl: whatWeDoImgUrl,
        content: [{
            id: '0',
            text: '96K Live enters the pro-audio market as an experienced newcomer. We aim to offer boutique services providing tailored packages to our touring hire clients.'
        },
        {
            id: '1',
            text: 'We will work to develop an equipment supply service alongside our hire offering as we grow our customer base and opportunities.'
        },
        {
            id: '2',
            text: 'Without a legacy hire stock our systems are designed for current technology with a focus on quality and efficiency.'
        }],
    },
    part_2: {
        imgUrl_1: whatWeDo_2ImgUrl,
        imgUrl_2: whatWeDo_3ImgUrl,
        content: 'Our initial offering is focussed on hire systems; we have built a rider friendly inventory all packaged with intelligent infrastructure to make our systems pack well and provide flexibility whatever the application. We are now carrying PA, mixing consoles, power distribution, wireless systems and production packages.',
        btnText: 'Contact Us',
        btnLink: '/'
    }

}

export const about_WhoWeAre = {
    content: [{
        id: '0',
        text: '96K Live is a group of likeminded industry professionals, old enough to have extensive experience and young enough to have the drive to create something new. We have varying skillsets and specialities which makes our team highly proficient in a broad range of activities across the pro-audio space, and experts in delivering for our customer base.'
    },
    {
        id: '1',
        text: 'All of our team share a common desire to not only work, but to love what we’re doing, always striving for innovation and to be the best. We are passionate about live music and the production industry.'
    },
    {
        id: '2',
        text: 'We are defiantly independent, and prioritise not only our stock, and our systems, but our culture and heritage as a rock n roll service provider, aiming to operate at the cutting edge of live production.'
    },
    {
        id: '3',
        text: 'We aim to always encourage a positive working environment for all that we associate with, and we want to provide a home for those that share our enthusiasm for excellence in pro-audio delivery.'
    },
    {
        id: '4',
        text: 'We recognise that our relationships, and our people are our strength, and we will strive to deliver a great experience for all those who choose to work with and for us.'
    }],
    imgUrl: whoWeAre_ImgUrl
}

export const about_OurPeople = [
    {
        id: '0',
        imgAvatar: ourPeople_ImgUrl,
        name: 'Phu Le (FOH Engineer/Founder)',
        title: 'Freelancer FOH/System Designer',
        profiles: [{
            id: '0',
            text: 'Was the FOH Engineer at Musicaland 2024',
        },
        {
            id: '1',
            text: 'Was the Monitor Engineer at Lâm Bảo Ngọc Mini Concert 2023',
        },
        {
            id: '2',
            text: 'Was the FOH Engineer at Cá Hồi Hoang - Chúng ta đều muốn một tour',
        },
        {
            id: '3',
            text: 'Was the Stage, System Manager at Amazing Fest Binh Dinh 2024, Charlie Puth Vin Wonder 2023, Xuan Yeu Thuong – Franklin Graham 2023, NTPMM Summer Tour 2023, Dalat Countdown 2022.',
        },
        {
            id: '4',
            text: 'Worked at Tran Hau Sound - Lighting',
        }]
    },
    {
        id: '2',
        imgAvatar: ourPeople_2ImgUrl,
        name: 'NGUYEN LE',
        title: 'Project Manager/Backstage Engineer',
        profiles: [{
            id: '0',
            text: 'Was the Stage Technician at Cam by 8 2024',
        },
        {
            id: '1',
            text: 'Was the Stage Technician at Lâm Bảo Ngọc Mini Concert 2023',
        },
        {
            id: '2',
            text: 'Was the Stage Technician at Cá Hồi Hoang - Chúng ta đều muốn một tour',
        },
        {
            id: '3',
            text: 'Was the Stage Technician at Hozo Music Festival 2022',
        },
        {
            id: '4',
            text: 'Was the Backstage for Ngọt band',
        },
        {
            id: '5',
            text: 'Was the Backstage for The Flob',
        }]
    },
    {
        id: '3',
        imgAvatar: ourPeople_3ImgUrl,
        name: 'PHAM TRAN HOANG LONG',
        title: 'Audio Technician, RF Manager',
        profiles: [{
            id: '0',
            text: 'Was the FOH Supporter at Musicaland 2024',
        },
        {
            id: '1',
            text: 'Was the Stage Technician at Lâm Bảo Ngọc Mini Concert 2023',
        },
        {
            id: '2',
            text: 'Was the Stage Technician, Rigger at Amazing Fest Binh Dinh 2024, Xuan Yeu Thuong – Franklin Graham 2023',
        }]
    },
]
export const about_Sliders = [
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

export const service_Hire = [
    {
        id: '0',
        text: '96K Live offers a bespoke hire service to touring clients. We offer tailored packages to suit the needs of your touring production. We are focussed on delivering the best quality packages and understand that this is driven through our attention to detail, our support and the development of our own proprietary solutions and infrastructure.'
    },
    {
        id: '1',
        text: 'The 96K Live management team has extensive experience on delivering for all types of events and can offer advice and service in relation to all audio related requirements.'
    }
]

export const service_HireService = {
    catories: [
        {
            id: '0',
            title: 'Events',
            text: '96K Live provide audio solutions for all types of events.',
            imgUrl: hireService_ImgUrl
        },
        {
            id: '1',
            title: 'Backline',
            text: '96K Live provide stage gears for all types of band.',
            imgUrl: hireService_2ImgUrl
        },
        {
            id: '2',
            title: 'Audio Production',
            text: '96K Live offer tailored packages to meet the demands of your show production.',
            imgUrl: hireService_3ImgUrl
        }
    ],
    btnText: 'Contact Us',
    btnLink: '/'
}

export const service_HireStock = {
    catories: [
        {
            id: '0',
            title: 'Events',
            imgUrl: hireService_ImgUrl
        },
        {
            id: '1',
            title: 'Backline',
            imgUrl: hireService_2ImgUrl
        },
        {
            id: '2',
            title: 'Audio Production',
            imgUrl: hireService_3ImgUrl
        }],
    btnText: 'Contact Us',
    btnLink: '/'
}

export const service_BuyNew = {
    accordions: [{
        id: '0',
        title: 'Boutique Service',
        answer: [
           `We anticipate our sales opportunities will grow as we broaden our customer base and we aim to be able to deliver on the demands of our customers as requested.`,
           `We expect to develop resale opportunities as we establish ourselves initially as a Hire company and will look to resell a selection of specialist products that we utilise for our own hire requirements.`,
           `As is the case when operating at this end of the market we will aim to offer a high-end service, providing expert advice, tour packaging solutions, and provide opportunity for product demonstration.`,
           `Being users of the products we sell and having already developed our own packaging solutions means we can provide a tailored service to customers buying for their own touring and rental requirements.`
        ]
    }],
    accordions2: [{
        id: '0',
        title: 'Our Offerings',
        answer: [
            `Part exchange of professional audio equipment (assessed on a case by case basis)`,
            `Asset finance assistance through third party lenders`,
            `ALong-term rental options for venues Package promotions`
        ]
    }],
    text: 'The 96K Live team have experience not only of operating in the world of hiring equipment, but also supplying pro-audio kit for resale, and act as a dealer for many of our core brands.',
    btnText: 'Contact Us',
    btnLink: '/'
}

export const contact = {
    address: '891/107/15 Đ. Nguyễn Kiệm, Phường 3, Gò Vấp, Thành phố Hồ Chí Minh 70000',
    email: '96kliveteam.co@gmail.com',
    mobileNo: '+44 (0)121 740 0022',
    socials: [{
        id: '0',
        link: '/',
        icon: <FaFacebookF />
    },
    {
        id: '1',
        link: '/',
        icon: <FaInstagram />
    },
    {
        id: '2',
        link: '/',
        icon: <FaTiktok />
    }],
}