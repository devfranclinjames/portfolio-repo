import "../App.css";
import AboutHome from "../components/AboutHome";
import Navbar from "../components/Navbar";
import FooterPartial from "../components/FooterPartial";

function FullWidth() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
        <Navbar></Navbar>
      </nav>

      <section className="bg-light py-5">
        <AboutHome></AboutHome>
      </section>
      <section className="bg-light py-5">
        <FooterPartial></FooterPartial>
      </section>
    </>
  );
}

export default FullWidth;
