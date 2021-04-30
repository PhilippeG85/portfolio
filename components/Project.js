import style from '../styles/Project.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas)

export default function Project(props) {
    const handleClick = () => {
        document.body.style.overflow = ""
        if (window.innerWidth < '540') {
            const selectClass = document.querySelector(`.${props.class}-mobile`)
            selectClass.style.left = "100%"
        } else {
            const selectClass = document.querySelector(`.${props.class}`)
            selectClass.style.left = "100%"
        }
    }

    return (
        <>
            <div className={`project ${props.class}`} style={{ backgroundImage: `url('/${props.url}.png')` }}>
                <div className={style.leftArrow} onClick={handleClick} >
                    <FontAwesomeIcon icon={['fas', 'long-arrow-alt-left']} />
                    <p>Back</p>
                </div>
                <div className={style.projectContent}>
                    <h1>{props.title}</h1>
                    <h3>{props.subtitle}</h3>
                    {props.parag}
                    <div style={{ position: "relative", width: "138px", height: "2rem", margin: "0 auto" }}>
                        <a href={props.link} target="_blank" rel="noreferrer">
                            <p>Link to the website</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className={`project-mobile ${props.class}-mobile`}>
                <div className={style.leftArrow} onClick={handleClick} >
                    <FontAwesomeIcon icon={['fas', 'long-arrow-alt-left']} />
                    <p>Back</p>
                </div>
                <div className={style.mobileImg}>
                    <img src={`/${props.url}-mobile.png`} />
                </div>
                <div className={style.projectContentMobile}>
                    <h1>{props.title}</h1>
                    <h3>{props.subtitle}</h3>
                    {props.parag}
                    <div style={{ position: "relative", width: "106px", height: "2rem", margin: "0 auto" }}>
                        <a href={props.link} target="_blank" rel="noreferrer">
                            <p>Link to the website</p>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}