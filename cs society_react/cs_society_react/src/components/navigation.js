import React from 'react';
export function navigation(){
    return (
        <div classname="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <nav>
    <div classname="container">
      <a classname="navbar-brand js-scroll-trigger" href="#page-top">Garnet Society</a>
      <button classname="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i classname="fas fa-bars"></i>
        </button>
      <div classname="collapse navbar-collapse" id="navbarResponsive">
        <ul classname="navbar-nav ml-auto">
          <li classname="nav-item">
            <a classname="nav-link js-scroll-trigger" href="#about">About</a>
          </li>
          <li classname="nav-item">
            <a classname="nav-link js-scroll-trigger" href="#projects">Our Work</a>
          </li>
          <li classname="nav-item">
            <a classname="nav-link js-scroll-trigger" href="#signup">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

        </div>
      );
}
