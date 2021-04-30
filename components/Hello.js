import { useEffect, useState } from "react"
import SvgHome from "./SvgHome"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas)

export default function Hello() {
    const [translate, setTranslate] = useState('0')

    const rightAnimation = () => {
        const opacity = document.querySelector('.hello-info')
        if (window.scrollY >= '54') {
            const div = document.querySelector('.leftBack')
            div.classList.add('moveBack')
            const h1 = document.querySelector('#hello')
            h1.classList.add('moveH1')
            opacity.style.opacity = "1"
        } else if (window.scrollY < '54') {
            const div = document.querySelector('.leftBack')
            div.classList.remove('moveBack')
            const h1 = document.querySelector('#hello')
            h1.classList.remove('moveH1')
            opacity.style.opacity = "0"
        }
    }


    const translateHome = () => {
        const beginTranslateHeight = window.innerHeight / 2
        const hello = document.querySelector('.hello')
        if (window.innerWidth < '540') {
            const h3 = document.querySelector('.menu-h3')
            if (window.scrollY > (window.innerHeight + beginTranslateHeight)) {
                h3.style.opacity = "0"
                hello.style.display = "none"
            } else if (beginTranslateHeight <= window.scrollY) {
                h3.style.opacity = "0"
                hello.style.display = "flex"
            } else if (beginTranslateHeight > window.scrollY) {
                h3.style.opacity = "1"
                hello.style.display = "flex"
            }
        } else {
            if (window.scrollY > (window.innerHeight + beginTranslateHeight)) {
                hello.style.display = "none"
            } else if (beginTranslateHeight <= window.scrollY) {
                hello.style.display = "flex"
                setTranslate((window.scrollY - beginTranslateHeight) * 100 / window.innerHeight )
            } else if (beginTranslateHeight > window.scrollY) {
                hello.style.display = "flex"
                setTranslate('0')
            }
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', rightAnimation)
        window.addEventListener('scroll', translateHome)
    }, [])

    
    return (
        <div style={{ transform: `translateY(-${translate}%)`}} className='hello' id='home'>
            <h1 id='hello'><SvgHome /></h1>
            <div className='leftBack' />
            <div className='hello-info'>
                <h1>I&apos;m Philippe</h1>
                <h1>Web Developer based in Montreal</h1>
            </div>
            <div className='arrow'>
                <p>Scroll</p>
                <FontAwesomeIcon icon={['fas', 'long-arrow-alt-down']} />
            </div>
        </div>
    )
}