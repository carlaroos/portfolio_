import React from 'react';
import MenuBar from './components/MenuBar';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './components/AppRoutes';
import '../src/assets/fonts.css';
import Experience from './pages/Experience'; // import the Experience component here


function App() {
  return (
    
    <Router>
        
        <Navbar />
        <AppRoutes />
        
    </Router>
    
  );
}

export default App;