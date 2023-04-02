// AppRoutes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Project1Page from '../pages/Project1Page';
import Project2Page from '../pages/Project2Page';
import Project3Page from '../pages/Project3Page';
import Project4Page from '../pages/Project4Page';

function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/project1" element={<Project1Page />} />
      <Route path="/project2" element={<Project2Page />} />
      <Route path="/project3" element={<Project3Page />} />
      <Route path="/project4" element={<Project4Page />} />
    </Routes>
  );
}

export default AppRoutes;