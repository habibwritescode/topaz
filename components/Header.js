import Button from "./Button";

const Header = () => {
  return (
    <header className='header'>
      <div className='header__text-box'>
        <h1 className='heading-primary'>Live beautifully and comfortably</h1>
        <p className='header__paragraph paragraph'>We design beautiful interiors that are very comfortable</p>
        <Button classN='header__button' name={'Our projects'}/>
      </div>

      <div className='header__gallery'>
        <div className='header__image-box header__image-box--1'>
          <img src="/images/inside-weather.png" className='header__image header__image--1' alt=""/>
        </div>
        <div className='header__image-box header__image-box--2'>
          <img src="/images/minh-pham.png" className='header__image header__image--2' alt=""/>
        </div>
        <div className='header__image-box header__image-box--3'>
          <img src="/images/minh-pham2.png" className='header__image header__image--3' alt=""/>
        </div>        
      </div>
    </header>
  )
}

export default Header;
