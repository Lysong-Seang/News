import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import '../NewsBrowsing.css'

const LoginHomepage = () => {
    return ( 
        <div className="login-homepage-container">
            <Link className="navbar-brand" to="/lastest">
            <button className="latest-btn btn-2">Lastest News</button>
            </Link>
            <button className="latest-btn btn-2">World</button>
            <button className="latest-btn btn-3">Sports</button>
            <button className="latest-btn btn-4">Economy</button>
            <button className="latest-btn btn-5">Wellness</button>
        </div>
    );
}

export default LoginHomepage;
