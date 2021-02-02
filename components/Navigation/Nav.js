import Link from 'next/link';
import Burger from './Burger';

const Nav = () => {
  return (
    <nav className='navigation'>
      <div className='logo-box'>
        <Link href='/'>
          <a className='logo'>Topaz</a>
        </Link>
      </div>
      
      <Burger />
    </nav>
  )
}

export default Nav;