import React from "react";
import "./App.css";
import Navigation from "./components/navigation";
import Header from "./components/header";
import About from "./components/about";
import Project_section from "./components/project_section";
import Signup from "./components/signup";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <About />
      <Project_section />
      <Signup />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
