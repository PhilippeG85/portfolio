import style from '../styles/Menu.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

library.add(fab, fas);

export default function Menu({ children }) {

    const handleClick = () => {
        const menu = document.querySelector('.Menu_menuLeft__22Yws')
        if (menu.style.left === '-200px') {
            menu.style.left = "0px"
        } else if (menu.style.left === '') {
            menu.style.left = "0px"
        } else {
            menu.style.left = "-200px"
        }
    }

    const handleMenuClick = (to) => {
        clean()
        const winHeight = window.innerHeight
        const arraw = document.querySelector('.fa-arrow-down')
        const menu = document.querySelector('.Menu_projectsList__b9kJV')
        arraw.style.transform = "rotate(-90deg)"
        menu.style.height = "0px"
        if (to === 'home') {
            window.scrollTo({top: 0, left: 0, behavior: "smooth"})
            handleClick() 
        } else if (to === 'about') {
            window.scrollTo({top: 1.5 * winHeight, left: 0, behavior: "smooth"})
            handleClick() 
        }else if (to === 'projects') {
            window.scrollTo({top: 1.95 * winHeight, left: 0, behavior: "smooth"})
            handleClick() 
        } else if (to === 'contact') {
            window.scrollTo({top: 3 * winHeight, left: 0, behavior: "smooth"})
            handleClick() 
        }
    }

    const handleProjectsClick = () => {
        const arraw = document.querySelector('.fa-arrow-down')
        const menu = document.querySelector('.Menu_projectsList__b9kJV')
        if (menu.style.height === '') {
            arraw.style.transform = "rotate(0deg)"
            menu.style.height = "150px"
        } else if (menu.style.height === '0px') {
            arraw.style.transform = "rotate(0deg)"
            menu.style.height = "150px"
        } else {
            arraw.style.transform = "rotate(-90deg)"
            menu.style.height = "0px"
        }
    }

    const handleSelectedProjectClick = (site) => {
        clean()
        handleClick()
        if (site === '3') {
            const troisMats = document.querySelector('.les-trois')
            troisMats.style.left = "0"
        } else if (site === 'help') {
            const helper = document.querySelector('.helper')
            helper.style.left = "0"
        } else if(site === 'portfolio') {
            const portfolio = document.querySelector('.portfolio')
            portfolio.style.left = "0"
        }
    }

    const clean = () => {
        const troisMats = document.querySelector('.les-trois')
        const helper = document.querySelector('.helper')
        const portfolio = document.querySelector('.portfolio')
        troisMats.style.left = "100%"
        helper.style.left = "100%"
        portfolio.style.left = "100%"
    }

    const displayScroll = () => {
        const arrow = document.querySelector('.Menu_arrow__34qjX')
        if (window.scrollY > '500') {
            arrow.style.opacity = "0"
        } else {
            arrow.style.opacity = "1"
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', displayScroll)
    }, [])

    const gitLink = "https://github.com/PhilippeG85";
    const linkLink = "https://www.linkedin.com/in/philippe-gonse/";

    return (
        <div>
            <header>
                <div className={style.menuLeft}>
                    <div className={style.menuContent}>
                        <h4 onClick={() => handleMenuClick('home')}>Home</h4>
                        <h4 onClick={() => handleMenuClick('about')}>About-me</h4>
                        <div className={style.projectsContent}>
                            <div className={style.menuProjects}>
                                <h4 onClick={() => handleMenuClick('projects')}>Projects</h4>
                                <FontAwesomeIcon onClick={handleProjectsClick} icon={['fas', 'arrow-down']} />
                            </div>
                            <div className={style.projectsList}>
                                <h6 onClick={() => handleSelectedProjectClick('3')}>Les Trois Mats</h6>
                                <h6 onClick={() => handleSelectedProjectClick('help')}>Helper</h6>
                                <h6 onClick={() => handleSelectedProjectClick('portfolio')}>My Portfolio</h6>
                            </div>
                        </div>
                        <h4 onClick={() => handleMenuClick('contact')}>Contact</h4>
                    </div>
                    <div className={style.menuBtn} onClick={handleClick}>
                        <img src='/MenuBtn.svg' />
                        <p>Menu</p>
                    </div>
                </div>
                <div className={style.socialMedia}>
                    <ul className={style.socialList}>
                        <li>
                            <a href={linkLink} target="_blank" rel="noreferrer" >
                                <FontAwesomeIcon icon={['fab', 'linkedin']} />
                            </a>
                        </li>
                        <li>
                            <a href={gitLink} target="_blank" rel="noreferrer" >
                                <FontAwesomeIcon icon={['fab', 'github']} />
                            </a>
                        </li>
                        <li>
                            <a href='mailto:pgonse@gmail.com' target="_blank" rel="noreferrer" >
                                <FontAwesomeIcon icon={['fas', 'envelope']} />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={style.name}>
                    <h3>My Portfolio<span className={style.point}>.</span></h3>
                </div>
                <div className={style.footer}>
                    <div className={style.arrow}>
                        <p>Scroll</p>
                        <FontAwesomeIcon icon={['fas', 'long-arrow-alt-down']} />
                    </div>
                </div>
            </header>
            {children}
        </div>
    )
}