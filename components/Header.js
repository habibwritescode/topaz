import Button from "./Button";
import Image from 'next/image';

const Header = () => {
  return (
    <header className='header'>
      <div className='header__text-box'>
        <h1 className='heading-primary'>Live beautifully and comfortably</h1>
        <p className='header__paragraph'>We design beautiful interiors that are very comfortable</p>
        <Button name={'Our projects'}/>
      </div>

      <div className='header__gallery'>
        {/* <Image className='header__image' src="/images/inside-weather.png" width={249.74} height={663} /> */}
        {/* <Image className='header__image' src="/images/minh-pham.png" width={250.87} height={584} alt=""/> */}
        {/* <Image className='header__image' src="/images/minh-pham2.png" width={249.74} height={490} alt=""/> */}
        <img src="/images/inside-weather.png" className='header__image' alt=""/>
        <img src="/images/minh-pham.png" className='header__image' alt=""/>
        <img src="/images/minh-pham2.png" className='header__image' alt=""/>
      </div>
    </header>
  )
}

export default Header;
