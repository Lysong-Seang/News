import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import Signup from './Navbars/Signup';
import Signout from './Navbars/Signout';
import Homepage from './Navbars/Homepage';
import Contact from './Navbars/Contact';
import About from './Navbars/About';
import Login from './Navbars/login';
import NewsComponent from './News/LastestNews';
import { auth } from './firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import LastestNews from './News/LastestNews';
import TeslaNews from './News/TeslaNews';
import Sports from './News/AppleNews';
import AppleNews from './News/AppleNews';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          {isAuthenticated ?  <LastestNews/> : <Homepage />}
        </Route>
        <Route path="/home">
          {isAuthenticated ? <LastestNews /> : <Redirect to="/" />}
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signUp">
          <Signup />
        
        </Route>
        <Route path="/logout">
          <Signout />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/lastest'>
          <LastestNews />
        </Route>
        <Route path= '/tesla'>
          { isAuthenticated ? <TeslaNews/ > : <Homepage/>}
        </Route>
        <Route path= '/sports'>
          { isAuthenticated ? <AppleNews/ > : <Homepage/>}
        </Route>
        <Redirect to="/" /> {/* Redirects to Homepage if no routes match */}
      </Switch>
    </Router>
  );
}

export default App;
