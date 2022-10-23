import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navigation from './components/Navigation'
import Header from'./components/Header'
import About from './components/About'
import Project_section from './components/Project_section'
import Signup from './components/Signup'
import Contact from './components/Contact'
import Footer from './components/Footer'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 <div>
    <Navigation/>
    <Header/>
    <About/>
    <Project_section/>
    <Signup/>
    <Contact/>
    <Footer/>
 </div>
);
