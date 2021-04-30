import style from '../styles/Menu.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

library.add(fab, fas);

export default function Menu({ children }) {
    const [menuClass, setMenuClass] = useState(false)

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

    const handleMobileClick = () => {
        const menu = document.querySelector('.Menu_mobileDropdown__c6xdw')
        if (menuClass === false) {
            menu.classList.add('open-menu')
            menu.classList.remove('close-menu')
            setMenuClass(true)
        } else {
            menu.classList.add('close-menu')
            menu.classList.remove('open-menu')
            setMenuClass(false)
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

    const handleMenuMobileClick = (to) => {
        cleanMobile()
        const winHeight = window.innerHeight
        const arraw = document.querySelectorAll('.fa-arrow-down')[1]
        const menu = document.querySelector('.Menu_projectsListMobile__3YsiY')
        arraw.style.transform = "rotate(-90deg)"
        menu.style.height = "0px"
        if (to === 'home') {
            window.scrollTo({top: 0, left: 0, behavior: "smooth"})
            handleMobileClick() 
        } else if (to === 'about') {
            window.scrollTo({top: 1.5 * winHeight, left: 0, behavior: "smooth"})
            handleMobileClick() 
        }else if (to === 'projects') {
            window.scrollTo({top: 1690, left: 0, behavior: "smooth"})
            handleMobileClick() 
        } else if (to === 'contact') {
            window.scrollTo({top: 2130, left: 0, behavior: "smooth"})
            handleMobileClick() 
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

    const handleProjectsClickMobile = () => {
        const arraw = document.querySelectorAll('.fa-arrow-down')[1]
        const menu = document.querySelector('.Menu_projectsListMobile__3YsiY')
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
        } else if (site === 'portfolio') {
            const portfolio = document.querySelector('.portfolio')
            portfolio.style.left = "0"
        }
    }

    const handleSelectedProjectClickMobile = (site) => {
        cleanMobile()
        handleMobileClick()
        if (site === '3') {
            const troisMats = document.querySelector('.les-trois-mobile')
            troisMats.style.left = "0"
        } else if (site === 'help') {
            const helper = document.querySelector('.helper-mobile')
            helper.style.left = "0"
        } else if (site === 'portfolio') {
            const portfolio = document.querySelector('.portfolio-mobile')
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
    const cleanMobile = () => {
        const troisMats = document.querySelector('.les-trois-mobile')
        const helper = document.querySelector('.helper-mobile')
        const portfolio = document.querySelector('.portfolio-mobile')
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
                    <h3 className='menu-h3'>My Portfolio<span className={style.point}>.</span></h3>
                </div>
                <div className={style.footer}>
                    <div className={style.arrow}>
                        <p>Scroll</p>
                        <FontAwesomeIcon icon={['fas', 'long-arrow-alt-down']} />
                    </div>
                </div>
                <div className={style.mobileMenu} onClick={handleMobileClick}>
                    <FontAwesomeIcon icon={['fas', 'bars']} />
                </div>
                <div className={style.mobileDropdown}>
                    <h3 className={style.titleMobile}>My Portfolio<span className={style.point}>.</span></h3>
                    <div className={style.menuContent}>
                        <h4 onClick={() => handleMenuMobileClick('home')}>Home</h4>
                        <h4 onClick={() => handleMenuMobileClick('about')}>About-me</h4>
                        <div className={style.projectsContent}>
                            <div className={style.menuProjects}>
                                <h4 onClick={() => handleMenuMobileClick('projects')}>Projects</h4>
                                <FontAwesomeIcon onClick={handleProjectsClickMobile} icon={['fas', 'arrow-down']} />
                            </div>
                            <div className={style.projectsListMobile}>
                                <h6 onClick={() => handleSelectedProjectClickMobile('3')}>Les Trois Mats</h6>
                                <h6 onClick={() => handleSelectedProjectClickMobile('help')}>Helper</h6>
                                <h6 onClick={() => handleSelectedProjectClickMobile('portfolio')}>My Portfolio</h6>
                            </div>
                        </div>
                        <h4 onClick={() => handleMenuMobileClick('contact')}>Contact</h4>
                    </div>
                    <div className={style.socialListMobile}>
                        <a href={linkLink} target="_blank" rel="noreferrer" >
                            <FontAwesomeIcon icon={['fab', 'linkedin']} />
                        </a>
                        <a href={gitLink} target="_blank" rel="noreferrer" >
                            <FontAwesomeIcon icon={['fab', 'github']} />
                        </a>
                        <a href='mailto:pgonse@gmail.com' target="_blank" rel="noreferrer" >
                            <FontAwesomeIcon icon={['fas', 'envelope']} />
                        </a>
                    </div>
                    <div className='mobile-menu-bar' />
                </div>
            </header>
            {children}
        </div>
    )
}