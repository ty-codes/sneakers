import cart_icon from '../../images/icon-cart.svg';
import avatar from '../../images/image-avatar.png';
import './Navbar.css';

const Navbar = ({corn}) => {
    return (
        <>
            <nav id="navbar">

                <ul className="nav-links">
                    <li>
                        <h1 className="sneakers">sneakers</h1>
                    </li>
                    <li><a className="nav-link" href="#">Collections</a></li>
                    <li><a className="nav-link" href="#">Men</a></li>
                    <li><a className="nav-link" href="#">Women</a></li>
                    <li><a className="nav-link" href="#">About</a></li>
                    <li><a className="nav-link" href="#">Contact</a></li>

                </ul>

                <ul className="right_nav">

                    <span className="cart_icon_wrap"><img className="cart"  src={cart_icon} alt="cart_icon" /><span id="badge">{corn}</span></span>
                    <span><img className="avatar" src={avatar} alt="avatar" /></span>
                </ul>

            </nav>
        </>
    )
}

export default Navbar;