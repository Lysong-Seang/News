import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Signout from './components/Signout';
import Homepage from './components/Homepage';
import Contact from './components/Contact';
import About from './components/About';
import Login from './components/login';
import NewsComponent from './Lastest/LastestNews';
import { auth } from './firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import LastestNews from './Lastest/LastestNews';
import TeslaNews from './TeslaNews/TeslaNews';
import Sports from './Apple/AppleNews';
import AppleNews from './Apple/AppleNews';

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
