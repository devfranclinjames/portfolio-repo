import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";

function BannerLogoPartial() {
  return (
    <>
      <p className="fst-italic">This Website is made from</p>
      <h1>Vite, React & Typescript</h1>
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </>
  );
}

export default BannerLogoPartial;
