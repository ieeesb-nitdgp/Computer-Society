import React from 'react';
function contact(){
<section className="contact-section bg-black">
    <div className="container">

      <div className="row">

        <div className="col-md-4 mb-3 mb-md-0">
          <div className="card py-4 h-100">
            <div className="card-body text-center">
              <i className="fas fa-map-marked-alt text-primary mb-2"></i>
              <h4 className="text-uppercase m-0">Address</h4>
              <hr className="my-4"/>
              <div className="small text-black-50">807 Union Street, Schenectady NY 12308</div>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3 mb-md-0">
          <div className="card py-4 h-100">
            <div className="card-body text-center">
              <i className="fas fa-envelope text-primary mb-2"></i>
              <h4 className="text-uppercase m-0">Email</h4>
              <hr className="my-4"/>
              <div className="small text-black-50">
                <a href="#">email@union.edu</a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3 mb-md-0">
          <div className="card py-4 h-100">
            <div className="card-body text-center">
              <i className="fas fa-mobile-alt text-primary mb-2"></i>
              <h4 className="text-uppercase m-0">Phone</h4>
              <hr className="my-4"/>
              <div className="small text-black-50">+1 (518) 388-6000</div>
            </div>
          </div>
        </div>
      </div>

      <div className="social d-flex justify-content-center">
        <a href="https://www.instagram.com/uniongarnetsociety/" className="mx-2">
            <i className="fab fa-instagram"></i>
          </a>
        <a href="https://www.facebook.com/unioncollege/" className="mx-2">
            <i className="fab fa-facebook-f"></i>
          </a>
        <a href="https://twitter.com/unioncollege" className="mx-2">
            <i className="fab fa-twitter"></i>
          </a>
      </div>

    </div>
  </section>
}
export default contact;