import style from '../styles/AboutMe.module.scss'

export default function AboutMe() {
    const handleClick = () => {
        window.scrollTo({top: 1970, left: 0, behavior: "smooth"})
    }
    return (
        <div className={style.aboutMe} id='about'>
            <img src='/parapluie.png' className={style.img} />
            <div className={style.aboutInfo}>
                <h3 style={{ textAlign: "center", color: "#4c4a57" }}>About Me</h3>
                <p>
                    I am Philippe, Web Developer located in Montreal. I enjoy to design good UI, animation and creative layouts.
                    <br />
                    <br />
                    Always passionate about tech world, I discover coding in 2020 and learned a lot at Le Wagon bootcamp. Since, I'm keeping the momentum and keep learning on a daily basis.
                    <br />
                    I am a well organised person, problem solver, and independent employee with good attention to details.
                    <br />
                    <br />
                    More oriented in Front-end, I have experience in full-stack development as well. Don't hesitate to reach me, I will be pleased to hear about your project.
                </p>
                <div style={{ position: "relative", width: "88px", margin: "0 auto" }}>
                    <a onClick={handleClick} className={style.contactMeBtn}>
                        <span>Contact-me</span>
                    </a>
                </div>
            </div>
        </div>
    )
}