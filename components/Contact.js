import Button from "./Button"
import Heading from "./Heading"

const Contact = () => {
  return (
    <section className='section-contact' id='contact'>
      <div className='section-contact__map-box'>
        <img className='map' src="/images/map.png" alt=""/>
      </div>

      <div className='section-contact__form-box'>
        <Heading main={'Contact us'} sub={'Get in Touch'} />

        <form action="" className='form'>
          <input className='form__input' type="text" placeholder='Name' />
          <input className='form__input' type="email" placeholder='Email' />
          <textarea className='form__input form__textarea' name="" id="" placeholder='Message' cols="30" rows="6"></textarea>
          <Button classN='form__button' name={'Send Message'} href='#' />
        </form>  
      </div>      
    </section>
  )
}

export default Contact;
