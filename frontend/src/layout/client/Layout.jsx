import React from "react";
import Navbar from "../../components/client/Navbar";
import Hero from "../../components/client/Hero";
import About from "../../components/client/About";
import Projects from "../../components/client/Projects";

const Layout = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="">
        <Hero />
        <About />
        <Projects />
      </main>
      <footer></footer>
    </div>
  );
};

export default Layout;
