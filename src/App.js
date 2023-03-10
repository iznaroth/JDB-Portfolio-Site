import logo from './logo.svg';
import './App.css';

import React, { Fragment } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link
} from "react-router-dom";


import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Cprojects from "./components/Cprojects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import ManicMechanics from './components/ManicMechanics';
import Nightride from './components/Nightride';
import Recordkeeper from './components/Recordkeeper';
import Brittle from './components/Brittle';

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Routes>
        <Route path = "/" element={
        <Fragment>
          <Navbar />
          <About />
          <Projects />
          <Cprojects />
          <Skills />
          <Contact />
        </Fragment>}>
          
        </Route>
        <Route path = "/manmech" element = {
          <Fragment>
            <ManicMechanics />
          </Fragment>
        }>
        </Route>
        <Route path = "/nightride" element = {
          <Fragment>
            <Nightride />
          </Fragment>
        }>
        </Route>
        <Route path = "/recordkeeper" element = {
          <Fragment>
            <Recordkeeper />
          </Fragment>
        }>
          
        </Route>
        <Route path = "/brittle" element = {
          <Fragment>
            <Brittle />
          </Fragment>
        }>
          
        </Route>

      </Routes>
    </main>
  );
}

export default App;
