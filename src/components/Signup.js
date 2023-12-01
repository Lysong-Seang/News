import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {auth} from '../firebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useHistory } from 'react-router-dom'; // Import useHistory
import { Link } from 'react-router-dom';
import SharedForm from './ShareForm';



const Signup = (prob) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const history = useHistory(); // Create an instance of useHistory

  const handleSubmit = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredentail) => {
      console.log(userCredentail);
      history.push('/')
    }).catch((error)=> {
      console.log(error)
    })

   
  };

  const additionalContent = (
    <>
      <div className="form-outline mb-4">
        <input type="password" className="form-control form-control-lg" placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      </div>
      <p>Already have an account? <Link to="/login" className="link-info">Login</Link></p>
    </>
  );

  return (
    <SharedForm
      title="Sign Up"
      buttonText="Sign up"
      onFormSubmit={handleSubmit}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      additionalContent={additionalContent}
    />
  );
};

 
  

  

export default Signup;
