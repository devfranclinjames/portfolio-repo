import dots1 from "../assets/dots1.svg";
import dots2 from "../assets/dots2.svg";
import dots3 from "../assets/dots3.svg";
import dots4 from "../assets/dots4.svg";

function HeroBanner() {
  return (
    <>
      <div className="container px-5 pb-5">
        <div className="row gx-5 align-items-center">
          <div className="col-xxl-5">
            {/* <!-- Header text content--> */}
            <div className="text-center text-xxl-start">
              <div className="badge bg-gradient-primary-to-secondary text-white mb-4">
                <div className="fst-italic">
                  WebDesign &middot; WebDevelopment &middot; Marketing
                </div>
              </div>
              <div className="fs-3 fw-light text-muted">
                I can help your business to
              </div>
              <h1 className="display-3 fw-bolder mb-5">
                <span className="text-gradient d-inline">
                  Get online and grow fast
                </span>
              </h1>
              <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                <a
                  className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder"
                  href="resume.html"
                >
                  Resume
                </a>
                <a
                  className="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder"
                  href="projects.html"
                >
                  Projects
                </a>
              </div>
            </div>
          </div>
          <div className="col-xxl-7">
            {/* <!-- Header profile picture--> */}
            <div className="d-flex justify-content-center mt-5 mt-xxl-0">
              <div className="profile bg-gradient-primary-to-secondary">
                {/* <!-- TIP: For best results, use a photo with a transparent background like the demo example below-->
                                    <!-- Watch a tutorial on how to do this on YouTube (link)--> */}
                <img
                  className="profile-img"
                  src="src/assets/images/profile-me.png"
                  alt="..."
                />

                {/* SVG files */}
                <div className="dots-1">
                  <img src={dots1} alt="..." />
                </div>
                <div className="dots-2">
                  <img src={dots2} alt="..." />
                </div>
                <div className="dots-3">
                  <img src={dots3} alt="..." />
                </div>
                <div className="dots-4">
                  <img src={dots4} alt="..." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroBanner;
