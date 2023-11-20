import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoPrimary from "./LogoPrimary";

function Navbar() {
  const navitemsObj = [
    { name: "Home", link: "/" },
    { name: "Resume", link: "/resume" },
  ];
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const navigate = useNavigate();

  return (
    <>
      <div className="container px-5">
        <LogoPrimary></LogoPrimary>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {navitemsObj.length === 0 && <p>No Navigation Links found.</p>}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
            {navitemsObj.map((item, index) => (
              <li
                className={
                  selectedIndex === index ? "nav-link active" : "nav-link"
                }
                key={item.name}
                onClick={() => {
                  setSelectedIndex(index);
                  navigate(item.link);
                }}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
