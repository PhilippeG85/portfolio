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