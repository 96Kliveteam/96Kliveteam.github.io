import { Link } from 'react-router-dom';
import serviceImgUrl_1 from '../assets/10NAMNHINLAI.jpeg'
import serviceImgUrl_2 from '../assets/10NAMNHINLAI.jpeg'
import serviceImgUrl_3 from '../assets/10NAMNHINLAI.jpeg'
import aboutImgUrl_3 from '../assets/10NAMNHINLAI.jpeg'

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
    imgUrl: aboutImgUrl_3,
    aboutItems: [{
        id: '0',
        title:'What we do',
        content:'We provided audio production to the live production industry in Vietnam.'
    },
    {
        id: '1',
        title:'Who we are',
        content:'96K Live is a collective of many sound engineers from different companies with the aim of bringing a realistic live show experience to the audience.'
    },
    {
        id: '2',
        title:'Our People',
        content:'96K Live is founded on the backbone of a collective experience of 6 key individuals with a broad range of experience from across the professional audio industry.'
    }]
}