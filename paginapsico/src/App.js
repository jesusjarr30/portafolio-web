import logo from './logo.svg';
import './App.css';
import { NavBar } from "./components/NavBar";
import {Banner } from "./components/Banner";
import {Skills} from "./components/Skills";
import { Projects } from './components/Projects';
//import TestBa from './components/TestBa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Contact } from './components/Contact';
import React, { Component,Text } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Principal from './Principal';
import Login from './components/Login';
import Loginv from './components/seccion/Loginv';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/AgregarProjecto" element={<Login/>} />
      </Routes>
    </Router>
  );
}
export default App;
