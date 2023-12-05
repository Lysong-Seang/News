import React from 'react';

import logo from '../assets/img/newsLogo.png'


const SharedForm = ({ title, buttonText, onFormSubmit, additionalContent, email, setEmail, password, setPassword }) => {
  return (
    <div className='signIn-container'>
      <section className="vh-100" style={{ backgroundColor: '#d3d3d3' }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: '1rem' }}>
                <div className="row g-0">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form onSubmit={onFormSubmit} className='signIn'>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i className="fas fa-cubes fa-2x me-3" style={{ color: '#ff6219' }}></i>
                        <img 
                src={logo} 
                alt="logo" 
                style={{
                    maxWidth: '50px', // This will ensure that the image is not wider than 500px
                    height: 'auto', // This maintains the aspect ratio
                    flexShrink: 1, // Prevents the image from shrinking
                }}
            />
                      </div>

                      <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>{title}</h5>

                      <div className="form-outline mb-4">
                        <input type="email" className="form-control form-control-lg" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
                      </div>

                      <div className="form-outline mb-4">
                        <input type="password" className="form-control form-control-lg" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                      </div>

                      {additionalContent}

                      <div className="pt-1 mb-4">
                        <button className="btn btn-dark btn-lg btn-block" type="submit">{buttonText}</button>
                      </div>
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

export default SharedForm;
