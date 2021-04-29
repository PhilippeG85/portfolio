import style from '../styles/Form.module.scss'

function Form() {
    return (
      <div>
        <iframe title="hidden_iframe" name="hidden_iframe" id="hidden_iframe" style={{ display: "none" }} />
        <form
          action="https://docs.google.com/forms/d/e/1FAIpQLSdzMG6QMX9tU73rX7_2FavBw9A9eOs-V1LGUOT2wZPFhFWdtw/formResponse"
          method="post"
          target="hidden_iframe"
          className={style.form}
        >
          <div className={style.formName}>
            <input className={style.nameInput} name="entry.576915509" type="text" title="name" placeholder="Name" />
            <input className={style.emailInput} name="entry.1190585177" type="text" title="email" placeholder="Email" />
          </div>
          <input className={style.formSubject} name="entry.1097150983" type="text" title="sujet" placeholder="Subject" />
          <textarea className={style.formMsg} name="entry.197993009" title="message" placeholder="Message" />
          <input className={style.formBtn} type="submit" value="Send" />
        </form>
      </div>
    );
  }
  
  export default Form;