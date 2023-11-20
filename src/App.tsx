import "./App.css";
import HeaderHome from "./components/HeroBanner";
import AboutHome from "./components/AboutHome";
import Navbar from "./components/Navbar";
import FooterPartial from "./components/FooterPartial";
import BannerLogoPartial from "./components/BannerLogoPartial";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
        <Navbar></Navbar>
      </nav>
      <section>
        <BannerLogoPartial></BannerLogoPartial>
      </section>
      <header className="py-5">
        <HeaderHome></HeaderHome>
      </header>
      <section className="bg-light py-5">
        <AboutHome></AboutHome>
      </section>
      <section className="bg-light py-5">
        <FooterPartial></FooterPartial>
      </section>
    </>
  );
}

export default App;
