const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer__logo-box">
        <span className='footer__logo heading-tertiary'>Topaz</span>
        <span className='footer__copyright'>All rights reserved</span>
      </div>

      <div className="footer__links-box">
        <span className='footer__head'>Useful links</span>
        <span className='footer__link'>Portfolio</span>
        <span className='footer__link'>Our services</span>
        <span className='footer__link'>About</span>
      </div>

      <div className="footer__contact-box">
        <span className="footer__head">Contact</span>
        <span className="footer__contact">081444 666 78</span>
        <span className="footer__contact">Hello@topazinteriors.com</span>
        <span className="footer__contact"></span>
        <span className="footer__contact">Plot 555, lome street</span>
      </div>
    
      <div className="footer__social-box">
        <span className="footer__head">Follow us</span>
        <div className='footer__icons-box'>
          <div className='footer__icon-box'>
            <img src="icons/facebook.svg" alt="" className="footer__icon"/>
          </div>
          <div className='footer__icon-box'>
            <img src="icons/instagram.svg" alt="" className="footer__icon"/>
          </div>
          <div className='footer__icon-box'>
            <img src="icons/twitter.svg" alt="" className="footer__icon"/>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
