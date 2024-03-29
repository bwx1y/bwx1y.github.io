import React from "react";
import MyNavbar from "./assets/index.navbar";
import Hero from "./assets/index.hero";
import Skills from "./assets/index.skils";
import Project from "./assets/index.project";
import MyFooter from "./assets/index.footer";
// aos animate
import "aos/dist/aos.css";

const App = () => {
  return (
    <>
      <MyNavbar />
      {/** content */}
      <section id="home">
        <Hero />
      </section>
      <section id="skills" className="py-5 bg-secondary">
        <Skills />
      </section>
      <section id="project">
        <Project />
      </section>
      <footer className="bg-secondary text-center text-lg-start">
        <MyFooter />
      </footer>
    </>
  );
};

export default App;
