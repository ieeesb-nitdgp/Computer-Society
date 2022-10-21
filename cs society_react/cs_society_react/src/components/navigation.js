import React from 'react';
 function navigation(){
    return (
        <div className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <nav>
    <div className="container">
      <a className="navbar-brand js-scroll-trigger" href="#page-top">Garnet Society</a>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i className="fas fa-bars"></i>
        </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#projects">Our Work</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#signup">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

        </div>
      );
}
export default navigation;
