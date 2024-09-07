import './Nav.css'
import { Link } from 'react-router-dom';

const Nav = () => {


    return(
        <div className='nav'>
            <Link to="/" className="navbar-brand">
                <img src="path/to/your/logo.png" alt="LIMIKO" className="logo-image"/>
            </Link>
            
            <ul className="naм">

                <li className="nav-item">
                <Link to="/for-him" className="nav-link">
                    Леггинсы
                </Link>
                </li>

                <li className="nav-item">
                <Link to="/for-her" className="nav-link">
                    Юбка-Шорты
                </Link>
                </li>

                <li className="nav-item">
                <Link to="/for-child" className="nav-link">
                    Рашгард
                </Link>
                </li>

                <li className="nav-item">
                <Link to="/about" className="nav-link">
                    О нас
                </Link>
                </li>

                <div className="icon">

                    <li className="nav-icon">
                    <Link to="/cart" className="nav-link">
                        <i class="fa-regular fa-cart-shopping"></i>
                    </Link>
                    </li>

                    <li className="nav-icon">
                    <Link to="/favorites" className="nav-link">
                        <i class="fa-regular fa-heart"></i>
                    </Link>
                    </li>

                </div>
                
                
            </ul>
        </div>
    )
}

export default Nav;