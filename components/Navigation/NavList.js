import Link from 'next/link';

const NavList = (props) => {
  const { open, closeNavOnLinkClick } = props;
  
    return (
      <ul 
      className={`nav-list ${open ? 'nav-list--open' : 'nav-list--close'}`}
      onClick={closeNavOnLinkClick}
      >
        <li className='nav-list__item'><Link href='/#'><a className='nav-list__link' id='link'>Home</a></Link></li>
        <li className='nav-list__item'><Link href='/#'><a className='nav-list__link' id='link'>About</a></Link></li>
        <li className='nav-list__item'><Link href='/#'><a className='nav-list__link' id='link'>Services</a></Link></li>
        <li className='nav-list__item'><Link href='/#'><a className='nav-list__link' id='link'>Works</a></Link></li>
        <li className='nav-list__item'><Link href='/#'><a className='nav-list__link' id='link'>Contact</a></Link></li>
      </ul>
    )
}

export default NavList;