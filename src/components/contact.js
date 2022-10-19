import React from 'react';
function contact(){
<section classname="contact-section bg-black">
    <div classname="container">

      <div classname="row">

        <div classname="col-md-4 mb-3 mb-md-0">
          <div classname="card py-4 h-100">
            <div classname="card-body text-center">
              <i classname="fas fa-map-marked-alt text-primary mb-2"></i>
              <h4 classname="text-uppercase m-0">Address</h4>
              <hr classname="my-4"/>
              <div classname="small text-black-50">807 Union Street, Schenectady NY 12308</div>
            </div>
          </div>
        </div>

        <div classname="col-md-4 mb-3 mb-md-0">
          <div classname="card py-4 h-100">
            <div classname="card-body text-center">
              <i classname="fas fa-envelope text-primary mb-2"></i>
              <h4 classname="text-uppercase m-0">Email</h4>
              <hr classname="my-4"/>
              <div classname="small text-black-50">
                <a href="#">email@union.edu</a>
              </div>
            </div>
          </div>
        </div>

        <div classname="col-md-4 mb-3 mb-md-0">
          <div classname="card py-4 h-100">
            <div classname="card-body text-center">
              <i classname="fas fa-mobile-alt text-primary mb-2"></i>
              <h4 classname="text-uppercase m-0">Phone</h4>
              <hr classname="my-4"/>
              <div classname="small text-black-50">+1 (518) 388-6000</div>
            </div>
          </div>
        </div>
      </div>

      <div classname="social d-flex justify-content-center">
        <a href="https://www.instagram.com/uniongarnetsociety/" classname="mx-2">
            <i classname="fab fa-instagram"></i>
          </a>
        <a href="https://www.facebook.com/unioncollege/" classname="mx-2">
            <i classname="fab fa-facebook-f"></i>
          </a>
        <a href="https://twitter.com/unioncollege" classname="mx-2">
            <i classname="fab fa-twitter"></i>
          </a>
      </div>

    </div>
  </section>
}
export default contact;