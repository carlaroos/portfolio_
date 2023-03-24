import React from 'react';
import MenuBar from './components/MenuBar';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './components/AppRoutes';

function App() {
  return (
    <Router>
      <div>
        <MenuBar />
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;