import { useEffect, useState } from "react"

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

    let style = { transform: "translateY(0%)" }

    const translateHome = () => {
        const beginTranslateHeight = window.innerHeight / 2
        const hello = document.querySelector('.hello')
        if (window.scrollY > (window.innerHeight + beginTranslateHeight)) {
            hello.style.display = "none"
        }else if (beginTranslateHeight <= window.scrollY) {
            hello.style.display = "flex"
            setTranslate((window.scrollY - beginTranslateHeight) * 100 / window.innerHeight )
        } else if (beginTranslateHeight > window.scrollY) {
            hello.style.display = "flex"
            setTranslate('0')
        } 
    }

    useEffect(() => {
        window.addEventListener('scroll', rightAnimation)
        window.addEventListener('scroll', translateHome)
    }, [])

    
    return (
        <div style={{ transform: `translateY(-${translate}%)`}} className='hello'>
            <h1 id='hello'><img src='/Hello.svg' /></h1>
            <div className='leftBack' />
            <div className='hello-info'>
                <h1>I&apos;m Philippe</h1>
                <h1>Web Developer based in Montreal</h1>
            </div>
        </div>
    )
}