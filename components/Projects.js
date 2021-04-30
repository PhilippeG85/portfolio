import ProjectsDestop from './ProjectsDestop'
import style from '../styles/Projects.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas)

export default function Projects() {

    const handleClick = (site) => {
        document.body.style.overflow = "hidden"
        if (site === '3') {
            if (window.innerWidth < '540') {
                const troisMats = document.querySelector('.les-trois-mobile')
                troisMats.style.left = "0"
            } else {
                const troisMats = document.querySelector('.les-trois')
                troisMats.style.left = "0"
            }
        } else if (site === 'help') {
            if (window.innerWidth < '540') {
                const helper = document.querySelector('.helper-mobile')
                helper.style.left = "0"
            } else {
                const helper = document.querySelector('.helper')
                helper.style.left = "0"
            }
        } else if(site === 'portfolio') {
            if (window.innerWidth < '540') {
                const portfolio = document.querySelector('.portfolio-mobile')
                portfolio.style.left = "0"
            } else {
                const portfolio = document.querySelector('.portfolio')
                portfolio.style.left = "0"
            }
        }
    }

    return (
        <div className={style.projects} id='projects'>
            <div>
                <img className={style.projectTitle} src='/Projects.svg' />
            </div>
            <div className={style.projectLinks}>
                <h6>You can see here some of my projects.<br /> Click on one to see more info</h6>
                <div className={style.project} onClick={() => handleClick('3')}>
                    <FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} />
                    <p>Les Trois Mats</p>
                </div>
                <div className={style.project} onClick={() => handleClick('help')}>
                    <FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} />
                    <p>Helper</p>
                </div>
                <div className={style.project} onClick={() => handleClick('portfolio')}>
                    <FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} />
                    <p>Portfolio</p>
                </div>
            </div>
            <ProjectsDestop />
        </div>
    )
}