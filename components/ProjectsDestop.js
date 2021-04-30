import Project from './Project'

export default function ProjectsDestop() {

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

    return (
        <>
            <Project 
                class='les-trois'  
                url='lestroismats'  
                title='Les Trois Mats' 
                subtitle='The appartment for your holidays!'
                parag={lesTroisPar}
                link='www.les-trois-mats.com'
            />
            <Project 
                class='helper'  
                url='helper'  
                title='Helper' 
                subtitle='Planning renovation has never been so easy!'
                parag={helperPar}
                link='helper.solutions'
            />
            <Project 
                class='portfolio'  
                url='portfolio'  
                title='My Portfolio' 
                parag={portfolioPar}
                link='www.philippegonse.com'
            />
        </>
    )
}