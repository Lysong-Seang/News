import React from 'react';
import myImage from '../assets/img/about-bg.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';


const About = () => {
    return (
        <div className='about-container'>
            <div

                className="about-image d-flex flex-column align-items-center justify-content-center text-center bg-dark text-white"
                style={{
                    height: '400px',
                    backgroundImage: `url(${myImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <h1>About me</h1>
                <h4>What I do? Who I am?</h4>
            </div>
            
            <div class="container px-4 px-lg-5" style={{marginTop :'20px'}}>
                <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-7">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
                    nostrum ullam eveniet pariatur voluptates odit, fuga atque ea
                    nobis sit soluta odio, adipisci quas excepturi maxime quae totam
                    ducimus consectetur?
                    </p>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                    praesentium recusandae illo eaque architecto error, repellendus
                    iusto reprehenderit, doloribus, minus sunt. Numquam at quae
                    voluptatum in officia voluptas voluptatibus, minus!
                    </p>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                    consequuntur magnam, excepturi aliquid ex itaque esse est vero
                    natus quae optio aperiam soluta voluptatibus corporis atque iste
                    neque sit tempora!
                    </p>
                </div>
                </div>
            </div>

        </div>
        
    );
};

export default About;
