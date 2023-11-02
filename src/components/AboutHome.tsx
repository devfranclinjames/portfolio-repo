function AboutHome() {
  return (
    <>
      <div className="container px-5">
        <div className="row gx-5 justify-content-center">
          <div className="col-xxl-8">
            <div className="text-center my-5">
              <h2 className="display-5 fw-bolder">
                <span className="text-gradient d-inline">About Me</span>
              </h2>
              <p className="lead fw-light mb-4">
                My name is Franclin Lim and I help brands grow.
              </p>
              <p className="text-muted">
                I am a Full-Stack developer based in Cebu, Philippines. I am an
                Information Technology graduate from Colegio San Agustin -
                Bacolod. I am very passionate about improving my coding skills &
                developing applications & websites. I build WebApps and Websites
                using MERN Stack. Working for myself to improve my skills. Love
                to build Full-Stack clones.
              </p>
              <div className="d-flex justify-content-center fs-2 gap-4">
                <a className="text-gradient" href="#!">
                  <i className="bi bi-twitter"></i>
                </a>
                <a className="text-gradient" href="#!">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a className="text-gradient" href="#!">
                  <i className="bi bi-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AboutHome;
