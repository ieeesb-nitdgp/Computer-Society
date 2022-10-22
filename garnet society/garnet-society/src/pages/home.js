import React from 'react';

class Home extends React.Component{
    render(){
        return(

       <div>
       <>
  {/* Navigation */}
  <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <div className="container">
      <a className="navbar-brand js-scroll-trigger" href="#page-top">
        Garnet Society
      </a>
      <button
        className="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        Menu
        <i className="fas fa-bars" />
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#projects">
              Our Work
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#signup">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  {/* Header */}
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
  {/* About Section */}
  <section id="about" className="about-section text-center">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <h2 className="text-white mb-4">
            Working throughout the year to build relationships between students
            and alumni.
          </h2>
          <hr className="accessory" />
          <p className="text-white-50">
            The Union College Student Alumni Association, The Garnet Society, is
            one of the largest student run organizations on campus today. TGS is
            committed to connecting students to Union College alumni and the
            larger community through a variety of programs and events throughout
            the year. TGS acts as ambassadors at Union College functions and
            help facilitate student philanthropy efforts.{" "}
          </p>
          <img
            src="https://i.postimg.cc/d1PsJ8kR/union.png"
            className="col-lg-6 img-fluid unionicon"
            alt=""
          />{" "}
          <img
            src="https://i.postimg.cc/Kc7zvs51/tgscrestinverted.png"
            className="col-lg-6 img-fluid cresticon"
            alt=""
          />
          <p className="text-white-50">
            TGS plays a huge role during major events hosted on campus by The
            Office of Alumni &amp; Parent Engagement &amp; other divisions
            within College Relations. Members of TGS also benefit from the great
            leadership skills they learn, and they receive a behind the scenes
            look at many of our top events. Members have the opportunity to
            interact with an array of alumni and gain great networking skills
            hosting alumni events as student ambassadors.{" "}
          </p>
          <h3 className="text-white mb-4">Meet our members</h3>
          <hr className="accessory" width="50%" />
          <br />
        </div>
      </div>
      {/* Headshots */}
      <div className="container-fluid">
        {/* Row 1 */}
        <div className="row headshots">
          <div className="col-sm-3">
            <figure className="one">
              <img
                src="https://i.postimg.cc/tCfL09VW/femaleheadshot.jpg"
                className="headshotphoto"
              />
              <p className="text-white headshottext">Example Female</p>
              <p className="text-white headshotgrade">
                {" "}
                <b>Position</b>: VP of Recruitment
              </p>
              <p className="text-white headshotgrade">
                {" "}
                <b>Year</b>: Junior{" "}
              </p>
              <p className="text-white headshotgrade">
                {" "}
                <b>Major</b>: Economics &amp; Political Science
              </p>
            </figure>
          </div>
          <div className="col-sm-3">
            <figure className="one">
              <img
                src="https://i.postimg.cc/CxCTbWz8/maleheadshot.jpg"
                className="headshotphoto"
              />
              <p className="text-white headshottext">Example Male</p>
              <p className="text-white headshotgrade">
                {" "}
                <b>Position</b>: N/A
              </p>
              <p className="text-white headshotgrade">
                {" "}
                <b>Year</b>: N/A{" "}
              </p>
              <p className="text-white headshotgrade">
                {" "}
                <b>Major</b>: N/A
              </p>
            </figure>
          </div>
          <div className="col-sm-3">
            <figure className="one">
              <img
                src="https://i.postimg.cc/tCfL09VW/femaleheadshot.jpg"
                className="headshotphoto"
              />
              <p className="text-white headshottext">Example Female</p>
              <p className="text-white headshotgrade">
                {" "}
                <b>Position</b>: N/A
              </p>
              <p className="text-white headshotgrade">
                {" "}
                <b>Year</b>: N/A{" "}
              </p>
              <p className="text-white headshotgrade">
                {" "}
                <b>Major</b>: N/A{" "}
              </p>
            </figure>
          </div>
          <div className="col-sm-3">
            <figure className="one">
              <img
                src="https://i.postimg.cc/CxCTbWz8/maleheadshot.jpg"
                className="headshotphoto"
              />
              <p className="text-white headshottext">Example Male</p>
              <p className="text-white headshotgrade">
                {" "}
                <b>Position</b>: N/A
              </p>
              <p className="text-white headshotgrade">
                {" "}
                <b>Year</b>: N/A{" "}
              </p>
              <p className="text-white headshotgrade">
                {" "}
                <b>Major</b>: N/A{" "}
              </p>
            </figure>
          </div>
        </div>
        {/* Row 2 */}
        <div className="row">
          <div className="col-sm-3">
            <figure className="one">
              <img
                src="https://i.postimg.cc/tCfL09VW/femaleheadshot.jpg"
                alt=""
              />
              <p className="text-white headshottext">Example Female</p>
              <p className="text-white headshotgrade">
                {" "}
                <b>Position</b>: N/A
              </p>
              <p className="text-white headshotgrade">
                {" "}
                <b>Year</b>: N/A{" "}
              </p>
              <p className="text-white headshotgrade">
                {" "}
                <b>Major</b>: N/A
              </p>
            </figure>
          </div>
          <div className="col-sm-3">
            <figure className="one">
              <img
                src="https://i.postimg.cc/CxCTbWz8/maleheadshot.jpg"
                alt=""
              />
              <p className="text-white headshottext">Example Male</p>
              <p className="text-white headshotgrade">
                {" "}
                <b>Position</b>: N/A
              </p>
              <p className="text-white headshotgrade">
                {" "}
                <b>Year</b>: N/A{" "}
              </p>
              <p className="text-white headshotgrade">
                {" "}
                <b>Major</b>: N/A
              </p>
            </figure>
          </div>
          <div className="col-sm-3">
            <figure className="one">
              <img
                src="https://i.postimg.cc/tCfL09VW/femaleheadshot.jpg"
                alt=""
              />
              <p className="text-white headshottext">Example Female</p>
              <p className="text-white headshotgrade">
                {" "}
                <b>Position</b>: N/A
              </p>
              <p className="text-white headshotgrade">
                {" "}
                <b>Year</b>: N/A{" "}
              </p>
              <p className="text-white headshotgrade">
                {" "}
                <b>Major</b>: N/A{" "}
              </p>
            </figure>
          </div>
          <div className="col-sm-3">
            <figure className="one">
              <img
                src="https://i.postimg.cc/CxCTbWz8/maleheadshot.jpg"
                alt=""
              />
              <p className="text-white headshottext">Example Male</p>
              <p className="text-white headshotgrade">
                {" "}
                <b>Position</b>: N/A
              </p>
              <p className="text-white headshotgrade">
                {" "}
                <b>Year</b>: N/A{" "}
              </p>
              <p className="text-white headshotgrade">
                {" "}
                <b>Major</b>: N/A{" "}
              </p>
            </figure>
          </div>
        </div>
        {/* Row 3 */}
        <div className="row">
          <div className="col-sm-3">
            <figure className="one">
              <img
                src="https://i.postimg.cc/tCfL09VW/femaleheadshot.jpg"
                alt=""
              />
              <p className="text-white headshottext">Example Female</p>
              <p className="text-white headshotgrade">
                {" "}
                <b>Position</b>: N/A
              </p>
              <p className="text-white headshotgrade">
                {" "}
                <b>Year</b>: N/A{" "}
              </p>
              <p className="text-white headshotgrade">
                {" "}
                <b>Major</b>: N/A
              </p>
            </figure>
          </div>
          <div className="col-sm-3">
            <figure className="one">
              <img
                src="https://i.postimg.cc/CxCTbWz8/maleheadshot.jpg"
                alt=""
              />
              <p className="text-white headshottext">Example Male</p>
              <p className="text-white headshotgrade">
                {" "}
                <b>Position</b>: N/A
              </p>
              <p className="text-white headshotgrade">
                {" "}
                <b>Year</b>: N/A{" "}
              </p>
              <p className="text-white headshotgrade">
                {" "}
                <b>Major</b>: N/A
              </p>
            </figure>
          </div>
          <div className="col-sm-3">
            <figure className="one">
              <img
                src="https://i.postimg.cc/tCfL09VW/femaleheadshot.jpg"
                alt=""
              />
              <p className="text-white headshottext">Example Female</p>
              <p className="text-white headshotgrade">
                {" "}
                <b>Position</b>: N/A
              </p>
              <p className="text-white headshotgrade">
                {" "}
                <b>Year</b>: N/A{" "}
              </p>
              <p className="text-white headshotgrade">
                {" "}
                <b>Major</b>: N/A{" "}
              </p>
            </figure>
          </div>
          <div className="col-sm-3">
            <figure className="one">
              <img
                src="https://i.postimg.cc/CxCTbWz8/maleheadshot.jpg"
                alt=""
              />
              <p className="text-white headshottext">Example Male</p>
              <p className="text-white headshotgrade">
                {" "}
                <b>Position</b>: N/A
              </p>
              <p className="text-white headshotgrade">
                {" "}
                <b>Year</b>: N/A{" "}
              </p>
              <p className="text-white headshotgrade">
                {" "}
                <b>Major</b>: N/A{" "}
              </p>
            </figure>
          </div>
        </div>
        {/* Row 4 */}
        <div className="row">
          <div className="col-sm-3">
            <figure className="one">
              <img
                src="https://i.postimg.cc/tCfL09VW/femaleheadshot.jpg"
                alt=""
              />
              <p className="text-white headshottext">Example Female</p>
              <p className="text-white headshotgrade">
                {" "}
                <b>Position</b>: N/A
              </p>
              <p className="text-white headshotgrade">
                {" "}
                <b>Year</b>: N/A{" "}
              </p>
              <p className="text-white headshotgrade">
                {" "}
                <b>Major</b>: N/A
              </p>
            </figure>
          </div>
          <div className="col-sm-3">
            <figure className="one">
              <img
                src="https://i.postimg.cc/CxCTbWz8/maleheadshot.jpg"
                alt=""
              />
              <p className="text-white headshottext">Example Male</p>
              <p className="text-white headshotgrade">
                {" "}
                <b>Position</b>: N/A
              </p>
              <p className="text-white headshotgrade">
                {" "}
                <b>Year</b>: N/A{" "}
              </p>
              <p className="text-white headshotgrade">
                {" "}
                <b>Major</b>: N/A
              </p>
            </figure>
          </div>
          <div className="col-sm-3">
            <figure className="one">
              <img
                src="https://i.postimg.cc/tCfL09VW/femaleheadshot.jpg"
                alt=""
              />
              <p className="text-white headshottext">Example Female</p>
              <p className="text-white headshotgrade">
                {" "}
                <b>Position</b>: N/A
              </p>
              <p className="text-white headshotgrade">
                {" "}
                <b>Year</b>: N/A{" "}
              </p>
              <p className="text-white headshotgrade">
                {" "}
                <b>Major</b>: N/A{" "}
              </p>
            </figure>
          </div>
          <div className="col-sm-3">
            <figure className="one">
              <img
                src="https://i.postimg.cc/CxCTbWz8/maleheadshot.jpg"
                alt=""
              />
              <p className="text-white headshottext">Example Male</p>
              <p className="text-white headshotgrade">
                {" "}
                <b>Position</b>: N/A
              </p>
              <p className="text-white headshotgrade">
                {" "}
                <b>Year</b>: N/A{" "}
              </p>
              <p className="text-white headshotgrade">
                {" "}
                <b>Major</b>: N/A{" "}
              </p>
            </figure>
          </div>
        </div>
      </div>{" "}
      <br />
      <br />
    </div>
    {/* Container div */}
  </section>
  {/* Projects Section */}
  <section id="projects" className="projects-section">
    <div className="container">
      {/* Featured Project Row */}
      <div className="row align-items-center no-gutters mb-4 mb-lg-5">
        <div className="col-xl-8 col-lg-7">
          <img
            className="img-fluid mb-3 mb-lg-0"
            src="https://i.postimg.cc/hPzzpG0m/bg-masthead.jpg"
            alt=""
          />
        </div>
        <div className="col-xl-4 col-lg-5">
          <div className="featured-text text-center text-lg-left">
            <h4>Facilitating Alumni &amp; Student Interaction</h4>
            <p className="text-black-50 mb-0">
              TGS does a great job of hosting events that instill pride in the
              student body and teach them the history of the college. TGS also
              runs an alumni speaker series that has been hugely successful in
              bringing out students to alumni-sponsored talks, and hearing
              directly from industry leaders who also went to Union. The speaker
              series has been a great engagement piece for the alumni to
              reconnect with current students and share their own Union story
              and how they might learn from that. .
            </p>
          </div>
        </div>
      </div>
      {/* Project One Row */}
      <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
        <div className="col-lg-6">
          <img
            className="img-fluid"
            src="https://i.postimg.cc/Nj5PbSJF/birdseye.png"
            alt=""
          />
        </div>
        <div className="col-lg-6">
          <div className="bg-black text-center h-100 project">
            <div className="d-flex h-100">
              <div className="project-text w-100 my-auto text-center text-lg-left">
                <h4 className="text-white">Fundraising</h4>
                <p className="mb-0 text-white-50">
                  A great example of how TGS helped bridge the gap between
                  students and alumni is participating in the college's 24-hour
                  fundraising challenge. In 2018 they helped table all day long
                  in the campus center, and engaged directly with their student
                  peers about why they should support the college.
                </p>
                <hr className="d-none d-lg-block mb-0 ml-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Project Two Row */}
      <div className="row justify-content-center no-gutters">
        <div className="col-lg-6">
          <img
            className="img-fluid"
            src="https://i.postimg.cc/W33DJmpB/nottsmall.png"
            alt=""
          />
        </div>
        <div className="col-lg-6 order-lg-first">
          <div className="bg-black text-center h-100 project">
            <div className="d-flex h-100">
              <div className="project-text w-100 my-auto text-center text-lg-right">
                <h4 className="text-white">Fostering relationships</h4>
                <p className="mb-0 text-white-50">
                  The Garnet Society provides great feedback about ideas that
                  College Relations has about engaging new graduates. For our
                  Seniors, I often use them as a sounding board about how to
                  engage them and what they'd like to see when they graduate.
                  I've found they are very candid about what they like, and will
                  certainly let you know if something won't work.{" "}
                </p>
                <hr className="d-none d-lg-block mb-0 mr-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Signup Section */}
  <section id="signup" className="signup-section">
    <div className="container">
      <div className="row">
        <div className="col-md-10 col-lg-8 mx-auto text-center">
          <i className="far fa-paper-plane fa-2x mb-2 text-white" />
          <h2 className="text-white mb-5">
            Submit your email for news &amp; event updates!
          </h2>
          <form className="form-inline d-flex">
            <input
              type="email"
              className="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0"
              id="inputEmail"
              placeholder="Enter email address..."
            />
            <button type="submit" className="btn btn-primary mx-auto">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
  {/* Contact Section */}
  <section className="contact-section bg-black">
    <div className="container">
      <div className="row">
        <div className="col-md-4 mb-3 mb-md-0">
          <div className="card py-4 h-100">
            <div className="card-body text-center">
              <i className="fas fa-map-marked-alt text-primary mb-2" />
              <h4 className="text-uppercase m-0">Address</h4>
              <hr className="my-4" />
              <div className="small text-black-50">
                807 Union Street, Schenectady NY 12308
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3 mb-md-0">
          <div className="card py-4 h-100">
            <div className="card-body text-center">
              <i className="fas fa-envelope text-primary mb-2" />
              <h4 className="text-uppercase m-0">Email</h4>
              <hr className="my-4" />
              <div className="small text-black-50">
                <a href="#">email@union.edu</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3 mb-md-0">
          <div className="card py-4 h-100">
            <div className="card-body text-center">
              <i className="fas fa-mobile-alt text-primary mb-2" />
              <h4 className="text-uppercase m-0">Phone</h4>
              <hr className="my-4" />
              <div className="small text-black-50">+1 (518) 388-6000</div>
            </div>
          </div>
        </div>
      </div>
      <div className="social d-flex justify-content-center">
        <a
          href="https://www.instagram.com/uniongarnetsociety/"
          className="mx-2"
        >
          <i className="fab fa-instagram" />
        </a>
        <a href="https://www.facebook.com/unioncollege/" className="mx-2">
          <i className="fab fa-facebook-f" />
        </a>
        <a href="https://twitter.com/unioncollege" className="mx-2">
          <i className="fab fa-twitter" />
        </a>
      </div>
    </div>
  </section>
  {/* Footer */}
  <footer className="bg-black small text-center text-white-50">
    <div className="container">Copyright © Tucker Massad 2019</div>
  </footer>
</>

       </div>
        );
    }
}

export default Home;