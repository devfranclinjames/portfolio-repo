import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HeaderHome from "./components/HeaderHome";
import AboutHome from "./components/AboutHome";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
        <Navbar></Navbar>
      </nav>
      <h1>Vite + React + Typescript</h1>
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <header className="py-5">
        <HeaderHome></HeaderHome>
      </header>
      <section className="bg-light py-5">
        <AboutHome></AboutHome>
      </section>
    </>
  );
}

export default App;
