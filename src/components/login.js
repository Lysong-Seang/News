import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {auth} from '../firebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useHistory } from 'react-router-dom'; // Import useHistory
import { Link } from 'react-router-dom';
import SharedForm from './ShareForm';


const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory(); // Create an instance of useHistory

  const handleSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredentail) => {
      console.log(userCredentail);
      history.push('/')
    }).catch((error)=> {
      console.log(error)
    })
   
  };
  const additionalContent = (
    <>
      <p className="small mb-5 pb-lg-2"><a className="text-muted" href="#!">Forgot password?</a></p>
      <p>Don't have an account? <Link to="/signUp">Register here</Link></p>
    </>
  );

  return (
    <SharedForm
      title="Sign into your account"
      buttonText="Login"
      onFormSubmit={handleSubmit}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      additionalContent={additionalContent}
    />
  );
};


export default Login;
