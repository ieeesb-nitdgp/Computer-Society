import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import navigation from '/components/navigation'
import header from'./components/header'
import about from './components/about'
import project_section from './components/project_section'
import signup from './components/signup'
import contact from './components/contact'
import footer from './components/footer'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <div>
  <header/>
    <about/>
    <project_section/>
    <navigation/>
    <signup/>
    <contact/>
    <footer/>
 </div>
    
  
);

