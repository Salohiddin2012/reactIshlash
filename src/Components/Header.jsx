import { use } from 'react';
import logo from '../assets/frame.png';
import { useNavigate } from 'react-router';

function Header() {
    const navigate = useNavigate();
    return (
    <div>
        <header>
            <div className="container mx-auto px-4">
                <img src={logo} alt="" />
                <nav>
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Contact</a>
                </nav>
            </div>
        </header>
    </div>
    );
}

export default Header;