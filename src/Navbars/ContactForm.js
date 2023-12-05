import React from 'react';
import { useState } from 'react';

const ContactForm = ({ onSubmit }) => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, name, message });
  };
  return (
    <div className='signIn-container'>
    <section className="vh-100" style={{ backgroundColor: '#d3d3d3' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: '1rem' }}>
              <div className="row g-0">
                <div className="card-body p-4 p-lg-5 text-black">
                <form  onSubmit= {handleSubmit}className='Contact-form'>
                        <div className="d-flex align-items-center mb-3 pb-1">
                        <i className="fas fa-cubes fa-2x me-3" style={{ color: '#ff6219' }}></i>
                        <span className="h1 fw-bold mb-0">Logo</span>
                        </div>

                        <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Contact Us and Feedback</h5>

                        <div className="form-outline mb-4">
                        <input type="email" id="form2Example17" className="form-control form-control-lg"  placeholder='Enter your email'
                        value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>

                        <div className="form-outline mb-4">
                        <input type="name" id="form2Example27" className="form-control form-control-lg" placeholder='Your Full Name' 
                        value={name} onChange={(e) => setName(e.target.value)}/>
                        </div>

                        <div class="form-group">
                        <label for="exampleFormControlTextarea1">Message OR Feedback</label >
                        <textarea class="form-control" id="exampleFormControlTextarea1" value ={message} onChange={(e)=> setMessage(e.target.value)} rows="3"></textarea>
                    </div>

                        <div className="pt-1 mb-4">
                        <button className="btn btn-dark btn-lg btn-block" type="submit">Submit</button>
                        </div>


                        {/* Other links */}
                    </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);
};


  


export default ContactForm;