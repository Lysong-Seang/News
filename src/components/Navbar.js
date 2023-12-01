import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import logo from '../assets/img/newsLogo.png'

const navItems = [
    { name: 'Home', path: '/home' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
];

const authItems = [
    { name: 'Login', path:'/login'},
    { name: 'Sign Up', path:'/signUp'}
];

const Navbar = () => {
    const navLinkClasses = "nav-link px-lg-3 py-3 py-lg-4";
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleSignout = () => {
        setIsAuthenticated(false);
    }

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsAuthenticated(true);
            } else {
                setIsAuthenticated(false);
            }
        });
        return () => listen(); // Unsubscribe on unmount
    }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid d-flex justify-content-between"> {/* Updated for full width and inline display */}
                <Link className="navbar-brand" to="/home">
                <img 
                src={logo} 
                alt="logo" 
                style={{
                    maxWidth: '50px', // This will ensure that the image is not wider than 500px
                    height: 'auto', // This maintains the aspect ratio
                    flexShrink: 1, // Prevents the image from shrinking
                }}
            />
                </Link>
                <button className="navbar-toggler" type="button" 
                        data-bs-toggle="collapse" data-bs-target="#navbarResponsive" 
                        aria-controls="navbarResponsive" aria-expanded="false" 
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav me-auto py-4 py-lg-0">
                        {navItems.map(item => (
                            <li className="nav-item" key={item.name}>
                                <Link className={navLinkClasses} to={item.path}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                    <ul className='navbar-nav'>
                        {isAuthenticated ? (
                            <li className='nav-item'>
                                <Link className={navLinkClasses} to="/logout" onClick={handleSignout}>Sign out</Link>
                            </li>
                        ) : (
                            authItems.map(item => (
                                <li className='nav-item' key={item.name}>
                                    <Link className={navLinkClasses} to={item.path}>{item.name}</Link>
                                </li>
                            ))
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
