import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Signout from './components/Signout';
import Homepage from './components/Homepage';
import Contact from './components/Contact';
import About from './components/About';

import { auth } from './firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import Login from './components/login';
import NewsComponent from './api/newsApi';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });

    // Clean up the subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          {isAuthenticated ? <NewsComponent /> : <Homepage />}
        </Route>
        <Route path="/home">
          <Homepage />
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
        {/* Define other routes here */}
        <Redirect to="/" /> {/* Redirects to Homepage if no routes match */}
      </Switch>
    </Router>
  );
}

export default App;
