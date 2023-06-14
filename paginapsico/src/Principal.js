import { NavBar } from "./components/NavBar";
import {Banner } from "./components/Banner";
import {Skills} from "./components/Skills";
import { Projects } from './components/Projects';
import {testBa} from './components/TestBa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Contact } from './components/Contact';
import React, { Component,Text } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


 function Principal() {

  return (
    
    <div className="Principal">
      <NavBar />
      <Banner />
      <Skills />
      <Projects/>
      <Contact />      
    </div>
  );
}
export default Principal;
