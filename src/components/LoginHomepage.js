import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import '../NewsBrowsing.css'

const LoginHomepage = () => {
    return ( 
        <div className="login-homepage-container">
            <Link className="navbar-brand" to="/lastest">
            <button className="latest-btn btn-2">Lastest News</button>
            </Link>
            
            <Link className="navbar-brand" to="/tesla">
            <button className="latest-btn btn-2">Tesla </button>
            </Link>
            <Link className="navbar-brand" to="/tesla">
            <button className="latest-btn btn-2">Sports </button>
            </Link>
           
            <button className="latest-btn btn-4">Economy</button>
            <button className="latest-btn btn-5">Wellness</button>
        </div>
    );
}

export default LoginHomepage;
