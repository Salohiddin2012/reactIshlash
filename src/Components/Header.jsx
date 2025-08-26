import { use } from 'react';
import logo from '../assets/frame.png';
import { NavLink, useNavigate } from 'react-router';
import { FaHeart, FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';

function Header() {
  
    return (
    <div>
        <header>
            <div className="container mx-auto px-4 flex items-center justify-between h-20">
                <img src={logo} alt="" />
                <nav className='flex gap-10'>
                    <NavLink to={'/'} >Home</NavLink>
                    <NavLink to={'/shop'} >Shop</NavLink> 
                    <NavLink to={'/about'} >About</NavLink>
                    <NavLink to={'/contact'} >Contact</NavLink>
                </nav>
                <div className="flex gap-6 items-center">
                        <FaUser size={24} />
                        <FaSearch size={24} />
                        <FaHeart size={24} />
                        <FaShoppingCart size={24} />
                    </div>
            </div>
        </header>
    </div>
    );
}

export default Header;