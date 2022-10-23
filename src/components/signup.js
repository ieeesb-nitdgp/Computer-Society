import react from "react";
function signup() {
  return (
    <section id="signup" classname="signup-section">
      <div classname="container">
        <div classname="row">
          <div classname="col-md-10 col-lg-8 mx-auto text-center">
            <i classname="far fa-paper-plane fa-2x mb-2 text-white"></i>
            <h2 classname="text-white mb-5">
              Submit your email for news & event updates!
            </h2>

            <form classname="form-inline d-flex">
              <input
                type="email"
                classname="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0"
                id="inputEmail"
                placeholder="Enter email address..."
              />
              <button type="submit" classname="btn btn-primary mx-auto">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
export default signup;
