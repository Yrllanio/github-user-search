import { Link } from 'react-router-dom';
import './styles.scss';

const Navbar = () => (
    <nav className="main-nav">
        <div className="nav-logo-text">
            <Link to="/" className="nav-logo-link">
                <h4>
                    Bootcamp DevSuperior
                </h4>
            </Link>
        </div>
    </nav>
);


export default Navbar;