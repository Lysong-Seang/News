import { useEffect, useState } from 'react';
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useHistory } from 'react-router-dom';

const Signout = () => {
    const history = useHistory();
    const [message, setMessage] = useState('Signing out...');

    useEffect(() => {
        signOut(auth).then(() => {
            setMessage("You have successfully logged out.");
            // Delay the redirection for a short time period
            setTimeout(() => {
                history.push("/home");
            }, 3000); // 3 seconds delay
        }).catch(error => {
            console.log(error);
            setMessage("Error during sign out. Please try again.");
            // Redirect or handle error after a delay
            setTimeout(() => {
                history.push("/login");
            }, 3000);
        });
    }, [history]);

    return (
        <div className="Signout-container">
            <h2>{message}</h2>
        </div>
    );
};

export default Signout;
