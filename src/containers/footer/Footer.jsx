import React from 'react';
import './footer.css';


const Footer = () => (

<footer>
  <div className="container pt-5 border-bottom">
    <div className="row">
      <div className="col-md-3 col-sm-12 mb-3 text-center pt-5">
        <img src="https://ieeecs-media.computer.org/wp-media/2018/04/02183615/IEEE-CS_LogoTM-orange-300x103.png" style={{width: "200px"}}/>

      </div>
      <div className="col-md-9 col-sm-12 p-5 pl-10">
      <div className="row">
        <div className="col-md-4 col-sm-6 col-6 ps-2 mb-3">
          <h5 className="mb-4 font-weight-bold text-uppercase text-decoration-underline">Menu</h5>
        <ul className="list-group">
          <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a href="">Home</a></li>
          <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a href="">About</a></li>
          <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a href="">Events</a></li>
          <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a href="">Team</a></li>
          <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a href="">Contact</a></li>
         
        </ul>
        </div>

        <div className="col-md-4 col-sm-6 col-6 mb-3 p-0 ">
          <h5 className="mb-4 font-weight-bold text-uppercase text-decoration-underline text-right">Connect</h5>
        <ul className="list-group">
          <li className="list-group-item bg-transparent border-0 p-0 mb-2">
            <a href="https://in.linkedin.com/company/ieeesbnitdgp">LinkedIn</a>
          </li>
          <li className="list-group-item bg-transparent border-0 p-0 mb-2">
            <a href="https://www.facebook.com/nitdgpieeesociety/">Facebook</a>
          </li>
          <li className="list-group-item bg-transparent border-0 p-0 mb-2">
            <a href="https://twitter.com/ieeesbnitd">Twitter</a>       
          </li>
        
        </ul>
        </div>
        <div className="col-md-4 col-sm-12 col-6 mb-3 p-0  text-right">
          
                  <p> We here at, IEEECS Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error quam, ipsam fugiat id architecto quis aut reiciendis dolorem optio natus illo ex, dolorum eos esse, voluptate maxime molestias quisquam hic?</p>
        </div>

      </div>
      </div>
        <div className="col-md-12">
          <div className="py-4 d-flex justify-content-center align-items-center">
            
            <div className="cs__footer-copyright">
      <p className='text-center'>@2022 IEEE Computer Society. All rights reserved.</p>
    </div>
    </div>
          </div>
        </div>
    
  </div>
</footer>
);

export default Footer;