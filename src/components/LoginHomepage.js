import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import '../css/NewsBrowsing.css'

const LoginHomepage = () => {
    return ( 
        <div className="login-homepage-container">
            <Link className="navbar-brand" to="/lastest">
            <button className="latest-btn btn-1">Lastest News</button>
            </Link>

            <Link className="navbar-brand" to="/wallstreet">
            <button className="latest-btn btn-2">WallStreet </button>
            </Link>
            
            <Link className="navbar-brand" to="/tesla">
            <button className="latest-btn btn-3">Tesla </button>
            </Link>
            <Link className="navbar-brand" to="/apple">
            <button className="latest-btn btn-4">Apple </button>
            </Link>
           
          
        </div>
    );
}

export default LoginHomepage;
