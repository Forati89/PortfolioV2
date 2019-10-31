import wordpress_baner from '../assets/wordpress_baner.jpg'
import musicBaner from '../assets/MusicFinder.jpg'
import ecommerce from '../assets/e-commerce.jpg'
const PROJECTS = [

    {
        id: 1,
        title: 'WordPress E-commerce',
        description: 'A complete e-commerce project by me, built with WordPress',
        link: 'https://www.cloudvapor.se',
        image: wordpress_baner
    },
    {
        id: 2,
        title: 'Music Finder using Spotify API',
        description: 'A React App for finding Artist and top tracks using API',
        link: 'https://forati89.github.io/Music-Finder/',
        image: musicBaner
    },
    {
        id: 3,
        title: 'E-commerce Site',
        description: 'Full e-commerce site with stripe, firebase & auth login using React & Redux and more!',
        link: 'https://forati89.github.io/e-shop/',
        image: ecommerce
        
    }


];

export default PROJECTS;