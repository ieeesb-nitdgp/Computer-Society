import React from 'react';
function project_section(){
return (
     //Projects Section
  <section id="projects" classNamename="projects-section">
    <div className="container">

      //Featured Project Row
      <div className="row align-items-center no-gutters mb-4 mb-lg-5">
        <div className="col-xl-8 col-lg-7">
          <img className="img-fluid mb-3 mb-lg-0" src="https://i.postimg.cc/hPzzpG0m/bg-masthead.jpg" alt=""/>

        </div>
        <div className="col-xl-4 col-lg-5">
          <div className="featured-text text-center text-lg-left">
            <h4>Facilitating Alumni & Student Interaction</h4>
            <p className="text-black-50 mb-0">TGS does a great job of hosting events that instill pride in the student body and teach them the history of the college. TGS also runs an alumni speaker series that has been hugely successful in bringing out students to alumni-sponsored talks,
              and hearing directly from industry leaders who also went to Union. The speaker series has been a great engagement piece for the alumni to reconnect with current students and share their own Union story and how they might learn from that.
              .</p>
          </div>
        </div>
      </div>

      //Project One Row 
      <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
        <div className="col-lg-6">
          <img className="img-fluid" src="https://i.postimg.cc/Nj5PbSJF/birdseye.png" alt=""/>

        </div>
        <div className="col-lg-6">
          <div className="bg-black text-center h-100 project">
            <div className="d-flex h-100">
              <div className="project-text w-100 my-auto text-center text-lg-left">
                <h4 className="text-white">Fundraising</h4>
                <p className="mb-0 text-white-50">A great example of how TGS helped bridge the gap between students and alumni is participating in the college's 24-hour fundraising challenge. In 2018 they helped table all day long in the campus center, and engaged directly with their
                  student peers about why they should support the college.</p>
                <hr className="d-none d-lg-block mb-0 ml-0"/>
              </div>
            </div>
          </div>
        </div>
      </div>

      //Project Two Row 
      <div className="row justify-content-center no-gutters">
        <div className="col-lg-6">
          <img className="img-fluid" src="https://i.postimg.cc/W33DJmpB/nottsmall.png" alt=""/>
        </div>
        <div className="col-lg-6 order-lg-first">
          <div className="bg-black text-center h-100 project">
            <div className="d-flex h-100">
              <div className="project-text w-100 my-auto text-center text-lg-right">
                <h4 className="text-white">Fostering relationships</h4>
                <p className="mb-0 text-white-50">The Garnet Society provides great feedback about ideas that College Relations has about engaging new graduates. For our Seniors, I often use them as a sounding board about how to engage them and what they'd like to see when they graduate.
                  I've found they are very candid about what they like, and will certainly let you know if something won't work. </p>
                <hr className="d-none d-lg-block mb-0 mr-0"/>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
);
}
export default project_section;
