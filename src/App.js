import "./App.css";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarSide from "./components/NavbarSide";
import About from "./components/About";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";

function App() {
  const [pageWidth, setPageWidth] = useState(800);
  const [pageYPosition, setPageYPosition] = useState(0);
  const [navbarSpace, setNavbarSpace] = useState(0);

  const scrolledPage = () => {
    setPageWidth(window.innerWidth);
    setPageYPosition(window.pageYOffset);
    setNavbarSpace(window.innerWidth < 576 ? 74 : 48);
  };

  useEffect(() => {
    setPageWidth(window.innerWidth);
    window.addEventListener("resize", scrolledPage);
    window.addEventListener("scroll", scrolledPage);
    return () => {
      window.removeEventListener("scroll", scrolledPage);
      window.removeEventListener("resize", scrolledPage);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <NavbarSide navbarSpace={navbarSpace} />
      <About
        pageWidth={pageWidth}
        pageYPosition={pageYPosition}
        navbarSpace={navbarSpace}
      />
      <Projects
        pageWidth={pageWidth}
        pageYPosition={pageYPosition}
        navbarSpace={navbarSpace}
      />
      <Contacts
        pageWidth={pageWidth}
        pageYPosition={pageYPosition}
        navbarSpace={navbarSpace}
      />
    </>
  );
}

export default App;
