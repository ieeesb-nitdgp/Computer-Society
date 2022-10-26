import React from "react";
function header() {
  return (
    <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase">The Garnet Society</h1>
          <h2 className="text-white-50 mx-auto mt-2 mb-5">
            The Union College Student Alumni Association
          </h2>
          <a href="#about" className="btn btn-primary js-scroll-trigger">
            Learn More
          </a>
        </div>
      </div>
    </header>
  );
}
export default header;
