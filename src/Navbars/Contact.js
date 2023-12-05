import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {auth, db} from '../firebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useHistory } from 'react-router-dom'; // Import useHistory
import { getFirestore, collection, addDoc, query, where, getDocs, doc, updateDoc } from 'firebase/firestore';
import ContactForm from './ContactForm';
import { arrayUnion } from 'firebase/firestore';

const Contact = () => {

  const [isSubmitted, setIsSubmitted ] = useState(false);
  const history = useHistory(); 

  const handleFormSubmit = async ({ email, name, message }) => {
    const contactsCollectionRef = collection(db, "contacts");
    const q = query(contactsCollectionRef, where("email", "==", email));
  
    try {
      const querySnapshot = await getDocs(q);
      let docRef;
  
      if (!querySnapshot.empty) {
        // If the document exists, retrieve the document reference
        const docSnapshot = querySnapshot.docs[0];
        docRef = doc(db, "contacts", docSnapshot.id);
        
        // Push the new message into the existing array of messages
        await updateDoc(docRef, {
          messages: arrayUnion(message) // Use arrayUnion to add a message to the "messages" array
        });
      } else {
        // If the document doesn't exist, create a new one with a messages array
        docRef = await addDoc(contactsCollectionRef, {
          email: email,
          name: name,
          messages: [message] // Start with the initial message in an array
        });
      }
  
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };
  
  
  


  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        history.push('/home');
      }, 2000);

      return () => clearTimeout(timer); // Cleanup the timeout on component unmount
    }
  }, [isSubmitted, history]);

  // Conditional rendering for the thank you message
  if (isSubmitted) {
    return (
      <div className="alert alert-success" role="alert">
        <h2>Thank you for your Contacting Us, We will look into that !</h2>
      </div>
    );
  }


 
  return (
    <ContactForm onSubmit={handleFormSubmit} />
  );
};


export default Contact;
