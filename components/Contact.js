import Form from './Form'
import style from '../styles/Contact.module.scss'

function Contact() {
    return (
      <div className={style.contactPage} id='contact'>
        <div className={style.rightContent}>
          <img src='/Contact.svg' className={style.styleFormLeft} style={{ marginBottom: "40px" }} />
          <p className={style.styleFormLeft} style={{ margin: "18px auto" }}>
            Interested for freelance opportunies. I will be pleased to hear about your
            projects. Don&apos;t hesitate to contact me if you have questions or request aswell.
          </p>
        </div>
        <div className={style.formLeft}>
          <Form />
        </div>
      </div>
    );
  }
  
  export default Contact;