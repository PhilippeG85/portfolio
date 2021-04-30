import Project from './Project'
import style from '../styles/Projects.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas)

export default function Projects() {

    const lesTroisPar = (
        <p>
            This website was design and made in one week.
            <br />
            I used the React framework to build all the pages, google maps api to display the maps and emailjs for the contact form.
            <br />
            It is deployed using Netlify.
        </p>
    )

    const portfolioPar = (
        <p>
            I used React to build this Portfolio.
            <br />
            Each project is displayed with a reusable component.
            <br />
            It is deployed with Firebase.
        </p>
    )

    const helperPar = (
        <p>
            Website built with 3 college in 2 week for our final project of le Wagon bootcamp.
            <br />
            Made with ruby on rails and deploy with Heroku
        </p>
    )

    const handleClick = (site) => {
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
            <Project 
                class='les-trois'  
                url='lestroismats.png'  
                title='Les Trois Mats' 
                subtitle='The appartment for your holidays!'
                parag={lesTroisPar}
                link='www.les-trois-mats.com'
            />
            <Project 
                class='helper'  
                url='helper.png'  
                title='Helper' 
                subtitle='Planning renovation has never been so easy!'
                parag={helperPar}
                link='helper.solutions'
            />
            <Project 
                class='portfolio'  
                url='portfolio.png'  
                title='My Portfolio' 
                parag={portfolioPar}
                link='www.philippegonse.com'
            />
        </div>
    )
}