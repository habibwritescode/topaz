import React, { useState } from 'react';
import NavList from './NavList';

const Burger = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className='burger-container'>
            <div className='burger' onClick={() => setOpen(!open)}>
                <div className={`bar ${open ? 'bar-open bar-open--color' : 'bar-close bar-close--color'}`} />
                <div className={`bar ${open ? 'bar-open bar-open--color' : 'bar-close bar-close--color'}`} />
                <div className={`bar ${open ? 'bar-open bar-open--color' : 'bar-close bar-close--color'}`} />
            </div>
            <NavList closeNavOnLinkClick={(e) => e.target.id === 'link' && setOpen(!open)} open={open} />
        </div>
    )
}

export default Burger;